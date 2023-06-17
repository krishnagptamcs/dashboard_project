import React from "react";

// a common component for all button used in dashboard 
const ActiveBtn= ({ children }) => {
  return (
    <button className="px-4 py-2 bg-[#312E81] font-base text-white rounded-3xl font-Helvetica">
      {children}
    </button>
  );
};

export default ActiveBtn;
