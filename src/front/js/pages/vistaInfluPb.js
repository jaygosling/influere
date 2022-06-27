import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { IframeInstagram } from "../component/iFrameInsta";
import { VistaInflu } from "./vistaInflu";
import { useParams } from "react-router-dom";


export const VistaInfluPb = () => {
  const { store, actions } = useContext(Context);
  const [url, setUrl] = useState("");
  const parametro = useParams();

  useEffect(() => {
    actions.conseguirInfluencer(parametro.id);
  }, []);

  return (
    <div>
      <Headervistainflu />

      {/* --------------------------------------------------- */}
      <div
        class="btn-group container"
        style={{
          height: "40px",
          display: "flex",
          justifyContent: "right",
          alignItems: "center",
          marginTop: "5px",
        }}
      >
        {/* <button type="button" class="btn btn-light"><i class="fas fa-home"><a class="dropdown-item" href={"/vistaInflu"}></a></i></button> */}
        <button
          type="button"
          className="btn btn-outline-primary"
          style={{ marginRight: "5px", maxWidth: "200px" }}
        >
          <a href={"/enviarEmail"}>Enviar mensaje</a>
        </button>

        <button
          type="button"
          className="btn btn-outline-primary"
          style={{ maxWidth: "40px" }}
          // onClick={(name) => {
          //   actions.addFavInf(name);
          // }}
        >
          <i class="far fa-heart"></i>
        </button>
      </div>
    
      <br></br>
      <br></br>
      <div className="container" style={{ maxWidth: "100%" }}>
        <div className="row ">
          <div
            className="col-md-6"
            style={{
              paddingLeft: "15px",
              textAlign: "right",
            }}
          >
            <h1 className="tituloabout" style={{ color: "#ffc107" }}>
              DATOS SOBRE MI{" "}
            </h1>
            <span
              action="/influencers"
              method="GET"
              className="title1"
              style={{ color: "#363263" }}
            >
              <strong> Nombre: {`${store.datosInfluencer.nombre}`}</strong>
            </span>
            <h2 className="title1 ">
              Sector: {`${store.datosInfluencer.categoria}`}
            </h2>
            <h4 className="title1 " style={{ opacity: "80%" }}>
              Usuario: {`${store.datosInfluencer.ig_user}`}
            </h4>
            <h6 className="title1 " style={{ opacity: "80%" }}>
              Provincia (ciudad):{" "}
              {`${store.datosInfluencer.autonomia} ${store.datosInfluencer.ciudad}`}
              {/* {provincia} {ciudad} */}
            </h6>
            <br></br>
            <br></br>
            <h5
              className="title1 "
              style={{ opacity: "40%", maxWidth: "100%", marginLeft: "50%" }}
            >
              {" "}
              {`${store.datosInfluencer.bio}`}
            </h5>
          </div>
          <div
            className="col-md-6 rounded-circle "
            style={{
              display: "flex",
              placeContent: "left",
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
                marginLeft: "5%",
                borderRadius: "15px",
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
                <th scope="col">{`${store.datosInfluencer.publicaciones}`}</th>
                <th scope="col">{`${store.datosInfluencer.followers}`}</th>
                <th scope="col">{`${store.datosInfluencer.seguidos}`}</th>
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

        <h1
          className="tituloabout"
          style={{ textAlign: "center", color: "#ffc107" }}
        >
          ÚLTIMAS PUBLICACIONES
        </h1>
        {/* ---------------AGREGAR UN POST NUEVO-------------------------------------------------------------------------- */}

        <div className="text-center mt-5 title1">
          <h4 style={{ color: "#302880" }}>Agrega un nuevo post:</h4>
          {/* <ContainerLista/> */}

          
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

//   <div className="container">
//     <div
//       className="headerInflu container-fluid "
//       id="imgPerfil2"
//       style={{
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "center",
//         borderRadius: "5px 5px 80px 80px",
//       }}
//     ></div>
//     {/* ------------------------ */}
//     <br></br>
//     {/* ------------------------ */}
//     <div
//       className="row container"
//       style={{
//         display: "flex",
//         justifyContent: "right",
//         alignItems: "center",
//       }}
//     >
//       <div
//         class="btn-group container"
//         style={{
//           height: "40px",
//           display: "flex",
//           justifyContent: "right",
//           alignItems: "center",
//           marginTop: "5px",
//         }}
//       >
//         {/* <button type="button" class="btn btn-light"><i class="fas fa-home"><a class="dropdown-item" href={"/vistaInflu"}></a></i></button> */}
//         <button
//           type="button"
//           className="btn btn-outline-primary"
//           style={{ marginRight: "5px", maxWidth: "200px" }}
//         >
//           <a href={"/enviarEmail"}>Enviar mensaje</a>
//         </button>

//         <button
//           type="button"
//           className="btn btn-outline-primary"
//           style={{ maxWidth: "40px" }}
//           onClick={(name) => {
//             actions.addFavInf(name);
//           }}
//         >
//           <i class="far fa-heart"></i>
//         </button>
//       </div>
//     </div>
//     {/* -------------------------------------- */}
//     <div className="container" style={{ maxWidth: "100%" }}>
//       <div className="row container">
//         <div
//           className="col-md-6"
//           style={{
//             paddingLeft: "15px",
//             textAlign: "right",
//             margin: "5% auto 5% auto",
//           }}
//         >
//           <h1 className="title1" style={{ color: "#458fff" }}>
//             Nombre del Usuario
//           </h1>
//           <h2 className="title2 ">Sector al que pertenece</h2>
//           <h4 className="textoBreve1 " style={{ opacity: "40%" }}>
//             Eslogan
//           </h4>
//           <h6 className="textoBreve1 " style={{ opacity: "40%" }}>
//             Provincia (Ciudad)
//           </h6>
//           <br></br>
//           <br></br>
//           <h5
//             className="textobreve2 "
//             style={{ opacity: "40%", maxWidth: "100%" }}
//           >
//             Breve descripción sobre el influencer, escrito por él mismo, puede
//             introducir actitudes, aptitudes y logros, etc etc.
//           </h5>
//         </div>
//         <div
//           className="col-md-6 rounded-circle "
//           style={{
//             display: "flex",
//             justifyContent: "center",
//             alignContent: "center",
//           }}
//         >
//           <img
//             src={
//               "https://modernadepueblo.com/wp-content/uploads/2019/05/Protas-01-1024x1024.png"
//             }
//             style={{ maxWidth: "400px", opacity: "80%", transform: "revert" }}
//           />
//         </div>
//       </div>
//       <br></br>
//       <div className="row" style={{ margin: "auto 25% auto 25%" }}>
//         <table class="table">
//           <thead>
//             <tr style={{ textAlign: "center" }}>
//               <th scope="col">1,221</th>
//               <th scope="col">1,7M</th>
//               <th scope="col">1,082</th>
//             </tr>
//           </thead>
//           <tbody>
//             <tr style={{ textAlign: "center" }}>
//               <td>Publicaciones</td>
//               <td>Seguidores</td>
//               <td>Seguidos</td>
//             </tr>
//           </tbody>
//         </table>
//       </div>
//       <br></br>
//       {/* <div
//                   style={{
//                       display: "flex",
//                       justifyContent: "center",
//                       alignItems: "center",
//                   }}
//               >

//               </div> */}
//       {/* --------DOBLE ESPACIO----------------- */}
//       <br></br>
//       <br></br>
//       {/* ------------------------ */}
//       <div
//         className="row container "
//         style={{
//           background: "#458fff",
//           borderRadius: "10px 80px",
//           paddingTop: "5px",
//           color: "white",
//         }}
//       >
//         <h5 className="title2 text-center">ÚLTIMAS PUBLICACIONES</h5>
//       </div>
//       {/* --------------------ESPACIO DONDE SE AGREGARÁN LOS POST --------------------------------------------------------*/}

//       <div className="row ">
//         {store.posts?.map((e, i) => {
//           return (
//             <div key={i} className="col-4">
//               <IframeInstagram url={e} />
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   </div>
// );
