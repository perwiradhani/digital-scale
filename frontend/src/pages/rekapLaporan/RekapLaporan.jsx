import Chart from "../../components/chart/Chart";
import "./rekapLaporan.css";
import { userData } from "../../dummyData";
import WidgetLg from "../../components/widgetLg/WidgetLg";

export default function Home() {
  return (
    <div className="rekapLaporan">
      <Chart data={userData} title="Data Analytics" grid dataKey="Active Data"/>
      <div className="rekapLaporanWidgets">
        <WidgetLg/>
      </div>
    </div>
  );
}
