import Chart from "../../components/chart/Chart";
import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo";
import "./dashboard.css";
import { getUsers, userData, userRows } from "../../dummyData";
import Topbar from "../../components/topbar/Topbar";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Home() {
  const [userProfile, setUserProfile] = useState(null);
  const [datas, setData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/api/profile', {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    }).then((res) => {
      setUserProfile(res.data)
      localStorage.setItem('username', res.data.username)
      localStorage.setItem('role', res.data.role)
    })
  }, [])

  useEffect(() => { 
    if (localStorage.getItem('token') === null) {
      window.location.href = '/login'
    }
  }, [])

  useEffect(() => {
    axios.get("http://localhost:8000/api/months").then((response) => {
        setData(response.data);
    });
}, []);




  return (
    <div className="home">
      <Topbar />
      <h2>Dashboard</h2>
      <br></br>
      <FeaturedInfo />
      <Chart data={datas} title="Data Masuk" grid dataKey="total" />    </div>
  );
}
