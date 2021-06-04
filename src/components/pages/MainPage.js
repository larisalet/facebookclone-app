import React from 'react';
import Header from './Header';
import BottomMenu from './BottomMenu';
import Post from './Post';
import PostHeader from './PostHeader';

const postsList = [
    {
        "id" : 0,
        "avatar" : "/avatar1.jpg",
        "username" : "Emily",
        "time" : "3h",
        "description" : "morning coffee...",
        "photo" : "/photo2.jpg",
        "liked" : "no",
        "userId" : ""
    },
    {
        "id" : 1,
        "avatar" : "/avatar2.jpg",
        "username" : "John",
        "time" : "6h",
        "description" : "work day",
        "photo" : "/photo1.jpg",
        "liked" : "no",
        "userId" : ""
    },
    {
        "id" : 2,
        "avatar" : "/avatar1.jpg",
        "username" : "Maria",
        "time" : "7h",
        "description" : "What a beautiful day.",
        "photo" : "/photo4.jpg",
        "liked" : "no",
        "userId" : ""
    },
    {
        "id" : 3,
        "avatar" : "/avatar2.jpg",
        "username" : "Sarah",
        "time" : "10h",
        "description" : "city",
        "photo" : "/photo3.jpg",
        "liked" : "no",
        "userId" : ""
    }
];


class MainPage extends React.Component {
    

    state = {posts: []};

    componentDidMount(){

        this.setState({posts: postsList});
    }

    addPost = (postContent, userId) => {
        console.log(postContent);

        const temp = {
            "id" : this.state.posts.length + 1, 
            "avatar" : "/avatar.jpg",
            "username" : "username",
            "time" : "1h",
            "description" : postContent,
            "photo" : "",
            "liked" :"no",
            "userId" : userId
        } 

        this.setState({
            posts: [ temp, ...this.state.posts]
        });
        console.log(this.state.posts.length)
    }
    
    deletePost = (postId) => {

       console.log(postId);
    }


    addLike = (status) => {
        //console.log(status)
    }
    removeLike = (status) => {
        //console.log(status)
    }

    render(){

        const renderedList = this.state.posts.map((post) => {
            return <Post deletePost={this.deletePost} addLike={this.addLike} removeLike={this.removeLike} userId={post.userId} post={post} key={post.description}/>;
        });

        return (
            <div>
                <Header />
                <PostHeader addPost={this.addPost}/>
                {renderedList}
                <BottomMenu page={"main"} />
            </div>
        )
    }
}

export default MainPage;