import "./sidebar.css";
import {
  Dashboard,
  PermIdentity,
  Input,
  Edit,
  Done,
  DoneAll,
  FitnessCenter,
  Category,
  Camera,
  LocalAirportOutlined,
  AirplanemodeActive,
} from "@material-ui/icons";
import { Link } from "react-router-dom";
import logo from "./logo.png"
import axios from "axios";
import { useState, useEffect } from "react";

function Sidebar() {
  // const [activeSidebar, setActiveSidebar] = useState(false);

  const [activeItem, setActiveItem] = useState('dashboard');

  const handleItemClick = (item) => {
    setActiveItem(item);
  };

  // useEffect(() => {
  //   const role = localStorage.getItem('role')
  //   if (role == 'Admin') {
  //     setActiveSidebar(true)
  //   }
  // }, [])

  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <ul className="sidebarList">
            <Link to="/" className="link">
            <li className={activeItem === 'dashboard' ? 'sidebarListItem active' : ''}
            onClick={() => handleItemClick('dashboard')}
            >
              <Dashboard className="sidebarIcon" />
              Dashboard
            </li>
            </Link>
          </ul>
        {/* </div>
        <div className="sidebarMenu"> */}
          <ul className="sidebarList">
            <Link to="/users" className="link">
            <li className={activeItem === 'user' ? 'sidebarListItem active' : ''}
            onClick={() => handleItemClick('user')}
            >
                <PermIdentity className="sidebarIcon" />
                Data User
              </li>
            </Link>
          </ul>
          <ul className="sidebarList">
            <Link to="/trucks" className="link">
            <li className={activeItem === 'truk' ? 'sidebarListItem active' : ''}
            onClick={() => handleItemClick('truk')}
            >
                <Category className="sidebarIcon" />
                Data Truck
              </li>
            </Link>
          </ul>
        {/* </div>
        <div className="sidebarMenu"> */}
          <ul className="sidebarList">
            <Link to="/scan" className="link">
            <li className={activeItem === 'scan' ? 'sidebarListItem active' : ''}
            onClick={() => handleItemClick('scan')}
            >
                <Camera className="sidebarIcon" />
                Scan
              </li>
            </Link>
          </ul>
          {/* <ul className="sidebarList">
            <Link to="/" className="link">
              <li className="sidebarListItem">
                <AirplanemodeActive className="sidebarIcon" />
                Muatan
              </li>
            </Link>
          </ul> */}
          {/* <ul className="sidebarList">
            <Link to="/inputmanual" className="link">
              <li className="sidebarListItem">
                <Input className="sidebarIcon" />
                Input Manual
              </li>
            </Link>
          </ul> */}
          {/* <ul>
            <Link to="/" className="link">
              <li className="sidebarListItem">
                <AirplanemodeActive className="sidebarIcon" />
                Muatan
              </li>
            </Link>
          </ul>
          <ul>
            <Link to="/inputmanual" className="link">
              <li className="sidebarListItem">
                <Input className="sidebarIcon" />
                Input Manual
              </li>
            </Link>
          </ul> */}
        {/* </div>
        <div className="sidebarMenu"> */}
          <ul className="sidebarList">
            <Link to="/verifikasi" className="link">
            <li className={activeItem === 'verif' ? 'sidebarListItem active' : ''}
            onClick={() => handleItemClick('verif')}
            >
                <Done className="sidebarIcon" />
                Verifikasi
              </li>
            </Link>
          </ul>
        {/* </div>
        <div className="sidebarMenu"> */}
          {/* <ul className="sidebarList">
            <Link to="/approves" className="link">
              <li className="sidebarListItem">
                <DoneAll className="sidebarIcon" />
                Approval
              </li>
            </Link>
          </ul> */}
        {/* </div>
        <div className="sidebarMenu"> */}
          <ul className="sidebarList">
            <Link to="/rekaplaporan" className="link">
            <li className={activeItem === 'rekap' ? 'sidebarListItem active' : ''}
            onClick={() => handleItemClick('rekap')}
            >
                <PermIdentity className="sidebarIcon" />
                Hasil Rekap
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
      
}
export default Sidebar;
