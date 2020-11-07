import React from 'react';

function ListProjects({props}) {
    //TODO cargar desde props
    const projects = [
        {name: 'tienda vitual'},
        {name: 'intranet'},
        {name: 'otra cosa'}
    ];
    return (
        <ul className="listado-proyectos">
            {projects.map( project => (
                <li>
                    <button className="btn btn-blank">
                        {project.name}
                    </button>
                </li>
            ))}
        </ul>
    );
}

export default ListProjects;