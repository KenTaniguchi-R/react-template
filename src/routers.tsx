import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
// import App from "./App";

export const Router = () => {
   return (
     <Routes>
        <Route path="/" element={<Home />}/>
        {/*<Route path="/app" element={<App />}/>*/}
     </Routes>
   )
};