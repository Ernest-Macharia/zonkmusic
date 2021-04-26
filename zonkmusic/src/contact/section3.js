import { Component } from "react"

import Footacal from '../components/footer/foota2'



class Sectione extends Component {

    render() {
        return (
            <div className="bg-dark pt-5" id="section5">
                            <div className="container-lg pb-4">
                <div className="row">
                    <div className="col-md-8">
                        <Footacal />
                    </div>
                    <div className="col-md-4 text-l" id="dim2">
                        <div className="pt-5">
                            <h4 id="myred2" className="font-weight- text-"> Contact Info </h4>
                            
                            <div>
                                <h5 id="myred2" className="font-weight-normal text-">Location </h5>
                                <p>
                                    <i className="fa fa-map-marker" aria-hidden="true"></i> &nbsp;&nbsp;
                                    Shelter Afrique House, <br /> 
                                    Nairobi, Kenya.
                                    <br />
                                </p>
                                <p></p>
                                <h5 id="myred2" className="font-weight-normal text-">Phone</h5>
                                <p>
                                    <i className="fa fa-phone " aria-hidden="true"></i> &nbsp; +254724990517 | 0724990517 

                                </p>
                                <p></p>
                                <h3 id="myred2" className="font-weight-normal text-" >Email</h3>
                                <p>
                                    <i className="fa fa-envelope-o" aria-hidden="true"></i> &nbsp; &nbsp;
                                    info@zonkmusic.com
                    </p>
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