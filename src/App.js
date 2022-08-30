import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import React, { Component } from 'react'
import Navbar from './components/navbar';
import Home from './components/home';
import About from './components/about';
import Contact from './components/contact';
import Users from './components/users';


export default class App extends Component {
  render() {
    return (
      <Router>
        <Navbar />
        <div className="container my-3">
          <Routes>
            <Route exact path="/" element={<Home />} />
          </Routes>
          <Routes>
            <Route exact path="/users" element={<Users />} />
          </Routes>
          <Routes>
            <Route exact path="/about" element={<About />} />
          </Routes>
          <Routes>
            <Route exact path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </Router>
    )
  }
}
