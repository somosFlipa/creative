import React from "react";
import Phones from '../../assets/phone.svg';
import Family from '../../assets/family.svg';
import Facebook from '../../assets/facebook.svg';
import Instagram from '../../assets/instagram.svg';
import Email from '../../assets/email.svg';


const Home = () =>{
    return(
        <>
        <div className="body_home__general">
            <div className="body_home__general-nav">
                <div className="nav_contenedor">
                    <div className="nav_logo">
                        <p>LOGO</p>
                    </div>
                    <div className="nav_sections">
                        <p>LOGO</p>
                        <p>LOGO</p>
                    </div>
                </div>
            </div>

            <div className="body_home__general-header">
                <div className="header_contenedor">
                    <div className="header_title">
                        <h1>Creative, design and Belive</h1>
                        <p>Lorem Ipsum is simply dummy the printing and type</p>
                    </div>
                    <div className="header_img">
                        <img src={Phones} alt="telefonos" />
                    </div>
                </div>
                </div>

                <div className="body_home__general-main">

                    <div className="main_contenedor">

                        <div className="main_contenedor-cards">
                            <div className="cards_card">
                                <h5>Creando</h5>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut</p>
                            </div>
                            <div className="cards_card">
                                <h5>Diseñando</h5>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut</p>
                            </div>
                            <div className="cards_card">
                                <h5>Efectividad</h5>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut</p>
                            </div>
                        </div>

                        <div className="main_contenedor-AboutUs">
                            <div className="aboutUs_texto">
                                <h5>About us...</h5>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem ever since the 1500s is simply dummy text of the printingis simply dummy text of the printing</p>
                            </div>
                            <div className="aboutUs_img">
                                <img src={Family} alt="family" />
                            </div>
                        </div>

                        <div className="main_contenedor__Preguntas">
                            <div className="preguntas_texto">
                                <h5>Tenés dudas?</h5>
                            </div>
                            <div className="preguntas_boton">
                                <button>ESCRIBINOS</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="body_home__general-footer">
                    <div className="footer_icons">
                        <a href=""><img src={Facebook} alt="facebook" /></a>
                        <a href=""><img src={Instagram} alt="instagram" /></a>
                        <a href=""><img src={Email} alt="email" /></a>
                    </div>
                    <div className="footer_texto">
                        <p>Somos <a href="#">FLIPA</a> -</p>
                        <p>Todos los Derechos Reservados</p>

                    </div>
                </div>

        </div>
        </>
    )
}


export default Home;