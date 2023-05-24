import "./newUser.css";
import { useState, useEffect } from "react";
import axios from "axios";

export default function NewUser() {
  // const [nama_user, setNamaUser] = useState("");
  // const [username, setUsername] = useState("");
  // const [password, setPassword] = useState("");
  // const [role, setRole] = useState("");
  const [userInput, setUser] = useState({
    nama_user: '',
    username: '',
    password: '',
    role: '',
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
      nama_user: userInput.nama_user,
      username: userInput.username,
      password: userInput.password,
      role: userInput.role,
    };

    axios.post("http://localhost:8000/api/register", data).then((response) => {
      document.getElementById("CATEGORY_FORM").reset();
      alert(response.data.message);
      window.location.replace("/users");
      // console.log(response);
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
      <h2 className="newUserTitle">New User</h2>
      <form onSubmit={handleSubmit} className="newUserForm" id="CATEGORY_FORM">
        <div className="newUserItem">
          <label>Username</label>
          <input type="text" name="username" onChange={handleInput} value={userInput.username} />
        </div>
        <div className="newUserItem">
          <label>Full Name</label>
          <input type="text" name="nama_user" onChange={handleInput} value={userInput.nama_user} />
        </div>
        <div className="newUserItem">
          <label>Password</label>
          <input type="password" name="password" onChange={handleInput} value={userInput.password} />
        </div>
        <div className="newUserItem">
          <label>Role</label>
          <input type="text" name="role" onChange={handleInput} value={userInput.role} />
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
