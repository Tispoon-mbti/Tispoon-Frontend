import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage";
import App from "./App";
function Router() {
  return(
    <BrowserRouter>
    <App/>
    </BrowserRouter>
  );
}

export default Router;
