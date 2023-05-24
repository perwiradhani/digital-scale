import "./userList.css";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
// import { userData, userRows } from "../../dummyData";
import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

export default function UserList() {
  // const [data, setData] = useState(userRows);
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8000/api/truck").then((response) => {
      setUserData(response.data.data);
    });
  }, []);

  const handleDelete = (id) => {
    // setData(data.filter((item) => item.id !== id));
    axios.delete(`http://localhost:8000/api/truck/${id}`).then((response) => {
      alert(response.data.message);
      setUserData(userData.filter((item) => item.id !== id));
    }
    );
  };

  const handleEdit = (id) => {
    axios.get(`http://localhost:8000/api/truck/${id}`).then((response) => {
      window.location.href = `/truck/${id}`;
    });
  };

  // userData.map((item) => {
  //   item.id = item.id;
  //   item.username = item.username;
  //   item.nama_user = item.nama_user;
  //   item.role = item.role;
  // });
  
  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    // {
    //   field: "username",
    //   headerName: "Username",
    //   width: 200,
    //   renderCell: (params) => {
    //     return (
    //       <div className="userListUser">
    //         {params.row.username}
    //       </div>
    //     );
    //   },
    // },
    { field: "plat_nomor", headerName: "Plat Nomor", width: 180 },
    {
      field: "jenis_truck",
      headerName: "Jenis Truck",
      width: 200,
    },
    {
      field: "beban_kosong",
      headerName: "Beban Kosong",
      width: 200,
    },
    {
      field: "beban_max",
      headerName: "Beban Maximum",
      width: 200,
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            {/* <Link to={"/truck/" + params.row.id}> */}
              <button onClick={() => handleEdit(params.row.id)} className="userListEdit">Edit</button>
            {/* </Link> */}
            <DeleteOutline
              className="userListDelete"
              onClick={() => handleDelete(params.row.id)}
            />
          </>
        );
      },
    },
  ];

  return (
      <div className="userList">
        <div className="userTitleContainer">
        <h2>Data Truck</h2>
      <br></br>
        <Link to="/newTruck">
          <button className="userAddButton">Create</button>
        </Link>
      </div>
      
      <DataGrid
        rows={userData}
        disableSelectionOnClick
        columns={columns}
        pageSize={8}
      />
      {/* <div className="container px-4">
      <div className="card mt-4">
      <div className="card-body">
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Username</th>
              <th scope="col">Nama</th>
              <th scope="col">Role</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {userData.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.username}</td>
                <td>{item.nama_user}</td>
                <td>{item.role}</td>
                <td>
                  <Link to={"/user/" + item.id}>
                    <button className="userListEdit">Edit</button>
                  </Link>
                  <DeleteOutline
                    className="userListDelete"
                    onClick={() => handleDelete(item.id)} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        </div>
        </div>
      </div> */}
    </div>
  

  );
}

