import React from "react";
import "../../styles/home.css"

export const CardsInflu = ({
  imagen,
  nombre,
  username,
  seguidores,
  sector,
  ubicacion
}) => {
  return (
    <div className="card " style={{ width: "20rem" }}>
      <span className="border border-primary rounded">
        <img src={imagen} class="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{nombre}</h5>
          <ul className="card-text" style={{listStyle : "none"}}>
            <li><b>Instagram:</b> {username}</li>
            <li><b>Seguidores:</b> {seguidores}</li>
            <li><b>Categoria:</b> {sector}</li>
            <li><b>Ciudad:</b> {ubicacion}</li>
          </ul>
          <button href="#" class="btn btn-primary rounded-pill">
            VER MÁS
          </button>
        </div>
      </span>
    </div>
  );
};
