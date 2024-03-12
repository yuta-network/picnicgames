import React from "react";
import "./Games.css";
import { NavLink } from "react-router-dom";

function Games() {
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
      <div className="section--games">
        <div className="container">
          <div className="row">
            <div className="col-md-1"></div>
            <div className="col-md-5">
              <div className="games-left-col">
                <div className="games--game-title">Tug of war</div>
                <div className="games--game-descriptions">
                  You may recall a game of Tug of War from summer camp or gym
                  class, but you don’t need a flock of campers or a full
                  classroom to play this ancient childhood game of strength and
                  strategy! It is just as fun with 2 kids, or with 22. It’s also
                  a fun game idea for family reunions and birthday parties. All
                  you need to play is a length of sturdy rope at least 8 feet
                  long, and masking tape.
                </div>
                <div className="games--game-readmore">
                  <NavLink to="/games/tug-of-war">
                    <button>Read more</button>
                  </NavLink>
                </div>
              </div>
            </div>
            <div className="col-md-5">
              <div className="games-game-img">
                <img
                  src={process.env.PUBLIC_URL + "/images/games/tur-of-war.jpg"}
                  alt=""
                />
              </div>
            </div>
            <div className="col-md-1"></div>
          </div>
        </div>
      </div>
      <div className="section--games">
        <div className="container">
          <div className="row">
            <div className="col-md-1"></div>
            <div className="col-md-5">
              <div className="games-left-col">
                <div className="games--game-title">Hula Hoop Competition</div>
                <div className="games--game-descriptions">
                  Get some music blasting, hand out some hula hoops, and get
                  ready for an exciting competition! You’ll never know if some
                  hula hoop prodigies might be hidden in the group, ready to
                  show off their hidden skills! Since this is a competition, get
                  a prize ready for the best hula hooper in the group!
                </div>
                <div className="games--game-readmore">
                  <NavLink to="/games/hula-hoop-competition">
                    <button>Read more</button>
                  </NavLink>
                </div>
              </div>
            </div>
            <div className="col-md-5">
              <div className="games-game-img">
                <img
                  src={
                    process.env.PUBLIC_URL +
                    "/images/games/Hula-Hoop-Competition.jpg"
                  }
                  alt=""
                />
              </div>
            </div>
            <div className="col-md-1"></div>
          </div>
        </div>
      </div>
      <div className="section--games">
        <div className="container">
          <div className="row">
            <div className="col-md-1"></div>
            <div className="col-md-5">
              <div className="games-left-col">
                <div className="games--game-title">
                  Giant Yard Twister Board
                </div>
                <div className="games--game-descriptions">
                  This Instructable is going to show you how to make a GIANT
                  yard Twister board. We made this in our back yard for my son's
                  9th birthday party. It had to be big since we had 20 of my
                  son's friends over for the party.
                  <br />
                  <br />
                  This was a lot of fun for the birthday party and the kids had
                  a great time. This is a really easy project. It just took a
                  little time and some planning.
                </div>
                <div className="games--game-readmore">
                  <NavLink to="/games/giant-yard-twister">
                    <button>Read more</button>
                  </NavLink>
                </div>
              </div>
            </div>
            <div className="col-md-5">
              <div className="games-game-img">
                <img
                  src={
                    process.env.PUBLIC_URL +
                    "/images/games/Giant-Yard-Twister-Board.webp"
                  }
                  alt=""
                />
              </div>
            </div>
            <div className="col-md-1"></div>
          </div>
        </div>
      </div>
      <div className="section--games">
        <div className="container">
          <div className="row">
            <div className="col-md-1"></div>
            <div className="col-md-5">
              <div className="games-left-col">
                <div className="games--game-title">Egg and Spoon Race</div>
                <div className="games--game-descriptions">
                  Let’s start by saying that the history of Egg and Spoon racing
                  is slightly fuzzy. The earliest recorded mention of it was in
                  1897, when it formed part of village celebrations in Queen
                  Victoria’s Diamond Jubilee. But no matter it origins, this fun
                  and highly entertaining game is still widely practiced by
                  Children and Adults around the World and is a mainstay of
                  sporting events, school fun-days and, most importantly, Kids
                  Birthday parties.
                  <br />
                  <br />
                  Egg and spoon racing is a great way to encourage teamwork,
                  coordination, and physical activity for Children. It is the
                  perfect Kids Party Activity for your little guests and one of
                  our favorite party games. Let’s get in to how to play it at
                  your party.
                </div>
                <div className="games--game-readmore">
                  <NavLink to="/games/egg-and-spoon-race">
                    <button>Read more</button>
                  </NavLink>
                </div>
              </div>
            </div>
            <div className="col-md-5">
              <div className="games-game-img">
                <img
                  src={
                    process.env.PUBLIC_URL +
                    "/images/games/Egg-and-Spoon-Race.jpg"
                  }
                  alt=""
                />
              </div>
            </div>
            <div className="col-md-1"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Games;
