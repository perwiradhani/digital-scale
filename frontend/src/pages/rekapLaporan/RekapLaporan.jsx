import Chart from "../../components/chart/Chart";
import "./rekapLaporan.css";
import { userData } from "../../dummyData";
import WidgetLg from "../../components/widgetLg/WidgetLg";
import Topbar from "../../components/topbar/Topbar";

export default function Home() {
  return (
    <div className="rekapLaporan">
      <Topbar />
      {/* <Chart data={userData} title="Data Analytics" grid dataKey="Active Data"/> */}
      <Chart data={userData} title="Rekap" grid dataKey="Active User"/>
      <div className="rekapLaporanWidgets">
        <WidgetLg/>
      </div>
    </div>
  );
}
