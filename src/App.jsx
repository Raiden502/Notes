import { AuthProvider } from "./auth/jwtcontext";
import { ThemeProvider } from "./providers/themes/ThemeProvider";
import { Provider as ReduxProvider } from "react-redux";
import { PersistGate } from "redux-persist/lib/integration/react";
import { BrowserRouter } from "react-router-dom";
import { store, persistor } from "./redux/store";
import Router from "./routes/index.jsx";
import { SnackBarProvider } from "./providers/snackbar/SnackbarContext.jsx";

function App() {
	return (
		<AuthProvider>
			<ThemeProvider>
				<ReduxProvider store={store}>
					<PersistGate loading={null} persistor={persistor}>
						<SnackBarProvider>
							<BrowserRouter>
								<Router />
							</BrowserRouter>
						</SnackBarProvider>
					</PersistGate>
				</ReduxProvider>
			</ThemeProvider>
		</AuthProvider>
	);
}

export default App;
