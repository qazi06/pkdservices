import { Routes, Route } from "react-router-dom";
import { AppSidebar } from "@/components/app-sidebar";
import Home2 from "@/app/Home2";
import { SiteHeader } from "@/components/site-header";
import { SectionCards } from "@/components/section-cards";
// import { DataTable } from "@/components/data-table";

const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<AppSidebar />} />
            <Route path="/siteheader" element={<SiteHeader />} />
            <Route path="/section-cards" element={<SectionCards />} />
            {/* <Route path="/data-table" element={<DataTable data={items} />} /> */}
            <Route path="/home2" element={<Home2 />} />
        </Routes>
    );
};

export default Router;