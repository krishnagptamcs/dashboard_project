import React, { lazy,  useState } from "react";

// importing all patient JSON data 
import { patient } from "../../../data/patient-details";
import BillTemplate from "./BillTemplate";

const PatientData = () => {
  const [activeButton, setActiveButton] = useState((patient.id = 1));
  const [cardData, setCardData] = useState(patient[0]);

  function handelClick(btnkey, item) {
    if (activeButton !== btnkey) {
      setActiveButton(btnkey);
      setCardData(item);
    }
  }

  return (
    <>
      <div className="flex gap-x-">
        {/* Left part--- PATIENT CARD */}
        <div className="flex flex-col gap-2 w-[300px]">
          {patient.map((item, index) => (
            <div>
              <button
                key={item.id}
                className={`flex flex-row gap-2 cursor-auto
        ${activeButton === item.id ? "bg-[#FFFFFF]" : "bg-[#CBE3FF]"}
        pl-2 pr-8 py-3 rounded-xl`}
                onClick={() => handelClick(item.id, item)}
              >
                <div>
                  <img src={item.img} className="w-[80px] h-[80px]" loading={lazy}/>
                </div> 

                <div className="flex flex-col gap-1 items-start">
                  <p>{item.name}</p>
                  <div className="flex flex-row gap-2">
                    <p>{item.age},</p> <p>{item.gender}</p>
                  </div>

                  <div>
                    {/* LOGIC FOR SHOWING View Presecption Button or Bill No. on selected tab */}

                    {activeButton === item.id ? (
                      <div>
                        <button
                          className="px-4 py-1 border-2 text-xs w-fit border-[#312E81] text-[#312E81] rounded-3xl
                      hover:bg-[#312E81] hover:text-white transition-all duration-200"
                        >
                          View Prescription
                        </button>
                      </div>
                    ) : (
                      <div>
                        <p>
                          <span className="text-[#525252]">Bill No:</span>
                          <span>{item.bill_no}</span>
                        </p>
                      </div>
                    )}
                  </div>


                </div>
              </button>
            </div>
          ))}
        </div>

        {/*  Right part- BILL SECTION, passing a whole bill data of selected patient as CardData */}

        <div className="w-[800px]">
          <BillTemplate cardData={cardData} />
        </div>
      </div>
    </>
  );
};

export default PatientData;
