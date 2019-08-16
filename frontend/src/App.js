import React from 'react';
import {BrowserRouter as Router, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './components/Navigation';
import PostsList from './components/PostsList';
import CreatePost from './components/CreatePost';

function App() {
  return (
    <Router>
      <Navigation/>
      <Route path="/" exact component={PostsList} />
      <Route path="/edit/:id" component={CreatePost} />
      <Route path="/create" component={CreatePost} />
    </Router>
  );
}

export default App;
