import { Component } from "react";

import img1 from '../../images/section5/imga.jpg';
import img2 from '../../images/section5/imgb.jpg';
// import img3 from '../../images/section5/imgc.jpg';

class SectionFive extends Component {
    render() {
        return (
            <div className="" id="section5">
                {/* stat */}
                <div className="container-lg pt-5 pb-4">

                    <div className="pb-3">
                        <h3 id="myred2" className="font-weight"> What People Say </h3>
                    </div>

                    <div id="mycarousel" className="carousel slide" data-ride="carousel">

                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <div className="row pt-5 pb-5 text-light">
                                    <div className="col-md-2 d-none d-md-block">
                                        <img src={img1} alt="Zonk Music" className="img-fluid" />
                                    </div>
                                    <div className="col-md-10">

                                        <p id="headerp" className="pt-md-4">
                                            " Revolutionary. One Of the Best recording label in Africa. 
                                            Taking African Music to new levels. 
                                            Great in Promoting African
                                            culture to the world through Music. 
                                            By Africa, for Africa. In Africa "
                                        </p>
                                    </div>

                                </div>
                            </div>

                            <div className="carousel-item">
                                <div className="row pt-5 pb-5 text-light">
                                    <div className="col-md-2 d-none d-md-block">
                                        <img src={img2} alt="Zonk Music" className="img-fluid rounded" />
                                    </div>
                                    <div className="col-md-10">
                                        <p id="headerp" className="pt-md-4">
                                            " Fantastic Shows and Songs ZonkMusic. 100% African Content.
                                                Tapping the African Talents Indeed. 
                                              More content? Awesome. Back to The Future! Cheers ZonkMusic! "
                                           

                                        </p>
                                    </div>

                                </div>

                            </div>
                        </div>

                    </div>



                </div>


                {/* end */}

            </div>
        );
    }
}

export default SectionFive;