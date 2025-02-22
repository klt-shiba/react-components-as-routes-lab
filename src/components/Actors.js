import React from 'react';
import { actors } from '../data';

const Actors = () => {
  return (
    <div>
      <h1>Actors Page</h1>
      {actors.map((el) => {
        return (
          <div className={"actor"}>
            {el.name}
            <ul>
              {el.movies.map((el) => {
                  return (<li>{el}</li>)
                })
              }
            </ul>
          </div>
        )
      })}
    </div>
  );
};

export default Actors;
