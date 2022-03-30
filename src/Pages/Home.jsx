import React, { useEffect, useState } from 'react'

import 'animate.css'
import ReactPageScroller from 'react-page-scroller';
import IntroComp from '../components/IntroComp';
import SecondComponent from '../components/SecondComponent';


const Home = () => {

  const [ mouseY, getmouseY] = useState(0)

  // useEffect(()=>{
  //   // getmouseY(window.screenX)
  //   // console.log(window)
  // })

    // window.onscroll = (e) =>{
    // getmouseY(e.screenY)
    //   console.log(e.screenX)
    // }

  // const cursorRounded = document.querySelector('.rounded');
  //   const cursorPointed = document.querySelector('.pointed');


  //   const moveCursor = (e)=> {
  //   const mouseY = e.clientY;
  //   const mouseX = e.clientX;
    
  //   cursorRounded.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
    
  //   cursorPointed.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
 
// }

// window.addEventListener('mousemove', moveCursor)

  return (
    <ReactPageScroller >
    <IntroComp />
    <SecondComponent />
    </ReactPageScroller>
  )
}

export default Home