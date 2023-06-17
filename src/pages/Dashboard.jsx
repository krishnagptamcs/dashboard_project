import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../Component/Dashboard/Sidebar";


const Dashboard = () => {
  return (
    <div>
      <div className="flex flex-row relative ">
        <Sidebar />

        <div className="fixed bg-[#e3f0f6] w-[calc(100vw-195px)] rounded-l-3xl h-screen right-0   ">
          <div className="w-11/12 max-w-[1260px]   ml-10 font-Helvetica">
            {/* Using oulet from react-roouter-dom for nesting of diffrent routes */}
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
