import { Component } from "react"

import bl1 from '../images/blog/bl1.png'
import bl2 from '../images/blog/bl2.jpg'
import bl3 from '../images/blog/bl4.jpg'
class Sectione extends Component {

    render() {
        return (
            <div className="container-lg">

                <div className="border-bottom my-3">

                    <div className="row pb-4 pt-5 ">
                        <div className="col-lg-6 order-2 order-lg-1">
                            <div className="p-4">
                                <h1 id="myred2" className=" displssay-4 font-weight-normal">
                                    Violin Orchestra at Shelter-Afrique
                                </h1>
                                <p>
                                    <a href={'s'} className="btn text-success">Upcoming</a> |
                                    <a href={'s'} className="btn text-success">Music</a> |
                                    <a href={'s'} className="btn text-success">Zozo</a> |
                                    <a href={'s'} className="btn text-info">By Jessica Brown</a> |

                                </p>
                                <p className="pl-2">
                                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
                                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
                                    nonummy nibh euismod tinci dunt ut laoreet…
                                </p>
                                <p>
                                    <a href={'k'} className="btn btn-danger"> READ MORE</a>
                                </p>
                            </div>

                        </div>
                        <div className="col-lg-6 order-1">
                            <img src={bl1} alt="Blog1" className="img-fluid" />
                        </div>
                    </div>


                </div>



                <div className="border-bottom my-3">

                    <div className="row  py-4">
                        <div className="col-lg-5 ">
                            <img src={bl2} alt="Blog1" className="img-fluid" />
                        </div>
                        <div className="col-lg-7 ">
                            <div className="p-4">
                                <h1 id="myred2" className="  font-weight-normal">
                                    Africa's Upcoming Entreprenuer
                                </h1>
                                <p>
                                    <a href={'s'} className="btn text-success">Upcoming</a> |
                                    <a href={'s'} className="btn text-success">Music</a> |
                                    <a href={'s'} className="btn text-success">Mutanda</a> |
                                    <a href={'s'} className="btn text-info">By Mutanda Brown</a> |

                                </p>
                                <p className="pl-2">
                                    Lorem Ipsum is simply dummy text of the printing and 
                                    typesetting industry. Lorem Ipsum has been the industry's 
                                    standard dummy text ever since the 1500s, when an unknown printer 
                                    took a galley of type and scrambled it to make a type specimen 
                                    book. It has survived not only five centuries, but also the leap 
                                    into electronic typesetting, remaining essentially unchanged. 
                                    It was popularised in the 1960s with the release of  …
                                </p>
                                <p>
                                    <a href={'k'} className="btn btn-danger"> READ MORE</a>
                                </p>
                            </div>

                        </div>

                    </div>


                </div>



                <div className="border-bottom my-3">

                    <div className="row pb-4 pt-5 ">
                        <div className="col-lg-6 order-2 order-lg-1">
                            <div className="p-4">
                                <h1 id="myred2" className=" displssay-4 font-weight-normal">
                                    Who Cares For The New Millennium ?
                                </h1>
                                <p>
                                    <a href={'s'} className="btn text-success">Upcoming</a> |
                                    <a href={'s'} className="btn text-success">Politics</a> |
                                    <a href={'s'} className="btn text-success">Story</a> |
                                    <a href={'s'} className="btn text-info">By Hama Tuma</a> |

                                </p>
                                <p className="pl-2">
                                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
                                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
                                    nonummy nibh euismod tinci dunt ut laoreet…
                                </p>
                                <p>
                                    <a href={'k'} className="btn btn-danger"> READ MORE</a>
                                </p>
                            </div>

                        </div>
                        <div className="col-lg-6 order-1">
                            <img src={bl3} alt="Blog1" className="img-fluid" />
                        </div>
                    </div>


                </div>






            </div>
        );
    }

}

export default Sectione;