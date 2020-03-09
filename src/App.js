import React from 'react';
import './App.css';

const App=()=>{
  return (
    <div className="app-wrapper">
      <header className='header'>
          <img src="https://i.pinimg.com/originals/8e/8e/5d/8e8e5d3e0b38ecd0688082625bbf1591.png" alt="fdsfd"/>
      </header>
      <nav className='nav'>
          <div>
              <a href="#s">Profile</a>
          </div>
          <div>
              <a href="#s">Messages</a>
          </div>
          <div>
              <a href="#s">News</a>
          </div>
          <div>
              <a href="#s">Music</a>
          </div>
          <div>
              <a href="#s">Settings</a>
          </div>
      </nav>
      <div className='content'>Main content
          <div className='photo'><img src="https://s1.1zoom.ru/b5050/174/USA_Houses_Evening_Pond_Las_Vegas_532588_2880x1800.jpg"
                    alt="photo"/>
          </div>
          <div className='ava'>
              <img src="" alt=""/>
          </div>
          <div className='posts'></div>
          <div>MY POSTS
              <div>New Post</div>
              <div>Post1</div>
              <div>Post2</div>
          </div>
      </div>
    </div>
  );
}

export default App;
