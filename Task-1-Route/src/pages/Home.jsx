import React from 'react'
import avatar from '../assets/avataaars.svg';
import styles from "./home.module.css";


export default function Home() {
  return (
    <div
  className="container-fluid d-flex justify-content-center align-items-center"
  style={{ backgroundColor: "#1ABC9C", height: "80vh" }}
>
  <div className="text-center">
    <img src={avatar} width="50%" />
    <h1 className="fs-1 fw-bold text-white">START FRAMEWORK</h1>
    <div className={styles.starDivider}>
      <div className={styles.line}></div>
      <div className={styles.starIcon}>
        <i className="fas fa-star"></i>
      </div>
      <div className={styles.line}></div>
    </div>
    <p className="text-white">Graphic Artist - Web Designer - Illustrator</p>
  </div>
</div>

  )
}

