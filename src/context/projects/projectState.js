import React, {useReducer} from 'react'
import projectContext from "./projectContext";
import projectReducer from "./projectReducer";

const ProjectState = props =>{
    const initialState = {
        formNewProject : false
    }
    //dispatch para ejecutar acciones
    const [state, dispatch] = useReducer(
        projectReducer,
        initialState
    );
    //CRUD
    return (
        <projectContext.Provider
            value={{
                formNewProject: state.formNewProject
            }}>
            {props.children}
        </projectContext.Provider>
    )
}
export default ProjectState