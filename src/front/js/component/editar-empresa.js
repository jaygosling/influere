import React, { Component, useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";




export const EditarEmpresa = () => {
    const {actions, store} = useContext(Context)
    const parametro = useParams()

    var allData = {}
    var finalData = {}
    useEffect(() => {
        actions.conseguirEmpresa(parametro.id)
    }, [])
    useEffect(()=> {
        document.getElementById('email-empresa').value = store.datosEmpresa.email
        document.getElementById('apellidos').value = store.datosEmpresa.apellidos
        document.getElementById('nombre').value = store.datosEmpresa.nombre
        document.getElementById('autonomia').value = store.datosEmpresa.autonomia
        document.getElementById('sector').value = store.datosEmpresa.sector
        document.getElementById('razon').value = store.datosEmpresa.razon_social
        document.getElementById('ciudad').value = store.datosEmpresa.ciudad
        document.getElementById('bio').value = store.datosEmpresa.bio
    },[store.datosEmpresa])

    


    function addData() {
        if (document.getElementById('password-empresa').value == document.getElementById('rep-password-empresa').value) {

            allData.email = document.getElementById('email-empresa').value;
            allData.password = document.getElementById('password-empresa').value;
            allData.apellidos = document.getElementById('apellidos').value;
            allData.nombre = document.getElementById('nombre').value;
            allData.razon_social = document.getElementById('razon').value;
            allData.sector = document.getElementById('sector').value;
            allData.autonomia = document.getElementById('autonomia').value;
            allData.ciudad = document.getElementById('ciudad').value;
            allData.bio = document.getElementById('bio').value;
            if (allData.email &&
                allData.password &&
                allData.apellidos &&
                allData.nombre &&
                allData.razon_social &&
                allData.sector &&
                allData.autonomia &&
                allData.ciudad &&
                allData.bio) {
                finalData = allData
                console.log(finalData)
                actions.actualizarEmpresa(parametro.id, finalData)
            } else {
                alert("Todos los campos son obligatorios")
            }
        } else {
            alert("Las contraseñas no coinciden")
        }
    }



    return <div className="container-fluid m-0 p-0">

        <div className="container-fluid">
            <p className="h1 text-center my-5">Editar Datos</p>
            <div className="container row d-flex justify-content-center text-end mx-auto mb-3">
                <div className="col">
                    <div className="mb-3 row">
                        <label for="email-empresa" className="col-sm-3 col-form-label">Email</label>
                        <div className="col-sm-9">
                            <input type="text" className="form-control" id="email-empresa" />
                        </div>
                    </div>
                    <div className="mb-3 row">
                        <label for="apellidos" className="col-sm-3 col-form-label">Apellidos</label>
                        <div className="col-sm-9">
                            <input type="text" className="form-control" id="apellidos" />
                        </div>
                    </div>
                    <div className="mb-3 row">
                        <label for="sector" className="col-sm-3 col-form-label">Sector</label>
                        <div className="col-sm-9">
                            <input type="text" className="form-control" id="sector" />
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="mb-3 row">
                        <label for="password-empresa" className="col-sm-5 col-form-label">Contraseña</label>
                        <div className="col-sm-7">
                            <input type="password" className="form-control" id="password-empresa" />
                        </div>
                    </div>
                    <div className="mb-3 row">
                        <label for="nombre" className="col-sm-5 col-form-label">Nombre</label>
                        <div className="col-sm-7">
                            <input type="text" className="form-control" id="nombre" />
                        </div>
                    </div>
                    <div className="mb-3 row d-flex">
                        <label for="autonomia" className="col-sm-5 col-form-label">C. Autónoma</label>
                        <div className="col-sm-7">
                            <select className="form-select" aria-label="Default select example" id="autonomia" defaultValue="Selecciona">
                                <option value="Andalucía">Andalucía</option>
                                <option value="Aragón">Aragón</option>
                                <option value="Canarias">Canarias</option>
                                <option value="Cantabria">Cantabria</option>
                                <option value="Castilla y León">Castilla y León</option>
                                <option value="Castilla-La Mancha">Castilla-La Mancha</option>
                                <option value="Cataluña">Cataluña</option>
                                <option value="Ceuta">Ceuta</option>
                                <option value="Comunidad de Madrid">Comunidad de Madrid</option>
                                <option value="Comunidad Valenciana">Comunidad Valenciana</option>
                                <option value="Extremadura">Extremadura</option>
                                <option value="Galicia">Galicia</option>
                                <option value="Islas Baleares">Islas Baleares</option>
                                <option value="La Rioja">La Rioja</option>
                                <option value="Melilla">Melilla</option>
                                <option value="Navarra">Navarra</option>
                                <option value="País Vasco">País Vasco</option>
                                <option value="Principado de Asturias">Principado de Asturias</option>
                                <option value="Región de Murcia">Región de Murcia</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="mb-3 row">
                        <label for="rep-password-empresa" className="col-sm-6 col-form-label">Repite contraseña</label>
                        <div className="col-sm-6">
                            <input type="password" className="form-control" id="rep-password-empresa" />
                        </div>
                    </div>
                    <div className="mb-3 row">
                        <label for="razon" className="col-sm-6 col-form-label">Razón social</label>
                        <div className="col-sm-6">
                            <input type="text" className="form-control" id="razon" />
                        </div>
                    </div>
                    <div className="mb-3 row">
                        <label for="ciudad" className="col-sm-6 col-form-label">Ciudad</label>
                        <div className="col-sm-6">
                            <input type="text" className="form-control" id="ciudad" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid row text-center mx-0 py-3">
                <div className="mb-3 col-8 mx-auto">
                    <label for="bio" className="form-label">Cuéntanos un poco más de ti</label>
                    <textarea className="form-control" id="bio" rows="3"></textarea>
                </div>
            </div>
            <div className="button-container my-5 d-flex justify-content-center pb-5">
                <button type="button" className="btn btn-danger btn-sm col-1 me-3" onClick={() => { actions.delDataEmpresas() }}>Borrar</button>
                <button type="button" className="btn btn-success btn-sm col-1 ms-3" onClick={() => { addData() }}>Enviar</button>
            </div>
        </div>
    </div>
}

