import "./featuredInfo.css";
import React, { useEffect, useState } from "react";
import axios from "axios";

export default function FeaturedInfo() {
  const [count, setCount] = useState(0);
  const [countTruck, setCountTruck] = useState(0);
  const [countValid, setCountValid] = useState(0);

  useEffect(() => {
    axios.get('http://localhost:8000/api/users/counts', {
  }).then((res) => {
    setCount(res.data)
  })
  }, []);

  useEffect(() => {
    axios.get('http://localhost:8000/api/trucks/counts', {
  }).then((res) => {
    setCountTruck(res.data)
  })
  }, []);

  useEffect(() => {
    axios.get('http://localhost:8000/api/muatans/counts', {
  }).then((res) => {
    setCountValid(res.data)
  })
  }, []);


  return (
    <div className="featured">
      <div className="featuredItem">
        <span className="featuredTitle">Total Data Masuk</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">{countTruck}</span>
        </div>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">Total Data Valid</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">{countValid}</span>
        </div>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">User Aktif</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">{count}</span>
        </div>
      </div>
    </div>
  );
}
