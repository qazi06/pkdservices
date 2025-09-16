import type React from "react";
import { useEffect, useState } from "react";
import { getUser } from "./lib/ApiData";
import { AppSidebar } from "./components/app-sidebar";
// import { ChartAreaInteractive } from "./components/chart-area-interactive";
import { DataTable } from "./components/data-table";
import { SectionCards } from "./components/section-cards";
import { SiteHeader } from "./components/site-header";
import { SidebarInset, SidebarProvider } from "./components/ui/sidebar";
import "./App.css";

export type College = {
  _id: string;
  name: string;
  tag: string;
  subName: string;
  description: string;
  detail: string;
  createdAt: string;
  offeringDegrees: string;
  selectedFile : string;
  link1 : string;
  link2 : string;
};

function App() {
  const [items, setItems] = useState<College[]>([]);

  const getCollegeData = async () => {
    try {
      const response = await getUser();
      console.log(response.data);
      
      const transformedData = response.data.map((item: College) => ({
        id: item._id , 
        header: item.name ,
        type: item.tag,
        status: item.subName, 
        target: item.createdAt,
        limit: item.offeringDegrees,
        reviewer: item.link1,

      }));
      
      setItems(transformedData);
    } catch (error) {
      console.error("Failed to fetch college data:", error);
    } 
  };

  useEffect(() => {
    getCollegeData();
  }, []);
  
  return (
    <SidebarProvider
      style={
        {
          "--sidebar-width": "calc(var(--spacing) * 70)",
          "--header-height": "calc(var(--spacing) * 15)",
        } as React.CSSProperties
      }
    >
      <AppSidebar />
      <SidebarInset>
        <SiteHeader />
        <div className="@container/main flex flex-col gap-2">
          <SectionCards />
          <div className="px-6 max-w-screen-xl mx-auto">
            {/* <ChartAreaInteractive /> */}
          </div>
          <div className="px-6">
            {items.length > 0 ? (
              <DataTable  data={items} />
            ) : (
              <div className="text-center text-gray-500 py-8">
                No college data available
              </div>
            )}
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}

export default App;