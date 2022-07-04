import React, { useContext } from "react";
import "../../styles/home.css";
import { Context } from "../store/appContext";
import { CardsInflu } from "./cardsInfluencers";
import { Col, Card } from "react-bootstrap";

export const Carruselinfluencers = () => {
  const { store, actions } = useContext(Context);
  return (
    <div class="container">
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <h4 className="antetitulo4">¿READY PARA DAR EL SALTO?</h4>
      <h1
        className="text-center pb-2 tituloabout"
        href="https://3000-jaygosling-influere-ai7nxhchf88.ws-eu47.gitpod.io/Directorio"
      >
        DIRECTORIO DE INFLUENCERS
      </h1>

      <div className="container">
        <div className="row my-5">
          {store.influencers?.map((obj, i) => {
            return (
              <div className="col-3">
                <CardsInflu
                  nombre={obj.name}
                  username={obj.ig_user}
                  sector={obj.categoria}
                  i={i}
                  seguidores={obj.seguidores}
                  imagen={obj.profilepic}
                  ubicacion={obj.ciudad}
                />
              </div>
            );
          })}
        </div>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
      </div>
    </div>
  );
};
