import React from 'react';
import { Link } from 'react-router-dom'
import Grid from '@material-ui/core/Grid';
import useWebAnimations from "@wellyshen/use-web-animations";


import './commonComponent.css';




function CommonComp() {

    const { ref } = useWebAnimations({
        keyframes: {
          transform: ["translateY(20px)"], // Move by 500px
        //   background: ["red", "blue", "green",'orange'], // Go through three colors
        },
        timing: {
          delay: 500, // Start with a 500ms delay
          duration: 1000, // Run for 1000ms
          iterations: Infinity, // Repeat once
          direction: "alternate", // Run the animation forwards and then backwards
          easing: "ease-in-out", // Use a fancy timing function
        },
        // onReady: ({ playState, animate, animation }) => {
        //   // Triggered when the animation is ready to play (Google Chrome: available in v84+)
        // },
        // onUpdate: ({ playState, animate, animation }) => {
        //   // Triggered when the animation enters the running state or changes state
        // },
        // onFinish: ({ playState, animate, animation }) => {
        //   // Triggered when the animation enters the finished state (Google Chrome: available in v84+)
        // },
        // More useful options...
      });

//     const { ref, animate } = useWebAnimations();

//   useEffect(() => {
//     document.addEventListener("mousemove", (e) => {
//       // The target will follow the mouse cursor
//       animate({
//         keyframes: { transform: `translate(${e.clientX}px, ${e.clientY}px)` },
//         timing: { duration: 500, fill: "forwards" },
//       });
//     });
//   }, [animate]);
    
    return (
        <div>
            <Grid container
                spacing={0}
                align="center"
                justify="center"
                direction="row" >
                <Grid item xs >
                    <div className="style1" >
                        <div className="check">

                        <h1 >Welcome To Shoe Store</h1>
                        <p>Exclusive Collection for All type of foot wears</p>
                        </div>
                        <ul class="commonComp-btn">
                        <Link style={{ textDecoration: 'none' }} href="#" to='/menu'><li className='comComp-li'>Menu</li></Link>
                        <Link style={{ textDecoration: 'none' }} href="#" to='aboutus'><li className='comComp-li comComp-li-2'>About US</li></Link>
                        </ul>
                    </div>
                </Grid>
                <Grid item xs>
                    <img ref={ref} class='home-shoe1' src={process.env.PUBLIC_URL + 'shoe1.png'} alt='shoe1.png'></img>
                </Grid>
             </Grid>
        </div>
    )
}


export default CommonComp;