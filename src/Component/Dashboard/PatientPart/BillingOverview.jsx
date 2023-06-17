import React from "react";
import { MdArrowForwardIos, MdArrowBackIosNew } from "react-icons/md";

const BillingOverview = () => {
  return (
    <>
      <div className="w-11/12">
        <div className="flex   flex-row items-center font-Helvetica justify-between mt-4">
          <h1 className="text-2xl font-semibold">Billing Overview</h1>

          <div className="flex flex-row items-center bg-[#CBE3FF] p-2 gap-2 rounded-lg mr-4">
            <span className="p-1 bg-[#312E81] rounded-md text-white cursor-pointer ">
              {" "}
              <MdArrowBackIosNew />
            </span>

            <span className="font-semibold">February 2021</span>

            <span className="p-1 bg-[#312E81] rounded-md text-white cursor-pointer">
              <MdArrowForwardIos />
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default BillingOverview;
