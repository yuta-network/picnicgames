import React from "react";
import "../../assets/css/bootstrap.css";
import "./Homepage.css";
import { NavLink } from "react-router-dom";

function Homepage() {
  return (
    <section className="container-fluid">
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
              <div className="banner-msg-line-1">A lifetime of</div>
              <div className="banner-msg-line-2">family fun</div>
              <div className="banner-msg-line-3">starts here</div>
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
                <NavLink to="/notfound">
                  <button>Learn Why</button>
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="org-msg">
        <div className="row">
          <div className="col-md-2"></div>
          <div className="col-md-2 h1-format">We</div>
          <div className="col-md-6">
            <div className="h4-format">
              are an organization that helps connect people through outdoor game
              activities
            </div>
            <div className="h6-format">
              In today’s busy and active world, quality time with family,
              friends and relatives is often overlooked, but picnics can be
              helpful in making up for some of this lost time. We are honored
              and excited to be an organization that provides indoor and outdoor
              games and picnic locations, helping all families bond better
              together. Referencing the content in the following sections may
              help you make decisions to organize activities successfully and
              completely.
            </div>
          </div>
          <div className="col-md-2"></div>
        </div>
      </div>
      <div className="featured-games-section"></div>
    </section>
  );
}

export default Homepage;
