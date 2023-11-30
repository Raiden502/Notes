// package imports
import {
	createContext,
	useEffect,
	useReducer,
	useCallback,
	useMemo
} from "react";
import PropTypes from "prop-types";

// local imports
import localStorageAvailable from "src/utils/localstorage";
import axiosInstance from "src/utils/axios";

const IntialReducerState = {
	IsAuthenticated: false,
	user: "Pri",
	IsIntialized: false,
};

const Reducer = (state, action) => {
	if (action.type === "INTIAL") {
		return {
			IsAuthenticated: action.payload.IsAuthenticated,
			user: action.payload.user,
			IsIntialized: true,
		};
	}
	if (action.type === "LOGIN") {
		return {
			...state,
			IsAuthenticated: true,
			user: action.payload.user,
		};
	}
	if (action.type === "LOGOUT") {
		return {
			...state,
			IsAuthenticated: false,
			user: null,
		};
	}
	if (action.type === "REGISTER") {
		return {
			...state,
			IsAuthenticated: true,
			user: action.payload.user,
		};
	}
	return state;
};

export const AuthContext = createContext(null);

AuthProvider.propTypes = {
    children: PropTypes.node, // Fix the typo here
};

export function AuthProvider({ children }) {
	const [state, Dispatch] = useReducer(Reducer, IntialReducerState);
	const storageAvaliable = localStorageAvailable();

	const login = useCallback(async (email, password) => {
		console.log("data", email)
		await axiosInstance
			.post("/login", {
				email,
				password,
			})
			.then((response) => {
				const { accessToken, user, error_code } = response.data;

				if (error_code) {
					Dispatch({
						type: "INTIAL",
						payload: {
							IsAuthenticated: false,
							user: null,
						},
					});
				} else {
					localStorage.setItem("accessToken", accessToken);
					Dispatch({
						type: "LOGIN",
						payload: {
							user: user,
						},
					});
				}
			})
			.catch((error) => {
				console.error(error);
				Dispatch({
					type: "INTIAL",
					payload: {
						IsAuthenticated: false,
						user: null,
					},
				});
			});
	}, []);

	const register = useCallback(
		async (email, password, firstName, lastName) => {
			await axiosInstance
				.post("/register", {
					email,
					password,
					firstName,
					lastName,
				})
				.then((response) => {
					const { accessToken, user, error_code } = response.data;

					if (error_code) {
						Dispatch({
							type: "INTIAL",
							payload: {
								IsAuthenticated: false,
								user: null,
							},
						});
					} else {
						localStorage.setItem("accessToken", accessToken);
						Dispatch({
							type: "REGISTER",
							payload: {
								user: user,
							},
						});
					}
				})
				.catch((error) => {
					console.error(error);
					Dispatch({
						type: "INTIAL",
						payload: {
							IsAuthenticated: false,
							user: null,
						},
					});
				});
		},
		[],
	);

	const logout = useCallback(async (email) => {
		await axiosInstance
			.post("/register", {
				email,
			})
			.then((response) => {
				const { error_code } = response.data;

				if (error_code) {
					Dispatch({
						type: "INTIAL",
						payload: {
							IsAuthenticated: false,
							user: null,
						},
					});
				} else {
					Dispatch({
						type: "LOGOUT",
					});
				}
			})
			.catch((error) => {
				console.error(error);
				Dispatch({
					type: "INTIAL",
					payload: {
						IsAuthenticated: false,
						user: null,
					},
				});
			});
	}, []);

	const initialize = useCallback(async () => {
		try {
			const accessToken = storageAvaliable
				? localStorage.getItem("accessToken")
				: "";
			if (accessToken) {
				Dispatch({
					type: "INTIAL",
					payload: {
						IsAuthenticated: true,
						user: "DUMMY",
					},
				});
			} else {
				Dispatch({
					type: "INTIAL",
					payload: {
						IsAuthenticated: false,
						user: null,
					},
				});
			}
		} catch (error) {
			console.error(error);
			Dispatch({
				type: "INTIAL",
				payload: {
					IsAuthenticated: false,
					user: null,
				},
			});
		}
	}, [storageAvaliable]);

	useEffect(() => {
		initialize();
	}, [initialize]);

	const memoizedValue = useMemo(
		() => ({
			IsInitialized: state.IsIntialized,
			IsAuthenticated: state.IsAuthenticated,
			user: state.user,
			method: "jwt",
			login,
			register,
			logout,
		}),
		[
			state.IsAuthenticated,
			state.IsIntialized,
			state.user,
			login,
			logout,
			register,
		],
	);

	return (
		<AuthContext.Provider value={memoizedValue}>
			{children}
		</AuthContext.Provider>
	);
}
