import React, { Component } from 'react';
import axios from 'axios';

export default class CreatePost extends Component {

  state={
    posts: [],
    title: '',
    post_content: '',
    editing: false,
    id_post:''
  }

  async componentDidMount(){
    if (this.props.match.params.id) {
      console.log(this.props.match.params.id)
      const res = await axios.get('http://localhost:3000/api/post/' + this.props.match.params.id);
      console.log(res.data)
      this.setState({
          title: res.data.title,
          post_content: res.data.post_content,
          id_post: res.data.id_post,
          editing: true
      });
    }
  }

  handleOnSubmit = async (e) => {
    e.preventDefault();
    if(this.state.editing){
      const updatedPost = {
        title: this.state.title,
        post_content: this.state.post_content
    };
      const res = await axios.put('http://localhost:3000/api/post/' + this.state.id_post, updatedPost)
      console.log(res)
    } else {
      const newPost = {
        title: this.state.title,
        post_content: this.state.post_content
      }
      axios.post('http://localhost:3000/api/post', newPost)
    }
    window.location.href = '/';
  }

  onInputChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render(){
    return(
      <div className="col-md-6 offset-md-3">
        <div className="card card-body mt-5">
          <h4>Create a Post</h4>
            <form onSubmit={this.handleOnSubmit}>
              {/* Post Title */}
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Title"
                  onChange={this.onInputChange}
                  name="title"
                  value={this.state.title}
                  required />
              </div>

              {/* Post Content */}
              <div className="form-group">
                <textarea
                    type="text"
                    className="form-control"
                    placeholder="Content"
                    name="post_content"
                    onChange={this.onInputChange}
                    value={this.state.post_content}
                    required>
                </textarea>
              </div>

              <button type="submit" className="btn btn-info">
                Save
              </button>
            </form>
        </div>
      </div>
    )
  }
}


