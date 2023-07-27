import React from 'react'
import './style.css'
import food from './delicious-food-removebg-preview-removebg-preview.png'
import cheese from './chorizo-mozarella-gnocchi-bake-cropped-9ab73a3-removebg-preview.png'
import { useEffect } from 'react'

const About = () => {

    useEffect(() => {
        const reveal = () => {
          const containers = document.querySelectorAll('.revealed1');
    
          containers.forEach((container, index) => {
            const revealTop = container.getBoundingClientRect().top;
            const revealPoint = window.innerHeight - 150;
    
            if (revealTop < revealPoint) {
              setTimeout(() => {
                container.classList.add('active');
              }, index * 200);
            } else {
              container.classList.remove('active');
            }
          });
        };
    
        window.addEventListener('scroll', reveal);
        return () => {
          window.removeEventListener('scroll', reveal);
        };
      }, []);

      
    return (
        <div>
            <div className="mainContainer">
                <div className="imageContent">
                </div>
                <div className="left">
                    <center><h2 style={{ textDecoration: "underline", marginBottom: "20px" }}>About Us</h2></center>
                    <p className="para" id='para'>
                        <div className="one revealed1" style={{
                            color: "whitesmoke",
                            padding: "10px", boxShadow: "rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px"
                        }}> Welcome to Resturs, your ultimate destination for luxury and convenience. We take pride in offering an exceptional experience to our guests, combining top-notch hospitality with a range of services to cater to your every need. </div>
                        <div className="two revealed1" style={{
                            color: "whitesmoke",
                            padding: "10px", marginTop: "10px", boxShadow: "rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px"
                        }}> At Resturs, we understand the importance of delicious food, and that's why we offer a seamless online food ordering service. Whether you're craving a hearty breakfast, a quick snack, or a sumptuous dinner, our diverse menu is sure to satisfy your taste buds.</div>
                        <div className="three revealed1" style={{
                            color: "whitesmoke",
                             padding: "10px", marginTop: "10px", boxShadow: "rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px"
                        }}>
                            Enjoy the convenience of ordering from the comfort of your room or even before your arrival.
                            For those who prefer a more traditional dining experience, our elegant and welcoming restaurant provides a charming ambiance where you can indulge in a wide array of culinary delights.
                            Our talented chefs prepare exquisite dishes using the finest ingredients, guaranteeing a memorable dining experience.</div>
                    </p>
                    <img src={cheese} />
                </div>
                <div className="right">
                    <img src={food} alt="" />
                    <p id='para2'>
                        <div className="three revealed1" style={{
                            color: "whitesmoke",
                            padding: "10px", marginTop: "10px", boxShadow: "rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px"
                        }}>We offer student hiring programs, providing a platform for aspiring professionals to learn and grow in a dynamic environment.</div>
                        <div className="four revealed1" style={{
                            color: "whitesmoke",
                            padding: "10px", marginTop: "10px", boxShadow: "rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px"
                        }}>
                            When it comes to entertainment, Resturs goes above and beyond. We curate a range of exciting events, from live music performances and cultural shows to themed parties, ensuring there's always something captivating happening within our walls. Sit back, relax, and let us entertain you.</div>
                        <div className="five revealed1" style={{
                            color: "whitesmoke",
                            padding: "10px", marginTop: "10px", boxShadow: "rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px"
                        }}> We invite you to experience the epitome of luxury, convenience, and exceptional service at Resturs. Whether you're a business traveler seeking a productive stay or a leisure guest in search of relaxation and entertainment, we have everything you need to make your stay truly unforgettable.
                        </div>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default About
