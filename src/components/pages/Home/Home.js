import React from 'react';
import Cookies from 'js-cookie';
import Login from '../Log In/LogIn';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
  } from "react-router-dom";
  
function Home(props){
    const authCookie= Cookies.get('authID');
    console.log(authCookie);
    return (
        <Router>
            <div>
                {authCookie===undefined && <Redirect to='/login'/>}
                {authCookie!==undefined && <h1>HOME PAGE</h1>}
            </div>
            <Switch>
                <Route path='/login' exact>
                    <Login/>
                </Route>
            </Switch>
        </Router>
    );
}

export default Home;