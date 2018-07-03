import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="wrapper">
    <div className="jumbotron text-center">
    <h1 className="display-4">NEW YORK TIMES ARTICLE SCRUBBER</h1>
    <p className="lead">Search for and annotate articles of interest.</p>

    <hr className="my-4"/>
  </div>
<div className="input-group mb-3">
  <div className="input-group-prepend">
  </div>
  <input type="text" placeholder="Topic" className="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default"/>
</div>

<div className="input-group mb-3">
  <div className="input-group-prepend">
  </div>
  <input type="text" placeholder="Start Year" className="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default"/>
</div>
<div className="input-group mb-3">
  <div className="input-group-prepend">
  </div>
  <input type="text" placeholder="End Year"className="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default"/>
</div>
</div>
    );
  }
}

export default App;
