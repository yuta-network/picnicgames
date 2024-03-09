import React from "react";
import "./Games.css";
import { NavLink } from "react-router-dom";
function Games() {
  return (
    <div>
      <section className="games" id="games">
        <div className="container">
          <div className="main-txt">
            <h1>Games</h1>
            <p>We help children engage their bodies and minds through fun and educational activities.</p>
            <div className="fox">
              <img src="/images/games/fox.png" alt="Fox" />
            </div>
          </div>
          <div className="row" style={{marginTop: "200px"}}>
            <div className="col-md-8 py-3 py-md-0">
              <h3>Game name 1</h3>
              <p>Established by Chick-fil-A Founder S. Truett Cathy in 1985, WinShape Camps launched life-changing summers with our very first overnight camp. That early experience set the stage for how we do camps today-creating fun and faithful places for young people to grow. What we do makes a huge impact, serving 40,000 campers, their famillies and 800 summer staff each year. On top of our attention to hospitality and service is a commitment to excellence - all qualities we admire and share in Chick-fil-A.</p>
              <NavLink to="/details">
              <button className="btn btn-primary" type="button">Read more</button>
              </NavLink>
            </div>
            <div className="col-md-4 py-3 py-md-0">
              <div className="card">
                <img src="./images/games/children.jpg" alt="children" />
              </div>
            </div>
          </div>
          <div className="row" style={{marginTop: "30px"}}>
            <div className="col-md-8 py-3 py-md-0">
              <h3>Game name 2</h3>
              <p>Established by Chick-fil-A Founder S. Truett Cathy in 1985, WinShape Camps launched life-changing summers with our very first overnight camp. That early experience set the stage for how we do camps today-creating fun and faithful places for young people to grow. What we do makes a huge impact, serving 40,000 campers, their famillies and 800 summer staff each year. On top of our attention to hospitality and service is a commitment to excellence - all qualities we admire and share in Chick-fil-A.</p>
              <button className="btn btn-primary" type="button">Read more</button>
            </div>
            <div className="col-md-4 py-3 py-md-0">
              <div className="card">
                <img src="./images/games/children.jpg" alt="children" />
              </div>
            </div>
          </div>
          <div className="row" style={{marginTop: "30px"}}>
            <div className="col-md-8 py-3 py-md-0">
              <h3>Game name 3</h3>
<p>Established by Chick-fil-A Founder S. Truett Cathy in 1985, WinShape Camps launched life-changing summers with our very first overnight camp. That early experience set the stage for how we do camps today-creating fun and faithful places for young people to grow. What we do makes a huge impact, serving 40,000 campers, their famillies and 800 summer staff each year. On top of our attention to hospitality and service is a commitment to excellence - all qualities we admire and share in Chick-fil-A.</p>
              <button className="btn btn-primary" type="button">Read more</button>
            </div>
            <div className="col-md-4 py-3 py-md-0">
              <div className="card">
                <img src="./images/games/children.jpg" alt="children" />
              </div>
            </div>
          </div>
          <div className="row" style={{marginTop: "30px"}}>
            <div className="col-md-8 py-3 py-md-0">
              <h3>Game name 4</h3>
              <p>Established by Chick-fil-A Founder S. Truett Cathy in 1985, WinShape Camps launched life-changing summers with our very first overnight camp. That early experience set the stage for how we do camps today-creating fun and faithful places for young people to grow. What we do makes a huge impact, serving 40,000 campers, their famillies and 800 summer staff each year. On top of our attention to hospitality and service is a commitment to excellence - all qualities we admire and share in Chick-fil-A.</p>
              <button className="btn btn-primary" type="button">Read more</button>
            </div>
            <div className="col-md-4 py-3 py-md-0">
              <div className="card">
                <img src="./images/games/children.jpg" alt="children" />
              </div>
            </div>
          </div>
          <div className="row" style={{marginTop: "30px"}}>
            <div className="col-md-8 py-3 py-md-0">
              <h3>Game name 5</h3>
              <p>Established by Chick-fil-A Founder S. Truett Cathy in 1985, WinShape Camps launched life-changing summers with our very first overnight camp. That early experience set the stage for how we do camps today-creating fun and faithful places for young people to grow. What we do makes a huge impact, serving 40,000 campers, their famillies and 800 summer staff each year. On top of our attention to hospitality and service is a commitment to excellence - all qualities we admire and share in Chick-fil-A.</p>
              <button className="btn btn-primary" type="button">Read more</button>
            </div>
            <div className="col-md-4 py-3 py-md-0">
              <div className="card">
                <img src="./images/games/children.jpg" alt="children" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Games;
