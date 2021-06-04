import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className="ui secondary pointing menu">
            <Link to="/" className="item header" >
                <div className="appLogo">
                        feisbuciuc
                </div>
            </Link>
          
            <div className="right menu">
                <div className="item" style={{paddingRight: "0"}}>
                    <i style={{
                            backgroundColor: "#e2e2e2", 
                            fontSize: "1.2em"}} 
                        className="circular search icon" >
                    </i>
                </div>

                <div className="item">
                    <img className="ui avatar mini circular image" src="/avatar.jpg" alt="img"/>
                </div>

            </div>
        </div>
    );
};

export default Header;