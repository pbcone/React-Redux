import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchPosts , trim } from '../actions/postActions';

class Posts extends Component {
  onClick = (e) => {
    e.preventDefault()
    console.log("Click");
    this.props.trim(5);
  }

  componentWillMount() {
    this.props.fetchPosts();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.newPost) {
      this.props.posts.unshift(nextProps.newPost);
    }
  }

  render() {
    let postItems = this.props.posts;
    postItems = postItems.slice(0,this.props.numPosts);
    postItems = postItems.map(post => (
      <div key={post.id}>
        <h3>{post.title}</h3>
        <p>{post.body}</p>
        <hr/>
      </div>
    ));
    return (
      <div>
        <h1>Posts</h1>
        <button onClick={this.onClick}>
            Trim List to 5
        </button>
        <h3>If you add a post above, and click submit it will render here </h3>
        {postItems}
      </div>
    );
  }
}

Posts.propTypes = {
  fetchPosts: PropTypes.func.isRequired,
  trim: PropTypes.func.isRequired,
  posts: PropTypes.array.isRequired,
  newPost: PropTypes.object
};

const mapStateToProps = state => ({
  posts: state.posts.items,
  newPost: state.posts.item,
  numPosts: state.posts.numPosts
});

export default connect(mapStateToProps, { fetchPosts, trim })(Posts);
