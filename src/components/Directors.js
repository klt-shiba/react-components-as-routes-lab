import React from 'react';
import { directors } from '../data';

const Directors = () => {
  return (
    <div>
      <h1>Directors Page</h1>
      {directors.map((el)=> {
          return (<div>{el.name}
          <ul>
      {el.movies.map((el) => {
          return (<li>{el}</li>)
        })
      }
      </ul></div>)
        })
      }
    </div>
  );
}

export default Directors
