import React from "react";
import "./GameDetail.css";
import { NavLink } from "react-router-dom";

function TugOfWar() {
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
              <div className="game-detail--title">Tur of war</div>
              <div className="game-detail--dateOfPost">
                Thursday, 29 Feb 2024 • Posted by Tran Cong Tan
              </div>
              <hr />
              <div className="game-detail-contentArea">
                <span>
                  You may recall a game of Tug of War from summer camp or gym
                  class, but you don’t need a flock of campers or a full
                  classroom to play this ancient childhood game of strength and
                  strategy! It is just as fun with 2 kids, or with 22. It’s also
                  a fun game idea for family reunions and birthday parties. All
                  you need to play is a length of sturdy rope at least 8 feet
                  long, and masking tape.
                </span>
                <div className="game-detail-contentArea-img">
                  <img
                    src="https://www.daysoftheyear.com/wp-content/uploads/international-tug-of-war-day-1.jpg"
                    alt=""
                  />
                </div>
                <br />
                <span>
                  How to set up Tug of War: Put a line of tape around the center
                  of the rope. If you have more than two players, divide the
                  teams into an even number of players. Stronger and heavier
                  players are at an advantage in Tug of War. Try to divvy up the
                  teams so that there is an equal amount of weight on each side.
                  Agree on what signal the referee will give to signal that the
                  game has started and ended. Don’t play Tug of War on concrete
                  or blacktop. Kids will often fall to their knees as they shift
                  their weight to gain an advantage on their opponents. Playing
                  on grass, or a similar soft surface will prevent injuries.
                </span>
                <br />
                <span>
                  How to play Tug of War: An equal number of players pick up
                  each end of the rope. The players begin tugging the rope when
                  the referee gives the signal. Each player pulls backwards as
                  hard as they can. The teams continue pulling until the center
                  of the rope (tape mark) crosses where the referee is standing.
                  The game ends when the referee declares one team has
                  successfully pulled the past the center.
                </span>
                <div className="game-detail-contentArea-img">
                  <img
                    src="https://www.tigereventseastanglia.co.uk/wp-content/uploads/2022/05/games-tug-of-war.jpg"
                    alt=""
                  />
                </div>
                <br />
                <span>
                  Can you play Tug of War with two players? Yes, if the players
                  are about the same age and strength.
                </span>
                <br />
                <span>
                  Benefits of playing Tug of War: It may seem like a game where
                  the strongest wins, but Tug of War is more than a test of
                  strength. Even before the game begins, kids have to flex their
                  cognitive skills. For instance, if there is an uneven number
                  of players, should a player sit out? Should one stronger,
                  older player be equal to two weaker, younger players?
                </span>
                <br />
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

export default TugOfWar;
