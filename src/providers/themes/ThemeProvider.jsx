import {
	createContext,
	useEffect,
	useReducer,
	useCallback,
	useMemo,
} from "react";

import PropTypes from "prop-types";
import colorUtils from "../../components/color-utils/utils";

const INTIAL = "INTIAL";
const CHANGE = "CHANGE";

const IntialReducerState = {
	CurrentColor: null,
};

const Reducer = (state, action) => {
	if (action.type === INTIAL) {
		return {
			CurrentColor: colorUtils.yellow,
		};
	}
	if (action.type === CHANGE) {
		return {
			CurrentColor: colorUtils[action.payload.color],
		};
	}
	return state;
};

export const ThemeContext = createContext(null);

ThemeProvider.propTypes = {
	children: PropTypes.node,
};

export function ThemeProvider({ children }) {
	const [state, Dispatch] = useReducer(Reducer, IntialReducerState);

	const changeTheme = (color) => {
		Dispatch({
			type: CHANGE,
			payload: {
				color: color,
			},
		});
	};

	const memoizedValue = useMemo(
		() => ({
			changeTheme,
			theme: state.CurrentColor,
			colorPicker: { yellow: "yellow", purple: "purple" },
		}),
		[state.CurrentColor],
	);

	useEffect(() => {
		if (state.CurrentColor === null) {

			Dispatch({
				type: INTIAL,
			});
		}
	}, [state.CurrentColor]);

	return (
		<ThemeContext.Provider value={memoizedValue}>
			{children}
		</ThemeContext.Provider>
	);
}
