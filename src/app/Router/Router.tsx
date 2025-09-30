import { Routes, Route } from "react-router-dom";
import Degrees from "../dashboard/Degrees";
import RegisterDegree from "../dashboard/RegisterDegree";
import College from "../dashboard/College";
import RegisterCollege from "../dashboard/RegisterCollege";
import SuperAdmin from "../dashboard/SuperAdmin";
import { SectionCards } from "@/components/section-cards";
import Home from "../dashboard/Home";
// import { SideNavContainer } from "../dashboard/side-nav-container";
import AvailableDegrees from "../dashboard/AvailableDegrees";
import LoginPage from "@/components/ui/LoginPage";
import AvailableCollege from "../dashboard/AvailableColleges";


const Router = () => {
  return (
    <Routes>
      {/* <Route path="/" element={<SideNavContainer />} /> */}
      <Route path="/home" element={<Home />} />
      <Route path="/degrees" element={<Degrees />} />
      <Route path="/register-degree" element={<RegisterDegree />} />
      <Route path="/college" element={<College />} />
      <Route path="/register-college" element={<RegisterCollege />} />
      <Route path="/super-admin" element={<SuperAdmin />} />
      <Route path="/section-cards" element={<SectionCards />} />
      <Route path="login-page" element={<LoginPage />} />
      <Route path="seeMoreClg" element={ <AvailableDegrees /> } />
      <Route path="/degrees/:degreeId" element={<AvailableDegrees />} />
      <Route path="/college/:collegeId" element={<AvailableCollege />} />
    </Routes>
  );
};

export default Router;
