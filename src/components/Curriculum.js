import React, { useState } from 'react';
import ImageProfile from './../images/profile.jpg';




const Home = () => {


  return (
    <div class="container">
    <div class="left_side">
        <div class="profileText">
            <div class="imgBox">
                <img src={ImageProfile} />
            </div>
            <h2>Leonardo Martinez
                <br/>
                <span>Ingeniero de Software</span>
            </h2>
        </div>
        <div class="contactInfo">
            <h3 class="title">
                Información de contacto
            </h3>
            <ul>
                <li>
                    <span class="icon"><i class="fa fa-phone" aria-hidden="true"></i></span>
                    <span class="text"><a href="tel:+522711426743">+52 2711426743</a></span>
                </li>
                <li>
                    <span class="icon"><i class="fa fa-envelope-o" aria-hidden="true"></i></span>
                    <span class="text"><a href="mailto:leonardo.m2349@gmail.com">leonardo.m2349@gmail.com</a></span>
                </li>
                <li>
                    <span class="icon"><i class="fa fa-linkedin" aria-hidden="true"></i></span>
                    <span class="text"><a href="www.linkedin.com/in/se-leonardo-martinez">Leonardo Martinez</a></span>
                </li>
                <li>
                    <span class="icon"><i class="fa fa-map-marker" aria-hidden="true"></i></span>
                    <span class="text">Córdoba, Ver.México</span>
                </li>
            </ul> 
        </div>
        <div class="contactInfo education">
            <h3 class="title">
                Educación
            </h3>
            <ul>
                <li>
                    <h5>2019 - Actualmente estudiando</h5>
                    <h4>Lic. Ingeniería de Software</h4>
                    <h4>Universidad Veracruzana</h4>
                </li>
                <li>
                    <h5>2019 - Actualmente estudiando</h5>
                    <h4>Inglés lectura y conversación</h4>
                    <h4>Universidad Veracruzana</h4>
                </li>
            </ul>
        </div>


        <div class="contactInfo language">
            <h3 class="title">
                Idiomas
            </h3>
            <ul>
                <li>
                    <span class="text">Inglés</span>
                    <span class="percent">

                        <div style={{width: "55%"}}></div>
                    </span>
                </li>
                <li>
                    <span class="text">Español</span>
                    <span class="percent">
                        <div style={{width: "90%"}}></div>
                    </span>
                </li>
            </ul>
        </div>
    </div>



    <div class="right_side">
        <div class="about">
            <h2 class="title2">Perfil</h2>
            <p>
                Mi nombre es Leonardo Daniel Montiel Martinez, actualmente me encuentro estudiando 
                la Licenciatura en Ingeniería de Software en la Universidad Veracruzana y estoy cursando 
                el 7 semestre. Tengo poca experiencia en el desarrollo de software en el mundo laboral, 
                pero me gusta aprender y poner en práctica las tecnologías que aprendo, busco mejorar constantemente
                mis habilidades y superarme a mí mismo.

            </p>
        </div>
        <div class="about">
            <h2 class="title2">Experiencia</h2>
            <div class="box">
                <div class="year_company">
                    <h5>Diciembre 2021 - Marzo 2021</h5>
                    <h5>Adesoft S.A. DE C.V</h5>
                </div>
                <div class="text">
                    <h4>Junior Fronted</h4>
                    <p>Desarrollador fronted usando el framework angular 10 para el desarrollo de un modulo para una aplicación web ecomercer, con funciones basicas tipo CRUD.</p>
                </div>
            </div>
            <div class="box">
                <div class="year_company">
                    <h5>Junio 2022 - Actualmente</h5>
                    <h5>Aiar</h5>
                </div>
                <div class="text">
                    <h4>Junior Full Stack</h4>
                    <p>Desarrollador Junior Full Stack elaborando aplicación web ecomerce, embebiendo aplicación web en aplicación movil, uso de sistema operativo linux y manejo de repositorios.</p>
                </div>
            </div>
        </div>

        <div class="about skills">
            <h2 class="title2">Habilidades Profesionales</h2>
            <h5>Lenguajes de programación</h5>
            <div class="box">
                <h4>Java</h4>
                <div class="percent">
                    <div style={{width:"70%"}}></div>
                </div>
            </div>
            <div class="box">
                <h4>Python</h4>
                <div class="percent">
                    <div style={{width:"50%"}}></div>
                </div>
            </div>
            <div class="box">
                <h4>JavaScript</h4>
                <div class="percent">
                    <div style={{width:"55%"}}></div>
                </div>
            </div>
            <h5>Gestores de base de datos</h5>
            <div class="box">
                <h4>PostgreSQL</h4>
                <div class="percent">
                    <div style={{width:"60%"}}></div>
                </div>
            </div>
            <div class="box">
                <h4>MySQL</h4>
                <div class="percent">
                    <div style={{width:"60%"}}></div>
                </div>
            </div>
            <div class="box">
                <h4>MongoDB</h4>
                <div class="percent">
                    <div style={{width:"20%"}}></div>
                </div>
            </div>
        </div>

        <div class="about interest">
            <h2 class="tile2">Intereses</h2>
            <ul>
                <li><i class="fa fa-gamepad" aria-hidden="true"></i>Videojuegos</li>
                <li><i class="fa fa-music" aria-hidden="true"></i>Música</li>
                <li><i class="fa fa-film" aria-hidden="true"></i>Peliculas</li>
            </ul>
        </div>
    </div>
</div>
  );
};


export default Home;
