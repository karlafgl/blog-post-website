import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return(
    <nav className="navbar navbar-expand-lg navbar-light bg-light p-3">
        <div className="container">
            <Link className="navbar-brand" to="/">
                <i className="fa fa-pencil-square-o mr-3" aria-hidden="true" style={{fontSize: '1.8em', color: '#fbb4bd', fontStyle: 'italic', textShadow: '2px 2px #FF0000'}}> POST BLOG</i> 
            </Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item active">
                        <Link to="/" className="nav-link h3">Notes</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/create" className="nav-link h3">Create Note</Link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
  )
}

export default Navigation;