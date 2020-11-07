import React from 'react';

function TopBar(props) {
    return (
        <header className="app-header">
            <p className="nombre-usuario"> Hola <span> Jhon Doe</span></p>
            <nav className="nav-principal">
                <a href="#!">Cerrar sesión</a>
            </nav>
        </header>
    );
}

export default TopBar;