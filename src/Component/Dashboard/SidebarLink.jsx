import React from "react";

// importing whole icon of vsc
import * as Icons from "react-icons/vsc";
import { Link, matchPath, useLocation } from "react-router-dom";

const SidebarLink = ({ link, iconName }) => {
  const location = useLocation();

  // logic for tab highlight on which user is curently present
  const matchRoute = (route) => {
    return matchPath({ path: route }, location.pathname);
  };
  const Icon = Icons[iconName];

  return (
    <Link to={link.path} className="cursor-pointer">
      <div className="text-white text-base ">
        <div
          className={`relative px-2 py-2 text-sm font-medium w-36 mx-auto rounded-xl ${
            matchRoute(link.path) ? "bg-[#9795CD] " : "bg-opacity-0"
          }`}
        >
          <div className="flex flex-row  gap-4 items-center">
            <Icon className="text-xl " />
            <span>{link.name}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default SidebarLink;
