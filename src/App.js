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
            <Route path="/" element={<News pageSize = {15} category="general" title="General"/>} /> {/* Home page */}
            <Route path="/sports" element={<News pageSize = {15} category="sports" title="Sports"/>} /> {/* sports news */}
            <Route path="/business" element={<News pageSize = {15} category="business" title="Business"/>} /> {/* business news */}
            <Route path="/entertainment" element={<News pageSize = {15} category="entertainment" title="Entertainment"/>} /> {/* entertainment news */}
            <Route path="/science" element={<News pageSize = {15} category="science" title="Science"/>} /> {/* science news */}
            <Route path="/technology" element={<News pageSize = {15} category="technology" title="Technology"/>} /> {/* technology */}
            <Route path="/health" element={<News pageSize = {15} category="health" title="Health"/>} /> {/* health news */}
            <Route path="/about" element={<About />} /> {/* About component */}
          </Routes>
        </div>
      </Router>
    )
  }
}
