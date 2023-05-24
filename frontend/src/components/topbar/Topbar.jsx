import React, { useState, useEffect} from "react";
import "./topbar.css";
import { NotificationsNone } from "@material-ui/icons";
import { Link } from "react-router-dom";
import axios from "axios";

export default function Topbar() {
  const [btn, setBtn] = useState('login');

  useEffect(() => {
    if (localStorage.getItem('token')) {
      setBtn('Logout')
    } else {
      setBtn('Login')
    }
  }, [])


  const handleLogout = () => {
    window.location.href = '/login'
    // e.preventDefault();
    
    // axios.get('http://localhost:8000/api/logout').then((res) => {
    //   localStorage.removeItem('token')
    //   window.location.href = '/login'
    // })
  }

  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">digital scale</span>
        </div>
        <div className="topRight">
          <div className="topbarIconContainer">
            <NotificationsNone />
            <span className="topIconBadge">2</span>
          </div>
          <div className="userTitleContainer">
            {/* <Link to="/login"> */}
              <button type="button" onClick={handleLogout} className="logout">{btn}</button>
            {/* </Link> */}
          </div>
        </div>
      </div>
    </div>
  );
}
