import React from 'react';
import {BrowserRouter as Router , Switch, Route} from 'react-router-dom';
import Home from './Components/home';
import About from './Components/about';
import Menu from './Components/menu';


function RouterConfig ( ) {

    return(
        <div>
            <Router>
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route path='/aboutus' component={About} />
                    <Route path='/menu' component={Menu} />
                </Switch>

            </Router>
        </div>
    )
}

export default RouterConfig;