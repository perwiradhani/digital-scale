import React, { useState, useEffect} from "react";
import { Link } from "react-router-dom";
import {
    PermIdentity,
    ExitToApp,
  } from "@material-ui/icons";

const DropDownProfile = () => {
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
      <div className="flex flex col dropDownProfile">
        <ul className="dropList">
          <span className="profileName">Hi, Petugas</span>
          <Link to="/" className="link">
          <li className="dropListItem">
            <PermIdentity className="sidebarIcon" />
            Profile
          </li>
          </Link>
          {/*<Link to="/login" className="link">*/}
          <li className="dropListItem" onClick={handleLogout}>
            <ExitToApp className="sidebarIcon" />
            Logout
          </li>
          {/*</Link>*/}
        </ul>
      </div>
    )
}

export default DropDownProfile;