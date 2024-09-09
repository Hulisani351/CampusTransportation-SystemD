import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserHome from "../pages/UserPages/UserHome";
import UserService from "../pages/UserPages/UserService";


function UserRoutes() {
  return (
    <Routes>
      <Route path="/" element={<UserHome/>} />
      <Route path="/userService" element={<UserService/>} />
    </Routes>
  );
}

export default UserRoutes;
