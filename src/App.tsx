import { AppRoutes } from "./config/routes/AppRoutes";
import { GlobalStyle } from "./config/global/GlobalStyle";
import { Provider } from "react-redux";
import { persistor, store } from "./store";
import { PersistGate } from "redux-persist/integration/react";

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <GlobalStyle />
        <AppRoutes />
      </PersistGate>
    </Provider>
  );
}

export default App;
