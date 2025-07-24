import React from 'react'
import styles from "./home.module.css";
export default function About() {
  return (
  <div
  className="container-fluid d-flex justify-content-center align-items-center"
  style={{ backgroundColor: "#1ABC9C", height: "80vh" }}
>
  <div className="text-center">
    <h1 className="fs-1 fw-bold text-white">ABOUT COMPONENT</h1>
    <div className={styles.starDivider}>
      <div className={styles.line}></div>
      <div className={styles.starIcon}>
        <i className="fas fa-star"></i>
      </div>
      <div className={styles.line}></div>
    </div>
    <div className='row w-50 m-auto'>
    <div className="text-white col">Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</div>
    <div className="text-white col">Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</div>   
    </div>
  </div>
</div>
  )
}
