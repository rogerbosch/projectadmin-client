import React, {useContext, useEffect} from 'react';
import ProjectContext from "../../context/projects/projectContext";
import TaskContext from "../../context/tasks/taskContext";
import {CSSTransition, TransitionGroup} from "react-transition-group";

function ListProjects(props) {

    const projectsContext = useContext(ProjectContext);
    const {projects, getProjects, currentProject} = projectsContext;

    const tasksContext = useContext(TaskContext);
    const {getTasksProject} = tasksContext;

    useEffect(() => {
        getProjects();
    }, []);


    if (projects.length === 0) return <p> No se han encontrado proyectos</p>;

    const selectProject = id => {
        currentProject(id);
        getTasksProject(id);

    };

    return (
        <ul className="listado-proyectos">
            <TransitionGroup>
                {projects.map(project => (
                    <CSSTransition
                        key={project.id}
                        classNames="proyecto"
                        timeout={200}>
                        <li>
                            <button className="btn btn-blank"
                                    onClick={() => selectProject(project.id)}>
                                {project.name}
                            </button>
                        </li>
                    </CSSTransition>
                ))}
            </TransitionGroup>
        </ul>
    );
}

export default ListProjects;