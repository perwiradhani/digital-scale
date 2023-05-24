import "./widgetLg.css";

export default function WidgetLg() {
  const Button = ({ type }) => {
    return <button className={"widgetLgButton " + type}>{type}</button>;
  };
  return (
    <div className="widgetLg">
      <h3 className="widgetLgTitle">Data Muatan Truk</h3>
      <table className="widgetLgTable">
        <tr className="widgetLgTr">
          <th className="widgetLgTh">No</th>
          <th className="widgetLgTh">ID Truk</th>
          <th className="widgetLgTh">Tanggal</th>
          <th className="widgetLgTh">Jam</th>
          <th className="widgetLgTh">Plat Nomor</th>
          <th className="widgetLgTh">Berat</th>
          <th className="widgetLgTh">Status</th>
          <th className="widgetLgTh">Action</th>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgNo">1</td>
          <td className="widgetLgIdTruk">#01</td>
          <td className="widgetLgTanggal">9 Maret 2023</td>
          <td className="widgetLgJam">13.00</td>
          <td className="widgetLgPlatNomor">AE 7431 DE</td>
          <td className="widgetLgBerat">100 kg</td>
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
        <tr className="widgetLgTr">
          <td className="widgetLgNo">2</td>
          <td className="widgetLgIdTruk">#02</td>
          <td className="widgetLgTanggal">9 Maret 2023</td>
          <td className="widgetLgJam">13.10</td>
          <td className="widgetLgPlatNomor">AE 9853 ZA</td>
          <td className="widgetLgBerat">90 kg</td>
          <td className="widgetLgStatus">
            <Button type="Declined" />
          </td>
          <td className="widgetLgAction">
            <Button type="Edit" />
          </td>
          <td className="widgetLgAction">
            <Button type="Delete" />
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgNo">3</td>
          <td className="widgetLgIdTruk">#03</td>
          <td className="widgetLgTanggal">9 Maret 2023</td>
          <td className="widgetLgJam">13.20</td>
          <td className="widgetLgPlatNomor">AE 1972 CF</td>
          <td className="widgetLgBerat">70 kg</td>
          <td className="widgetLgStatus">
            <Button type="Declined" />
          </td>
          <td className="widgetLgAction">
            <Button type="Edit" />
          </td>
          <td className="widgetLgAction">
            <Button type="Delete" />
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgNo">4</td>
          <td className="widgetLgIdTruk">#04</td>
          <td className="widgetLgTanggal">9 Maret 2023</td>
          <td className="widgetLgJam">13.30</td>
          <td className="widgetLgPlatNomor">D 7431 GZ</td>
          <td className="widgetLgBerat">100 kg</td>
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
      </table>
    </div>
  );
}
