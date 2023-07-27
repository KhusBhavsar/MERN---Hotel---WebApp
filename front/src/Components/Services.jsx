import React from 'react'
import './style.css'
import { Link } from 'react-router-dom'

const Services = (props) => {
  return (
    <>
      <div className="card text-center marginCard">
        <img src={props.img} alt='Image' style={{ width: "398px", height: "300px", boxShadow: "rgba(0, 0, 0, 0.1) 0px 1px 2px 0px"}} className="Img" />
        <div className="card-body box-content">
          <h5 className="card-title" style={{ fontFamily: "Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif", fontWeight: "500" }}>{props.services}</h5>
          <p className="card-text" style={{ fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif" }}>{props.description}</p>
          <Link className="nav-link" to={props.path}><button class="btn btn-outline-info" style={{ marginBottom: "10px", boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px", width:"40%" }}>Click Here</button></Link>
        </div>
      </div>
    </>
  )
}

export default Services;
