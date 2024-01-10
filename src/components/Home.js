import React from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../components/style.css';

import f11Image1 from '../img/25.avif';
import f11Image2 from '../img/25.avif';
import f11Image3 from '../img/25.avif';

const kittenImages = [f11Image1, f11Image2, f11Image3];


const Home = () => {
    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 900, // Ajusta la velocidad del carrusel
        slidesToShow: 1,
        autoplay: true,
        autoplaySpeed: 2000, // Ajusta la velocidad de cambio en milisegundos (en este ejemplo, cada 3 segundos)
    };

    return (
        <div className="container-fluid home-container">
            <div className="row justify-content-center align-items-center full-height">
                <div className="col-md-8 text-center">
                    <div className="card">
                        <div className="card-body">
                            <h2 className="card-title">Bienvenido al Refugio de Animales</h2>
                            <p className="card-text">
                                En nuestro refugio, nos dedicamos a proporcionar amor y cuidado a animales abandonados.
                                Ayudanos a hacer una diferencia en sus vidas .
                            </p>
                            
                        </div>
                        <div className="carousel-container ">
                            <Slider {...sliderSettings}>
                                {kittenImages.map((imageUrl, index) => (
                                    <div key={index}>
                                        <img
                                            src={imageUrl}
                                            alt={`Kitten ${index + 1}`}
                                            className="img-fluid"
                                        />
                                    </div>
                                ))}
                            </Slider>
                        </div>
                    </div>
                    

                   
                </div>
            </div>
        </div>
    );
}

export default Home;
