import {
  CalendarToday,
  LocationSearching,
  MailOutline,
  PermIdentity,
  PhoneAndroid,
  Publish,
} from "@material-ui/icons";
import { Link } from "react-router-dom";
import "./user.css";
// import "pngwing.png" from "frontend\src\components\topbar\assets
import pngwing from './assets/pngwing.png';
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import Topbar from "../../components/topbar/Topbar";


export default function User() {
  const [userInput, setUser] = useState([]);
  // let { userId } = useParams()
  let username = localStorage.getItem('username')
  let role = localStorage.getItem('role')
  let name = localStorage.getItem('nama')
  let id = localStorage.getItem('id')

  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordMatch, setPasswordMatch] = useState(true);

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password === confirmPassword) {
      // Passwords match, perform further actions
      setPasswordMatch(true);
      const data = {
        password: password,
      };
  
      axios.put(`http://localhost:8000/api/password/${id}`, data).then((response) => {
        // document.getElementById("CATEGORY_FORM").reset();
        alert(response.data.message);
        // window.location.replace("/profil");
        // console.log(response);
      });
    } else {
      // Passwords do not match, show an error message or take appropriate action
      setPasswordMatch(false);
    }
  };


  // const handleInput = (e) => {
  //   e.persist();
  //   setUser({
  //     ...userInput,
  //     [e.target.name]: e.target.value,
  //   });
  // };


  return (
    <div className="user">
      <Topbar />
      <div className="userTitleContainer">
        <h2 className="userTitle">Profil</h2>
      </div>
      <div className="userContainer">
        <div className="userShow">
          <div className="userShowTop">
            <img
              src={pngwing}
              alt=""
              className="userShowImg"
            />
            <div className="userShowTopTitle">
              <span className="userShowUsername">{name}</span>
              <span className="userShowUserTitle">{role}</span>
            </div>
          </div>
          <div className="userShowBottom">
            <span className="userShowTitle">Account Details</span>
            <div className="userShowInfo">
              <PermIdentity className="userShowIcon" />
              <span className="userShowInfoTitle">{username}</span>
            </div>
            <div className="userShowInfo">
              <CalendarToday className="userShowIcon" />
              <span className="userShowInfoTitle">10.11.2000</span>
            </div>
            <span className="userShowTitle">Contact Details</span>
            <div className="userShowInfo">
              <PhoneAndroid className="userShowIcon" />
              <span className="userShowInfoTitle">+62 878 8853 6344</span>
            </div>
            <div className="userShowInfo">
              <MailOutline className="userShowIcon" />
              <span className="userShowInfoTitle">admin@admin.com</span>
            </div>
            <div className="userShowInfo">
              <LocationSearching className="userShowIcon" />
              <span className="userShowInfoTitle">Madiun | Jawa Timur</span>
            </div>
          </div>
        </div>


        <div className="userUpdate">
          <span className="userUpdateTitle">Edit Password</span>
          <form className="userUpdateForm">
            <div className="userUpdateLeft">
              <div className="userUpdateItem">
                <label>New Password</label>
                <input
                  type="password"
                  id="password"
                  className="userUpdateInput"
                  value={password}
                  onChange={handlePasswordChange}
                />
              </div>
              <div className="userUpdateItem">
                <label>Confirm Password</label>
                <input
                  type="password"
                  id="confirmPassword"
                  className="userUpdateInput"
                  value={confirmPassword}
                  onChange={handleConfirmPasswordChange}
                  // name="password"
                />
              </div>
              {!passwordMatch && <p className="error">Passwords don't match</p>}
              <br />
              <div className="userUpdateItem">
              <button className="userUpdateButton" onClick={handleSubmit}>
                Update
              </button>
            </div>
            </div>
            <div className="userUpdateRight">
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
