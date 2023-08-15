import Chart from "../../components/chart/Chart";
import "./rekapLaporan.css";
import { userData } from "../../dummyData";
import WidgetLg from "../../components/widgetLg/WidgetLg";
import Topbar from "../../components/topbar/Topbar";
import axios from "axios";
import { useEffect, useState } from "react";
// import { data } from "../../dummyData";

export default function Home() {
  const [datas, setData] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8000/api/months").then((response) => {
        setData(response.data);
    });
}, []);


  // const getMonths = async () => {
  //   return await axios.get("http://localhost:8000/api/months");
  // }; 

  return (
    <div className="rekapLaporan">
      <Topbar />
      {/* <Chart data={userData} title="Data Analytics" grid dataKey="Active Data"/> */}
      {/* <Chart data={datas} title="Rekap" grid dataKey="total" /> */}
      <div className="rekapLaporanWidgets">
        <WidgetLg/>
      </div>
    </div>
  );
}
