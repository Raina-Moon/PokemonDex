import "./App.css";
import Router from "./pages/shared/Router";
import {ToastContainer} from "react-toastify"
import "react-toastify/dist/ReactToastify.css";
import { Provider } from "react-redux";
import store from "../module/store";

function App() {
  return (
    <Provider store={store}>
        <Router />
        <ToastContainer />
    </Provider>
  );
}

export default App;
