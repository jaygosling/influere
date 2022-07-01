import React, { useContext, useEffect} from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { CardsInflu } from "../component/cardsInfluencers";
import { Headervistaempresa } from "../component/headervistaempresa";
import { useParams } from "react-router-dom";


export const VistaEmp = () => {
  const { store, actions } = useContext(Context);
  const parametro  = useParams();

  useEffect(()=>{
    actions.conseguirEmpresa(parametro.id);
  }, []);

  return (
    <div>
      <Headervistaempresa />

      <div className="container">
        {/* ------------------------ */}
        <br></br>
        {/* ------------------------ */}
        <div
          className="row container"
          style={{
            display: "flex",
            justifyContent: "right",
            alignItems: "center",
            marginTop: "5px",
          }}
        >
          <div class="btn-group" style={{ height: "40px", width: "40px" }}>
            {/* <button type="button" class="btn btn-light"><i class="fas fa-home"><a class="dropdown-item" href={"/vistaInflu"}></a></i></button> */}
            <button
              type="button"
              class="btn btn-warning dropdown-toggle"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <i class="fas fa-user-edit"></i>
            </button>
            <ul class="dropdown-menu">
              <li>
                <a class="dropdown-item" href={`/editar-empresa/${parametro.id}`}>
                  Editar Perfil
                </a>
              </li>
              
              <li>
                <hr class="dropdown-divider" />
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  Cerrar Sesión
                </a>
              </li>
            </ul>
          </div>
        </div>
        {/* ----------------------------------------------------------------------------------- */}
        <div className="container" style={{ maxWidth: "3000px" }}>
          <div className="row container">
            <div
              className="col-md-7"
              style={{ paddingLeft: "15px", textAlign: "right" }}
            >
              <h1 className="tituloabout" style={{color: "#ffc107"}}>DATOS DE EMPRESA
             </h1>
              <h1 className="title1" style={{ color: "#302880" }}>
              Nombre: {`${store.datosEmpresa.nombre} ${store.datosEmpresa.apellidos}`}
              </h1>
              <h4 className="title1 " style={{ opacity: "80%" }}>Razón Social: {`${store.datosEmpresa.razon_social}`}</h4>
              <h4 className="title1 " style={{ opacity: "80%" }}>Sector: {`${store.datosEmpresa.sector}`}</h4>
              <h5 className="title1 " style={{ opacity: "80%" }}>Ubicación: {`${store.datosEmpresa.autonomia} (${store.datosEmpresa.ciudad})`}</h5>
              <h7 className="title1 " style={{ opacity: "80%" }}>
              Email: {`${store.datosInfluencer.email}`}
              </h7>
              <br></br>
              <br></br>
              <h6
                className="title1 "
                style={{ opacity: "40%", maxWidth: "100%" }}
              >
                {`${store.datosEmpresa.bio}`}
              </h6>
            </div>
            <div
              className="col-md-5"
              style={{
                display: "flex",
                justifyContent: "center",
                alignContent: "center",
              }}
            >
              <img
                src={
                  "https://brandemia.org/sites/default/files/inline/images/zara_nuevo_logo.jpg"
                }
                style={{
                  maxWidth: "300px",
                  opacity: "80%",
                  transform: "revert",
                }}
              />
            </div>
          </div>
          {/* ------------------------ */}
          <br></br>
          <br></br>
          {/* ------------------------ */}
          <div className=" container-fluid">
          <h1 className="tituloabout" style={{ textAlign: "center", color: "#ffc107"}}>
            INFLUENCERS FAVORITOS{" "}
          </h1>
          </div>
         

          {/* ------------------------ */}
          <br></br>
          <br></br>
          {/* ------------------------ */}
          <div className="row container">
            <div className="row ">

              {/* {store.favInflu?.map((ig_user, id) => {
                        return (
                            <div key={id} className="col-4">
                                <CardsInflu name={ig_user}
                                />
                            </div>
                        );
                    })} */}
              <di className="col-md-4">
                <CardsInflu />
              </di>
              <di className="col-md-4">
                <CardsInflu />
              </di>
              <di className="col-md-4">
                <CardsInflu />
              </di>
            </div>
          </div>
        </div>
        <br></br>
        <br></br>
      </div>
    </div>
  );
};
