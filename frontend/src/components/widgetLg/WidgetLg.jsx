import "./widgetLg.css";
import React, { useEffect, useState } from "react";
import axios from "axios";

export default function WidgetLg() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8000/api/muatan')
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error(error));
  }, []);





  const Button = ({ type }) => {
    return <button className={"widgetLgButton " + type}>{type}</button>;
  };
  return (
    <div className="widgetLg">
      <h3 className="widgetLgTitle">Data Muatan Truk</h3>
      <table className="widgetLgTable">
        <thead>
        <tr className="widgetLgTr">
          <th className="widgetLgTh">No</th>
          {/* <th className="widgetLgTh">ID Truk</th> */}
          <th className="widgetLgTh">Tanggal</th>
          {/* <th className="widgetLgTh">Jam</th> */}
          <th className="widgetLgTh">Plat Nomor</th>
          <th className="widgetLgTh">Berat</th>
          <th className="widgetLgTh">Status</th>
          <th className="widgetLgTh">Action</th>
        </tr>
        </thead>
        
        <tbody>
        {data.map((muatan) => (
          <tr className="widgetLgTr">
          <td className="widgetLgNo">{muatan.id}</td>
          {/* <td className="widgetLgIdTruk">{muatan.id_truk}</td> */}
          <td className="widgetLgTanggal">{muatan.waktu}</td>
          {/* <td className="widgetLgJam">{muatan.jam}</td> */}
          <td className="widgetLgPlatNomor">{muatan.plat}</td>
          <td className="widgetLgBerat">{muatan.beban_seluruh}</td>
          <td className="widgetLgStatus">
            <Button type="Approved" />
          </td>
          <td className="widgetLgAction">
            <Button type="Edit" />
          </td>
          <td className="widgetLgAction">
            <Button type="Delete" />
          </td>
        </tr>
        ))}
        </tbody>
      </table>
    </div>
  );
}
