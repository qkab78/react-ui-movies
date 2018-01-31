import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter, Route } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';

const Home = () => (//component appelé lors du lancement de l'application
  <div>
    <App />
  </div>
)

ReactDOM.render((
  <BrowserRouter>
    <Route path="/" component={Home}/>
  </BrowserRouter>
), document.getElementById('root'));
registerServiceWorker();
