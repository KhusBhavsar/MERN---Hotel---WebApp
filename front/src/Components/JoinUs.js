import React from 'react'
import './style.css'
import { useState } from 'react';

const JoinUs = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [gender, setGender] = useState('');
  const [age, setAge] = useState('');
  const [experience, setExperience] = useState('');
  const [resume, setResume] = useState('');

  const [fileData, setFileData] = useState();
  const [submitMessage, setSubmitMessage] = useState('');
  const fileChangeHandler = (e) => {
    setFileData(e.target.files[0]);
  };


  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePhoneChange = (event) => {
    setPhone(event.target.value);
  };

  const handleGenderChange = (event) => {
    setGender(event.target.value);
  };


  const handleAgeChange = (event) => {
    setAge(event.target.value);
  };

  const handleExperienceChange = (event) => {
    setExperience(event.target.value);
  };

  const handleResumeChange = (event) => {
    setResume(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.warn(name, email, phone, gender, age, experience, resume);
    try {
      let result = await fetch("http://localhost:5000/api/form1", {
        method: "post",
        body: JSON.stringify({ name, email, phone, gender, age, experience, resume }),
        headers: {
          "Content-type": "application/json",
        },
      });
      const response = await result.text();
      console.log(response);
      if (!response.ok) {
        setSubmitMessage('We have received your Resume and will let you know if shortlisted');
        console.warn("data saved");
      } else {
        setSubmitMessage('Error saving item');
      }

    } catch (error) {
      console.error(error);
    }
  };




  const onSubmitHandler = (e) => {
    e.preventDefault();
    const data = new FormData();

    data.append("pdf", fileData);

    fetch("http://localhost:5000/multiple", {
      method: "POST",
      body: data,
    })
      .then((result) => {
        setSubmitMessage('We have received your Query and will contact you soon');
        console.log("File Sent Successful");
      })
      .catch((err) => {
        console.log(err.message);
      });

  };

  return (
    <div className="body1"> <br /><br />
      <div className="contactJoin" style={{ paddingTop: "10px" }}> <br />
        {submitMessage && <p>{submitMessage}</p>}
        <form className="form" onSubmit={(e) => {
          onSubmitHandler(e);
          handleSubmit(e);
        }}>
          <center><h2 style={{ textDecoration: "underline", marginBottom: "5vh", textTransform: "uppercase" }}>We are Hiring!!</h2></center>
          <h6 align='center' className='mb-4'>Fill the form below and our team will contact you soon for further process. Resume is mandatory and is accepted in pdf format only.</h6>
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
          <div className="mb-3 d-flex flex-row" >
            <label for="gender" className="form-label" style={{ margin: "7px 5px 0px 0px" }}>Gender:</label>
            <select value={gender} onChange={handleGenderChange} class="form-select" aria-label="Default select example">
              <option selected>Enter Your Gender</option>
              <option value="1">Male</option>
              <option value="2">Female</option>
            </select>
            <label for="age" className="form-label" style={{ margin: "7px 5px 0px 5px" }} >Age:</label>
            <input type="number" value={age} onChange={handleAgeChange} className="form-control" id="age" aria-describedby="ageHelp" placeholder='Enter Your Age' required />
          </div>


          <div className="mb-3 d-flex flex-row">
            <label for="Experience" className="form-label" style={{ margin: "7px 5px 0px 0px" }}>Do you have any prior Work Experience?</label>
            <div className="radio" style={{ margin: "7px" }}>
              <label for="option1" style={{ marginRight: "5px" }}>
                <input type="radio" value={experience} onChange={handleExperienceChange} name="options" id="option1" /> Yes
              </label>
              <label for="option2">
                <input type="radio" value={experience} onChange={handleExperienceChange} name="options" id="option2" /> No
              </label>
            </div>
          </div>
          <label>Upload Resume PDF:</label>
          <input type="file" value={resume} onChange={(e) => {
            handleResumeChange(e);
            fileChangeHandler(e);
          }} name="file" className="btn btn-outline-info" required />
          <p>Maximum Size Upto 100KB</p>
          <center>  <button type="submit" className="btn btn-outline-info">Submit</button></center>
        </form>
      </div>

    </div>
  )
}

export default JoinUs;
