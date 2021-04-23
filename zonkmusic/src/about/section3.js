import { Component } from "react";

import img1 from '../images/about/staf1.jpg';
import img2 from '../images/about/staf2.jpg';
import img3 from '../images/about/staf3.jpg';
import img4 from '../images/about/staf4.jpg';
import img5 from '../images/about/staf5.jpg';
import img6 from '../images/about/staf6.jpg';
import img7 from '../images/about/staf7.jpg';
import img8 from '../images/about/staf8.jpg';

class Sectionthree extends Component {
    render() {
        return (
            <div>
                <div className="container-lg py-5">
                    <div className="pb-3">
                        <h4 id="myred2"> Meet the Team </h4>
                        <h2 className="display-4 font-weight-normal" id="lightgre">
                            Our Staff
                        </h2>
                    </div>
                    
                    <div className="row">
                        <div className="col-md-3 mb-3">
                            <img src={img1} alt="staff 1" className="img-fluid" />
                            <h5 className="mt-2 mb-0" id="myred">John Smith</h5>
                            <p className=" p-0 m-0" id="dimwhite"><i>Producer </i></p>
                        </div>
                        <div className="col-md-3 mb-3">
                            <img src={img2} alt="staff 2" className="img-fluid" />
                            <h5 className="mt-2 mb-0" id="myred">Fikile Madinoge</h5>
                            <p className="p-0 m-0" id="dimwhite"><i>Founder</i></p>
                        </div>
                        <div className="col-md-3 mb-3">
                            <img src={img7} alt="staff 3" className="img-fluid" />
                            <h5 className="mt-2 mb-0" id="myred">Winnie Jesca</h5>
                            <p className=" p-0 m-0" id="dimwhite"><i>Events Manager</i></p>
                        </div>
                        <div className="col-md-3 mb-3">
                            <img src={img4} alt="staff 4" className="img-fluid" />
                            <h5 className="mt-2 mb-0" id="myred">Nickson Mutanda</h5>
                            <p className=" p-0 m-0" id="dimwhite"><i>Finance</i></p>
                        </div>
                        <div className="col-md-3 mb-3">
                            <img src={img5} alt="staff 5" className="img-fluid" />
                            <h5 className="mt-2 mb-0" id="myred">Dj Shinsky</h5>
                            <p className=" p-0 m-0" id="dimwhite"><i>Crew</i></p>
                        </div>
                        <div className="col-md-3 mb-3">
                            <img src={img6} alt="staff 6" className="img-fluid" />
                            <h5 className="mt-2 mb-0" id="myred">Dj Zozo</h5>
                            <p className=" p-0 m-0" id="dimwhite"><i>Crew</i></p>
                        </div>
                        <div className="col-md-3 mb-3">
                            <img src={img3} alt="staff 7" className="img-fluid" />
                            <h5 className="mt-2 mb-0" id="myred">Dj Flip</h5>
                            <p className="  p-0 m-0" id="dimwhite"><i>Crew</i></p>
                        </div>
                        <div className="col-md-3 mb-3">
                            <img src={img8} alt="staff 8" className="img-fluid" />
                            <h5 className="mt-2 mb-0" id="myred">Lubadiri</h5>
                            <p className=" p-0 m-0" id="dimwhite"><i>Presenter</i></p>
                        </div>
                    </div>



                </div>
            </div>
        );
    };
}

export default Sectionthree;