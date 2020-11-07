import React from 'react';

function FormTask(props) {
    return (
        <div className="formulario">
            <form>
                <div className="contenedor-input">
                    <input
                        type="text"
                        className="input-text"
                        placeholder="Nombre tarea"
                        name="name"/>
                </div>
                <input
                    type="submit"
                    className="btn btn-primario btn-block"
                    value="Añadir tarea"
                />
            </form>
        </div>
    );
}

export default FormTask;