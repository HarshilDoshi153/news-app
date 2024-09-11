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
            <Route path="/newsapp" element={<News pageSize = {15} category="general" title="General"/>} /> {/* Home page */}
            <Route path="/newsapp/sports" element={<News pageSize = {15} category="sports" title="Sports"/>} /> {/* sports news */}
            <Route path="/newsapp/business" element={<News pageSize = {15} category="business" title="Business"/>} /> {/* business news */}
            <Route path="/newsapp/entertainment" element={<News pageSize = {15} category="entertainment" title="Entertainment"/>} /> {/* entertainment news */}
            <Route path="/newsapp/science" element={<News pageSize = {15} category="science" title="Science"/>} /> {/* science news */}
            <Route path="/newsapp/technology" element={<News pageSize = {15} category="technology" title="Technology"/>} /> {/* technology */}
            <Route path="/newsapp/health" element={<News pageSize = {15} category="health" title="Health"/>} /> {/* health news */}
            <Route path="/newsapp/about" element={<About />} /> {/* About component */}
          </Routes>
        </div>
      </Router>
    )
  }
}
