import React from "react";

// importing side bar link from data to make sidebar pannel
import { sidebarLinks } from "../../data/dashboard-links";
import SidebarLink from "./SidebarLink";

const Sidebar = () => {
  return (
    <>
      <div className="flex h-screen  min-w-[220px] flex-col border-r-[1px]  bg-[#312E81] py-10 font-Helvetica">
        <div className="flex flex-col ">
          <h1 className="text-4xl font-semibold text-white ml-8 mb-5 font-Helvitica-rounded">
            LOGO
          </h1>
          <div className="mt-16 flex flex-col gap-6">
            {sidebarLinks.map((link, index) => (
              <SidebarLink link={link} key={link.id} iconName={link.icon} />
            ))}
          </div>

          {/* a line */}

          <div className="mx-auto w-36 mt-6 mr-10 mb-6 h-[1px] bg-gray-500" />

          {/* setting and support tab */}

          <div className="text-base mt-36">
            <SidebarLink
              link={{ name: "Support", path: "support" }}
              iconName="VscTarget"
            />
            <SidebarLink
              link={{ name: "Settings", path: "settings" }}
              iconName="VscSettingsGear"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
