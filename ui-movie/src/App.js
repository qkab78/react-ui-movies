import React, { Component } from 'react';
import './App.css';
import { Route, Link } from 'react-router-dom';
import Movies from './components/movies/Movies';
import Login from './components/login/Login';
import Video from './components/video/Video';

const MovieList = ({match}) => (<Movies/>)//Component appelé lors de l'appel à l'url indiquée dans la balise 'Route'
const LoginForm = ({match}) => (<Login/>)//Component appelé lors de l'appel à l'url indiquée dans la balise 'Route'
const VideoTrailer = ({match}) => (<Video/>)//Component appelé lors de l'appel à l'url indiquée dans la balise 'Route'
class App extends Component {
  render() {
    return (
        <div className="App">
          <header className="">
            <nav className="navbar navbar-toggleable-md navbar-inverse bg-inverse">
              <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <Link to="/movies" className="navbar-brand">Ui-Movie</Link>
              <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                  <Link to="/movies" className="nav-item nav-link active">Accueil <span className="sr-only">(current)</span></Link>
                  <Link to="/" className="nav-item nav-link">Connexion</Link>
                  <Link to="/movies" className="nav-item nav-link">Films</Link>
                  <Link to="/video" className="nav-item nav-link">Player</Link>
                </div>
              </div>
            </nav>
          </header>
          <Route path="/video" component={VideoTrailer}/>
          <Route path="/" component={MovieList}/>
          <Route path="/movies" component={MovieList}/>
          <Route path="/" component={LoginForm}/>
        </div>
    );
  }
}


export default App;
