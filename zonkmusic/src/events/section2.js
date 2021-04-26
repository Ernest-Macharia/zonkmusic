import { Component } from "react";

import img1 from '../images/about/event1.jpg';
import img2 from '../images/about/event2.jpg';
import img3 from '../images/about/event3.jpg';
import img7 from '../images/about/staf7.jpg';

class Sectiontwo extends Component {
    render() {
        return (
            <div className="bg- border-to">
                <div className="container-lg py-5">
                    <div className="pb-3">
                        <h2 className="display-4 text-  font-weight-normal" id="eve">
                            Events
                        </h2>

                        <div className="row">
                            <div className="col-md-4 mb-4 text-white">
                                <img src={img1} alt="staff 1" className="img-fluid" />
                                <h5 className="mb-0 pt-2" id="myred">Red Party Event </h5>
                                
                            </div>
                            <div className="col-md-4 mb-4 text-white">
                                <img src={img2} alt="staff 2" className="img-fluid" />
                                <h5 className="mb-0 pt-2" id="myred">Opening Party </h5>
                                
                            </div>
                            
                            <div className="col-md-4 mb-4 text-white">
                                <img src={img3} alt="staff 4" className="img-fluid" />
                                <h5 className="mb-0 pt-2" id="myred">Party reloaded</h5>
                                
                            </div>

                        </div>
                    </div>

                </div>


            </div>
        );

    };

}

export default Sectiontwo;