import React from 'react';
import ProductCard from './product'
import data from './../data.json';
import Grid from '@material-ui/core/Grid';


function Menu() {

    const test2 = Object.values(data)

    


    return (

        <div className="container">
            <Grid container spacing={3} >
                {test2[0].map((data, ind) => {
                    return (
                        <Grid item md={3} key={ind} >
                            <ProductCard product={data} />
                        </Grid>
                    )

                })}
            </Grid>

        </div>



    )
}


export default Menu;