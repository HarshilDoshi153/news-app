import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import News from './components/News';
import About from './components/About';

export default class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar /> {/* Navbar component with links */}
          <Routes>
            <Route path="/" element={<News pageSize = {15} category="general"/>} /> {/* Home page */}
            <Route path="/sports" element={<News pageSize = {15} category="sports"/>} /> {/* sports news */}
            <Route path="/business" element={<News pageSize = {15} category="business"/>} /> {/* business news */}
            <Route path="/entertainment" element={<News pageSize = {15} category="entertainment"/>} /> {/* entertainment news */}
            <Route path="/science" element={<News pageSize = {15} category="science"/>} /> {/* science news */}
            <Route path="/technology" element={<News pageSize = {15} category="technology"/>} /> {/* technology */}
            <Route path="/health" element={<News pageSize = {15} category="health"/>} /> {/* health news */}
            <Route path="/about" element={<About />} /> {/* About component */}
          </Routes>
        </div>
      </Router>
    )
  }
}
