import { Component } from "react";

import img1 from '../images/about/staf1.jpg';
import img2 from '../images/about/staf2.jpg';
import img3 from '../images/about/staf3.jpg';
import img7 from '../images/about/staf7.jpg';

class Sectione extends Component {
    render() {
        return (
            <div className="bg- border-to">
                <div className="container-lg py-5">
                    <div className="pb-3">
                        <h2 className="display-4 text-  font-weight-normal" id="lightgre">
                            New Shows
                        </h2>

                        <div className="row">
                            <div className="col-md-3 mb-3 text-white">
                                <img src={img1} alt="staff 1" className="img-fluid" />
                                <h5 className="mb-0 pt-2" id="myred">Them Boyz </h5>
                                <span className="small"><i>Tim and Pablo</i></span>
                            </div>
                            <div className="col-md-3 mb-3 text-white">
                                <img src={img2} alt="staff 2" className="img-fluid" />
                                <h5 className="mb-0 pt-2" id="myred">Machoka </h5>
                                <span className="small"><i>Zozo</i></span>
                            </div>
                            <div className="col-md-3 mb-3 text-white">
                                <img src={img7} alt="staff 3" className="img-fluid" />
                                <h5 className="mb-0 pt-2" id="myred">Africa Connect</h5>
                                <span className="small"><i>Charles and Grace</i></span>
                            </div>
                            <div className="col-md-3 mb-3 text-white">
                                <img src={img3} alt="staff 4" className="img-fluid" />
                                <h5 className="mb-0 pt-2" id="myred">The Beat</h5>
                                <span className="small"><i>Dj Flips</i></span>
                            </div>

                        </div>
                    </div>

                </div>


            </div>
        );

    };

}

export default Sectione;