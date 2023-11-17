import { AuthProvider } from "./auth/jwtcontext";
import { Provider as ReduxProvider } from "react-redux";
import { PersistGate } from 'redux-persist/lib/integration/react';
import { BrowserRouter } from "react-router-dom";
import { store, persistor } from "./redux/store";
import Router from "./routes/index.jsx";

function App() {
	return (
		<AuthProvider>
			<ReduxProvider store={store}>
				<PersistGate loading={null} persistor={persistor}>
					<BrowserRouter>
						<Router />
					</BrowserRouter>
				</PersistGate>
			</ReduxProvider>
		</AuthProvider>
	);
}

export default App;
