import React, { Component } from 'react';
import cursos from '../img/cursos.jpg'
import historia from '../img/historia.png'
import quienes from '../img/quienes.jpg'
import nosotros from '../img/nosotros.png'
import organigrama from '../img/organigrama.jpg'
import '../App.css';


class About extends Component{
  render(){
    return(
      <div className="wrapper">
          <div className="container mt-5">
            <h3 className="text-center">Nosotros</h3>
            <div className="row mt-2 ml-3">
                <div className="col-4">
                    <img src={nosotros} className="img-delimiter"/>
                </div>
                <div className="col-8">
                    <h5>Mision</h5>
                    <p className="font-weight-light text-justify">
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                    </p>
                    <hr/>
                    <h5>Vision</h5>
                    <p className="font-weight-light text-justify">
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                    </p>
                </div>
            </div>

            <hr className="mb-0"/>
            <hr className="mt-0"/>
            <h5 className="text-center">Quienes somos</h5>
            
            <div className="row mt-1 ml-3">
                <div className="col-4">
                    <img src={quienes} className="img-delimiter"/>
                </div>
                <div className="col-8">
                    <p className="font-weight-light text-justify">
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                    </p>
                </div>
            </div>

            <hr className="mb-0"/>
            <hr className="mt-0"/>
            <h5 className="text-center">Historia</h5>
            
            <div className="row mt-1 ml-3">
                <div className="col-8">
                    <p className="font-weight-light text-justify">
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                    </p>
                </div>
                <div className="col-4">
                    <img src={historia} className="img-delimiter"></img>
                </div>
            </div>

            <hr className="mb-0"/>
            <hr className="mt-0"/>
            <h5 className="text-center">Cursos que impartimos</h5>
            
            <div className="row mt-1 ml-3">
                <div className="col-4">
                    <img src={cursos} className="img-delimiter"/>
                </div>
                <div className="col-8">
                    <p className="font-weight-light text-justify">
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                    </p>
                </div>
            </div>
            <hr className="mb-0"/>
            <hr className="mt-0"/>
            <h4 className="font-weight-bold">Organigrama</h4>
            <center><img src={organigrama} className="my-5 img-organigrama"/></center>
            <br/><br/><br/><br/>
          </div>
      </div>
    )
  }
}

export default About;