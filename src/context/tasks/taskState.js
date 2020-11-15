import React, {useReducer} from 'react';
import TaskContext from './taskContext';
import TaskReducer from './taskReducer';
import {
    ADD_TASK_PROJECT,
    DELETE_TASK,
    GET_TASKS_PROJECT, SELECT_UPDATE_TASK, UPDATE_TASK,
    UPDATE_TASK_STATUS,
    VALIDATE_FORM
} from "../../types/taskIndex";
import { v4 as uuidv4 } from 'uuid';


const TaskState = props => {
    const initialState = {
        tasks: [
        {
            id:1,
            name: 'Elegir plataforma',
            state: true,
            projectId: 1
        },
        {
            id:2,
            name: 'Elegir plataforma otra vez',
            state: false,
            projectId: 1
        },
        {
            id:3,
            name: 'otra cosa',
            state: false,
            projectId: 1
        },
        {
            id:4,
            name: 'Otra mas',
            state: true,
            projectId: 1
        },
        {
            id:5,
            name: 'Elegir plataforma proyecto 2',
            state: true,
            projectId: 2
        },
        {
            id:6,
            name: 'Elegir plataforma otra vez proyecto 2',
            state: false,
            projectId: 2
        },
        {
            id:7,
            name: 'otra cosa proyecto 2',
            state: false,
            projectId: 2
        },
        {
            id:8,
            name: 'Otra mas proyecto 2',
            state: true,
            projectId: 2
        }],
        taskToEdit: null,
        tasksProject: null,
        taskError:false
    };

    const [state, dispatch] = useReducer(TaskReducer, initialState);

    //Call load of tasks
    const getTasksProject = projectId =>{
        dispatch({
            type: GET_TASKS_PROJECT,
            payload: projectId
        })
    };
    const addTaskProject = task =>{
        task.id = uuidv4();
        dispatch({
            type: ADD_TASK_PROJECT,
            payload: task
        })
    };
    const validateTask = () =>{
        dispatch({
            type: VALIDATE_FORM
        })
    };
    const deleteTask = taskId =>{
        dispatch({
            type:DELETE_TASK,
            payload:taskId
        })
    };
    const updateTaskState = task =>{
        dispatch({
           type: UPDATE_TASK_STATUS,
           payload: task
        });
    };
    const selectUpdateTask = task =>{
        dispatch({
            type: SELECT_UPDATE_TASK,
            payload:task
        })
    };
    const updateTask = task =>{
        dispatch({
            type: UPDATE_TASK,
            payload:task
        })
    };
    return (
        <TaskContext.Provider
            value ={{
                tasks: state.tasks,
                tasksProject: state.tasksProject,
                taskError:state.taskError,
                taskToEdit:state.taskToEdit,
                getTasksProject:getTasksProject,
                addTaskProject:addTaskProject,
                validateTask:validateTask,
                deleteTask:deleteTask,
                updateTaskState:updateTaskState,
                selectUpdateTask:selectUpdateTask,
                updateTask:updateTask
            }}>
            {props.children}
        </TaskContext.Provider>
    );
};

export default TaskState;
