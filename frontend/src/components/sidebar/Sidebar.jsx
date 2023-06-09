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

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <ul className="sidebarList">
            <Link to="/" className="link">
            <li className="sidebarListItem">
              <Dashboard className="sidebarIcon" />
              Dashboard
            </li>
            </Link>
          </ul>
        {/* </div>
        <div className="sidebarMenu"> */}
          <ul className="sidebarList">
            <Link to="/users" className="link">
              <li className="sidebarListItem">
                <PermIdentity className="sidebarIcon" />
                Data User
              </li>
            </Link>
          </ul>
          <ul className="sidebarList">
            <Link to="/trucks" className="link">
              <li className="sidebarListItem">
                <Category className="sidebarIcon" />
                Data Truck
              </li>
            </Link>
          </ul>
        {/* </div>
        <div className="sidebarMenu"> */}
          <ul className="sidebarList">
            <Link to="/scan" className="link">
              <li className="sidebarListItem">
                <Camera className="sidebarIcon" />
                Scan
              </li>
            </Link>
          </ul>
          <ul className="sidebarList">
            <Link to="/" className="link">
              <li className="sidebarListItem">
                <AirplanemodeActive className="sidebarIcon" />
                Muatan
              </li>
            </Link>
          </ul>
          <ul className="sidebarList">
            <Link to="/inputmanual" className="link">
              <li className="sidebarListItem">
                <Input className="sidebarIcon" />
                Input Manual
              </li>
            </Link>
          </ul>
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
              <li className="sidebarListItem">
                <Done className="sidebarIcon" />
                Verifikasi
              </li>
            </Link>
          </ul>
        {/* </div>
        <div className="sidebarMenu"> */}
          <ul className="sidebarList">
            <Link to="/approves" className="link">
              <li className="sidebarListItem">
                <DoneAll className="sidebarIcon" />
                Approval
              </li>
            </Link>
          </ul>
        {/* </div>
        <div className="sidebarMenu"> */}
          <ul className="sidebarList">
            <Link to="/rekaplaporan" className="link">
              <li className="sidebarListItem">
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
