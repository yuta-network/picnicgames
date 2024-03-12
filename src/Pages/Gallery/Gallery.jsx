import React from "react";
import "./Gallery.css";

function Gallery() {
  return (
    <div>
      <div className="section--banner">
        <div className="container">
          <div className="row">
            <div className="col-md-8 page-banner">
              <div className="section--banner-title">Gallery</div>
              <div className="section--banner-description">
                All images of our community's activities
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
      <div className="section--gallery">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-6">
              <img
                src="https://www.hopscotch.in/blog/wp-content/uploads/2020/02/Plan-these-5-family-picnic-games-for-your-next-picnic_Intro.jpg"
                alt=""
              />
            </div>
            <div className="col-12 col-md-6">
              <img
                src="https://blog.thriver.com/wp-content/uploads/2022/04/company-picnic-games-1024x683.jpg"
                alt=""
              />
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-md-6">
              <img
                src="https://tastycatering.com/wp-content/uploads/Bag-Toss.jpg"
                alt=""
              />
            </div>
            <div className="col-12 col-md-6">
              <img
                src="https://www.outbackteambuilding.com/wp-content/uploads/2020/03/picnic-party-games-image-gallery.jpg"
                alt=""
              />
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-md-6">
              <img
                src="https://www.creativeeventidea.com/uploads/2/6/4/4/2644640/company-picnic-field-game-ideas-outdoors-interactive-1_orig.jpg"
                alt=""
              />
            </div>
            <div className="col-12 col-md-6">
              <img
                src="https://ourfamilylifestyle.com/wp-content/uploads/2022/05/Outdoor-Field-Day-Games-What-games-can-you-play-without-equipment.jpg"
                alt=""
              />
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-md-6">
              <img
                src="https://www.verywellfamily.com/thmb/ALvohdvLoJhIQ1zLnQa0-C8cG_0=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/878357-004-56a13d7f5f9b58b7d0bd543d.jpg"
                alt=""
              />
            </div>
            <div className="col-12 col-md-6">
              <img
                src="https://thimbleandtwig.com/wp-content/uploads/2023/03/outdoor-games-for-teenagers-2.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Gallery;
