import { Component } from "react";
import { Link } from "react-router-dom";
import Typewriter from "typewriter-effect";


import img1 from '../../images/section2/imgd.jpg';


class Sectiontwo extends Component {

    constructor(props) {
        super(props)
        console.log(props);
    }
    componentDidMount() {
        window.scrollTo(0, 0)
      }

    render() {
        let chkroute = this.props.chkroute;
        let mydiv ;
        if(chkroute === "home"){
            mydiv = <div className="py-lg-3">
                    <a href="/about" className="btn btn-danger text-white p-2 rounded" >
                        &nbsp;&nbsp;&nbsp; Curious? &nbsp;&nbsp;&nbsp;
                    </a>
                </div>
        }
        else{
            mydiv = <div></div>
        }
        return (

            <div id="section2" className="bg-ight">

                <div className="container-lg">

                    <div className="py-5 ">

                        <div className="pb-3 border-bottom mb-4">
                            
                            {/* <h3 className="display-4 text-success">Music For You </h3> */}

                        </div>
                        <div className="row">
                            <div className="col-md-6">
                                <div id="section2b" className="pb-3">
                                    <img src={img1} alt="section 2 b" className="img-fluid" />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="py-4">

                                    <div className="pb-4">
                                    
                                        <h3 className="text-warnin display-4 font-weight-normal" id="myred2">
                                        <Typewriter
                                            options={{
                                                strings: ['Who We Are!', 'What We Do!'],
                                                autoStart: true,
                                                loop: true,
                                            }}
                                        />
                                        </h3>
                                        <p>
                                            ZonkMusic is a recording label headquartered in South Africa
                                            with operations in Kenya and Zimbabwe.
                                            Zonk Music will  focus on the following genres :
                                            House, Pop, HipHop, Gospel, Rock and Jazz Music.
                                        </p>

                                        <p>
                                            Zonk Music is a platform that introduces African culture
                                            and diversity through music to the world.
                                            It helps to showcase the best of African untapped artistic talent.
                                            Inspiring and growing African to self-actualization
                                        </p>

                                    </div>
                                    {mydiv}


                                    

                                </div>
                            </div>

                        </div>


                    </div>


                </div>


            </div>
        );
    }
}

export default Sectiontwo;