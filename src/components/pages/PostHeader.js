import React, {useState} from 'react';


const PostHeader = ({addPost}) => {
    const [postContent, setPostContent] = useState('');

    const userId = localStorage.getItem("userId");

    const onButtonClick = () => {
        addPost(postContent, userId);
        setPostContent('');
    }

    return(
        <div className="card">
                
            <div className="ui card" style={{width: "100%"}}>
                <div className="content">
                    <div className="postHeaderLogo">
                        <img className="ui avatar image ``" src="/avatar.jpg" alt="img" />
                    </div>
                    <div className="newPost">
                        <div className="ui form">
                            
                                <div className="postInput">
                                    <input value={postContent} onChange={(e) => setPostContent(e.target.value)} placeholder="What are you thinking about?" />
                                </div>
                                <div className="postButton">
                                    <button className="ui button" onClick={onButtonClick}>Post</button>
                                </div>
                           
                        </div>
                    </div>
                        
                </div>
                        
                <div className="content" style={{float: "left", padding: "2%"}}>
                    <div style={{width: "33%", float: "left", textAlign: "center"}}>
                        <i className="red video icon"></i>Live
                    </div>
                    <div style={{width: "33%", float: "left", textAlign: "center"}}>
                        <i className="green image icon"></i>Photo
                    </div>
                    <div style={{width: "33%", float: "left", textAlign: "center"}}>
                        <i className="violet camera icon"></i>Camera
                    </div>
                </div>
            </div>
    </div>
    );
};

export default PostHeader;