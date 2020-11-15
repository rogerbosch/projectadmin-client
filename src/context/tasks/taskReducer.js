import {
    ADD_TASK_PROJECT,
    DELETE_TASK,
    GET_TASKS_PROJECT,
    UPDATE_TASK_STATUS,
    VALIDATE_FORM
} from "../../types/taskIndex";


export default(state, action) =>{
    switch (action.type) {
        case GET_TASKS_PROJECT:
            return {
                ...state,
                tasksProject: state.tasks.filter(task => task.projectId === action.payload)
            };
        case ADD_TASK_PROJECT:
            return {
                ...state,
                tasks: [
                    action.payload,
                    ...state.tasks
                    ],
                taskError: false
            };
        case VALIDATE_FORM:
            return {
                ...state,
                taskError: true
            };
        case DELETE_TASK:
            return {
                ...state,
                tasks: state.tasks.filter(task => task.id !== action.payload)
            };
        case UPDATE_TASK_STATUS:
            const currTasks= state.tasks.map(
                task => task.id === action.payload.id ?
                    action.payload
                    :
                    task);
            const currTasksProject= state.tasksProject.map(
            task => task.id === action.payload.id ?
                action.payload
                :
                task);

            return {
                ...state,
                tasks: currTasks,
                tasksProject: currTasksProject
            };
            default :
            return state;
    }

}