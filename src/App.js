import React from 'react';
import './App.css';
import SearchMovie from './SearchMovie';

function App() {
    return (
      <div id="root">
        <h1 className="title">React Movie Search</h1>
        <SearchMovies/>
      </div>
    );
}

export default App;