import React, { useState } from "react";
import "./topbar.css";
import { NotificationsNone } from "@material-ui/icons";
import { Link } from "react-router-dom";
import axios from "axios";
import "./Dropdown";
import DropDownProfile from "./Dropdown";
import foto from './assets/petugas.png';
import logo from './assets/logo.png';
import Waktu from "./Waktu";

const Topbar = () => {
  const [openProfile, setOpenProfile] = useState(false);

  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo"><img src={logo} alt="" width="40px" height="40px" /></span>
        </div>
        <span className="waktu"><Waktu/></span>
        <div className="topRight">
          <div className="topbarIconContainer">
            <NotificationsNone />
            <span className="topIconBadge">2</span>
          </div>
          <div className="userTitleContainer">
            <img src={foto} alt="" className="topAvatar" onClick={() => setOpenProfile((prev) => !prev)} />
            {
              openProfile && <DropDownProfile />
            }
          </div>
        </div>
      </div>
    </div>
  );
}

export default Topbar;