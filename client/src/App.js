import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Banner from './components/Banner';
import Search from './components/Search';
import Results from './components/Results';
import SavedArticles from './components/SavedArticles';


class App extends Component {
  render() {
    return (
      <div className="wrapper">
        <Banner />
        <Search />
        <Results />
        <SavedArticles />
      </div>
    );

  }
}

export default App;
