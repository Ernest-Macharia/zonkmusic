import { Component } from "react";
import { Link } from "react-router-dom";


import img1 from '../../images/section1/zonk1.jpg';
import img2 from '../../images/section1/zonk2.jpg';
import img3 from '../../images/section1/zonk3.jpg';
import img4 from '../../images/section1/zonk4.jpg';
import img5 from '../../images/section1/zonk5.jpg';

class Sectione extends Component {

    constructor(props) {
        super(props)
        this.state = {
            img1: 'ply1.jpg',
            img2: 'ply2.jpg',
            img3: 'ply3.jpg'
        }
    }

    componentDidMount() {
        window.scrollTo(0, 0)
      }

    render() {
        return (

            <div id="section1" className="">

                <div className="container-fluid" >
                    <div className="py-5 px-lg-5" >
                        
                        <h4 id="eve" className="display-4 font-weight-normal"> Music Genres </h4>
                        <div className="pt-5"></div>

                        <div className="row" >
                            <div className="col-lg-6 col-md-6 col-xl-4 " id="sectiony">
                                <div id="galeryrel">
                                    <img src={img1} alt="gallery one " id="mygaleimage" />
                                    <div id="galerypos" >
                                        <div id="mypading4" className="text-center">
                                            <span className="border border-warning p-2 px-3 mr-2">
                                                
                                                <a href="/shows" className="text-light" >
                                                   Learn More
                                                </a>
                                            </span>


                                        </div>
                                    </div>
                                </div>
                                <div className="pt-2 pb-3">
                                    <p id="myred2" className="font-weight-bold mb-0">Genre</p>
                                    <h3 id="dim2">Rock Music </h3>

                                </div>

                            </div>
                            <div className="col-lg-6 col-md-6  col-xl-4 " id="sectiony">
                                <div id="galeryrel">
                                    <img src={img3} alt="gallery one " id="mygaleimage" />
                                    <div id="galerypos" >
                                        <div id="mypading4" className="text-center">
                                            <span className="border border-warning p-2 px-3 mr-2">
                                                
                                                <a  href="/shows" className="text-light" >
                                                   Learn More
                                                </a>
                                            </span>


                                        </div>
                                    </div>
                                </div>
                                <div className="pt-2 pb-3">
                                    <p id="myred2" className="font-weight-bold mb-0" >Genre</p>
                                    <h3 id="dim2">R&B and Hip Hop</h3>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6  col-xl-4 " id="sectiony">
                                <div id="galeryrel">
                                    <img src={img2} alt="gallery one " id="mygaleimage" />
                                    <div id="galerypos" >
                                        <div id="mypading4" className="text-center">
                                            <span className="border border-warning p-2 px-3 mr-2">
                                                
                                                <a href="/shows" className="text-light" >
                                                   Learn More
                                                </a>
                                            </span>


                                        </div>
                                    </div>
                                </div>
                                <div className="pt-2 pb-3">
                                    <p id="myred2" className="font-weight-bold mb-0">Genre</p>
                                    <h3 id="dim2">House and Pop</h3>
                                </div>

                            </div>
                            
                            <div className="row">
                            
                            <div className="col-xl-6 col-md-6  col-xl-6" >
                                <div id="galeryrel">
                                    <img src={img4} alt="gallery one " id="mygaleimage" />
                                    <div id="galerypos" >
                                        <div id="mypading4" className="text-center">
                                            <span className="border border-warning p-2 px-3 mr-2">
                                                
                                                <a href="/shows" className="text-light" >
                                                   Learn More
                                                </a>
                                            </span>


                                        </div>
                                        
                                    </div>
                                </div>
                                <div className="pt-2 pb-3">
                                    <p id="myred2" className="font-weight-bold mb-0" >Genre</p>
                                    <h3 id="dim2">Gospel Music.</h3>
                                </div>

                            </div>
                            <div className="col-xl-6 col-md-6  col-xl-6" >
                                <div id="galeryrel">
                                    <img src={img5} alt="gallery one " id="mygaleimage" />
                                    <div id="galerypos" >
                                        <div id="mypading4" className="text-center">
                                            <span className="border border-warning p-2 px-3 mr-2">
                                                
                                                <a href="/shows" className="text-light" >
                                                   Learn More
                                                </a>
                                            </span>


                                        </div>
                                        
                                    </div>
                                </div>
                                <div className="pt-2 pb-3">
                                    <p id="myred2" className="font-weight-bold mb-0" >Genre</p>
                                    <h3 id="dim2">Jazz Music.</h3>
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

export default Sectione;