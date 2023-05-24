import axios from "axios";

export const getUsers = async () => {
  return await axios.get("http://localhost:8000/api/users");
};


export const userData = [
    {
      name: "Jan",
      "Active User": 4000,
    },
    {
      name: "Feb",
      "Active User": 3000,
    },
    {
      name: "Mar",
      "Active User": 5000,
    },
    {
      name: "Apr",
      "Active User": 4000,
    },
    {
      name: "May",
      "Active User": 3000,
    },
    {
      name: "Jun",
      "Active User": 2000,
    },
    {
      name: "Jul",
      "Active User": 4000,
    },
    {
      name: "Agu",
      "Active User": 3000,
    },
    {
      name: "Sep",
      "Active User": 4000,
    },
    {
      name: "Oct",
      "Active User": 1000,
    },
    {
      name: "Nov",
      "Active User": 4000,
    },
    {
      name: "Dec",
      "Active User": 3000,
    },
  ];

  export const productData = [
    {
      name: "Jan",
      "Sales": 4000,
    },
    {
      name: "Feb",
      "Sales": 3000,
    },
    {
      name: "Mar",
      "Sales": 5000,
    },
  ];

  export const userRows = [
    {
      id: 1,
      username: "Admin",
      password: "admin",
      status: "active",
    },
    {
      id: 2,
      username: "Petugas",
      password: "petugas",
      status: "active",
    },
    {
      id: 3,
      username: "Koordinator",
      password: "koordinator",
      status: "active",
    },
    {
      id: 4,
      username: "Supervisor",
      password: "supervisor",
      status: "active",
    },
    {
      id: 5,
      username: "Owner",
      password: "owner",
      status: "active",
    },
  ];

  // export const productRows = [
  //   {
  //     id: 1,
  //     name: "Apple Airpods",
  //     img:
  //       "https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
  //     stock: 123,
  //     status: "active",
  //     price: "$120.00",
  //   },
  //   {
  //     id: 2,
  //     name: "Apple Airpods",
  //     img:
  //       "https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
  //     stock: 123,
  //     status: "active",
  //     price: "$120.00",
  //   },
  //   {
  //     id: 3,
  //     name: "Apple Airpods",
  //     img:
  //       "https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
  //     stock: 123,
  //     status: "active",
  //     price: "$120.00",
  //   },
  //   {
  //     id: 4,
  //     name: "Apple Airpods",
  //     img:
  //       "https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
  //     stock: 123,
  //     status: "active",
  //     price: "$120.00",
  //   },
  //   {
  //     id: 5,
  //     name: "Apple Airpods",
  //     img:
  //       "https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
  //     stock: 123,
  //     status: "active",
  //     price: "$120.00",
  //   },
  //   {
  //     id: 6,
  //     name: "Apple Airpods",
  //     img:
  //       "https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
  //     stock: 123,
  //     status: "active",
  //     price: "$120.00",
  //   },
  //   {
  //     id: 7,
  //     name: "Apple Airpods",
  //     img:
  //       "https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
  //     stock: 123,
  //     status: "active",
  //     price: "$120.00",
  //   },
  //   {
  //     id: 8,
  //     name: "Apple Airpods",
  //     img:
  //       "https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
  //     stock: 123,
  //     status: "active",
  //     price: "$120.00",
  //   },
  //   {
  //     id: 9,
  //     name: "Apple Airpods",
  //     img:
  //       "https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
  //     stock: 123,
  //     status: "active",
  //     price: "$120.00",
  //   },
  //   {
  //     id: 10,
  //     name: "Apple Airpods",
  //     img:
  //       "https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
  //     stock: 123,
  //     status: "active",
  //     price: "$120.00",
  //   },
  // ];

  export const editRows = [
    {
      id: 1,
      tanggal: "9 Maret 2023",
      password: "admin",
      status: "active",
    },
  ];

  export const productRows = [
    {
      id: 1,
      tanggal: "08/05/2023",
      jam: 10.11,
      plat: "AE 123 BC",
      berat: "75 kg",
    },
    {
      id: 2,
      tanggal: "08/05/2023",
      jam: 10.12,
      plat: "AE 123 BC",
      berat: "90 kg",
    },
    {
      id: 3,
      tanggal: "08/05/2023",
      jam: 10.13,
      plat: "AE 123 BC",
      berat: "80 kg",
    },
  ];