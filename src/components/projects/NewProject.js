import React, {Fragment, useContext, useState} from 'react';
import ProjectContext from "../../context/projects/projectContext";

function NewProject(props) {
    //Recuperamos el state del formulario

    const pContext = useContext(ProjectContext);
    const {formNewProject, showFormNewProject, formError, addNewProject,showError} = pContext;
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
        if(project.name.trim() ===''){
            showError();
            return;
        }

        //TODO agregar al state
        addNewProject(project);
        //TODO reiniciar form
        setProject({
            name: ''
        })
    }

    return (
        <Fragment>
            <button
                type="button"
                className="btn btn-block btn-primario"
                onClick={showFormNewProject}>
                Nuevo proyecto
            </button>
            {formNewProject?
                (
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
                ):null}
            {formError ? <p className="mensaje error"> El nombre del proyecto es obligatorio </p> : null}

        </Fragment>
    );
}

export default NewProject;