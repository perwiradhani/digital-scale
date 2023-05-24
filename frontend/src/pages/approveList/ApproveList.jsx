import "./approveList.css";
import { DataGrid } from "@material-ui/data-grid";
import { productRows } from "../../dummyData";
import { useState } from "react";

export default function ApproveList() {
  const [data] = useState(productRows);

  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "product",
      headerName: "Product",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="approveListItem">
            <img className="approveListImg" src={params.row.img} alt="" />
            {params.row.name}
          </div>
        );
      },
    },
    { field: "stock", headerName: "Stock", width: 200 },
    {
      field: "status",
      headerName: "Status",
      width: 120,
    },
    {
      field: "price",
      headerName: "Price",
      width: 160,
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
              <h5 className="approveListBtn">Approved</h5>
          </>
        );
      },
    },
  ];

  return (
    <div className="approveList">
      <DataGrid
        rows={data}
        disableSelectionOnClick
        columns={columns}
        pageSize={8}
      />
    </div>
  );
}
