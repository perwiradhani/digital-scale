import React from "react";
import "./productList.css";
import { DataGrid } from "@material-ui/data-grid";
import { productRows } from "../../dummyData";
import { useHistory } from "react-router-dom";
import { useState } from "react";
import Swal from 'sweetalert2';
import Topbar from "../../components/topbar/Topbar";

export default function VerifList() {
  const [data] = useState(productRows);

  const history = useHistory();

  const handleCellButtonClick = (id) => {
    Swal.fire({
      title: 'Verify the data?',
      text: "You won't be verify this data!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Verified',
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        Swal.fire('Data has been verified!', '', 'success')
        history.push("/verif/" + id);
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
              <button className="productListEdit" onClick={() => handleCellButtonClick(params.row.id)}>Give Verif</button>
          </>
        );
      },
    },
  ];

  return (
    <div className="userList">
      <Topbar />
      <h2>Halaman Verifikasi</h2>
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
