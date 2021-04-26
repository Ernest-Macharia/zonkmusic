import { Component } from "react";

import img1 from '../../images/foot1/inst1.jpg';
import img2 from '../../images/foot1/inst2.jpg'
import img3 from '../../images/foot1/inst3.jpg';
import img4 from '../../images/foot1/inst4.jpg'


class Footaone extends Component {

    render() {
        let instlink = "https://www.instagram.com/zonkmusic/";


        return (
            <div>

                <div className="container-lg">
                    <div className="py-5">
                        <div className="pb-3">
                            
                            <div className="row">
                                <div className="col-md-6">
                                    <h2 id="eve" className="display-4 font-weight">
                                        Instagram
                                    </h2>
                                </div>
                                <div className="col-md-6">
                                    <div className="text-md-right mt-3">
                                        <a href={instlink} className="btn btn-danger p-3">Follow Us</a>
                                    </div>
                                </div>
                            </div>
                            <div className="py-3"></div>

                            <div className="row">
                                <div className="col-md-3">
                                    <div id="galeryrel">
                                        <img src={img1} alt="gallery one " id="mygaleimage" />
                                        <div id="galerypos" >
                                            <div id="mypading3" className="text-center">
                                                <span className="border border-warning p-2 px-3 mr-2">
                                                    <a href={instlink} className="text-light">
                                                        <i className="fa fa-instagram" aria-hidden="true"></i>
                                                    </a>
                                                </span>
                                              

                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <div id="galeryrel">
                                        <img src={img2} alt="gallery one " id="mygaleimage" />
                                        <div id="galerypos" >
                                            <div id="mypading3" className="text-center">
                                                <span className="border border-warning p-2 px-3 mr-2">
                                                    <a href={instlink} className="text-light">
                                                        <i className="fa fa-instagram" aria-hidden="true"></i>
                                                    </a>
                                                </span>
                                               

                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <div id="galeryrel">
                                        <img src={img3} alt="gallery one " id="mygaleimage" />
                                        <div id="galerypos" >
                                            <div id="mypading3" className="text-center">
                                                <span className="border border-warning p-2 px-3 mr-2">
                                                    <a href={instlink} className="text-light">
                                                        <i className="fa fa-instagram" aria-hidden="true"></i>
                                                    </a>
                                                </span>
                                               

                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <div id="galeryrel">
                                        <img src={img4} alt="gallery one " id="mygaleimage" />
                                        <div id="galerypos" >
                                            <div id="mypading3" className="text-center">
                                                <span className="border border-warning p-2 px-3 mr-2">
                                                    <a href={instlink} className="text-light">
                                                        <i className="fa fa-instagram" aria-hidden="true"></i>
                                                    </a>
                                                </span>
                                               

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

export default Footaone;