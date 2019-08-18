import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default class PostsList extends Component {

    state = {
      posts: []
    }

    async componentDidMount() {
        this.getPosts();
    }

    getPosts = async () => {
        const res = await axios.get('http://localhost:3000/api/post')
        this.setState({
            posts: res.data
        });
    }

    deletePost = async (noteId) => {
        await axios.delete('http://localhost:3000/api/post/' + noteId);
        this.getPosts();
    }

    updatePost = async (noteId) => {
        await axios.put('http://localhost:3000/api/post/' + noteId);
        this.getPosts();
    }

    render() {
        return (
            <div className="container">
                <div className="row"> 
                {
                    this.state.posts.map(post => (
                        <div className="col-md-4 p-2" key={post.id_post}>
                            <div className="card mt-3 mb-5">
                                <img className="card-img-top img-fluid" src="https://mdbootstrap.com/img/Photos/Others/food.jpg" alt="static-post"/>
                                <Link to={"/edit/" + post.id_post} className="btn-floating btn-action ml-auto mr-4 mdb-color mt-3" >
                                    <i className="fa fa-pencil-square-o" aria-hidden="true" style={{fontSize: '2em', color: '#929fba'}}></i>
                                </Link>
                                <div className="card-body">
                                    <h5 className="card-title">{post.title}</h5>
                                    <hr/>
                                    <p className="card-text">{post.post_content}</p>
                                    <button style={{backgroundColor: '#929fba'}} className="text-white rounded" onClick={() => this.deletePost(post.id_post)}>Delete</button>
                                </div>
                                <div className="rounded-bottom text-center pt-3 " style={{backgroundColor: '#929fba'}}>
                                    <ul className="list-unstyled list-inline font-small" style={{fontSize: '1.4em'}}>
                                        <li className="list-inline-item pr-2 text-white"><i className="fa fa-clock-o mr-2" aria-hidden="true"></i>{post.created_at}</li>
                                    </ul>
                                    <div className="float-sm-right">
                                    <ul  style={{fontSize: '1.4em'}}>
                                        <li className="list-inline-item pr-2 mr-4"><a href="/" className="text-white" ><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                                        <li className="list-inline-item ml-4"><a href="/" className="text-white"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
                                    </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                }
                </div>
            </div>
        )
    }
}