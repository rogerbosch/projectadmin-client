import React, {useState} from 'react';
import {Link} from "react-router-dom";

function NewAccount(props) {
    const [credentials, setCredentials] = useState(
        {
            name:'',
            email: '',
            password: '',
            confirm:''
        }
    );
    const onChange = e => {
        setCredentials({
            ...credentials,
            [e.target.name]: e.target.value
        });
    }
    const onSubmit = e => {
        e.preventDefault();

        //TODO validar formulario
        //TODO password iguales y minmo 6 chars
        //TODO pasarlo al action
    }

    return (
        <div className="form-usuario">
            <div className="contenedor-form sombra-dark">
                <h1>Registro</h1>

                <form
                    onSubmit={onSubmit}>
                    <div className="campo-form">
                        <label htmlFor="nombre">Nombre
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            placeholder="Nombre"
                            onChange={onChange}
                            value={credentials.name}/>
                    </div>
                    <div className="campo-form">
                        <label htmlFor="email">Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="e-mail"
                            onChange={onChange}
                            value={credentials.email}/>
                    </div>
                    <div className="campo-form">
                        <label htmlFor="password">Contraseña
                        </label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            placeholder="Contraseña"
                            onChange={onChange}
                            value={credentials.password}/>
                    </div>
                    <div className="campo-form">
                        <label htmlFor="password">Repetir contraseña
                        </label>
                        <input
                            type="password"
                            id="confirm-password"
                            name="confirm-password"
                            placeholder="Repetir contraseña"
                            onChange={onChange}
                            value={credentials.confirm}/>
                    </div>

                    <div className="campo-form">
                        <input
                            type="submit"
                            className="btn btn-primario btn-block"
                            value="Registrar"/>
                    </div>
                </form>
                <Link to={'/'} className="enlace-cuenta">
                    Login
                </Link>
            </div>
        </div>
    );
}

export default NewAccount;