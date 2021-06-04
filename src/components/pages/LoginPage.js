import React from 'react';
import { Link } from 'react-router-dom';

const LoginPage = () => {

    const onButtonClick = () => {
        localStorage.setItem("userId", "123456789");
    }
    return (
        <div className="content">
            <div style={{margin: "30% 10% 30% 10%"}}>
                
                <div className="ui header">
                    <div className="centeredAppLogo">
                        feisbuciuc
                    </div>
                </div>
                
                <div style={{
                    backgroundColor: "#d9d9d9", 
                    padding: "10%", 
                    borderRadius: "10px"}}>
                    
                    <div class="ui form">
                        <div class="field">
                            <input type="text" placeholder="Username" />
                        </div>
                        <div class="field">
                            <input type="password" placeholder="Password" />
                        </div>
                       
                        
                        <Link to="/">
                            <button style={{width: "100%"}} class="ui button primary" type="submit" onClick={onButtonClick}>Log in</button>
                        </Link>

                        
                        <div style={{textDecoration: "underline", textAlign: "center", padding: "10% 10% 0% 10%"}}>
                            Forgot password?
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;