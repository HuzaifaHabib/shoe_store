import React from 'react';
import { Link } from 'react-router-dom'
import Grid from '@material-ui/core/Grid';
import CommonComp from './commonComponenet';



function Home() {


    return (
        <div>
            <Grid container
                spacing={0}
                align="center"
                justify="center"
                direction="column" >
                {/* <Grid item md={12}  >
                    <h1>Welcome To Shoe Store</h1>
                </Grid>
                <Grid item md={12}   >
                    <h2>Go to <Link style={{ textDecoration: 'none', color: "blue" }} to="/menu">Menu</Link> for list of Products</h2>
                </Grid> */}
                <CommonComp />
            </Grid>
        </div>
    )
}


export default Home;