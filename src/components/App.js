import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import MainPage from './pages/MainPage';
import SettingsPage from './pages/SettingsPage';
import LoginPage from './pages/LoginPage';
import userNavigation from './userNavigation';
import { useHistory } from "react-router-dom";


const App = () => {

    //localStorage.setItem("userId", "123456789");
    //localStorage.removeItem("userId", "123456789");
    
    const userId = localStorage.getItem("userId");
    console.log(userId);

    

    if(userId){
        return (
            <div>
                <BrowserRouter>
                    <div>
                    <Route path="/" exact component={MainPage} />
                    <Route path="/settings" exact component={SettingsPage} />
                    <Route path="/login" exact component={LoginPage} />
                    </div>
                </BrowserRouter>
            </div>
        );
    }
    else
    {
        return (
            <div>
                <BrowserRouter>
                    <div>
                    <Route path="/login" exact component={LoginPage} />
                    </div>
                </BrowserRouter>
            </div>
        );
    }
};

export default App;
