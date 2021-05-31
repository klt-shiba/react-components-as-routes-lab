import React from 'react';
import { movies } from '../data';

const Movies = () => {
  return (
    <div>
        <h1>Movies Page</h1>
        {console.log(movies)}
        {movies.map((el) => {
          return (<div>{el.title}{el.time}{el.metascore}<ul>{el.genres.map((el)=> {return <li>{el}</li>})}</ul></div>)
        })
      }
    </div>
  );
};

export default Movies;
