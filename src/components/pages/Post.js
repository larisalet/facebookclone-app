import React, {useState} from 'react';

const Post = ({post, addLike, removeLike, userId, deletePost}) => { 

    const [status, setStatus] = useState("no")

    const deleteOnClick = (postId) => {
        deletePost(postId);
    }
    const deleteButton = () => {
        const uId = localStorage.getItem("userId");

        if(userId === uId)
        {
            return(
                <div className="deleteButton" onClick={deleteOnClick(post.postId)}>
                    <i className="x icon"></i>
                </div>
            )
        }

    }

    const handleClickLike = () => {
        if(status === "no"){
            setStatus("yes");
            addLike(status);
        }
        else{
                setStatus("no");
                removeLike(status);
            }
    }

    return(
        <div className="card">
                
                <div className="ui card" style={{width: "100%"}}>
                    
                    <div className="content" style={{float: "left"}}>
                        <img className="ui avatar image" src={post.avatar} alt="img"/> 
                            {post.username} {deleteButton()}
                            
                        <div className="meta">{post.time}</div>
                       
                        <div>{post.description}</div>
                    </div>
                    
                    <img className={`${post.photo === "" ? 'hiddenObject' : 'image'}`} src={post.photo} alt="img" />
                   
                    <div  className="content" style={{float: "left", padding: "2%"}}>
                        <div className={status === 'yes' ? 'likeButton' : ''} onClick={handleClickLike} style={{width: "50%", float: "left", textAlign: "center"}}>
                            <i className={status === 'yes' ? 'thumbs up icon' : 'thumbs up outline icon'}></i>Like
                        </div>
                        <div style={{width: "50%", float: "left", textAlign: "center"}}>
                            <i className="comment outline icon"></i>Comment
                        </div>
                    </div>
                </div>
        </div>
    );
};

export default Post;