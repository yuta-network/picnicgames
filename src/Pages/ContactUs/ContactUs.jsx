import React, { useState } from "react";
import "./ContactUs.css";

function ContactUs() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email1: "",
    countryCode: "",
    phoneNumber: "",
    description: "",
  });

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = "*First Name is required";
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = "*Last Name is required";
    }

    if (!formData.email1.trim()) {
      newErrors.email1 = "*Email Address 1 is required";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      console.log("Form is valid. Submitting data:", formData);
    } else {
      console.log("Form is invalid. Please check the errors.");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  return (
    <div>
      <div className="contact-us-section container-fluid" id="contact-us">
        <div className="container">
          <div className="row">
            <div className="col-12 contact-us-line-1">
              <div>Come</div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-5 contact-us--img-infor">
              <img
                src={
                  process.env.PUBLIC_URL + "/images/homepage/contactus-img.png"
                }
                alt=""
              />
              <div className="contact-us--information">
                <span className="contact-us--information-text-h1">
                  HCMC, Vietnam
                </span>
                <span className="contact-us--information-text">
                  FPT Academy International 62 Van Phuc, Thu Duc City
                </span>
                <span className="contact-us--information-text-title">
                  Phone:
                </span>
                <span className="contact-us--information-text-highlight">
                  +84 928 282 888
                </span>
                <span className="contact-us--information-text-title">
                  Email:
                </span>
                <span className="contact-us--information-text-highlight">
                  picnicgames@fptaptech.com.vn
                </span>
              </div>
            </div>
            <div className="col-md-7">
              <div className="row">
                <div className="col-12 contact-us--subtext">and visit us</div>
              </div>
              <div className="row">
                <div className="col-12 contact-us--description">
                  Tell us a little bit about your family to get started. Come
                  learn about the PicnicGames experience!
                </div>
              </div>
              <form onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-md-6">
                    <div className="contact-us--medium_size-input">
                      <label>First Name</label>
                      <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                      />
                      {errors.firstName && (
                        <span className="error-message">
                          {errors.firstName}
                        </span>
                      )}
                    </div>
                    <div className="contact-us--medium_size-input">
                      <label htmlFor="">Email Address 1</label>
                      <input
                        type="text"
                        name="email1"
                        value={formData.email1}
                        onChange={handleChange}
                      />
                      {errors.email1 && (
                        <span className="error-message">{errors.email1}</span>
                      )}
                    </div>
                    <div className="contact-us--medium_size-input">
                      <label htmlFor="">Country Code</label>
                      <input type="text" placeholder="" />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="contact-us--medium_size-input">
                      <label htmlFor="">Last Name</label>
                      <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                      />
                      {errors.lastName && (
                        <span className="error-message">{errors.lastName}</span>
                      )}
                    </div>
                    <div className="contact-us--medium_size-input">
                      <label htmlFor="">Email Address 2</label>
                      <input type="text" placeholder="" />
                    </div>
                    <div className="contact-us--medium_size-input">
                      <label htmlFor="">Phone Number</label>
                      <input type="text" placeholder="" />
                    </div>
                  </div>
                </div>
                <div className="contact-us--textarea">
                  <textarea
                    name=""
                    id=""
                    cols="30"
                    rows="10"
                    placeholder="Please describe more clearly about the game or picnic so we can have more information and advice for you!"
                  ></textarea>
                </div>
                <div className="row">
                  <div className="col-12">
                    <div className="contact-us--submit-btn">
                      <button type="submit">Submit my information</button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.547141078519!2d106.7081624258916!3d10.84592665790622!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317529649850badb%3A0x617177104127c8ea!2sFPT%20AfterSchool%20-%20CS%20V%E1%BA%A1n%20Ph%C3%BAc!5e0!3m2!1svi!2s!4v1710229780849!5m2!1svi!2s"
        width="100%"
        height="450"
        style={{ border: 0 }}
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
}

export default ContactUs;
