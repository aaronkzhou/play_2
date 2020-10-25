import React, { useEffect, useState } from 'react';
import { Router } from '@reach/router';
import Home from './components/home'
import Details from './components/details'
import NotFound from './components/404'
import './App.css';

function App() {
  // useEffect(() => {
  //   fetch('https://jsonplaceholder.typicode.com/posts')
  //     .then(response => response.json())
  //     .then(json => console.log(json))
  // })

  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <Home exact path="/" />
          <Details exact path="/posts/:id" />
          <NotFound default />
        </Router>
      </header>
    </div>
  );
}

export default App;
