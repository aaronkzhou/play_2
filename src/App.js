import React, { useEffect } from 'react';
import { Router } from '@reach/router';
import { Store } from './helper/store'
import Home from './components/home'
import Details from './components/details'
import NotFound from './components/404'
import { fetchPostsAction } from "./helper/actions";
import './App.css';

function App() {
  const { state, dispatch } = React.useContext(Store);

  useEffect(() => {
    state?.posts?.length === 0 && fetchPostsAction(dispatch);
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <div className="app-wrapper">
          <Router>
            <Home exact path="/" />
            <Details exact path="/posts/:id" />
            <NotFound default />
          </Router>
        </div>
      </header>
    </div>
  );
}

export default App;
