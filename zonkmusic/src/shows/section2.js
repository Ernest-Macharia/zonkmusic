import { Component } from "react";

import img1 from '../images/section1/africa.png';
import img2 from '../images/section1/monchoka.png';
import img3 from '../images/section1/jungle.png';
import img8 from '../images/section1/boys.png';
import img4 from '../images/section1/3.png';
import img5 from '../images/section1/boys.png';

class Sectiontwo extends Component {
    render() {
        return (
            <div className=" border-top  border-dark">
                <div className="container-lg">
                    <div className="py-3">
                        {/* <h4 className="font-weight- text-secondary"> —— Meet the Team </h4> */}
                        <h2 className="display-4 text- font-weight-normal" id="eve">
                            Our Shows
                        </h2>
                    </div>


                    <div className="row">
                        <div className="col-lg-6 mb-4">
                            <div className="row py-3 border-bottom border-light">
                                <div className="col-md-6">
                                    <img src={img1} alt="staff 1" className="img-fluid" />
                                </div>
                                <div className="col-md-6">
                                    <div className="" id="gre">
                                        <h4 className="text-white"> Africa Connect</h4>
                                        <p id="myred">Morning Show</p>
                                        <p id="lightgre">10AM - 1PM</p>
                                        <p>
                                            Africa Connect is morning Show that happens from Monday to Friday. From 10 am - 1 pm. It is brought to you with Grace and Charles.
                                       </p>
                                       <a href="https://zonkradio.com/program/297826/africa-connect-with-charles-and-grace/" className="btn btn-danger text-white p-2 rounded" >Check Out</a>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 mb-4">
                            <div className="row py-3 border-bottom border-light">
                                <div className="col-md-6">
                                    <img src={img2} alt="staff 2" className="img-fluid" />
                                </div>
                                <div className="col-md-6">
                                    <div className="" id="gre">
                                        <h4 className="text-white"> Monchoka </h4>
                                        <p id="myred">Evening Show</p>
                                        <p id="lightgre">4pm - 7pm</p>
                                        <p>
                                        Monchoka is an evening Show that happens from Monday to Sunday. From 4 pm - 7 pm. It is brought to you with Jeff, Kyle and Zozo.
                                       </p>
                                       <a href="https://zonkradio.com/program/297820/monchoka-with-zozo-and-kyle/" className="btn btn-danger text-white p-2 rounded" >Check Out</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6 mb-4">
                            <div className="row py-3 border-bottom border-light">
                                <div className="col-md-6">
                                    <img src={img3} alt="staff 1" className="img-fluid" />
                                </div>
                                <div className="col-md-6">
                                    <div className="" id="gre">
                                        <h4 className="text-white"> Pinto IQ on the Decks</h4>
                                        <p id="myred">Afternoon Show</p>
                                        <p id="lightgre">8AM - 10AM</p>
                                        <p>
                                        Pinto IQ is morning Show that happens from Monday to Friday. From 10 am - 1 pm. It is brought to you by Pinto.
                                       </p>
                                       <a href="/about" className="btn btn-danger text-white p-2 rounded" >Check Out</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 mb-4">
                            <div className="row py-3 border-bottom border-light">
                                <div className="col-md-6">
                                    <img src={img4} alt="staff 1" className="img-fluid" />
                                </div>
                                <div className="col-md-6">
                                    <div className="" id="gre">
                                        <h4 className="text-white"> 3G'S</h4>
                                        <p id="myred">Afternoon Show</p>
                                        <p id="lightgre">1pm - 4pm</p>
                                        <p>
                                        3G'S is an afternoon Show that happens from Monday to Sunday. From 1 pm - 4 pm. It is brought to you with Teddy, Honey and GiGi.
                                       </p>
                                       <a href="https://zonkradio.com/broadcaster/231264/teddy-honey-and-gigi/" className="btn btn-danger text-white p-2 rounded" >Check Out</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 mb-4">
                            <div className="row py-3 border-bottom border-light">
                                <div className="col-md-6">
                                    <img src={img3} alt="staff 1" className="img-fluid" />
                                </div>
                                <div className="col-md-6">
                                    <div className="" id="gre">
                                        <h4 className="text-white"> Morning Jungle with John</h4>
                                        <p id="myred">Morning Show</p>
                                        <p id="lightgre">4AM - 7AM</p>
                                        <p>
                                        Morning Jungle is morning Show that happens from Monday to Friday. From 4 am - 7 am. It is brought to you with John Wagatua.
                                       </p>
                                       <a href="https://zonkradio.com/program/297822/morning-jungle-with-john/" className="btn btn-danger text-white p-2 rounded" >Check Out</a>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className="col-lg-6 mb-4">
                            <div className="row py-3 border-bottom border-light">
                                <div className="col-md-6">
                                    <img src={img5} alt="staff 1" className="img-fluid" />
                                </div>
                                <div className="col-md-6">
                                    <div className="" id="gre">
                                        <h4 className="text-white"> Them Boys</h4>
                                        <p id="myred">Afternoon Show</p>
                                        <p id="lightgre">2pm - 4pm</p>
                                        <p>
                                        Them Boys is an early morning Show that happens from Monday to Sunday. From 1 am - 4 am. It is brought to you with Tim and Amos.
                                       </p>
                                       <a href="https://zonkradio.com/program/297823/them-boys-with-tim-and-amos/" className="btn btn-danger text-white p-2 rounded" >Check Out</a>
                                       
                                    </div>
                                </div>
                            </div>
                        </div>



                        
                       
                    </div>



                </div>

            </div>
        );

    };

}

export default Sectiontwo;