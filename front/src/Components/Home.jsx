import React from 'react'
import './style.css'
import About from './About'
import Services from './Services'
import dinnerImage from './dinner1.jpg'
import Catering from './catering.jpg'
import Room from './rooms.jpg'
import Waiter from './waiters.jpg'
import Event from './events.jpg'
import Takeout from './takeout.jpg'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Amber from './sponsers/1-removebg-preview.png'
import Burger from './sponsers/2-removebg-preview.png'
import Fast from './sponsers/3-removebg-preview.png'
import hat from './sponsers/4-removebg-preview (1).png'
import fork from './sponsers/4-removebg-preview.png'
import dish from './sponsers/5-removebg-preview.png'
import food from './sponsers/6-removebg-preview.png'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

const Home = () => {

  useEffect(() => {
    const reveal = () => {
      console.log("revealing the statement");
      var reveals = document.querySelectorAll(".revealed");

      for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var revealTop = reveals[i].getBoundingClientRect().top;
        var revealPoint = 150;

        if (revealTop < windowHeight - revealPoint) {
          reveals[i].classList.add("active");
        } else {
          reveals[i].classList.remove("active");
        }
      }
    };

    window.addEventListener('scroll', reveal);
    return () => {
      window.removeEventListener('scroll', reveal);
    };
  }, []);
  

  return (
    <div className="body">
      <div className="section1">
        <div className="underSection" style={{padding:"130px"}}>
          <h1 style={{marginTop:"100px", fontSize:"50px"}}>Savor the Flavors <br/>Delight Your Palate at Resturs</h1>
          <h5 style={{color:"white", width:"70%", fontSize:"13px", wordSpacing:"3px"}}> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias dolores nihil nesciunt architecto, reprehenderit animi adipisci, facilis praesentium soluta aut placeat repudiandae libero! Voluptatem, nemo.
          </h5>
          <Link to="/ContactUs"><button className='btn btn-outline-info'>Explore</button></Link>
        </div>
      </div>
    <About/><br /><br />
      <div className="services revealed"><br /><br />
        <center><h2 style={{ textDecoration: "underline" }}>Our Services</h2></center>
        <Carousel responsive={responsive}>
      
          <Services
            img={dinnerImage}
            services="Explosion of Flavours"
            description="Enhance your hospitality career with our comprehensive waiter training and placement programs. "
            path="/Menu"
          />
          <Services
            img={Catering}
            services="Luxurious Catering"
            description="Enhance your hospitality career with our comprehensive waiter training and placement programs. "
            path="/ContactUs"
          />
          <Services
            img={Room}
            services="Exquisite Rooms"
            description="Enhance your hospitality career with our comprehensive waiter training and placement programs. "
            path="/ContactUs"
          />
          <Services
            img={Waiter}
            services="Training and Placement"
            description="Enhance your hospitality career with our comprehensive waiter training and placement programs. "
            path="/JoinUs"
          />
          
          <Services
            img={Event}
            services="Events and Entertainment"
            description="Experience unforgettable events and captivating entertainment at our venue. From live music performances to themed parties, we offer a vibrant atmosphere to enhance your dining experience."
            path="/ContactUs"
          />

          <Services
            img={Takeout}
            services="Takeout and Delivery"
            description="Enjoy the convenience of our takeout and delivery services. Savor our delicious menu from the comfort of your own home or office, delivered right to your doorstep."
            path="/Menu"
          />
           </Carousel>
        </div>

    <div className="section3 revealed"  style={{padding:"20px", margin:"12px"}}>
    <center><h2  style={{ textDecoration: "underline", marginBottom:"20px" }}>Our Partners</h2></center>
    <Carousel responsive={responsive}>
          <div><img src={Amber} style={{width:"400px", height:"200px", border:"5px solid rgba(26, 80, 179, 0.437)", boxShadow: "rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px"}} /></div>
          <div><img src={Burger} style={{width:"400px", height:"200px", border:"5px solid rgba(26, 80, 179, 0.437)", boxShadow: "rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px"}} /></div>
          <div><img src={Fast} style={{width:"400px", height:"200px", border:"5px solid rgba(26, 80, 179, 0.437)", boxShadow: "rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px"}} /></div>
          <div><img src={hat} style={{width:"400px", height:"200px", border:"5px solid rgba(26, 80, 179, 0.437)", boxShadow: "rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px"}} /></div>
          <div><img src={dish} style={{width:"400px", height:"200px", border:"5px solid rgba(26, 80, 179, 0.437)", boxShadow: "rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px"}} /></div>
          <div><img src={food} style={{width:"400px", height:"200px", border:"5px solid rgba(26, 80, 179, 0.437)", boxShadow: "rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px"}} /></div>
          <div><img src={fork} style={{width:"400px", height:"200px", border:"5px solid rgba(26, 80, 179, 0.437)", boxShadow: "rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px"}} /></div>
        </Carousel>
    </div>
     
    </div>
  )
}

export default Home;
