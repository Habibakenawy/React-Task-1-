import React from "react";
import styles from "./home.module.css";
import port_1 from "../assets/poert1.png";
import port_2 from "../assets/port2.png";
import port_3 from "../assets/port3.png";

function Portfolio() {
  const images = [port_1, port_2, port_3, port_1, port_2, port_3];

  return (
    <div className="container-fluid py-5" style={{ backgroundColor: "#1ABC9C" }}>
      <div className="text-center mb-5">
        <h1 className="fs-1 fw-bold text-white">PORTFOLIO COMPONENT</h1>
        <div className={styles.starDivider}>
          <div className={styles.line}></div>
          <div className={styles.starIcon}>
            <i className="fas fa-star"></i>
          </div>
          <div className={styles.line}></div>
        </div>
      </div>

      <div className="container">
        <div className="row g-4">
          {images.map((img, index) => (
            <div className="col-lg-4 col-md-6" key={index}>
              <div className={styles.portfolioItem}>
                <img src={img} alt={`Portfolio ${index + 1}`} className={styles.portfolioImage} />
                <div className={styles.overlay}>
                  <i className="fas fa-plus"></i>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
