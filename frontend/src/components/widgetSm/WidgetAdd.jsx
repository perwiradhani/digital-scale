import "./widgetSm.css";
import React, { useRef, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Tesseract from "tesseract.js";
import Swal from "sweetalert2";
import moment from "moment";
import axios from "axios";

const CameraOCR = () => {
    const videoRef = useRef(null);
    const canvasRef = useRef(null);
    const [ocrResult, setOCRResult] = useState("");
    const [capturedImage, setCapturedImage] = useState(null);
    const [userInput, setUser] = useState({
        plat_nomor: '',
        jenis_truck: '',
        beban_kosong: '',
        beban_max: '',
      });
    const [options, setOptions] = useState([]);

    // useEffect(() => {
    //     axios.get("http://localhost:8000/api/options")
    //         .then((res) => {
    //             setOptions(res.data.options);
    //         }
    //     );
    // }, []);


    const handleInput = (e) => {
        e.persist();
        setUser({
          ...userInput,
          [e.target.name]: e.target.value,
        });
      };

    useEffect(() => {
        startCamera();
        return () => {
            stopCamera();
        };
    }, []);

    // handle

    const startCamera = async () => {
        try {
            if (videoRef.current) {
                const stream = await navigator.mediaDevices.getUserMedia({
                    video: true,
                });
                videoRef.current.srcObject = stream;
            }
        } catch (error) {
            console.error("Error accessing camera:", error);
        }
    };

    const stopCamera = () => {
        const stream = videoRef.current?.srcObject;
        const tracks = stream?.getTracks();

        tracks?.forEach((track) => track.stop());
    };

    const captureImage = () => {
        const video = videoRef.current;
        const canvas = canvasRef.current;
        const context = canvas.getContext("2d");

        context.drawImage(video, 0, 0, canvas.width, canvas.height);
        const imageData = canvas.toDataURL();
        setCapturedImage(imageData);
        performOCR(imageData);
    };

    const deleteImage = () => {
        setCapturedImage(null);
        setOCRResult("");
    };

    // const performOCR = async (imageData) => {
    //     const {
    //         data: { text },
    //     } = await Tesseract.recognize(imageData, "eng");
    //     setOCRResult(text);
    // };

    const performOCR = async (imageData) => {
        const {
            data: { text },
        } = await Tesseract.recognize(imageData, "eng", {
            tessedit_char_whitelist: "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890", // Specify the characters allowed in the license plate
            lang: "ind+eng", // Add the Indonesian language for better accuracy
            preprocessors: ["eng2", "ind"], // Apply language-specific preprocessing
            preserve_interword_spaces: 1, // Preserve interword spaces for license plates
            whitelist: "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ", // Specify characters to be whitelisted for OCR
        });
        
        // Filter out any non-alphanumeric characters
        const alphanumericText = text.replace(/[^A-Z0-9]/g, "");
        
        setOCRResult(alphanumericText);
    };

 

    const currentDate = moment().format("YYYY/MM/DD");
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const timerID = setInterval(() => tick(), 1000);

        return function cleanup() {
            clearInterval(timerID);
        };
    });

    function tick() {
        setTime(new Date());
    }

    const handleCellButtonClick = (e) => {
        e.preventDefault();

        const data = {
            plat_nomor: userInput.plat_nomor,
            jenis_truck: userInput.jenis_truck,
            beban_kosong: userInput.beban_kosong,
            // beban_max: userInput.beban_max,
          };
      
          axios.post("http://localhost:8000/api/truck", data).then((response) => {
            // document.getElementById("CATEGORY_FORM").reset();
            alert(response.data.message);
            window.location.replace("/trucks");
            console.log(response);
          });
    };

    return (
        <div className="widgetSm">
            <span className="widgetSmTitle">Camera View</span>
            <ul className="widgetSmList">
                <video
                    ref={videoRef}
                    autoPlay={true}
                    style={{ width: "400px", height: "300px" }}
                />
            </ul>
            <br />
            <canvas
                className="canvas"
                ref={canvasRef}
                style={{ display: "none" }}
            />
            <div className="buttonContainer">
            <button className="btn" onClick={captureImage}>
                Start
            </button>
            <button className="btn2" onClick={deleteImage}>
                Delete
            </button>
            </div>
            <div className="col-1">
                <div className="inputManualTitleContainer">
                    <h2 className="inputManualTitle">Input Data</h2>
                </div>
                <form onSubmit={handleCellButtonClick} className="inputManualUpdateForm">
                    <div className="inputManualUpdateLeft">
                        {/* <div className="inputManualUpdateItem">
                            <label>ID Truk</label>
                            <input className="inputManualUpdateInput" placeholder="id" type="text" name="id" id="" />
                        </div> */}
                        <div className="inputManualUpdateItem">
                            <label>Plat Nomor</label>
                            <input className="inputManualUpdateInput" value={ocrResult} type="text" name="no" id="" disabled />
                            {/* {ocrResult} */}
                        </div>
                        <div className="inputManualUpdateItem">
                            <label>Plat Nomor</label>
                            <input className="inputManualUpdateInput" type="text" name="plat_nomor" id="" onChange={handleInput} value={userInput.plat_nomor} />
                        </div>
                        <div className="inputManualUpdateItem">
                            <label>Jenis Truckr</label>
                            <input className="inputManualUpdateInput" type="text" name="jenis_truck" id="" onChange={handleInput} value={userInput.jenis_truck} />
                        </div>
                        <div className="inputManualUpdateItem">
                            <label>Beban Kosong</label>
                            <input className="inputManualUpdateInput" placeholder="Berat" type="number" name="beban_kosong" id="" onChange={handleInput} value={userInput.beban_kosong} />
                        </div>
                        <div className="inputManualUpdateItem">
                            <label>Tanggal</label>
                            <>{currentDate}</>
                        </div>
                        <div className="inputManualUpdateItem">
                            <label>Jam</label>
                            <>{time.toLocaleTimeString()}</>
                        </div>
                    </div>
                    <div className="inputManualUpdateRight">
                        {/* <Link to="/trucks"> */}
                            <button
                                className="inputManualUpdateButton"
                                // onClick={() => handleCellButtonClick()}
                            >
                                Simpan
                            </button>
                        {/* </Link> */}
                    </div>
                </form>
            </div>
        </div>
    );
};

export default CameraOCR;
