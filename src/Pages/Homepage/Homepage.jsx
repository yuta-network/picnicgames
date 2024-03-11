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
                <a href="#org-msg">
                  <button>Learn Why</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="org-msg" id="org-msg">
        <div className="row">
          <div className="col-md-2"></div>
          <div className="col-md-2 h1-format">We</div>
          <div className="col-md-5">
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
          <div className="col-md-3"></div>
        </div>
      </div>
      <div className="featured-games-section container-fluid">
        <div className="container">
          <div className="featured-games-title">Featured Games</div>
          <div className="featured-games-card-layout">
            <div class="row row-cols-1 row-cols-md-4 g-4">
              <div class="col">
                <div class="card h-100">
                  <img
                    src={process.env.PUBLIC_URL + "/images/example_600x400.png"}
                    class="card-img-top"
                    alt="..."
                  />
                  <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">
                      This is a wider card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer.
                    </p>
                  </div>
                  <div class="card-footer">
                    <small class="text-body-secondary">
                      Last updated 3 mins ago
                    </small>
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="card h-100">
                  <img
                    src={process.env.PUBLIC_URL + "/images/example_600x400.png"}
                    class="card-img-top"
                    alt="..."
                  />
                  <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">
                      This card has supporting text below as a natural lead-in
                      to additional content.
                    </p>
                  </div>
                  <div class="card-footer">
                    <small class="text-body-secondary">
                      Last updated 3 mins ago
                    </small>
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="card h-100">
                  <img
                    src={process.env.PUBLIC_URL + "/images/example_600x400.png"}
                    class="card-img-top"
                    alt="..."
                  />
                  <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">
                      This is a wider card with supporting text below as a
                      natural lead-in to additional content. This card has even
                      longer content than the first to show that equal height
                      action.
                    </p>
                  </div>
                  <div class="card-footer">
                    <small class="text-body-secondary">
                      Last updated 3 mins ago
                    </small>
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="card h-100">
                  <img
                    src={process.env.PUBLIC_URL + "/images/example_600x400.png"}
                    class="card-img-top"
                    alt="..."
                  />
                  <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">
                      This is a wider card with supporting text below as a
                      natural lead-in to additional content. This card has even
                      longer content than the first to show that equal height
                      action.
                    </p>
                  </div>
                  <div class="card-footer">
                    <small class="text-body-secondary">
                      Last updated 3 mins ago
                    </small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div className="news-section container-fluid">
        <div className="container">
          <div className="news-title">Our News</div>
          <div className="news-card-layout">
            <div class="row row-cols-1 row-cols-md-3 g-4">
              <div class="col">
                <div class="card h-100">
                  <img
                    src={process.env.PUBLIC_URL + "/images/example_600x400.png"}
                    class="card-img-top"
                    alt="..."
                  />
                  <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">
                      This is a wider card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer.
                    </p>
                  </div>
                  <div class="card-footer">
                    <small class="text-body-secondary">
                      Last updated 3 mins ago
                    </small>
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="card h-100">
                  <img
                    src={process.env.PUBLIC_URL + "/images/example_600x400.png"}
                    class="card-img-top"
                    alt="..."
                  />
                  <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">
                      This card has supporting text below as a natural lead-in
                      to additional content.
                    </p>
                  </div>
                  <div class="card-footer">
                    <small class="text-body-secondary">
                      Last updated 3 mins ago
                    </small>
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="card h-100">
                  <img
                    src={process.env.PUBLIC_URL + "/images/example_600x400.png"}
                    class="card-img-top"
                    alt="..."
                  />
                  <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">
                      This is a wider card with supporting text below as a
                      natural lead-in to additional content. This card has even
                      longer content than the first to show that equal height
                      action.
                    </p>
                  </div>
                  <div class="card-footer">
                    <small class="text-body-secondary">
                      Last updated 3 mins ago
                    </small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="feedback-section container-fluid">
        <div className="container">
          <div className="feedback-title">Feedback of Visitor</div>
          <div id="carouselExampleIndicators" class="carousel slide">
            <div class="carousel-indicators">
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="0"
                class="active"
                aria-current="true"
                aria-label="Slide 1"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="1"
                aria-label="Slide 2"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="2"
                aria-label="Slide 3"
              ></button>
            </div>
            <div class="carousel-inner">
              <div class="carousel-item active">
                <div className="carousel-ctn">
                  <div className="row">
                    <div className="col-md-2"></div>
                    <div className="col-md-8">
                      <div className="row feedback-inline">
                        <div className="col-md-3 feedback-profile-img">
                          <img
                            src={
                              process.env.PUBLIC_URL +
                              "/images/homepage/profile-avatar-1.png"
                            }
                            alt=""
                          />
                        </div>
                        <div className="col-md-9 feedback-profile-content">
                          <div className="feedback-profile-name">
                            Lisa Cudrow - Texas
                          </div>
                          <div className="feedback-rate">
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                          </div>
                          <div className="feedback-description">
                            Sed ut perspiciatis unde omnis iste natus error sit
                            voluptatem accusantium doloremque laudantium, totam
                            rem aperiam, eaque ipsa quae ab illo inventore
                            veritatis et quasi architecto beatae vitae dicta
                            sunt explicabo. Nemo enim ipsam voluptatem quia
                            voluptas sit aspernatur.
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-2"></div>
                  </div>
                </div>
              </div>
              <div class="carousel-item">
                <div className="carousel-ctn">
                  <div className="row">
                    <div className="col-md-2">4</div>
                    <div className="col-md-8">5</div>
                    <div className="col-md-2">6</div>
                  </div>
                </div>
              </div>
              <div class="carousel-item">
                <div className="carousel-ctn">
                  <div className="row">
                    <div className="col-md-2">7</div>
                    <div className="col-md-8">8</div>
                    <div className="col-md-2">9</div>
                  </div>
                </div>
              </div>
            </div>
            <button
              class="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide="prev"
            >
              <i class="fas fa-chevron-left"></i>
              <span class="visually-hidden">Previous</span>
            </button>
            <button
              class="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide="next"
            >
              <i class="fas fa-chevron-right"></i>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>
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
    </section>
  );
}

export default Homepage;
