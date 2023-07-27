import React, { useState } from 'react';
import './style.css';
const ContactUs = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [option, setOption] = useState('');
  const [submitMessage, setSubmitMessage] = useState('');

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePhoneChange = (event) => {
    setPhone(event.target.value);
  };

  const handleAddressChange = (event) => {
    setAddress(event.target.value);
  };

  const handleOptionChange = (event) => {
    setOption(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.warn(name, email, phone, address, option);
    try {
      let result = await fetch("http://localhost:5000/api/form", {  // Update the URL here
        method: "post",
        body: JSON.stringify({ name, email, phone, address, option }),
        headers: {
          "Content-type": "application/json",
        },
      });
      const response = await result.text();
      console.log(response);
      if (!response.ok) {
        setSubmitMessage('We have received your Query and will contact you soon');
        console.warn("data saved");
      } else {
        setSubmitMessage('Error saving item');
      }

    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="body1"><br /><br />
      <div className="contactJoin" style={{ paddingTop: "10px" }}><br />
        <div className="special" style={{ backgroundColor: "black", color: "white", textAlign: "center", fontSize: "30px" }}>
          {submitMessage && <p>{submitMessage}</p>}
        </div>
       <div className="central" style={{display:'flex', justifyContent:"center", marginRight:"10vh", paddingTop:"5vh"}}>
     
        <form className="form" style={{width:"45%"}}>
        <center><h2 style={{ textDecoration: "underline", marginBottom:"5vh", textTransform: "uppercase"}}>Contact Us</h2></center>
          <h6 align='center' className='mb-4'>To use our Services, fill the form below and our team will contact you soon for further process.</h6>
          <div className="mb-3 d-flex flex-row">
            <label for="exampleInputName" className="form-label" style={{ margin: "7px 5px 0px 0px" }}>Name:</label>
            <input type="text" value={name} onChange={handleNameChange} className="form-control" id="exampleInputName" aria-describedby="nameHelp" placeholder='Enter Your Name' required />
          </div>
          <div className="mb-3 d-flex flex-row ">
            <label for="exampleInputEmail1" className="form-label" style={{ margin: "7px 12px 0px 0px" }}>Email:</label>
            <input type="email" value={email} onChange={handleEmailChange} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Enter Your Email Address' required />
          </div>
          <div className="mb-3 d-flex flex-row">
            <label for="phone" className="form-label" style={{ margin: "7px 5px 0px 0px" }}>Phone:</label>
            <input type="tel" value={phone} onChange={handlePhoneChange} className="form-control" id="phone" aria-describedby="phoneHelp" placeholder='Enter Your Phone Number' required />
          </div>
          <div className="mb-3 d-flex flex-row">
            <label for="Address" className="form-label" style={{ margin: "7px 5px 0px 0px" }}>Address:</label>
            <textarea value={address} onChange={handleAddressChange} className="form-control" id="Address" aria-describedby="adddressHelp" placeholder='Enter Your Address' required />
          </div>
          <div className="mb-3 d-flex flex-row" >
            <label for="gender" className="form-label" style={{ margin: "7px 5px 0px 0px" }}>Services:</label>
            <select value={option} onChange={handleOptionChange} class="form-select" aria-label="Default select example">
              <option selected>Select the Services</option>
              <option value="1">Table Booking</option>
              <option value="2">Catering Services</option>
              <option value="3">Events Organising</option>
              <option value="4">Room Booking Request</option>
            </select>
          </div>
          <center>  <button type="submit" onClick={handleSubmit} className="btn btn-outline-info">Submit</button></center>
        </form>

        <div className="map" style={{width:"45%"}}>
        <iframe
            class="map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d235013.74842583184!2d72.4149266142662!3d23.02047410336025!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e848aba5bd449%3A0x4fcedd11614f6516!2sAhmedabad%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1685420340990!5m2!1sen!2sin"
            allowfullscreen=""
            loading="lazy"
            style={{width:"100%", height:"100%", boxShadow: "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px"}}
          ></iframe>
        </div>
       </div>
      </div>
    </div>
  )
}

export default ContactUs;
