import React from 'react';
import {BrowserRouter as Router , Switch, Route} from 'react-router-dom';
import Home from './Components/home';
import About from './Components/about';
import Menu from './Components/menu';
import NavBar from './Components/appbar';
import Cart from './cart'


function RouterConfig ( ) {

    return(
        <div>
            <Router basename={process.env.PUBLIC_URL}>
                <NavBar />
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route path='/aboutus' component={About} />
                    <Route path='/menu' component={Menu} />
                    <Route path='/cart' component={Cart} />

                </Switch>

            </Router>
        </div>
    )
}

export default RouterConfig;