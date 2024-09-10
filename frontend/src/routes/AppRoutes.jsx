import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../components/authentication/login";
import Register from "../components/authentication/register";
import StaffDashboard from "../components/pages/staff-dash";
import UserDashboard from "../components/pages/user-dash";


function AppRoutes () {
    return ( 
        <Routes>
            <Route path="/" element={ <Login /> } />
            <Route path="/login" element={ <Login /> } />
            <Route path="/register" element={ <Register /> } />
            <Route path="/staff-dashboard" element={ <StaffDashboard /> } />
            <Route path="/user-dashboard" element={ <UserDashboard /> } />
        </Routes>
    );
}

export default AppRoutes;