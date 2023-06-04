import Chart from "../../components/chart/Chart";
import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo";
import "./dashboard.css";
import { userData } from "../../dummyData";
<<<<<<< HEAD
import React, { useState, useEffect} from "react";
import axios from "axios";

=======
import Topbar from "../../components/topbar/Topbar";
>>>>>>> 0bbb193b7ecda219c0780cdaac6f8d7ee9ef6e96

export default function Home() {
  const [userProfile, setUserProfile] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:8000/api/profile', {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    }).then((res) => {
      setUserProfile(res.data)
      localStorage.setItem('username', res.data.username)
    })
  }, [])




  return (
    <div className="home">
      <Topbar />
      <h2>Dashboard</h2>
      <br></br>
      <FeaturedInfo />
      <Chart data={userData} title="User Analytics" grid dataKey="Active User"/>
    </div>
  );
}
