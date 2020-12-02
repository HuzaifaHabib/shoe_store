import React from 'react';
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
                <CommonComp />
            </Grid>
        </div>
    )
}


export default Home;