import React, { useState, useEffect} from "react";
import { Link } from "react-router-dom";
import {
    PermIdentity,
    ExitToApp,
  } from "@material-ui/icons";
import axios from "axios";

const DropDownProfile = () => {
  const [btn, setBtn] = useState('login');
  const [userProfile, setUserProfile] = useState(null);
  
  // useEffect(() => {
  //   if (localStorage.getItem('token')) {
  //     setBtn('Logout')
  //   } else {
  //     setBtn('Login')
  //   }
  // }, [])

  // useEffect(() => {
  //   fetch('http://localhost:8000/api/profile', {
  //     headers: {
  //       Authorization: `Bearer ${localStorage.getItem('token')}`,
  //     },
  //   })
  //     .then((response) => response.json())
  //     .then((data) => setUserProfile(data))
  //     .catch((error) => console.log(error));
  // }, []);

  useEffect(() => {
    axios.get('http://localhost:8000/api/profile', {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    }).then((res) => {
      setUserProfile(res.data)
    })
  }, [])
  
  
  const handleLogout = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('username')
    window.location.href = '/login'

    // e.preventDefault();
      
    // axios.get('http://localhost:8000/api/logout').then((res) => {
    //   localStorage.removeItem('token')
    //   window.location.href = '/login'
    // })
  }

  let username = localStorage.getItem('username')


  return (
      <div className="flex flex col dropDownProfile">
        <ul className="dropList">
          <span className="profileName">Hi, {username}</span>
          <Link to="/" className="link">
          {/* <li className="dropListItem">
            <PermIdentity className="sidebarIcon" />
            Profile
          </li> */}
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