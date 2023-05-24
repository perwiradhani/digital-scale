import "./productList.css";
import { DataGrid } from "@material-ui/data-grid";
import { productRows } from "../../dummyData";
import { Link } from "react-router-dom";
import { useState } from "react";
import Swal from 'sweetalert2'

export default function ProductList() {
  const [data] = useState(productRows);

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
            <Link to={"/approved/" + params.row.id}>
              <button className="productListEdit" onClick={handleClick}>Give Verif</button>
            </Link>
          </>
        );
      },
    },
  ];
  const handleClick = () => {
    Swal.fire({
      title: 'Do you want to approve this data?',
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: 'Yes',
      denyButtonText: `No`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        Swal.fire('Saved!', '', 'success')
      } else if (result.isDenied) {
        Swal.fire('Changes are not saved', '', 'info')
      }
    })
  }

  return (
    <div className="userList">
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
