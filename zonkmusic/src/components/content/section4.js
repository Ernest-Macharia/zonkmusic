import { Component } from "react";
import { Link } from "react-router-dom";


// import imgs1 from '../../images/section4/sec4a.jpg';
// import imgs2 from '../../images/section4/sec4b.webp';
// import imgs3 from '../../images/section4/sec4c.webp';

class Mysectionfour extends Component {


    render() {
        return (
            <div>
                <div id="section4" className="py-5">
                    <div className="container-lg">
                        <h5 className="text-warning">
                            
                        </h5>
                        <h3 className="text- display-4" id="myred2">
                            
                            Blogs & Articles
                        </h3>
                        <div className="py-3"></div>

                        <div className="row text-light">
                            <div className="col-md-6 mb-3">
                                <div id="sect4a">
                                    <div id="fouind">
                                        <div className="p-4">
                                            <div id="sec4top">
                                                <span className="" id="lightgre">
                                                    May 13, Saturday
                                               </span>
                                            </div>
                                            <div id="sec4bot">
                                                <Link to="/blog" className="text-white" >
                                                    <h3 className="text-ligh m-0 " id="titlse4">Zonk Magazine</h3>
                                                    <span id="innert">Maiden Issue</span>
                                                </Link>
                                                
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div id="sect4b" className="mb-4">

                                    <div id="fouind">
                                        <div className="p-3">
                                            <div id="sec4top">
                                                <span className="" id="lightgre">
                                                    April 23, Friday
                                            </span>
                                            </div>
                                            <div id="sec4bot2">
                                                <Link to="/blog" className="text-white" >
                                                    <h3 className="text-ligh m-0 " id="titlse4">Meet Sam P</h3>
                                                    <span>South Africa Tour</span>
                                                </Link>
                                                
                                            </div>

                                        </div>
                                    </div>

                                </div>
                                <div id="sect4c">
                                    <div id="fouind">
                                        <div className="p-3">
                                            <div id="sec4top">
                                                <span className="" id="lightgre">
                                                    August 04, Friday
                                            </span>
                                            </div>
                                            <div id="sec4bot2">
                                                <Link to="/blog" className="text-white" >
                                                    <h3 className="text-ligh m-0 " id="titlse4">Zonk Music</h3>
                                                    <span>New Studio Launch</span>
                                                </Link>
                                                
                                            </div>

                                        </div>
                                    </div>
                                </div>

                            </div>

                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Mysectionfour;