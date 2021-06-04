import React from 'react';
import { Link } from 'react-router-dom';

const BottomMenu = ({page}) =>{ 
    
        return (
            <div className="bottomMenu">
                
                <div className="ui secondary pointing menu">
                    <Link to="/" className={`${page === "main" ? 'active item header' : 'item header'}`}>
                        HOME
                    </Link>
                    
                    <div className="item header">MARKET</div>
                    
                    <div className="right menu">
                        <Link to="/settings" className={`${page === "settings" ? 'active item header' : 'item header'}`}>
                            SETTINGS
                        </Link>
                    </div>
                </div>
            </div>
        );
};

export default BottomMenu;