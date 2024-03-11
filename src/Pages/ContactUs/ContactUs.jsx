import React from "react";

function ContactUs() {
  return (
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
              <span className="contact-us--information-text-title">Phone:</span>
              <span className="contact-us--information-text-highlight">
                +84 928 282 888
              </span>
              <span className="contact-us--information-text-title">Email:</span>
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
            <form action="">
              <div className="row">
                <div className="col-md-6">
                  <div className="contact-us--medium_size-input">
                    <input type="text" placeholder="First Name" />
                  </div>
                  <div className="contact-us--medium_size-input">
                    <input type="Email" placeholder="Email Address" />
                  </div>
                  <div className="contact-us--medium_size-input">
                    <input type="text" placeholder="Zip Code" />
                  </div>
                  <div className="contact-us--medium_size-input">
                    <input type="text" placeholder="Last Name" />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="contact-us--medium_size-input">
                    <input type="text" placeholder="Last Name" />
                  </div>
                  <div className="contact-us--medium_size-input">
                    <input type="text" placeholder="Last Name" />
                  </div>
                  <div className="contact-us--medium_size-input">
                    <input type="text" placeholder="Last Name" />
                  </div>
                  <div className="contact-us--medium_size-input">
                    <input type="text" placeholder="Last Name" />
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
                    <button>Submit my information</button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
