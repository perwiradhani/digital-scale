import Chart from "../../components/chart/Chart";
import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo";
import "./dashboard.css";
import { userData } from "../../dummyData";

export default function Home() {
  return (
    <div className="home">
      <h2>Dashboard</h2>
      <br></br>
      <FeaturedInfo />
      <Chart data={userData} title="User Analytics" grid dataKey="Active User"/>
    </div>
  );
}
