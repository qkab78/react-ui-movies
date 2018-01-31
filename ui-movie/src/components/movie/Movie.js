//Component qui affiche les informations d'un film
import React from 'react';
import './Movie.css';
export class Movie extends React.Component {

  render() {
    return (
      <div className="card">
        <img className="card-img-top" src={this.props.movie.Poster} alt={"Card image cap"}/>
        <div className="card-block">
          <h4 className="card-title">{this.props.movie.Title}</h4>
          <p className="card-text">{this.props.movie.Plot}</p>
          <a href="#" className="btn btn-primary">Watch</a>
        </div>
      </div>
    );
  };
}

Movie.defaultProps = {
  movies :[]
  }
