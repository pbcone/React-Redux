import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createPost } from '../actions/postActions';


const counterStyle = {
  float: 'right',
  margin: '0',
  fontSize: '32px',
  border: '5px solid black',
  padding: '10px',
  background: 'gray',

};

class Counter extends Component {
  render() {
    return (
      <div style={counterStyle}>
        <p>Posts Displayed</p>
        <p>{this.props.numPosts} </p>
      </div>
    );
  }
}

// Counter.propTypes = {
//   numPosts: PropTypes.int.isRequired
// };
const mapStateToProps = state => ({
  numPosts: state.posts.numPosts
});

export default connect(mapStateToProps, null)(Counter);
