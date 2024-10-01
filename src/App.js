import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import News from './components/News';
import About from './components/About';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: '', // State to hold the search term
    };
  }

  handleSearch = (term) => {
    this.setState({ searchTerm: term }); // Update the search term when user submits
  };
  
  render() {
    return (
      <Router>
        <div>
          <Navbar onSearch={this.handleSearch} /> {/* Navbar component with links */}
          <Routes>
            <Route path="/news-app/" element={<News pageSize={15} category="general" title="General" searchTerm={this.state.searchTerm} />} /> {/* Home page */}
            <Route path="/sports" element={<News pageSize={15} category="sports" title="Sports" searchTerm={this.state.searchTerm} />} /> {/* sports news */}
            <Route path="/business" element={<News pageSize={15} category="business" title="Business" searchTerm={this.state.searchTerm} />} /> {/* business news */}
            <Route path="/entertainment" element={<News pageSize={15} category="entertainment" title="Entertainment" searchTerm={this.state.searchTerm} />} /> {/* entertainment news */}
            <Route path="/science" element={<News pageSize={15} category="science" title="Science" searchTerm={this.state.searchTerm} />} /> {/* science news */}
            <Route path="/technology" element={<News pageSize={15} category="technology" title="Technology" searchTerm={this.state.searchTerm} />} /> {/* technology */}
            <Route path="/health" element={<News pageSize={15} category="health" title="Health" searchTerm={this.state.searchTerm} />} /> {/* health news */}
            <Route path="/about" element={<About />} /> {/* About component */}
          </Routes>
        </div>
      </Router>
    )
  }
}
