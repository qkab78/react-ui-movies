import React from 'react';
import { Movie } from '../movie/Movie';
export class MovieDetails extends React.Component {
  getMovies(id){//Fonction qui nous récupère les informations des films passés en 'props' provenant du component 'Movies' grâce à l'api 'omdbapi'
    return fetch('http://www.omdbapi.com/?apikey=af674ce0&i='+id)
      .then((response) => response.json())
      .then(
        (responseJson) => {
          this.setState({movies:this.state.movies.concat(responseJson)});
        }
      ).catch((error) => console.error(error));
  }
  constructor(props){
    super(props)
    this.state = {
      movies:[]
    };
  }
  componentDidMount(){
    this.props.movies.map((id) => this.getMovies(id));//On lance la fonction lorsque le Component a fini de chargé
  }
  render() {
    let items = this.state.movies.map((movie, i) => {return <Movie key={i} movie={movie}></Movie>});
    return items;
  };
}
export default MovieDetails;
