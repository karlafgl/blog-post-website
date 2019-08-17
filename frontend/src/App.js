import React from 'react';
import {BrowserRouter as Router, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import PostsList from './components/PostsList';
import CreatePost from './components/CreatePost';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <Navigation/>
      <Route path="/" exact component={PostsList} />
      <Route path="/edit/:id" component={CreatePost} />
      <Route path="/create" component={CreatePost} />
      <Footer/>
    </Router>
  );
}

export default App;
