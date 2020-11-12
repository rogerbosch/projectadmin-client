import React, {useContext, useEffect} from 'react';
import ProjectContext from "../../context/projects/projectContext";

function ListProjects({props}) {

    const projectsContext = useContext(ProjectContext);
    const {projects,getProjects,currentProject} = projectsContext;

    useEffect(() =>{
        getProjects();
    },[]);
    if(projects.length === 0 ) return <p> No se han encontrado proyectos</p>;

    return (
        <ul className="listado-proyectos">
            {projects.map( project => (
                <li>
                    <button className="btn btn-blank"
                        onClick={()=> currentProject(project.id)}>
                        {project.name}
                    </button>
                </li>
            ))}
        </ul>
    );
}

export default ListProjects;