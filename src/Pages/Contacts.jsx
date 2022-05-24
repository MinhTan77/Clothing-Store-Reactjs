import React from 'react'
import './Contacts/contacts.css'
import Footer from './Footer';
import Header from './Header';


function Contacts() {
    return (
        <div>
            <Header/>
            <section className="breadcrumb-option">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="breadcrumb__text">
                                <h4>Contact</h4>
                                <div className="breadcrumb__links">
                                    <a href="/">Home</a>
                                    <span>Contact</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Map Begin */}
            <div className="map">
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15663.232273271158!2d106.6661689!3d11.0530121!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xf4323e44f2867057!2sEastern%20International%20University!5e0!3m2!1sen!2s!4v1651732514043!5m2!1sen!2s" height={550} style={{ border: 0 }} allowFullScreen aria-hidden="false" tabIndex={0} />
            </div>
            {/* Map End */}
            {/* Contact Section Begin */}
            <section className="contact_spad">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-6">
                            <div className="contact__text">
                                <div className="section-title">
                                    <span>Information</span>
                                    <h2>Contact Us</h2>
                                    <p>As you might expect of a company that began as a high-end interiors contractor, we pay
                                        strict attention.</p>
                                </div>
                                <ul>
                                    <li>
                                        <h4>Viet Nam</h4>
                                        <p>Eastern International University<br />+84 91231231238</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6">
                            <div className="contact__form">
                                <form action="#">
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <input type="text" placeholder="Name" />
                                        </div>
                                        <div className="col-lg-6">
                                            <input type="text" placeholder="Email" />
                                        </div>
                                        <div className="col-lg-12">
                                            <textarea placeholder="Message" />
                                            <button type="submit" className="site-btn">Send Message</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Contact Section End */}
            <Footer/>
        </div>
    )
}
export default Contacts;