import React from "react";
import { Link } from "react-router-dom";
import "../../styles/home.css";
import { Modal } from "./modal";

export const Navbar = () => {
  console.log("natvsr", "gdfgdfhgdfhdfh");

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
          {/* --------------------------------------------------------------------------------------------------- */}
          <Link to="/formulario-empresas" style={{ textDecoration: "none" }}>
            <span className="navbar-item mx-2 text-black">
              Regístrate como Empresa
            </span>
          </Link>
          <Link to="/formulario-influencers" style={{ textDecoration: "none" }}>
            <span className="navbar-item mx-2 text-black">
              Regístrate como Influencer
            </span>
          </Link>
          {/* -------------------------------REGISTRO DESPLEGABLE--------------------------------------------- */}
          {/* <div class="dropdown">
            <a class="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
              Regístrate
            </a>

            <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
              <li><Link to="/formulario-empresas" style={{ textDecoration: "none" }}>
                <span className="navbar-item mx-2 text-black">
                  Empresa
                </span>
              </Link></li>
              <li><Link to="/formulario-influencers" style={{ textDecoration: "none" }}>
                <span className="navbar-item mx-2 text-black">
                  Influencer
                </span>
              </Link></li>
            </ul>
          </div> */}
          {/* ------------------------------------------------------------------------------------------------ */}
          <div className="navbar-item mx-2 dropdown">
            <button
              type="button"
              className="btn btn-primary dropdown-toggle"
              id="dropdownMenuButton1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              style={{ marginLeft: "15px" }}
            >
              <i className="far fa-user-circle" id="icono">
                {" "}
                <span className="sesion">
                  {/* <a class="dropdown-item" href={`/vista/${parametro.email}`}>
                Editar Perfil
                </a> */}
                  Iniciar Sesión</span>
              </i>
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
              <li><a className="dropdown-item" data-bs-toggle="modal" data-bs-target="#empresa" href="#">Empresa</a></li>
              <li><a className="dropdown-item" data-bs-toggle="modal" data-bs-target="#influencer" href="#">Influencer</a></li>
            </ul>
            <Modal user="empresa" />
            <Modal user="influencer" />
          </div>
        </div>
      </div>
    </nav>
  );
};
