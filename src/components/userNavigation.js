import React from 'react';
import { Router, Switch } from 'react-router';
import LoginPage from './pages/LoginPage';

const userNavigation = () => {
    
    const userId = localStorage.getItem("userId");
    console.log(userId);

    if(userId == null )
    {
        // return (
        //     <Router>
        //         <Switch>
        //             <div>
        //                 <Route path="/login" exact component={LoginPage} />
        //         </div>
        //         </Switch>
        //     </Router>
           
        // )
    }
}

export default userNavigation;

