import React from "react";
import "../../assets/css/bootstrap.css";
import "./Homepage.css";

function Homepage() {
  return (
    <section className="container">
      <div className="banner">
        <div className="banner--topspace"></div>
        <div className="banner--content">
          <img
            src={process.env.PUBLIC_URL + "/images/homepage/content-bg-bn.png"}
            alt=""
            className="banner--content-bg"
          />
          <div className="banner-content-msg-action">
            <div className="banner-content-bird-img">
              <img
                src={
                  process.env.PUBLIC_URL +
                  "/images/homepage/banner-content-bird.png"
                }
                alt=""
              />
            </div>
            <div className="banner-content-msg">
              <div className="msg-line-1">A lifetime of</div>
              <div className="msg-line-2">family fun</div>
              <div className="msg-line-3">starts here</div>
            </div>
            <div className="banner-content-action">
              <div className="img-btn-layer">
                <img
                  src={
                    process.env.PUBLIC_URL +
                    "/images/homepage/banner-img-btn.png"
                  }
                  alt=""
                />
              </div>
              <div className="learnwhy-banner-btn">
                <button>Learn Why</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Homepage;
