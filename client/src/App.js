import React, { useState } from 'react';
import {
  Route,
  Link,
  Switch
} from "react-router-dom";
import MovieList from "../src/Movies/MovieList";
import Movie from "../src/Movies/Movie";
import SavedList from './Movies/SavedList';

const App = () => {
  const [savedList, setSavedList] = useState( [] );

  const addToSavedList = movie => {
    setSavedList( [...savedList, movie] );
  };

  return (
    <div>
      <SavedList list={savedList} />
      <Route path="/">
        <MovieList/>
      </Route>
      <Route path="/movies/:movieID">
        <Movie/>
      </Route>
    </div>
  );
};

export default App;
