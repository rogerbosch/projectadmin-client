import React from 'react';
import NewProject from "../projects/NewProject";
import ListProjects from "../projects/ListProjects";

function Sidebar(props) {
    return (
        <aside>
            <h1>MERN <span>tasks</span></h1>
            <NewProject></NewProject>
            <div className="proyectos">
                <h2>Tus proyectos</h2>
                <ListProjects></ListProjects>
            </div>
        </aside>
    );
}

export default Sidebar;