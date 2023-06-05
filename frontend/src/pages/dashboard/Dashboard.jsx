import Chart from "../../components/chart/Chart";
import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo";
import "./dashboard.css";
import { getUsers } from "../../dummyData";
import Topbar from "../../components/topbar/Topbar";
import { useEffect, useState } from "react";
import axios from "axios";

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
      <Chart data={getUsers} title="User Analytics" grid dataKey="Active User"/>
    </div>
  );
}
