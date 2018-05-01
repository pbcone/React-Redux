import React, { Component } from 'react';
import { render } from 'react-dom';
import { connect, Provider } from 'react-redux';

import { Link } from 'react-router-dom';
import { Route, Switch } from 'react-router';

import Posts from './components/Posts';
import PostForm from './components/Postform';
import Counter from './components/Counter';
import store from './store';
import './App.css';

const ConnectedSwitch = connect(state => ({
  location: state.location
}))(Switch)

class App extends Component {
  render() {
  return (
    <Provider store={store}>
      <div className="App">
        <header className="App-header">
          <h1>
              A React Redux Applicaiton for State Management
          </h1>
        </header>
        <div className="Counter">
          <Counter />
        </div>
        <div className="Post-form">
          <PostForm/>
        </div>

        <hr />
        <div className="Posts">
          <Posts />
        </div>
      </div>
    </Provider>
  );
}
}

// const App = () => (
  // <ConnectedSwitch>
  //   <Route exact path="/" component={() => (<h1>Home <Link to="/about">About</Link></h1>)} />
  //   <Route path="/about" component={() => (<h1>About <Link to="/">Home</Link></h1>)} />
  // </ConnectedSwitch>

// )

export default App
