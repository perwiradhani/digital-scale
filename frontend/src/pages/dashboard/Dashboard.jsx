import Chart from "../../components/chart/Chart";
import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo";
import "./dashboard.css";
import { userData } from "../../dummyData";
import Topbar from "../../components/topbar/Topbar";

export default function Home() {
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
