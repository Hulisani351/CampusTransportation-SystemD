import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserHome from "../pages/UserPages/UserHome";
import UserService from "../pages/UserPages/UserService";
import Find from "../pages/UserPages/Find";


function UserRoutes() {
  return (
    <Routes>
      <Route path="/" element={<UserHome/>} />
      <Route path="/userService" element={<UserService/>} />
      <Route path="/userFind" element={<Find/>} />
    </Routes>
  );
}

export default UserRoutes;
