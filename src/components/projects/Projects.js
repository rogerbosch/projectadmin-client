import React from 'react';
import Sidebar from "../layout/Sidebar";
import TopBar from "../layout/TopBar";
import FormTask from "../task/FormTask";
import ListTasks from "../task/ListTasks";

function Projects(props) {
    return (
        <div className="contenedor-app">
            <Sidebar/>
            <div className="seccion-principal">
                <TopBar/>
                <main>
                    <FormTask>

                    </FormTask>
                    <div className="contenedor-tareas">
                        <ListTasks/>
                    </div>
                </main>
            </div>
        </div>
    );
}

export default Projects;