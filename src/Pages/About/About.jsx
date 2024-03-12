import React from "react";
import "./About.css";

function About() {
  return (
    <div>
      <div className="section--banner">
        <div className="container">
          <div className="row">
            <div className="col-md-8 page-banner">
              <div className="section--banner-title">About</div>
              <div className="section--banner-description">
                We help children engage their bodies and minds through fun and
                educational activities.
              </div>
            </div>
            <div className="col-md-4">
              <div className="section--banner-foximg">
                <img
                  src={process.env.PUBLIC_URL + "/images/about/fox.png"}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container section--ourhistory">
        <div className="row">
          <div className="col-md-6">
            <video
              src={process.env.PUBLIC_URL + "/images/about/video.mp4"}
              autoPlay
              loop
              muted
            ></video>
          </div>
          <div className="col-md-6 section--ourhistory-right-col">
            <div className="section--ourhistory-title">Our history</div>
            <div className="section-ourhistory-description">
              Established by Chick-fil-A Founder S. Truett Cathy in 1985,
              WinShape Camps launched life-changing summers with our very first
              overnight camp. That early experience set the stage for how we do
              camps today—creating fun and faithful places for young people to
              grow. What we do makes a huge impact, serving 40,000 campers,
              their families and 800 summer staff each year. On top of our
              attention to hospitality and service is a commitment to excellence
              – all qualities we admire and share in Chick-fil-A.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
