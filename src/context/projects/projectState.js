import React, {useReducer} from 'react'
import projectContext from "./projectContext";
import projectReducer from "./projectReducer";
import { v4 as uuidv4 } from 'uuid';

import {
    ADD_NEW_PROJECT,
    SHOW_FORM_PROJECT,
    GET_PROJECTS,
    VALIDATE_FORM,
    CURRENT_PROJECT,
    DELETE_PROJECT
} from "../../types/projectIndex";

const ProjectState = props =>{
    const projects = [
        {id: 1, name: 'tienda vitual'},
        {id: 2, name: 'intranet'},
        {id: 3, name: 'otra cosa'}
    ];
    const initialState = {
        formNewProject : false,
        projects:[],
        formError:false,
        project:null
    };
    //dispatch para ejecutar acciones
    const [state, dispatch] = useReducer(
        projectReducer,
        initialState
    );
    //CRUD
    const showFormNewProject = () =>{
        dispatch({
            type:SHOW_FORM_PROJECT
        })
    }
    const getProjects = () => {
        dispatch({
            type:GET_PROJECTS,
            payload:projects
        })
    };
    const addNewProject = project =>{
        project.id = uuidv4();
        //añadir proyecto al state con el dispatch

        dispatch({
            type:ADD_NEW_PROJECT,
            payload: project
        })
    };
    const showError = () => {
        dispatch({
            type: VALIDATE_FORM
        });
    };
    const currentProject = projectId => {
        dispatch({
            type:CURRENT_PROJECT,
            payload:projectId
        })
    };
    const deleteProject = projectId =>{
        dispatch({
            type:DELETE_PROJECT,
            payload: projectId
        })
    }
    return (
        <projectContext.Provider
            value={{
                projects : state.projects ,
                formNewProject: state.formNewProject,
                formError: state.formError,
                project: state.project,
                showFormNewProject,
                getProjects,
                addNewProject,
                showError,
                currentProject,
                deleteProject
            }}>
            {props.children}
        </projectContext.Provider>
    )
}
export default ProjectState