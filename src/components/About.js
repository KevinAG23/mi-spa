import React from 'react';

function About() {
    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-8 offset-md-2">
                    <div className="card">
                        <div className="card-body">
                            <h2 className="card-title text-center mb-4">Acerca de Nosotros</h2>
                            <p className="card-text">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            </p>
                            <p className="card-text">
                                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                            </p>

                            
                            <div className="mt-5">
                                <h4>Mision y Vision</h4>
                                <p>En nuestro refugio, nos esforzamos por proporcionar un hogar amoroso y seguro para animales abandonados. Nuestra vision es crear una comunidad comprometida con el bienestar animal.</p>
                            </div>

                            <div className="mt-5">
                                <h4>Nuestro Equipo</h4>
                                <p>Nuestro equipo esta formado por apasionados amantes de los animales comprometidos con hacer una diferencia en las vidas de aquellos que no pueden hablar por si mismos.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;
