import "./timbang.css";
// import WidgetAdd from "../../components/widgetSm/WidgetSm";
import WidgetAdd from "../../components/widgetSm/WidgetAdd";
import Topbar from "../../components/topbar/Topbar";

export default function Add() {
  return (
    <div className="home">
      <Topbar />
      <div className="homeWidgets">
        <WidgetAdd/>
      </div>
    </div>
  );
}
