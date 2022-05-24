import React from 'react'

function Header() {
    return (
        <header className="header_area">
            <div className="classy-nav-container breakpoint-off d-flex align-items-center justify-content-between">
                <nav className="classy-navbar" id="essenceNav">
                    <a className="nav-brand" href="./">
                        VNT store
                    </a>
                    <div className="classy-navbar-toggler">
                        <span className="navbarToggler">
                            <span />
                            <span />
                            <span />
                        </span>
                    </div>
                    <div className="classy-menu">
                        <div className="classycloseIcon">
                            <div className="cross-wrap">
                                <span className="top" />
                                <span className="bottom" />
                            </div>
                        </div>
                        <div className="classynav">
                            <ul>
                                <li>
                                    <a href="#">Shop</a>
                                    <div className="megamenu">
                                        <ul className="single-mega cn-col-4">
                                            <li className="title">Women's Collection</li>
                                            <li>
                                                <a href="#">Dresses</a>
                                            </li>
                                            <li>
                                                <a href="#">Blouses &amp; Shirts</a>
                                            </li>
                                            <li>
                                                <a href="#">T-shirts</a>
                                            </li>
                                            <li>
                                                <a href="#">Rompers</a>
                                            </li>
                                            <li>
                                                <a href="#">Bras &amp; Panties</a>
                                            </li>
                                        </ul>
                                        <ul className="single-mega cn-col-4">
                                            <li className="title">Men's Collection</li>
                                            <li>
                                                <a href="#">T-Shirts</a>
                                            </li>
                                            <li>
                                                <a href="#">Polo</a>
                                            </li>
                                            <li>
                                                <a href="#">Shirts</a>
                                            </li>
                                            <li>
                                                <a href="#">Jackets</a>
                                            </li>
                                            <li>
                                                <a href="#">Trench</a>
                                            </li>
                                        </ul>
                                        <ul className="single-mega cn-col-4">
                                            <li className="title">Kid's Collection</li>
                                            <li>
                                                <a href="#">Dresses</a>
                                            </li>
                                            <li>
                                                <a href="#">Shirts</a>
                                            </li>
                                            <li>
                                                <a href="#">T-shirts</a>
                                            </li>
                                            <li>
                                                <a href="#">Jackets</a>
                                            </li>
                                            <li>
                                                <a href="#">Trench</a>
                                            </li>
                                        </ul>
                                        <div className="single-mega cn-col-4">
                                            <img src="assets/img/bg-img/bg-6.jpg" alt="" />
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <a href="#">Product</a>
                                    <ul className="dropdown">
                                        <li>
                                            <a href="#">Men</a>
                                        </li>
                                        <li>
                                            <a href="#">Women</a>
                                        </li>
                                      
                                        <li>
                                            <a href="#">Kids</a>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="#">Blog</a>
                                </li>
                                <li>
                                    <a href="./contact">Contact</a>
                                </li>
                                <li>
                                    <a href="./about">About</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <div className="header-meta d-flex clearfix justify-content-end">
                    <div className="search-area">
                        <form action="#" method="post">
                            <input type="search" name="search" id="headerSearch" placeholder="Type for search" />
                            <button type="submit">
                                <i className="fa fa-search" aria-hidden="true" />
                            </button>
                        </form>
                    </div>
                    <div className="favourite-area">
                        <a href="#">
                            <img src="assets/img/core-img/heart.svg" alt="" />
                        </a>
                    </div>
                    <div className="user-login-info">
                        <a href="./login">
                            <img src="assets/img/core-img/user.svg" alt="" />
                        </a>
                    </div>
                    <div className="cart-area">
                        <a href="#" id="essenceCartBtn">
                            <img src="assets/img/core-img/bag.svg" alt="" /> <span>3</span>
                        </a>
                    </div>
                </div>
            </div>
        </header>
    )
}
export default Header;
