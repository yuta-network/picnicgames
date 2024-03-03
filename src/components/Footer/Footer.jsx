import React from "react";
import "./Footer.css";
import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <div className="container-fluid footer">
      <div className="footer-top-img">
        <div className="footer-left-tree-img">
          <img
            src={process.env.PUBLIC_URL + "/images/footer/left-tree-footer.png"}
            alt=""
          />
        </div>
        <div className="footer-left-fox-img">
          <img
            src={process.env.PUBLIC_URL + "/images/footer/left-fox-footer.png"}
            alt=""
          />
        </div>
        <div className="footer-right-tree-img">
          <img
            src={
              process.env.PUBLIC_URL + "/images/footer/right-tree-footer.png"
            }
            alt=""
          />
        </div>
      </div>
      <div className="footer-center-logo">
        <NavLink to="/">
          {" "}
          <img
            src={process.env.PUBLIC_URL + "/images/picnicgames-logo.png"}
            alt=""
          />
        </NavLink>
      </div>
      <div className="footer-anchor-layout">
        <div></div>
        <div className="footer-anchor-layout-elm">
          <div>
            <ul className="footer-anchor-col-left">
              <li>
                <NavLink to="/about">About</NavLink>
              </li>
              <li>
                <NavLink to="/games">Games</NavLink>
              </li>
              <li>
                <NavLink to="/locations">Locations</NavLink>
              </li>
            </ul>
          </div>
          <div>
            <ul className="footer-anchor-col-left">
              <li>
                <NavLink to="/news">News</NavLink>
              </li>
              <li>
                <NavLink to="/feedback">Feedback</NavLink>
              </li>
              <li>
                <NavLink to="/notfound">Contact Us</NavLink>
              </li>
            </ul>
          </div>
          <div></div>
          <div></div>
          <div className="footer-contact-infor-right">
            <ul>
              <li style={{ fontWeight: "700" }}>HCMC, Vietnam</li>
              <li>FPT Academy International 62 Van Phuc, Thu Duc City</li>
              <li>
                <span style={{ fontWeight: "700" }}>Phone: </span>+84 928 282
                888
              </li>
              <li>picnicgames@fptaptech.com.vn</li>
            </ul>
          </div>
        </div>
        <div className="footer-copyright">
          <div>© 2024 PicnicGames Theme by Group 4 - FPT Aptech</div>
          <div></div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
