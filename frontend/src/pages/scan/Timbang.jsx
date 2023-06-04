import "./timbang.css";
import WidgetSm from "../../components/widgetSm/WidgetSm";
import Topbar from "../../components/topbar/Topbar";

export default function Timbang() {
  return (
    <div className="home">
      <Topbar />
      <div className="homeWidgets">
        <WidgetSm/>
      </div>
    </div>
  );
}
