import React, { Component } from 'react';
import './Movies.css';
import { Movie } from '../movie/Movie';
import { MovieDetails } from '../movie-details/MovieDetails';

const movies = [//Liste des films à récupérer avec l'api 'omdbapi'
  "tt0096895",
  "tt0083658",
  "tt0076759",
  "tt6587226",
  "tt0468569",
  "tt0110912",
  "tt0109830",
  "tt0106062",
  "tt0029583",
  "tt0484469"
];

class Movies extends Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <ul className="list-inline">
            <li className="list-inline-item"><button className="btn btn-light">New Release</button></li>
            <li className="list-inline-item"><button className="btn btn-light">Top Picks</button></li>
            <li className="list-inline-item"><button className="btn btn-light">Preorder</button></li>
            <li className="list-inline-item"><button className="btn btn-light">Last Chance</button></li>
          </ul>
        </div>

        <div className="row">
          <MovieDetails movies={movies}></MovieDetails>
        </div>
      </div>
    );
  }
}

export default Movies;
