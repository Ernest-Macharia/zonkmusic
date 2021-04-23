import { Component } from "react";
import { Link } from "react-router-dom";

class Mysectionthree extends Component {

    render() {
        return (
            <div>

                <div className="" id="sectionthree">
                    <div id="thrreind">
                        <div className="container-lg">
                            <div className="py-5 " id="dim2">

                                <div className="pb-3">
                                    
                                    <h2 className="display-4 text- font-weight-normal" id="myred2">
                                        Your Fav Shows
                                    </h2>
                                </div>

                                <div className="text-">


                                    <div className="row border-bottom py-3">
                                        <div className="col-md-3">
                                            <span id="lightgre">
                                                MON 8/05/2022
                                            </span>
                                        </div>
                                        <div className="col-md-3">
                                            <h4>
                                                Africa Connect
                                            </h4>
                                            <span id="spancol" className="small">
                                                Charles and Grace
                                            </span>
                                        </div>
                                        <div className="col-md-3">
                                            <h5>
                                                8AM - 11AM
                                            </h5>
                                        </div>
                                        <div className="col-md-3">
                                            <Link to="/shows" className="btn btn-danger">
                                                Find Details
                                            </Link>
                                        </div>
                                    </div>

                                    <div className="row border-bottom py-3">
                                        <div className="col-md-3">
                                            <span id="lightgre">
                                                WED 07/03/2022
                                            </span>
                                        </div>
                                        <div className="col-md-3">
                                            <h4>
                                                Machoka
                                            </h4>
                                            <span id="spancol" className="small">
                                                Zozo, Kyle & Jeff
                                            </span>
                                        </div>
                                        <div className="col-md-3">
                                            <h5>
                                                5PM - 8PM
                                            </h5>
                                        </div>
                                        <div className="col-md-3">
                                            <Link to="/shows" className="btn btn-danger">
                                                Find Details
                                            </Link>
                                        </div>
                                    </div>

                                    <div className="row border-bottom py-3">
                                        <div className="col-md-3">
                                            <span id="lightgre">
                                                FRI 14/01/2022
                                            </span>
                                        </div>
                                        <div className="col-md-3">
                                            <h4>
                                                Them Boys
                                            </h4>
                                            <span id="spancol" className="small">
                                                Tim and Pablo
                                            </span>
                                        </div>
                                        <div className="col-md-3">
                                            <h5>
                                                3PM - 5PM
                                            </h5>
                                        </div>
                                        <div className="col-md-3">
                                            <Link to="/shows" className="btn btn-danger">
                                                Find Details
                                            </Link>
                                        </div>
                                    </div>

                                    <div className="row border-bottom py-3">
                                        <div className="col-md-3">
                                            <span id="lightgre">
                                                SAT 23/08/2022
                                            </span>
                                        </div>
                                        <div className="col-md-3">
                                            <h4>
                                                PINTO IQ ON THE DECKS
                                            </h4>
                                            <span id="spancol" className="small">
                                                Eddy
                                            </span>
                                        </div>
                                        <div className="col-md-3">
                                            <h5>
                                                2PM - 4PM
                                            </h5>
                                        </div>
                                        <div className="col-md-3">
                                            <Link to="/shows" className="btn btn-danger">
                                                Find Details
                                            </Link>
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

export default Mysectionthree;