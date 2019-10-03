import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import About from './About';
import Landing from './Landing';
import Contact from './Contact';
import '../App.css';


class Navigation extends Component{
  
  render(){
    return(
      <div>
        <Router>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
          <Link to={'/'} className="navbar-brand">Move your hands</Link>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            
            <ul class="navbar-nav mr-auto">
              <li class="nav-item">
                <Link to={'/'} className="nav-link">Inicio</Link>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Cursos
                </a>
                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <a class="dropdown-item" href="#">LSM</a>
                  <a class="dropdown-item" href="#"></a>
                  <div class="dropdown-divider"></div>
                  <a class="dropdown-item" href="#">Something else here</a>
                </div>
              </li>
              <li class="nav-item">
                <Link to={'/about'} className="nav-link">Nosotros</Link>
              </li>
              <li class="nav-item">
                <Link to={'/contact'} className="nav-link">Contacto</Link>
              </li>
            </ul>
            <form class="form-inline my-2 my-lg-0">
              <input class="form-control mr-sm-2 form-control-sm" type="search" placeholder="Buscar..." aria-label="Search"/>
            </form>
            

          </div>
        </nav>
        <hr />
        <Switch>
          <Route exact path='/' component={Landing} />
          <Route path='/about' component={About} />
          <Route path='/contact' component={Contact} />
        </Switch>
        <footer className="navbar fixed-bottom navbar-expand-sm navbar-dark bg-dark py-4 mb-0">
          <a href="" className="navbar-brand font-smaller">Move your hands</a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#footbarCollapse" aria-controls="footbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="footbarCollapse">
            <ul className="nav navbar-nav navbar-center">
              <li className="nav-item">
                <Link to={'/faq'} className="nav-link font-small">FAQ</Link>
              </li>
              <li className="nav-item">
                <Link to={'/about'} className="nav-link font-small">Conócenos</Link>
              </li>
              <li className="nav-item">
                <Link to={'/site-map'} className="nav-link font-small disabled">Privacidad</Link>
              </li>
              <li className="nav-item">
                <Link to={'/site-map'} className="nav-link font-small disabled">Mapa del sitio</Link>
              </li>
              <li className="nav-item">
                <Link to={'/site-map'} className="nav-link font-small disabled">Terminos y condiciones</Link>
              </li>
            </ul>
          </div>
        </footer>
        </Router>
      </div>
    )
    
  }
}

export default Navigation;
