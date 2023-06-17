import React from "react";
import ActiveBtn from "../../ActiveBtn";

// for tabel inside bill
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const BillTemplate = ({ cardData }) => {

  // we can make a seperate component of each part, it depends upon the use case and amount of data to be fetched in backend , 
  // another array of services to show data in table of each patient
  const patientService = cardData.services;

  console.log("the card data is ", cardData);
  console.log("the pateint service is ", patientService);
  return (
    <>
      <div
        className="w-[100%] bg-[#FFFFFF] p-5 rounded-2xl font-Helvetica "
        key={cardData.id}
      >
        <div className="border-2 border-black rounded-2xl p-3">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-bold">Billing Details</h1>
            <ActiveBtn>Print Bill</ActiveBtn>
          </div>

          <div className="flex flex-row gap-2 bg-[#F3F3F3] mt-3 w-[100%] justify-evenly">
            <div>
              <p className="text-[#525252] text-sm">Patient Name</p>
              <p>{cardData.name}</p>
            </div>
            <div>
              <p className="text-[#525252] text-sm">Age/Gender</p>
              <p>
                <span>{cardData.age} </span>, <span>{cardData.gender}</span>
              </p>
            </div>
            <div>
              <p className="text-[#525252] text-sm">Bill No:</p>
              <p>{cardData.bill_no}</p>
            </div>
            <div>
              <p className="text-[#525252] text-sm">Date/Time</p>
              <p>
                {cardData.date}, {cardData.time}
              </p>
            </div>
            <div>
              <p className="text-[#525252] text-sm">Recipt No</p>
              <p>{cardData.bill_no}</p>
            </div>
          </div>

          {/* Table Area*/}

          <div className="w-full h-[300px] text-black font-Helvetica">
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>
                      <span className="font-bold">No</span>
                    </TableCell>
                    <TableCell align="right">
                      <span className="font-bold">Service Name</span>
                    </TableCell>
                    <TableCell align="right">
                      <span className="font-bold">Price</span>
                    </TableCell>
                    <TableCell align="right">
                      <span className="font-bold">Quantity</span>
                    </TableCell>
                    <TableCell align="right">
                      <span className="font-bold">Amount</span>
                    </TableCell>
                  </TableRow>
                </TableHead>

                <TableBody>
                  {patientService.map((row, index) => (
                    <TableRow
                      key={row.name}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell component="th" scope="row">
                        {row.no}
                      </TableCell>
                      <TableCell align="right">{row.service_name}</TableCell>
                      <TableCell align="right">{row.price}</TableCell>
                      <TableCell align="right">{row.quantity}</TableCell>
                      <TableCell align="right">
                        {row.price * row.quantity}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </div>

          {/* Footer part of Bill */}

          <div className="flex flex-col bg-[#F3F3F3]">
            <div className="flex justify-between">
              <p>Mobile no.</p>
              <p>{cardData.mobile}</p>
            </div>
            <div className="flex justify-between">
              <p>Tax.</p>
              <p>200</p>
            </div>
            <div className="flex justify-between">
              <p>Discount</p>
              <p>20</p>
            </div>
            <hr className="w-full h-[2px] bg-black" />
            <div className="flex justify-between">
              <p>Total</p>
              <p>2000000</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BillTemplate;
