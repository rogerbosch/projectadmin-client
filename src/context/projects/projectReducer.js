import {ADD_NEW_PROJECT, SHOW_FORM_PROJECT, GET_PROJECTS, VALIDATE_FORM, CURRENT_PROJECT} from "../../types";

export default (state, action) =>{
    switch (action.type){
        case SHOW_FORM_PROJECT:
            return {
                ...state,
                formNewProject: true
            };
        case GET_PROJECTS:
            return {
                ...state,
                projects : action.payload
            };
        case ADD_NEW_PROJECT:
            return {
                ...state,
                projects : [...state.projects, action.payload],
                formNewProject: false,
                formError: false
            };
        case VALIDATE_FORM:
            return {
                ...state,
                formError:true
            };
        case CURRENT_PROJECT:
            return {
                ...state,
                project:state.projects.filter(project => project.id === action.payload)
            };
        default:
            return state;

    }
}