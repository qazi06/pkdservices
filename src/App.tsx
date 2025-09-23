import type React from "react";
import { BrowserRouter } from "react-router-dom";
import Router from "./Routing/Router";
import { SideNavContainer } from "./components/ui/side-nav-container";
import { SiteHeader } from "./components/site-header";
import { SidebarInset, SidebarProvider } from "./components/ui/sidebar";
import "./App.css";

function App() {
  
  return (
    <BrowserRouter>
    <SidebarProvider
    style={
      {
        "--sidebar-width": "calc(var(--spacing) * 70)",
        "--header-height": "calc(var(--spacing) * 15)",
      } as React.CSSProperties
    }
    >
      <SideNavContainer />
    
      <SidebarInset>
        <SiteHeader />
        <div className="@container/main flex flex-col gap-2">
          <div className="px-6 max-w-screen-xl mx-auto">
          </div>
          <div className="px-6">
              <Router /> 
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
    </BrowserRouter>
  );
}

export default App