import userpic from "../Assets/Rectangle 39.png";

let price = null;
let quantitiy = null;

export const patient = [
  {
    id: 1,
    name: "Sourav Singh",
    age: 32,
    gender: "Male",
    date: "12/02/2015",
    time: "14:05 PM",
    bill_no: "012345678",
    recipt_no: "12121212",
    mobile: "8808123456",
    img: userpic,
    services: [
      {
        no: 1,
        service_name: "Consultation",
        price: 500,
        quantity: 1,
      },
      {
        no: 2,
        service_name: "X-ray",
        price: 1500,
        quantity: 1,
      },
      {
        no: 3,
        service_name: "Sugar-test",
        price: 1200,
        quantity: 5,
      },
    ],
  },
  {
    id: 2,
    name: "Rakesh Gupta",
    age: 23,
    gender: "Male",
    date: "13/02/2016",
    time: "16:05 PM",
    bill_no: "012345678",
    recipt_no: "12121212",
    mobile: "8808000000",
    img: userpic,
    services: [
      {
        no: 1,
        service_name: "Blood test",
        price: 800,
        quantity: 1,
      },
      {
        no: 2,
        service_name: "Liver test",
        price: 300,
        quantity: 1,
      },
    ],
  },
  {
    id: 3,
    name: "Rishi Kumar",
    age: 28,
    gender: "Male",
    date: "20/02/2018",
    time: "20:08 PM",
    bill_no: "012345678",
    recipt_no: "12121212",
    mobile: "8808880822",
    img: userpic,
    services: [
      {
        no: 1,
        service_name: "Bone-test",
        price: 900,
        quantity: 1,
      },
      {
        no: 2,
        service_name: "Eye",
        price: 1100,
        quantity: 1,
      },
      {
        no: 3,
        service_name: "Skin-test",
        price: 1600,
        quantity: 1,
      },
    ],
  },
  {
    id: 4,
    name: "Vimal Verma",
    age: 26,
    gender: "Male",
    date: "11/01/2023",
    time: "00:05 PM",
    bill_no: "012345678",

    recipt_no: "12121212",
    mobile: "1234567888",
    img: userpic,
    services: [
      {
        no: 1,
        service_name: "Hair-fall test",
        price: 600,
        quantity: 1,
      },
      {
        no: 2,
        service_name: "X-ray",
        price: 1500,
        quantity: 1,
      },
    ],
  },
  {
    id: 5,
    name: "Shubham Shah",
    age: 45,
    gender: "Male",
    date: "29/02/2017",
    time: "17:02 PM",
    bill_no: "012345678",
    recipt_no: "12121212",
    mobile: "8808123456",
    img: userpic,
    services: [
      {
        no: 1,
        service_name: "Consultation",
        price: 500,
        quantity: 1,
      },
      {
        no: 2,
        service_name: "X-ray",
        price: 1500,
        quantity: 1,
      },
      {
        no: 3,
        service_name: "Skin-test",
        price: 1600,
        quantity: 1,
      },
      {
        no: 4,
        service_name: "Eye",
        price: 1100,
        quantity: 1,
      },
    ],
  },
];
