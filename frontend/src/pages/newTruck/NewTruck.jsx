import "./newUser.css";
import { useState, useEffect } from "react";
import axios from "axios";
import Topbar from "../../components/topbar/Topbar";

export default function NewUser() {
  // const [nama_user, setNamaUser] = useState("");
  // const [username, setUsername] = useState("");
  // const [password, setPassword] = useState("");
  // const [role, setRole] = useState("");
  const [userInput, setUser] = useState({
    plat_nomor: '',
    jenis_truck: '',
    beban_kosong: '',
    beban_max: '',
  });

  const handleInput = (e) => {
    e.persist();
    setUser({
      ...userInput,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      plat_nomor: userInput.plat_nomor,
      jenis_truck: userInput.jenis_truck,
      beban_kosong: userInput.beban_kosong,
      beban_max: userInput.beban_max,
    };

    axios.post("http://localhost:8000/api/truck", data).then((response) => {
      document.getElementById("CATEGORY_FORM").reset();
      alert(response.data.message);
      window.location.replace("/trucks");
      console.log(response);
    });
  };


  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   const data = {
  //     nama_user,
  //     username,
  //     password,
  //     role,
  //   };
  //   axios.post("http://localhost:8000/api/users", data).then((response) => {
  //     // console.log(response);
  //     window.location.replace("/users");
  //   });
  // };


  return (
    <div className="newUser">
      <Topbar />
      <h2 className="newUserTitle">New Truck</h2>
      <form onSubmit={handleSubmit} className="newUserForm" id="CATEGORY_FORM">
        <div className="newUserItem">
          <label>Plat Nomor</label>
          <input type="text" name="plat_nomor" onChange={handleInput} value={userInput.plat_nomor} />
        </div>
        <div className="newUserItem">
          <label>Jenis Truck</label>
          <input type="text" name="jenis_truck" onChange={handleInput} value={userInput.jenis_truck} />
        </div>
        <div className="newUserItem">
          <label>Beban Kosong</label>
          <input type="number" name="beban_kosong" onChange={handleInput} value={userInput.beban_kosong} />
        </div>
        <div className="newUserItem">
          <label>Beban Max</label>
          <input type="number" name="beban_max" onChange={handleInput} value={userInput.beban_max} />
        </div>
        {/* <div className="newUserItem">
          <label>Gender</label>
          <div className="newUserGender">
            <input type="radio" name="gender" id="male" value="male" />
            <label for="male">Male</label>
            <input type="radio" name="gender" id="female" value="female" />
            <label for="female">Female</label>
            <input type="radio" name="gender" id="other" value="other" />
            <label for="other">Other</label>
          </div>
        </div> */}
        {/* <div className="newUserItem">
          <label>Role</label>
          <select className="newUserSelect" name="role" id="active">
            <option onChange={handleInput} value="Admin">Admin</option>
            <option onChange={handleInput} value="Petugas">Petugas</option>
            <option onChange={handleInput} value="Koordinator">Koordinator</option>
            <option onChange={handleInput} value="Supervisor">Supervisor</option>
            <option onChange={handleInput} value="Owner">Owner</option>
          </select>
        </div> */}
        <button className="newUserButton">Create</button>
      </form>
    </div>
  );
}
