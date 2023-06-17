import React from "react";
import ActiveBtn from "../../ActiveBtn";
import { BiBell } from "react-icons/bi";

const SearchBar = () => {
  return (
    <>
      <div className="flex flex-row items-center  w-11/12">
        {/* Search Bar */}
        <div className=" w-[60%]">
          <div class="relative flex items-center w-full h-12 rounded-3xl focus-within:shadow-lg bg-white overflow-hidden">
            <div class="grid place-items-center h-full w-12 text-[#525252]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>

            <input
              class="peer h-full w-full outline-none text-sm text-[#373737] pr-2"
              type="text"
              id="search"
              placeholder="Search Patients"
            />
          </div>
        </div>

        {/* Appointment, Add pateint , Notification-bell button */}

        <div className="flex flex-row ml-8 justify-evenly  gap-6">
          <div>
            <ActiveBtn>Make an Appointment</ActiveBtn>
          </div>
          <div>
            <ActiveBtn>Add Patient</ActiveBtn>
          </div>

          <span className="px-3 py-3 bg-[#312E81] font-base text-white rounded-full font-Helvetica">
            <BiBell />
          </span>
        </div>
      </div>
    </>
  );
};

export default SearchBar;
