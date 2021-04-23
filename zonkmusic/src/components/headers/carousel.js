import { Component } from "react";
// import sliderim1 from '../../images/slide1.jpg';
import sliderim1 from '../../images/carousel/imgdb.jpg';

import sliderim2 from '../../images/carousel/imgca.jpg';

class Mycarousel extends Component {
    render() {
        return (
            <div>

                <div id="carouselExampleCaptions" className="carousel slide" data-ride="carousel">
                    <ol className="carousel-indicators">
                        <li data-target="#carouselExampleCaptions" data-slide-to="0" className="active"></li>
                        <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
                    </ol>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src={sliderim1} className="d-block w-100 h-80" alt="..." />
                            <div className="carousel-caption d-none d-md-block">

                                <div className="text-left">
                                    <div className="row">
                                        <div className="col-lg-8">
                                            <span id="lightgre"> ZonkMusic </span>
                                            <div className="d-none d-lg-block">
                                                <h4 className="display-4 font-weight-bold">Black To The Future</h4>
                                            </div>
                                            <p>
                                                ZonkMusic - Introducing African culture and diversity through music to the World
                                            </p>
                                            <button className="btn btn-danger p-3">Learn More</button>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>

                        <div className="carousel-item">
                            <img src={sliderim2} className="d-block w-100 h-80" alt="..." />
                            <div className="carousel-caption d-none d-md-block">
                                <div className="text-left">
                                    <div className="row">
                                        <div className="col-lg-8">
                                            <span id="lightgre"> ZonkMusic</span>
                                            <div className="d-none d-lg-block">
                                                <h4 className="display-4 font-weight-bold">Promoting Local Content</h4>
                                            </div>
                                            <p>
                                                Showcasing the best of African untapped artistic talent.
                                                Inspiring and growing African to self-actualization
                                            </p>
                                            <button className="btn btn-danger p-3">See Shows</button>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                    <a className="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a>
                </div>



            </div>
        );
    }

}

export default Mycarousel;