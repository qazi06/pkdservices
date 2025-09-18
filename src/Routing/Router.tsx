import { Routes, Route } from "react-router-dom";
import Degrees from "@/app/Degrees";
import RegisterDegree from "@/app/RegisterDegree";
import College from "@/app/College";
import RegisterCollege from "@/app/RegisterCollege";
import SuperAdmin from "@/app/SuperAdmin";
import { SectionCards } from "@/components/section-cards";
import Home from "@/app/Home";



const Router = () => {
  return (
    <Routes>
      
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/degrees" element={<Degrees />} />
      <Route path="/register-degree" element={<RegisterDegree />} />
      <Route path="/college" element={<College />} />
      <Route path="/register-college" element={<RegisterCollege />} />
      <Route path="/super-admin" element={<SuperAdmin />} />
      <Route path="/section-cards" element={<SectionCards />} />
    </Routes>
  );
};

export default Router;
