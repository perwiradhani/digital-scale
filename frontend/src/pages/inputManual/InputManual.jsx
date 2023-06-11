import "./inputManual.css";
import { Link } from "react-router-dom";
import Swal from 'sweetalert2';
import Topbar from "../../components/topbar/Topbar";

const InputManual = () => {

  const handleCellButtonClick = () => {
    Swal.fire({
      position: 'top-bottom',
      icon: 'success',
      title: 'Data has been saved',
      showConfirmButton: false,
      timer: 1500
    })
  }

  return (
    <div className="inputManual">
      <Topbar />
      <div className="inputManualTitleContainer">
        <h2 className="inputManualTitle">Input Manual</h2>
      </div>
      <div className="inputManualContainer">
        <div className="inputManualUpdate">
          <form className="inputManualUpdateForm">
            <div className="inputManualUpdateLeft">
              <div className="inputManualUpdateItem">
                <label>ID Truk</label>
                <>
                  1
                  </>
              </div>
              <div className="inputManualUpdateItem">
                <label>Tanggal</label>
                <input
                  type="date"
                  className="inputManualUpdateInput"
                />
              </div>
              <div className="inputManualUpdateItem">
                <label>Jam</label>
                <input
                  type="time"
                  className="inputManualUpdateInput"
                />
              </div>
              <div className="inputManualUpdateItem">
                <label>Plat Nomor</label>
                <input
                  type="text"
                  placeholder="Masukkan Plat Nomor"
                  className="inputManualUpdateInput"
                />
              </div>
              <div className="inputManualUpdateItem">
                <label>Berat</label>
                <input
                  type="text"
                  placeholder="Masukkan Berat"
                  className="inputManualUpdateInput"
                />
              </div>
              <div className="inputManualUpdateItem">
                <label>Gambar</label>
                <input
                  type="file"
                  className="inputManualUpdateInput"
                />
              </div>
            </div>
            <div className="inputManualUpdateRight">
              <Link to ="/trucks">
              <button className="inputManualUpdateButton" onClick={() => handleCellButtonClick()}>Simpan</button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default InputManual;
