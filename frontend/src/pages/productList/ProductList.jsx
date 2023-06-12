import React, { useEffect } from "react";
import "./productList.css";
import { DataGrid } from "@material-ui/data-grid";
import { productRows } from "../../dummyData";
import { useHistory } from "react-router-dom";
import { useState } from "react";
import Swal from 'sweetalert2';
import Topbar from "../../components/topbar/Topbar";
import axios from "axios";

export default function VerifList() {
  // const [data] = useState(productRows);
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8000/api/muatan").then((response) => {
      setData(response.data);
      // const status = response.data.status;
      // console.log(status);
    });
  }, []);

  const history = useHistory();

  const handleCellButtonClick = (id) => {
    Swal.fire({
      title: 'Verify the data?',
      text: "You won't be verify this data!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Verify',
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        Swal.fire('Data has been verified!', '', 'success')
        // history.push("/verif/" + id);
        axios.put(`http://localhost:8000/api/muatan/verif/${id}`, {
          status: "Sudah Verifikasi",
        }).then((response) => {
          window.location.href = `/verifikasi`;
        });
        // window.location.href = `/approve`;
      }
    })
  }

  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    { field: "waktu", headerName: "Tanggal", width: 150 },
    // { field: "jam", headerName: "Jam", width: 150 },
    {
      field: "plat",
      headerName: "Plat Nomor",
      width: 150,
    },
    {
      field: "beban_seluruh",
      headerName: "Berat",
      width: 160,
    },
    {
      field: "status",
      headerName: "Status",
      width: 150,
      className: "productstatus",
      // renderCell: (params) => {
      //   return (
      //     <>
      //         <button className="productListEdit" onClick={() => handleCellButtonClick(params.row.id)}>Give Verif</button>
      //     </>
      //   );
      // },
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      className: "productstatus",
      renderCell: (params) => {
        if (params.row.status === "Sudah Verifikasi") {
          return (
            <>
                <h5 className="approveListBtn">Verified</h5>
            </>
          );
        }

        return (
          <>
              <button className="productstatus" onClick={() => handleCellButtonClick(params.row.id)}>Give Verif</button>
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
        // checkboxSelection
        rowHeight={50}
      />
    </div>
  );
}
