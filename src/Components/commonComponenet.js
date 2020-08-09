import React from 'react';
import { Link } from 'react-router-dom'
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';




function CommonComp() {


    return (
        <div>
            <Grid container
                spacing={0}
                align="center"
                justify="center"
                direction="row" >
                {/* <Box display="flex" flexDirection="row"  > */}
                <Grid item xs >
                    <div className="style1">
                        <h1>Welcome To Shoe Store</h1>
                        <p>Exclusive Collection for All type of foot wears</p>
                        <ul class="commonComp-btn">
                        <a style={{ textDecoration: 'none' }} href="#"><li className='comComp-li'>Menu</li></a>
                        <a style={{ textDecoration: 'none' }} href="#"><li className='comComp-li comComp-li-2'>About US</li></a>
                        </ul>
                    </div>
                </Grid>
                <Grid item xs>
                    <img height='500px' width='500px' src={process.env.PUBLIC_URL + 'shoe1.png'}></img>
                </Grid>
                {/* </Box> */}
                {/* <Grid item md={12}  >
                    <h1>Welcome To Shoe Store</h1>
                </Grid>
                <Grid item md={12}   >
                    <h2>Go to <Link style={{ textDecoration: 'none', color: "blue" }} to="/menu">Menu</Link> for list of Products</h2>
                </Grid> */}
            </Grid>
        </div>
    )
}


export default CommonComp;