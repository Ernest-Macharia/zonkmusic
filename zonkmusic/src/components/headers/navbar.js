import { Component } from "react";
import { Link } from "react-router-dom";


class MyNavbar extends Component {

    constructor(props){
        super(props);
        console.log(props);
    }
    

    render() {
        
        let myroute = this.props.myroute
        console.log(myroute);
        
        

        return (
            <div>


                {/* Start */}
                <nav id="navb" className="navbar navbar-expand-md fixed='top' text-secondary ">

                    <Link to="/" className="navbar-brand " id="culink">
                        ZonkMusic
                    </Link>

                    <button className="navbar-toggler" data-toggle="collapse" data-target="#collapsediv">
                        <i className="fa fa-bars  text-secondary" aria-hidden="true"></i>
                    </button>

                    <div className="collapse navbar-collapse" id="collapsediv">

                        <ul className="navbar-nav mx-auto">



                            <li className="nav-item">
                                <Link to="/" className="nav-link" 
                                    id={`${myroute === 'home' ? 'homeculink' : 'culink'}`}>
                                        Home 
                                </Link>
                            </li>
                            <li className="nav-item">
                                {/* <a href="gallery/" className="nav-link" id="culink">Gallery &nbsp;&nbsp;</a> */}
                                <Link to="/gallery" className="nav-link"
                                    id={`${myroute === 'gallery' ? 'homeculink' : 'culink'}`}>
                                        Gallery
                                </Link>

                            </li>
                            <li className="nav-item">
                                <Link to="/blog" className="nav-link" 
                                    id={`${myroute === 'blog' ? 'homeculink' : 'culink'}`}>
                                        Blog
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/shows" className="nav-link" 
                                    id={`${myroute === 'shows' ? 'homeculink' : 'culink'}`}>
                                        Shows
                                </Link>
                            </li>
                            <li className="nav-item">
                                {/* <a href="about/" className="nav-link" id="culink">About Us &nbsp;&nbsp;</a> */}
                                <Link to="/about" className="nav-link" 
                                    id={`${myroute === 'about' ? 'homeculink' : 'culink'}`}>
                                        About Us
                                </Link>

                            </li>
                            <li className="nav-item">
                                {/* <a href="contact/" className="nav-link" id="culink">Contact Us</a> */}
                                <Link to="/contact" className="nav-link" 
                                    id={`${myroute === 'contact' ? 'homeculink' : 'culink'}`}>
                                        Contact Us
                                </Link>

                            </li>

                        </ul>


                    </div>

                </nav>
                {/* end */}


            </div>
        );
    }

}

export default MyNavbar;