import "./widgetSm.css";
import React, { useRef, useEffect, useState } from 'react';
import Tesseract from 'tesseract.js';

const CameraOCR = () => {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const [ocrResult, setOCRResult] = useState('');

  useEffect(() => {
    startCamera();

    return () => {
      stopCamera();
    };
  }, []);

  const startCamera = async () => {
    try {
      if (videoRef.current) {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });
        videoRef.current.srcObject = stream;
      }
    } catch (error) {
      console.error('Error accessing camera:', error);
    }
  };

  const stopCamera = () => {
    const stream = videoRef.current?.srcObject;
    const tracks = stream?.getTracks();
    
    tracks?.forEach(track => track.stop());
  };

  const captureImage = () => {
    const video = videoRef.current;
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');

    context.drawImage(video, 0, 0, canvas.width, canvas.height);
    performOCR(canvas.toDataURL());
  };

  const performOCR = async (imageData) => {
    const { data: { text } } = await Tesseract.recognize(imageData, 'eng');
    setOCRResult(text);
  };
  
  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">Camera</span>
      <ul className="widgetSmList">
      <video ref={videoRef} autoPlay={true} />
      </ul>
      <br />
      <canvas ref={canvasRef} style={{ display: 'none' }} />
      <button className="btn btn-danger container" onClick={captureImage}>Capture and OCR</button>
      <br />
      <div>OCR Result: {ocrResult}</div>
    </div>
  );
}
export default CameraOCR;
