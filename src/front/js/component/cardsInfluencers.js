import React from "react";
import "../../styles/home.css";
import { Link } from "react-router-dom";
import NumberFormat from 'react-number-format'

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
          <h4 className="card-title titulocards"><b>@{username}</b></h4>
          <ul className="card-text" style={{ listStyle: "none" }}>
            <li>
              <b>Seguidores:</b> <NumberFormat value={seguidores} displayType={'text'} thousandSeparator={true}/></li>
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
