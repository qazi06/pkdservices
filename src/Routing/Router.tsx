import { Routes, Route } from "react-router-dom";
import Degrees from "@/app/Degrees";
import RegisterDegree from "@/app/RegisterDegree";
import College from "@/app/College";
import RegisterCollege from "@/app/RegisterCollege";
import SuperAdmin from "@/app/SuperAdmin";
import { SectionCards } from "@/components/section-cards";
import { Home } from "lucide-react";
import LoginPage from "@/app/users/LoginPage";
import { SideNavContainer } from "@/components/ui/side-nav-container";

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
