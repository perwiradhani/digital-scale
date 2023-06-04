import React from "react";
import "./approveList.css";
import { DataGrid } from "@material-ui/data-grid";
import { productRows } from "../../dummyData";
import { useHistory } from "react-router-dom";
import { useState } from "react";
import Swal from 'sweetalert2';
import Topbar from "../../components/topbar/Topbar";

export default function ProductList() {
  const [data] = useState(productRows);

  const history = useHistory();

  const handleCellButtonClick = (id) => {
    Swal.fire({
      title: 'Approve the data?',
      text: "You won't be approve this data!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Approve',
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        Swal.fire('Data has been approved!', '', 'success')
        history.push("/approved/" + id);
      }
    })
  }

  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    { field: "tanggal", headerName: "Tanggal", width: 150 },
    { field: "jam", headerName: "Jam", width: 150 },
    {
      field: "plat",
      headerName: "Plat Nomor",
      width: 150,
    },
    {
      field: "berat",
      headerName: "Berat",
      width: 160,
    },
    {
      field: "status",
      headerName: "Status",
      width: 150,
      renderCell: (params) => {
        return (
          <>
              <button className="productListEdit" onClick={() => handleCellButtonClick(params.row.id)}>Give Approve</button>
          </>
        );
      },
    },
  ];

  return (
    <div className="userList">
      <Topbar />
      <h2>Halaman Approval</h2>
      <br></br>
      <DataGrid
        rows={data}
        disableSelectionOnClick
        columns={columns}
        pageSize={8}
      />
    </div>
  );
}
