import React, {useState} from 'react';
import Cookies from 'js-cookie';
import Login from '../Log In/LogIn';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
  } from "react-router-dom";
  
function Home(props){
    const [authToken,setAuthToken]=useState(Cookies.get('authToken'));

        if (authToken===undefined){
           if (props.authToken!==undefined){
               setAuthToken(props.authToken);
                Cookies.set('authToken',props.authToken);
                window.location.reload();
            }
        }
        
    return (
        <Router >    
            <div>
                {authToken===undefined && <Redirect from='/' to='/login'/>}
                {authToken!==undefined && (
                    <div>
                            <h1>HOME PAGE</h1>
                            <h2>{`Hello ${props.email}`}</h2>
                    </div>
                )}
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