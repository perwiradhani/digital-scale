import React from "react";
import "./product.css";
import { DataGrid } from "@material-ui/data-grid";
import { productRows } from "../../dummyData";
import { useState } from "react";
import Topbar from "../../components/topbar/Topbar";

export default function Verif() {
  const [data] = useState(productRows);

  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    { field: "tanggal", headerName: "Tanggal", width: 150 },
    { field: "jam", headerName: "Jam", width: 120 },
    {
      field: "plat",
      headerName: "Plat Nomor",
      width: 160,
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
              <h5 className="approveListBtn">Verified</h5>
          </>
        );
      },
    },
  ];

  return (
    <div className="approveList">
      <Topbar />
      <h2>Halaman Yang Sudah Di Verif</h2>
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
