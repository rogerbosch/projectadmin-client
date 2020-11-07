import React, {useState} from 'react';
import {Link} from "react-router-dom";

function Login(props) {

    const [credentials, setCredentials] = useState(
        {
            email: '',
            password: ''
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
        //TODO pasarlo al action
    }

    return (
        <div className="form-usuario">
            <div className="contenedor-form sombra-dark">
                <h1>Iniciar sesión</h1>

                <form
                    onSubmit={onSubmit}>
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
                            placeholder="contraseña"
                            onChange={onChange}
                            value={credentials.password}/>
                    </div>

                    <div className="campo-form">
                        <input
                            type="submit"
                            className="btn btn-primario btn-block"
                            value="Iniciar sesión"/>
                    </div>
                </form>
                <Link to={'/new-account'} className="enlace-cuenta">
                    Registrarse
                </Link>
            </div>
        </div>
    );
}

export default Login;