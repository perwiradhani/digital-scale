import "./newUser.css";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";

export default function NewUser() {
  // const [plat_nomor, setNamaUser] = useState("");
  // const [jenis_truck, setjenis_truck] = useState("");
  // const [beban_kosong, setbeban_kosong] = useState("");
  // const [beban_max, setbeban_max] = useState("");
  const [userInput, setUser] = useState([]);
  let { userId } = useParams()

  useEffect(() => {
    axios.get(`http://localhost:8000/api/truck/${userId}`).then((response) => {
      setUser(response.data.data);
    });
  },[userId]);
  

  const handleInput = (e) => {
    e.persist();
    setUser({
      ...userInput,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      plat_nomor: userInput.plat_nomor,
      jenis_truck: userInput.jenis_truck,
      beban_kosong: userInput.beban_kosong,
      beban_max: userInput.beban_max,
    };

    await axios.put(`http://localhost:8000/api/truck/${userId}`, data).then((response) => {
      // document.getElementById("CATEGORY_FORM").reset();
      alert(response.data.message);
      window.location.replace("/trucks");
      console.log(response);
    });
  };


  return (
    <div className="newUser">
      <h2 className="newUserTitle">Edit User</h2>
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
          <label>beban_max</label>
          <select className="newUserSelect" name="beban_max" id="active">
            <option onChange={handleInput} value="Admin">Admin</option>
            <option onChange={handleInput} value="Petugas">Petugas</option>
            <option onChange={handleInput} value="Koordinator">Koordinator</option>
            <option onChange={handleInput} value="Supervisor">Supervisor</option>
            <option onChange={handleInput} value="Owner">Owner</option>
          </select>
        </div> */}
        <button className="newUserButton">Save</button>
      </form>
    </div>
  );
}
