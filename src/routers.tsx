import { Routes, Route } from 'react-router-dom';
import { Home } from "./pages/Home";
import MainLayout from "./layout/MainLayout";

export const Router = () => {
   return (
     <Routes>
        <Route path="/" element={<MainLayout />}>
           <Route index element={<Home />} />
        </Route>
     </Routes>
   )
};