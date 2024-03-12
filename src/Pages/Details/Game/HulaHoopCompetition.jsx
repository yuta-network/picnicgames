import React from "react";
import "./GameDetail.css";
import { NavLink } from "react-router-dom";

function GiantYardTwister() {
  return (
    <div>
      <div className="section--banner">
        <div className="container">
          <div className="row">
            <div className="col-md-8 page-banner">
              <div className="section--banner-title">Games</div>
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
      <div className="section--game-detail">
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <div className="game-detail--title">Hula Hoop Competition</div>
              <div className="game-detail--dateOfPost">
                Thursday, 29 Feb 2024 • Posted by Tran Cong Tan
              </div>
              <hr />
              <div className="game-detail-contentArea">
                <h3>OVERVIEW OF HULA HOOP COMPETITION</h3>
                <div className="game-detail-contentArea-img">
                  <img
                    src="https://gamerules.com/wp-content/uploads/Hula-hoop-1-1536x864.png"
                    alt=""
                  />
                </div>
                <br />
                <span>
                  Get some music blasting, hand out some hula hoops, and get
                  ready for an exciting competition! You’ll never know if some
                  hula hoop prodigies might be hidden in the group, ready to
                  show off their hidden skills! Since this is a competition, get
                  a prize ready for the best hula hooper in the group!
                </span>
                <br />
                <h3>SETUP</h3>
                <span>
                  Give each player a hula hoop and ensure everyone has enough
                  space to hula hoop without hurting or bumping into another
                  player. Designate a referee, and make sure the referee is
                  standing somewhere where they can see each player.
                </span>
                <br />
                <h3>GAMEPLAY</h3>
                <div className="game-detail-contentArea-img">
                  <img
                    src="https://gamerules.com/wp-content/uploads/Hula-hoop-2-1536x864.png"
                    alt=""
                  />
                </div>
                <br />
                <span>
                  At the signal, all players must start hula hooping! The
                  objective is to hula hoop longer than every other player.
                  There are no limitations on which part of the body one can
                  hula hoop – it can be an arm, a leg, the neck, or around the
                  traditional waist – as long as the hula hoop stays hula
                  hooping and doesn’t fall onto the ground. The moment a hula
                  hoop touches the ground, that player is disqualified by the
                  referee!
                </span>
                <br />
                <h3>END OF GAME</h3>
                <span>
                  Continue hula hooping until only one player is left standing –
                  the winner!
                </span>
              </div>
              <hr />
            </div>
            <div className="col-md-4">
              <div className="section--related-games">
                <div className="related-games--title">Related games</div>
                <div className="related-game--card">
                  <div className="row">
                    <div className="col-12 col-md-4">
                      <div className="related-game--img">
                        <img
                          src={
                            process.env.PUBLIC_URL +
                            "/images/games/Hula-Hoop-Competition.jpg"
                          }
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="col-12 col-md-8">
                      <div className="related-game--title">
                        <NavLink to="/games/hula-hoop-competition">
                          Hula Hoop Competition
                        </NavLink>
                      </div>
                      <div className="related-game--description">
                        Get some music blasting, hand out some hula hoops...
                      </div>
                    </div>
                  </div>
                  <hr />
                </div>
                <div className="related-game--card">
                  <div className="row">
                    <div className="col-12 col-md-4">
                      <div className="related-game--img">
                        <img
                          src={
                            process.env.PUBLIC_URL +
                            "/images/games/Giant-Yard-Twister-Board.webp"
                          }
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="col-12 col-md-8">
                      <div className="related-game--title">
                        <NavLink to="/games/giant-yard-twister">
                          Giant Yard Twister
                        </NavLink>
                      </div>
                      <div className="related-game--description">
                        This Instructable is going to show you how to make a
                        GIANT yard...
                      </div>
                    </div>
                  </div>
                  <hr />
                </div>
                <div className="related-game--card">
                  <div className="row">
                    <div className="col-12 col-md-4">
                      <div className="related-game--img">
                        <img
                          src={
                            process.env.PUBLIC_URL +
                            "/images/games/Egg-and-Spoon-Race.jpg"
                          }
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="col-12 col-md-8">
                      <div className="related-game--title">
                        <NavLink to="/games/egg-and-spoon-race">
                          Egg and Spoon Race
                        </NavLink>
                      </div>
                      <div className="related-game--description">
                        Let’s start by saying that the history of Egg and Spoon
                        racing is slightly fuzzy...
                      </div>
                    </div>
                  </div>
                  <hr />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GiantYardTwister;
