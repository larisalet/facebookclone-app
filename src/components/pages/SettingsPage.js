import React from 'react';
import BottomMenu from './BottomMenu';
import Header from './Header';
import { Link } from 'react-router-dom';

const SettingsPage = () => {

    const removeUserID = () =>{
        localStorage.removeItem("userId", "123456789");
    }
    return (
        <div>
            <Header />
            
                <div className="settingsHeader">
                        <h2 > SETTINGS </h2>
                </div>

                <div>
                    <div className="content" onClick={removeUserID}>
                        
                    <div className="settingsSection">
                        <i className="user icon white"></i>
                         Personal information 
                    </div>
                        <div className="sectionContent">
                            <div className="sectionItem">
                                <div className="sectionTitle">Name: </div>
                                <div className="sectionText">username</div>
                            </div>
                            <div className="sectionItem">
                                <div className="sectionTitle">Avatar: </div>
                                <img class="ui avatar image" src="/avatar.jpg" alt="img" />
                            </div>
                        </div>
                        <div className="settingsSection">
                        <i className="cog icon white"></i>
                         Account settings
                    </div>
                    <div className="sectonContent">
                        <div className="sectionItem">
                        <Link to="/login">
                            <h3 >
                                Log Out
                            </h3>
                        </Link>
                        </div>
                        <div className="sectionItem">
                        <h3 className="ui header" style={{ color: "#990000"}}> 
                            Delete account 
                        </h3>
                        </div>
                        </div>
                       
                        
                      
                    </div>    
                </div>

            <BottomMenu page={"settings"}/>
        </div>
    );
};

export default SettingsPage;