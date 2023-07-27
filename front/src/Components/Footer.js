import React from 'react';
import './Navbar.css';
import Logo from './logo.jpg'
import { Link } from "react-router-dom";
import './Navbar.css'
import youtube from './icons/5279120_play_video_youtube_youtuble logo_icon.png'
import facebook from './icons/5279111_network_fb_social media_facebook_facebook logo_icon.png'
import instagram from './icons/5279112_camera_instagram_social media_instagram logo_icon.png'
import linkedin from './icons/5279114_linkedin_network_social network_linkedin logo_icon.png'
import twitter from './icons/5279124_tumblr_tumblr logo_icon.png'

const Footer = () => {
    const auth = localStorage.getItem('user');
    return (
        <>
            <footer className='footer'>
                {
                    auth ?
                <>
                <div className="left1">
                    <img src={Logo} style={{ width: "50px", height: "50px", borderRadius: "50%", border: "2px solid gold", }} />
                    <Link className="navbar-brand" to="/">Resturs..</Link>
                    <p style={{ margin: "20px" }}>Discover comfort and luxury at our exquisite hotel, where exceptional service meets unparalleled elegance.
                        Experience a truly memorable stay with us, where every detail is crafted to ensure your utmost satisfaction and relaxation.</p>
                </div>
                <div className="center1">
                    <p>In case of any Question, Reach Us Out</p>
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link btn btn-outline-dark" style={{marginBottom:"10px"}} to={"/Menu"}>Order</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link btn btn-outline-dark" style={{marginBottom:"10px"}} to={"/ContactUs"}>ContactUs</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link btn btn-outline-dark" to={"/JoinUs"}>JoinUs</Link>
                        </li>
                    </ul>
                </div>
                <div className="right1">
                    <p>
                        Contact Us: <br />
                        Restaurant Name: Delizioso Ristorante <br />
                        Address: 123 Main Street, Cityville, Stateville, 12345 <br />
                        Phone: (555) 123-4567 <br />
                        Email: info@deliziosoristorante.com <br />
                    </p>
                    <p>
                        Our Media Links-
                    </p>
                    <div className="image">
                        <img src={youtube} />
                        <img src={instagram} />
                        <img src={facebook}/>
                        <img src={linkedin}/>
                        <img src={twitter}/>
                    </div>
                </div>
                </>
                :
                <>
                <div className="left1" style={{border:"none"}}>
                    <img src={Logo} style={{ width: "50px", height: "50px", borderRadius: "50%", border: "2px solid gold", }} />
                    <Link className="navbar-brand" to="/">Resturs..</Link>
                    <p style={{ margin: "20px" }}>Discover comfort and luxury at our exquisite hotel, where exceptional service meets unparalleled elegance.
                        Experience a truly memorable stay with us, where every detail is crafted to ensure your utmost satisfaction and relaxation.</p>
                </div>
               
                <div className="right1" style={{border:"none"}}>
                    <p>
                        Contact Us: <br />
                        Restaurant Name: Delizioso Ristorante <br />
                        Address: 123 Main Street, Cityville, Stateville, 12345 <br />
                        Phone: (555) 123-4567 <br />
                        Email: info@deliziosoristorante.com <br />
                    </p>
                    <p>
                        Our Media Links-
                    </p>
                    <div className="image">
                        <img src={youtube} />
                        <img src={instagram} />
                        <img src={facebook}/>
                        <img src={linkedin}/>
                        <img src={twitter}/>
                    </div>
                </div>
                </>} 
            </footer>
            <div className="footer2">
                <center>Copyright &copy; Resturs | All Rights Reserved 2023</center>
            </div>
        </>
    )
}

export default Footer
