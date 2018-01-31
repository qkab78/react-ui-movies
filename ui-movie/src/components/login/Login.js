//Component comportant la partie 'CONNEXION'
import React, { Component } from 'react';
import './Login.css';
import { Movies } from '../movies/Movies';
import { Redirect } from 'react-router-dom';

class Login extends Component {
  getToken(email, password){//Fonction nous permettant de nous connecter grâce à l'API 'REQRES' qui nous redirige vers la page de Trailer lorsque l'on se connecte
    return fetch('https://reqres.in/api/login', {//Requête AJAX vers l'api 'reqres' avec comme paramètres l'email et le mot de passe que l'utilisateur entre
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    }).then(
      (response) => {
        console.log(response);
        if (response.status === 200) {//On vérifie le statut de la réponse avant de le rediriger vers la page du Trailer
          alert('Vous êtes connecté ! Bienvenue sur UI-Movies !');
          this.setState({redirectTo: true});

        }
      })
  }
  constructor(props){
    super(props);
    this.state = {
      email:'',
      password:'',
      redirectTo: false
    };
    this.emailChange = this.emailChange.bind(this);
    this.passwordChange = this.passwordChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  emailChange(event) {//On donne la valeur que l'utilisateur a rentré au STATE 'email'
    this.setState({email: event.target.value});
  }
  passwordChange(event) {//On donne la valeur que l'utilisateur a rentré au STATE 'password'
    this.setState({password: event.target.value});
  }

  handleSubmit(event) {//Fonction appelée au 'submit' du formulaire
    this.getToken(this.state.email, this.state.password);
    event.preventDefault();
  }

  render() {
    if (this.state.redirectTo !== false) {//Lorsque l'on est connecté, on est redirigé vers la page du 'Trailer'
      return <Redirect to="/video" />
    }
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit}>
          <div className="form-group row">
            <label htmlFor="email" className="col-sm-2 col-form-label">Email</label>
            <div className="col-sm-10">
              <input type="email" className="form-control" id="email" name="email" value={this.state.email} placeholder="Email" onChange={this.emailChange}/>
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="password" className="col-sm-2 col-form-label">Mot de passe</label>
            <div className="col-sm-10">
              <input type="password" className="form-control" id="password" name="password" value={this.state.password} placeholder="Password" onChange={this.passwordChange}/>
            </div>
          </div>
          <div className="form-group row">
            <div className="offset-sm-2 col-sm-10">
              <button type="submit" className="btn btn-primary">Sign in</button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default Login;
