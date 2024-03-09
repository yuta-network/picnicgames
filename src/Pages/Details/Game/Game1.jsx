import React from 'react';
import { NavLink } from "react-router-dom";
import './Details.css';
import "../../assets/css/bootstrap.css";

// Component hiển thị thông tin người đăng và ngày đăng
function PostInfo({ author, date }) {
  return (
    <div className="post-info">
      <p>Posted by: {author}</p>
      <p>Registered date: {date}</p>
    </div>
  );
}

// Main component for the website
function Details() {
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
          <div className='game1'>
            <h3>Game Name 1</h3>
            <PostInfo author="Tran Cong Tan" date="Thursday, 29 Feb, 2024" />
            <div className='description'>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Consequat interdum varius sit amet mattis vulputate enim nulla. Vestibulum sed arcu non odio euismod lacinia. Aliquam id diam maecenas ultricies mi. Vulputate mi sit amet mauris commodo quis. Est ullamcorper eget nulla facilisi etiam dignissim. Sed turpis tincidunt id aliquet risus feugiat in ante. Adipiscing diam donec adipiscing tristique risus nec feugiat in fermentum. Risus feugiat in ante metus dictum at. Fermentum odio eu feugiat pretium nibh. Ultrices mi tempus imperdiet nulla malesuada pellentesque. Ligula ullamcorper malesuada proin libero nunc consequat. Urna porttitor rhoncus dolor purus non enim praesent. A scelerisque purus semper eget duis at tellus at. Habitant morbi tristique senectus et netus et malesuada. Ut consequat semper viverra nam libero justo laoreet sit.
                 Dolor morbi non arcu risus quis varius quam. Mauris rhoncus aenean vel elit. Odio ut sem nulla pharetra diam sit amet. Sed arcu non odio euismod. Sapien eget mi proin sed libero enim sed faucibus turpis. Congue nisi vitae suscipit tellus. Morbi tincidunt ornare massa eget egestas purus viverra accumsan. Tristique sollicitudin nibh sit amet. Consectetur lorem donec massa sapien faucibus et. Cras ornare arcu dui vivamus arcu felis bibendum ut tristique. Sed odio morbi quis commodo odi
Feugiat in ante metus dictum at tempor commodo ullamcorper. Enim nunc faucibus a pellentesque sit amet porttitor eget dolor. Nulla malesuada pellentesque elit eget gravida cum. Ullamcorper malesuada proin libero nunc consequat. Ultrices mi tempus imperdiet nulla malesuada pellentesque elit. Dui sapien eget mi proin sed libero enim sed. Sed odio morbi quis commodo odio aenean. Pretium vulputate sapien nec sagittis aliquam malesuada bibendum arcu. Egestas sed tempus urna et. Suspendisse potenti nullam ac tortor vitae. Nulla at volutpat diam ut venenatis. Mattis nunc sed blandit libero volutpat sed cras ornare. Vestibulum mattis ullamcorper velit sed. Eget duis at tellus at urna condimentum mattis. Cursus in hac habitasse platea dictumst quisque sagittis purus sit. Libero justo laoreet sit amet cursus sit amet dictum sit.
                 Magna fermentum iaculis eu non diam. Tempus iaculis urna id volutpat. Felis donec et odio pellentesque diam. Tincidunt id aliquet risus feugiat in ante. Morbi quis commodo odio aenean sed adipiscing. Massa massa ultricies mi quis hendrerit dolor magna eget est. Consequat id porta nibh venenatis cras sed felis eget. Aliquet bibendum enim facilisis gravida neque convallis a. Est pellentesque elit ullamcorper dignissim cras. Aenean vel elit scelerisque mauris pellentesque pulvinar pellentesque habitant morbi. Amet aliquam id diam maecenas ultricies mi eget mauris pharetra. Magna fermentum iaculis eu non. Orci dapibus ultrices in iaculis. Cursus euismod quis viverra nibh cras pulvinar mattis. Morbi non arcu risus quis varius. Viverra maecenas accumsan lacus vel.</p>
            </div>
            <div className='game-pic'>
              <img src="/images/details-game/fox.png" alt="fox" />
            </div>
            <div className='related'>
              <h4>Related Games</h4>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Details;
