import "./widgetSm.css";
import React, { useRef, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Tesseract from "tesseract.js";
import Swal from "sweetalert2";
import moment from "moment";

const CameraOCR = () => {
    const videoRef = useRef(null);
    const canvasRef = useRef(null);
    const [ocrResult, setOCRResult] = useState("");
    const [capturedImage, setCapturedImage] = useState(null);

    useEffect(() => {
        startCamera();

        return () => {
            stopCamera();
        };
    }, []);

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

    const handleCellButtonClick = () => {
        Swal.fire({
            position: "top-bottom",
            icon: "success",
            title: "Data has been saved",
            showConfirmButton: false,
            timer: 1500,
        });
    };

    const currentDate = moment().format("DD/MM/YYYY");
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
                <form className="inputManualUpdateForm">
                    <div className="inputManualUpdateLeft">
                        <div className="inputManualUpdateItem">
                            <label>ID Truk</label>
                            <>1</>
                        </div>
                        <div className="inputManualUpdateItem">
                            <label>Plat Nomor</label>
                            <>{ocrResult}</>
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
                            <>90 Kg</>
                        </div>
                        <div className="inputManualUpdateItem">
                            <label>Gambar</label>
                            {capturedImage && (
                                <img src={capturedImage} alt="Captured" />
                            )}
                        </div>
                    </div>
                    <div className="inputManualUpdateRight">
                        <Link to="/trucks">
                            <button
                                className="inputManualUpdateButton"
                                onClick={() => handleCellButtonClick()}
                            >
                                Simpan
                            </button>
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default CameraOCR;
