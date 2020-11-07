import React, {Fragment, useState} from 'react';

function NewProject(props) {

    const[project, setProject] = useState({
        id:'',
        name:''
    })
    const onChangeProject = e => {
        setProject({
          ...project,
          [e.target.name]:e.target.value
        });
    }
    const onSubmitProject = e =>{
        e.preventDefault();

        //TODO validar el proyecto

        //TODO agregar al state

        //TODO reiniciar form
    }

    return (
        <Fragment>
            <button
                type="button" className="btn btn-block btn-primario">
                Nuevo proyecto
            </button>
            <form
                className="formulario-nuevo-proyecto"
                onSubmit={onSubmitProject}>
                <input
                    type="text"
                    className="input-text"
                    placeholder="Nombre del proyecto"
                    name="name"
                    onChange={onChangeProject}
                    value={project.name}/>
                <input
                    type="submit"
                    className="btn btn-primario btn-block"
                    value="Agregar ptoyecto"
                />
            </form>
        </Fragment>
    );
}

export default NewProject;