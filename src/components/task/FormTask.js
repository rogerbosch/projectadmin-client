import React from 'react';
import {useContext} from "react";
import ProjectContext from "../../context/projects/projectContext";

function FormTask(props) {

    //First we need import context
    const projectContext = useContext(ProjectContext);
    const {project} = projectContext;

    if(!project) return null;
    return (
        <div className="formulario">
            <form>
                <div className="contenedor-input">
                    <input
                        type="text"
                        className="input-text"
                        placeholder="Nombre tarea"
                        name="name"/>
                </div>
                <input
                    type="submit"
                    className="btn btn-primario btn-block"
                    value="Añadir tarea"
                />
            </form>
        </div>
    );
}

export default FormTask;