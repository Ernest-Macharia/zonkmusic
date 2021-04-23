import { Component } from "react";
import './footer.css';
import imglogo from '../../images/zonk-music.png';
import { Link } from "react-router-dom";

class Footathree extends Component {

    render() {
        let instlink = "https://www.instagram.com/zonkmusic/";
        let facblink = "https://www.facebook.com/zonkmusic.20";
        let twitter = "https://twitter.com/zonkmusic4";

        return (
            /*<div>
                <div id="foota4" >
                    <div className="container-lg text-" id="dimwhite">
                        <div className="py-4">
                            <div className="row">
                                <div className="col-md-4">
                                    <div className="py-3">
                                        ZonKMusic © 2021. All Rights Reserved.
                                    </div>
                                </div>
                                <div className="col-md-8">
                                    <div className="text-md-right py-3">
                                        <span className="border p-2 px-3 mr-2">
                                            <a href={instlink} className="text-light">
                                                <i className="fa fa-instagram" aria-hidden="true"></i>
                                            </a>
                                        </span>
                                        <span className="border p-2 px-3 mr-2">
                                            <a href={twitter} className="text-light">
                                                <i className="fa fa-twitter" aria-hidden="true"></i>
                                            </a>
                                        </span>
                                        <span className="border p-2 px-3 mr-2">
                                            <a href={fabllink} className="text-light">
                                                <i className="fa fa-facebook-square" aria-hidden="true"></i>
                                            </a>
                                        </span>
                                        <span className="border p-2 px-3 mr-2">
                                            <a href={linkedin} className="text-dark">
                                                <i className="fa fa-linkedin-square"  aria-hidden="true"></i>
                                            </a>

                                        </span>
                                        {/* <span className="border p-2 px-3 mr-2">
                                            <a href={'zonk'} className="text-light">
                                                <i className="fa fa-youtube" aria-hidden="true"></i>
                                            </a>
                                        </span> 



                                    </div>
                                </div>
                                <div></div>
                            </div>
                        </div>
                    </div>
                </div>

            </div> */

            <footer className="footer-section">
            <div className="container">
                <div className="row">
                    <div className="col-xl-6 col-lg-7 order-lg-2">
                        <div className="row">
                            <div className="col-sm-3">
                                <div className="footer-widget">
                                    
                                    <ul>
                                    <h2 >About</h2>
                                    <div id="myred2">
                                    <p>
                                        <a href="/about" id="myred">Coverage</a>
                                        </p>
                                        <p>
                                        <a href="/about" id="myred">Who we are</a>
                                        </p>
                                        <p>
                                        <a href="about" id="myred">Our Staff</a>
                                        </p>
                                        </div>
                                    </ul>
                                    
                                </div>
                            </div>
                            <div className="col-sm-3">
                                <div className="footer-widget">
                                    
                                    <ul>
                                    <h2>Blog</h2>
                                    <div id="myred2">
                                        <p><a href="/blog" id="myred">Articles</a></p>
                                        </div>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-sm-3">
                                <div className="footer-widget">
                                    
                                    <ul>
                                    <h2>Shows</h2>
                                    <div id="myred2">
                                        <p><a href="/shows" id="myred">New shows</a></p>
                                        <p><a href="/shows" id="myred">Our Shows</a></p>
                                        </div>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-sm-3" >
                                <div className="footer-widget">
                                    
                                    <ul>
                                    <h2>Contacts</h2>
                                    <div id="myred2">
                                        <p><a href="/contacts" id="myred">Contact Info</a></p>
                                        </div>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-5 order-lg-1">
                    <Link to="/">
                        <img src={imglogo} className="logo" alt="Komplab Logo" /> &nbsp;
                    </Link>
                        <div className="copyright">
    Copyright &copy;<script>document.write(new Date().getFullYear());</script> All rights reserved 
    </div>
                        <div className="social-links">
                        <span className="">
                                            <a href={instlink} className="text-light" rel="noopener noreferrer"  target="_blank">
                                                <i className="fa fa-instagram" aria-hidden="true"></i>
                                            </a>
                                        </span>
                                        <span className="" rel="noopener noreferrer"  target="_blank">
                                            <a href={facblink} className="text-light">
                                                <i className="fa fa-facebook" aria-hidden="true"></i>
                                            </a>
                                        </span>
                                        <span className="" rel="noopener noreferrer"  target="_blank">
                                            <a href={twitter} className="text-light" rel="noopener noreferrer"  target="_blank">
                                                <i className="fa fa-twitter" aria-hidden="true"></i>
                                            </a>
                                        </span>
                                        
                                        
                        </div>
                    </div>
                </div>
            </div>
        </footer>
        );
    }

}

export default Footathree;