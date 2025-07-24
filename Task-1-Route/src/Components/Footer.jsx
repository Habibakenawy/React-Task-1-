import React from 'react'
import styles from './footer.module.css';


export default function Footer() {
  return (
    <>
    <div className='container-fluid' style={{backgroundColor: "#2C3E50"}}>
        <div className='container' >
       <div className='row text-white'>
       <div className='col-lg-4 col-md-6 mb-3'>
<h3>Location</h3>
<p>2215 John Daniel Drive</p>
<p>Clark, MO 65243</p>
       </div>
 <div className='col-lg-4 col-md-6 mb-3 text-center'>
<h3>AROUND THE WEB</h3>
<div className="d-flex gap-3 justify-content-center social-icons">
  <a href="#" className={styles['social-icon']}>
    <i className="fab fa-facebook-f"></i>
  </a>
  <a href="#" className={styles['social-icon']}>
    <i className="fab fa-twitter"></i>
  </a>
  <a href="#" className={styles['social-icon']}>
    <i className="fab fa-linkedin-in"></i>
  </a>
  <a href="#" className={styles['social-icon']}>
    <i className="fas fa-globe"></i>
  </a>
</div>

       </div>
        <div className='col-lg-4 col-md-6 mb-3'>
<h3>ABOUT FREELANCER</h3>
<p>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
       </div>
       </div>
        </div>
        </div>
     <div className='text-center text-white p-5' style={{backgroundColor: "#1A252F"}}>
Copyright © Your Website 2021
        </div>
    </>
  )
}
