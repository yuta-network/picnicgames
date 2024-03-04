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
      <div className="featured-locations-section container-fluid">
        <div className="container">
          <div className="featured-locations-title">
            Featured Locations For Picnic
          </div>
          <div className="featured-locations-card-layout">
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
    </section>
  );
}

export default Homepage;
