import "./widgetSm.css";
import React, { useEffect, useRef } from "react";

export default function WidgetSm() {
  let videoRef = useRef(null)
  let photoRef = useRef(null)

  const getUserCamera = () => {
    navigator.mediaDevices.getUserMedia({
      video:true
    })
    .then((stream) => {
      let video = videoRef.current
      video.srcObject = stream
      video.play()
    })
    .catch((error) => {
      console.error(error)
    })
  }

  const takePicture = () => {
    let width = 600
    let height = width / (16 / 9)
    let photo = photoRef.current
    let video = videoRef.current

    photo.width = width
    photo.height = height

    let ctx = photo.getContext('2d')
    ctx.drawImage(video, 0, 0, photo.width, photo.height)
  }

  const clearImage = () => {
    let photo =photoRef.current
    let ctx = photo.getContext('2d')
    ctx.clearRect(0, 0, photo.width, photo.height)
  }
  
  useEffect(() => {
    getUserCamera()
  },[videoRef])
  
  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">Camera</span>
      <ul className="widgetSmList">
      <video ref={videoRef}/>
      </ul>
      <br />
      <button onClick={takePicture} className="btn btn-danger container">Take Photo</button>
      <br />
      <canvas ref={photoRef}></canvas>
      <br />
      <button className="btn btn-danger container" onClick={clearImage} >Clear Poto</button>
    </div>
  );
}
