import React from "react";
import "../../styles/home.css";
import { Link } from "react-router-dom";

export const CardsInflu = ({
  imagen,
  nombre,
  username,
  seguidores,
  sector,
  ubicacion,
}) => {
  const userType = sessionStorage.getItem("userType");
  return (
    <div className="card " style={{ width: "20rem" }}>
      <span className="border border-primary rounded">
        <img src={imagen} class="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{nombre}</h5>
          <ul className="card-text" style={{ listStyle: "none" }}>
            <li>
              <b>Instagram:</b> {username}
            </li>
            <li>
              <b>Seguidores:</b> {seguidores}
            </li>
            <li>
              <b>Categoria:</b> {sector}
            </li>
            <li>
              <b>Ciudad:</b> {ubicacion}
            </li>
          </ul>
          <Link to={'/vistainfluPb/'+username}>
          <button href="#" class="btn btn-primary rounded-pill">
            VER MÁS
          </button>
          </Link>
          { userType == "empresa"?
          <button type="button" className="btn btn-danger likeBtn">
            &#9825;
          </button>
          : ""}
        </div>
      </span>
    </div>
  );
};
