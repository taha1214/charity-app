import React from 'react';
import './Main.css';
import kidPic from "../../asssts/pics/istockphoto-472165353-612x612.jpg"
const Main = () => {
  return (
    <div className='main-container'>
      <div className='para'>
      <h1>Our Helping To <br/> The World</h1>
      <p>Lorem ipsum dolor sit amet, consectetur <br/>
         metus ac blandit sagittis. Suspendisse</p>
         <button className='don-but'>Donate</button><span> +12 1325 41</span>
      </div>
      <div className='pic'><img className='image' src={kidPic} alt='donation for kids'></img></div>

    </div>
  );
};

export default Main;
