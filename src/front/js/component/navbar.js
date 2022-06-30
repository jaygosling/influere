import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import "../../styles/home.css";
import { Modal } from "./modal";

export const Navbar = () => {
  const {store, actions} = useContext(Context);
  const token = sessionStorage.getItem("token");
  const userig = sessionStorage.getItem("userig");
  const userid = sessionStorage.getItem("userid");
  const justLogin = sessionStorage.getItem("justLogin");

 if (justLogin && token && token != "" && token != undefined) {
  return (
    <nav className="navbar navbar-light bg-white">
      <div className="container-fluid mx-5">
        <Link to="/">
          <span className="navbar-brand mb-0 h1 text-black">
            <img
              src="https://i.ibb.co/X8KB9ZY/Influe-re.png"
              className="img-fluid shadow-4"
              alt="..."
            />
          </span>
        </Link>
        <div className="ml-auto">
          <Link to="/Directorio" style={{ textDecoration: "none" }}>
            <span className="navbar-item mx-2 text-black menu">
              Influencers
            </span>
          </Link>
          
          <Link to={/* userig? */ `/vistainflu/${userig}`/* : `/vistaemp/${userid}` */} style={{ textDecoration: "none" }}>
            <span class="navbar-item mx-2 text-black menu" href="#">
              Área Privada
            </span>
          </Link>
          <span className="navbar-item mx-2 dropdown">

            <button
              type="button"
              className="btn btn-primary navbar-item mx-2"
              style={{ marginLeft: "15px" }}
            >
              <i className="far fa-user-circle" id="icono">
                {" "}
                <span className="sesion">
                  Cerrar Sesión</span>
              </i>
            </button>
          </span>

        </div>
      </div>
    </nav>
  );} else {
    return (
    <nav className="navbar navbar-light bg-white">
      <div className="container-fluid mx-5">
        <Link to="/">
          <span className="navbar-brand mb-0 h1 text-black">
            <img
              src="https://i.ibb.co/X8KB9ZY/Influe-re.png"
              className="img-fluid shadow-4"
              alt="..."
            />
          </span>
        </Link>
        <div className="ml-auto">
          <Link to="/Directorio" style={{ textDecoration: "none" }}>
            <span className="navbar-item mx-2 text-black menu">
              Influencers
            </span>
          </Link>
          <span class="dropdown navbar-item mx-2">
            <span class="btn btn-none dropdown-toggle navbar-item mx-2" href="#" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
              Regístrate
            </span>

            <ul class="dropdown-menu navbar-item mx-2" aria-labelledby="dropdownMenuLink">
              <Link to="/formulario-empresas" style={{ textDecoration: "none" }}>
              <li><a className="dropdown-item" href="#">Empresa</a></li>
              </Link>
              <Link to="/formulario-influencers" style={{ textDecoration: "none" }}>
              <li><a className="dropdown-item" href="#">Influencers</a></li>
              </Link>
            </ul>
          </span>
          <span className="navbar-item mx-2 dropdown">

            <button
              type="button"
              className="btn btn-primary dropdown-toggle navbar-item mx-2"
              id="dropdownMenuButton1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              style={{ marginLeft: "15px" }}
            >
              <i className="far fa-user-circle" id="icono">
                {" "}
                <span className="sesion">
                  Iniciar Sesión</span>
              </i>
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
              <li><a className="dropdown-item" data-bs-toggle="modal" data-bs-target="#empresa" href="#">Empresa</a></li>
              <li><a className="dropdown-item" data-bs-toggle="modal" data-bs-target="#influencer" href="#">Influencer</a></li>
            </ul>
            <Modal sesion="empresa" />
            <Modal sesion="influencer" />
          </span>

        </div>
      </div>
    </nav>
  );
  };
};
