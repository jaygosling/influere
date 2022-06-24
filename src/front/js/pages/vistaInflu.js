import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { IframeInstagram } from "../component/iFrameInsta";
import { useParams } from "react-router-dom";
import { Headervistainflu } from "../component/headervistainflu";

export const VistaInflu = () => {
  const { store, actions } = useContext(Context);
  const [url, setUrl] = useState("");
  const[email, setEmail] = useState("");
  const[password, setPassword]= useState("");
  const[nombre, setNombre]= useState("");
  const[apellidos, setApellidos]= useState("");
  const[igUser, setIgUser]= useState("");
  const [autonomia, setAutonomia]= useState("");
  const [ciudad, setCiudad]= useState("");
  const [sector, setSector]= useState("");
  const [cuentame, setCuentame] =useState("");
 
   
  return (
    <div>
      <Headervistainflu />

      {/* --------------------------------------------------- */}
      <div
        className="container"
        style={{
          display: "flex",
          justifyContent: "right",
          alignItems: "center",
          marginTop: "10px",
        }}
      >
        <div className="row"
          class="btn-group"
          style={{ height: "40px", width: "40px", marginRight: "100px"}}
         >
          <button
            type="button"
            class="btn btn-warning dropdown-toggle"
            data-bs-toggle="dropdown"
            aria-expanded="false"
            style={{}}
          >
            <i class="fas fa-at"></i>
          </button>
          <ul class="dropdown-menu">
            <li type="button" style={{ float: "left" }}>
              <a href={"https://www.instagram.com/"}>
                <img
                  src={
                    "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Instagram_logo_2022.svg/1200px-Instagram_logo_2022.svg.png"
                  }
                  style={{
                    maxWidth: "30px",
                    maxHeight: "30px",
                    marginTop: "5px",
                    marginLeft: "10px",
                  }}
                />
              </a>
            </li>
            <li type="button" style={{ float: "left" }}>
              <a
                class="dropdown-item"
                href={
                  "https://www.tiktok.com/login?redirect_url=https%3A%2F%2Fwww.tiktok.com%2Fupload%3Flang%3Des&lang=es"
                }
              >
                <img
                  src={
                    "https://w7.pngwing.com/pngs/829/574/png-transparent-tiktok-hd-logo.png"
                  }
                  style={{
                    maxWidth: "30px",
                    maxHeight: "30px",
                    marginTop: "2px",
                  }}
                />
              </a>
            </li>
          </ul>
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
              <a class="dropdown-item" href={"/formulario-influencers"}>
                Editar Perfil
              </a>
            </li>
            {/* <li><a class="dropdown-item" href="/">Another action</a></li>
                            <li><a class="dropdown-item" href="#">Something else here</a></li> */}
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
        <br></br>
        <br></br>
      </div>
      <br></br>
      <br></br>
      {/* ------------------------------------------------- */}
      <div className="container" style={{ maxWidth: "100%" }}>
        <div className="row ">
          <div
            className="col-md-6"
            style={{
              paddingLeft: "15px",
              textAlign: "right",
            }}>
            <h1 className="tituloabout" style={{color: "#ffc107"}}>DATOS SOBRE MI </h1>
            <span
              action="/influencers"
              method="GET"
              className="title1"
              style={{ color: "#363263" }}
            ><strong> Nombre: {nombre}
            {/* {store.people[parametro.i]?.height +" "+"cm"} */}</strong>
             
            </span>
            <h2 className="title1 ">Sector: {sector}</h2>
            <h4 className="title1 " style={{ opacity: "80%" }}>
              Usuario: {username}
            </h4>
            <h6 className="title1 " style={{ opacity: "80%" }}>
              Provincia (ciudad): {provincia} {ciudad}
            </h6>
            <br></br>
            <br></br>
            <h5
              className="title1 "
              style={{ opacity: "40%", maxWidth: "100%", marginLeft:"50%" }}
            >
              Breve descripción sobre el influencer, escrito por él mismo, puede
              introducir actitudes, aptitudes y logros, etc etc.
            </h5>
          </div>
          <div
            className="col-md-6 rounded-circle "
            style={{
              display: "flex",
              placeContent:"left"
            }}
          >
            <img
              src={
                "https://static2.mujerhoy.com/www/multimedia/201904/29/media/cortadas/marta-lozano-clave-para-combatir-todos-signos-envejecimiento-k4s-U8072873282cMF-624x468@MujerHoy.jpg"
              }
              style={{
                maxWidth: "500px",
                opacity: "100%",
                transform: "revert",
                marginLeft:"5%",
                borderRadius:"15px"

                
              }}
            />
          </div>
        </div>

        <br></br>
        <br></br>
        <div className="row" style={{ margin: "auto 25% auto 25%" }}>
          <table class="table">
            <thead>
              <tr style={{ textAlign: "center" }}>
                <th scope="col">1,221</th>
                <th scope="col">1,7M</th>
                <th scope="col">1,082</th>
              </tr>
            </thead>
            <tbody>
              <tr style={{ textAlign: "center" }}>
                <td>Publicaciones</td>
                <td>Seguidores</td>
                <td>Seguidos</td>
              </tr>
            </tbody>
          </table>
        </div>
        <br></br>

        <h1 className="tituloabout" style={{ textAlign: "center", color:"#ffc107"}}>
          MIS ÚLTIMAS PUBLICACIONES{" "}
        </h1>
        {/* ---------------AGREGAR UN POST NUEVO-------------------------------------------------------------------------- */}

        <div className="text-center mt-5 title1">
          <h4 style={{ color: "#302880" }}>Agrega un nuevo post:</h4>
          {/* <ContainerLista/> */}

          <form>
            <div className="todo-list">
              <div className="file-input">
                <input
                  type={"text"}
                  onChange={(e) => setUrl(e.target.value)}
                  value={url}
                />

                <button
                  type="button"
                  class="btn-light"
                  style={{ color: "#302880" }}
                  // disabled={description ? "" : "disabled"}
                  onClick={() => {
                    actions.agregar(url);
                    setUrl("");
                  }}
                >
                  Ok
                </button>
              </div>
            </div>
          </form>
        </div>
        <br></br>
        <br></br>
        <br></br>
        {/* --------------------ESPACIO DONDE SE AGREGARÁN LOS POST --------------------------------------------------------*/}

        <div className="row ">
          {store.posts?.map((e, i) => {
            return (
              <div key={i} className="col-4">
                <IframeInstagram url={e} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
