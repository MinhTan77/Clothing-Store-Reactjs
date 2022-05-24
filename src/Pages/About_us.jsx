import React from 'react'
import "./About_us/style.css"
import Header from './Header';
import Footer from './Footer';

function About_us() {
    return (    
        <div>
            <Header/>
            <div>
            <section className="breadcrumb-option">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="breadcrumb__text">
                                <h4>About Us</h4>
                                <div className="breadcrumb__links">
                                    <a href="/">Home</a>
                                    <span>About Us</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="about spad">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="about__pic">
                                <img src={require('./About_us/img/about.png')} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-4 col-md-4 col-sm-6">
                            <div className="about__item">
                                <h4>Who We Are ?</h4>
                                <p>Contextual advertising programs sometimes have strict policies that need to be adhered too.
                                    Let’s take Google as an example.</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-6">
                            <div className="about__item">
                                <h4>Who We Do ?</h4>
                                <p>In this digital generation where information can be easily obtained within seconds, business
                                    cards still have retained their importance.</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-6">
                            <div className="about__item">
                                <h4>Why Choose Us</h4>
                                <p>A two or three storey house is the ideal way to maximise the piece of earth on which our home
                                    sits, but for older or infirm people.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="counter spad">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="counter__item">
                                <div className="counter__item__number">
                                    <h2 className="cn_num">102</h2>
                                </div>
                                <span>Our <br />Clients</span>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="counter__item">
                                <div className="counter__item__number">
                                    <h2 className="cn_num">30</h2>
                                </div>
                                <span>Total <br />Categories</span>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="counter__item">
                                <div className="counter__item__number">
                                    <h2 className="cn_num">102</h2>
                                </div>
                                <span>In <br />Country</span>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="counter__item">
                                <div className="counter__item__number">
                                    <h2 className="cn_num">98</h2>
                                    <strong>%</strong>
                                </div>
                                <span>Happy <br />Customer</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="clients spad">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="section-title">
                                <span>Partner</span>
                                <h2>Happy Clients</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-3 col-md-4 col-sm-4 col-6">
                            <a href="#" className="client__item"><img src={require("./About_us/img/clients/client-1.png")} alt="" /></a>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-4 col-6">
                            <a href="#" className="client__item"><img src={require("./About_us/img/clients/client-2.png")} alt="" /></a>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-4 col-6">
                            <a href="#" className="client__item"><img src={require("./About_us/img/clients/client-3.png")} alt="" /></a>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-4 col-6">
                            <a href="#" className="client__item"><img src={require("./About_us/img/clients/client-4.png")} alt="" /></a>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-4 col-6">
                            <a href="#" className="client__item"><img src={require("./About_us/img/clients/client-5.png")} alt="" /></a>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-4 col-6">
                            <a href="#" className="client__item"><img src={require("./About_us/img/clients/client-6.png")} alt="" /></a>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-4 col-6">
                            <a href="#" className="client__item"><img src={require("./About_us/img/clients/client-7.png")} alt="" /></a>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-4 col-6">
                            <a href="#" className="client__item"><img src={require("./About_us/img/clients/client-8.png")} alt="" /></a>
                        </div>
                    </div>
                </div>
            </section>
            </div>
            <Footer/>
        </div>
    )
}
export default About_us;