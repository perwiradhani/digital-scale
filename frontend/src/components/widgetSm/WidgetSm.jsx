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
    const [input, setInput] = useState({
        berat : '',
        plat : '',

    });

    const handleInput = (e) => {
        e.persist();
        setInput({
            ...input,
            [e.target.name]: e.target.value,
        });
        setOCRResult({
            ...ocrResult,
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
            plat_nomor: input.plat,
            berat: input.berat,
            // tanggal: currentDate,
            // jam: time.toLocaleTimeString(),
            
            // gambar: capturedImage,
        };

        axios.post("http://localhost:8000/api/muatan/scale", data).then((res) => {
            alert(res.data.message);
            window.location.href = "/muatan";
        // Swal.fire({
        //     position: "top-bottom",
        //     icon: "success",
        //     title: res.data.message,
        //     showConfirmButton: false,
        //     timer: 1500,
        // });
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
                            <input className="inputManualUpdateInput" value={input.plat} type="text" name="plat" id="" onChange={handleInput} />
                            {/* <>{ocrResult}</> */}
                        </div>
                        <div className="inputManualUpdateItem">
                            <label>Tanggal</label>
                            <>{currentDate}</>
                        </div>
                        <div className="inputManualUpdateItem">
                            <label>Jam</label>
                            <>{time.toLocaleTimeString()}</>
                        </div>
                        <div className="inputManualUpdateItem">
                            <label>Berat</label>
                            <input className="inputManualUpdateInput" placeholder="Berat" type="number" name="berat" id="" onChange={handleInput} value={input.berat} />
                            {/* <>90 Kg</> */}
                        </div>
                        <div className="inputManualUpdateItem">
                            <label>Gambar</label>
                            {capturedImage && (
                                <img src={capturedImage} alt="Captured" />
                            )}
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
