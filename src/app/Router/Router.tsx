import { Routes, Route } from "react-router-dom";
import Degrees from "@/app/dashboard/Degrees";
import RegisterDegree from "@/app/dashboard/RegisterDegree";
import College from "../dashboard/College";
import RegisterCollege from "@/app/dashboard/RegisterCollege";
import SuperAdmin from "@/app/dashboard/SuperAdmin";
import { SectionCards } from "@/components/section-cards";
import Home from "@/app/dashboard/Home";
import LoginPage from "@/components/ui/LoginPage";
import { SideNavContainer } from "@/app/dashboard/side-nav-container";


const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<SideNavContainer />} />
      <Route path="/home" element={<Home />} />
      <Route path="/degrees" element={<Degrees />} />
      <Route path="/register-degree" element={<RegisterDegree />} />
      <Route path="/college" element={<College />} />
      <Route path="/register-college" element={<RegisterCollege />} />
      <Route path="/super-admin" element={<SuperAdmin />} />
      <Route path="/section-cards" element={<SectionCards />} />
      <Route path="login-page" element={<LoginPage />} />
    </Routes>
  );
};

export default Router;
