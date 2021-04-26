import { Component } from "react";

import Vida from '../../images/carousel/vidone.mp4';
import Logo from './logo'

class Bakground extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mytext: [' Black to The Future', 'Promoting Local Content',],
            mycurelem: 0,
            changestate: 0,
        }
    }

    // componentDidMount(){
    //     this.mytimeinit = setInterval(()=>{
    //         let currentIdx = this.state.mycurelem;
    //         this.setState({
    //             mycurelem: currentIdx + 1 
    //         });

    //     }, 5500);

    // }
    // componentWillUnmount(){
    //     clearInterval(this.mytimeinit);

    // }

    render() {
        // let stateind = this.state.mycurelem ;
        // let thearry = this.state.mytext ;
        // let textThatChanges = thearry[stateind % thearry.length];
        return (
            <div className="">
                
                <div id="bakcontaina">
                
                
                    <div>
                        <video autoPlay muted loop id="myVideo">
                        
                            <source src={Vida} type="video/mp4" />
                            Your browser does not support HTML5 video.
                        </video>
                        
                        <div id="contdivsbackg">
                        <Logo />
                            <div className="container-lg">
                            
                                <div id="pabak">
                                    <div className="p-3 py-5" id="dim2">
                                        <div id="divrelative">
                                            <div id="divdis1">
                                                
                                                <h4 className="display-3 font-weight-normal">
                                                     Black to the Future
                                                </h4>
                                                <span className="disp">
                                                    ZonkMusic - Introducing African culture and diversity
                                                    through music to the World
                                                </span>
                                                
                                            </div>
                                            <div id="divdis2">
                                                
                                                <h4 className="display-3 font-weight-normal">
                                                    Promoting Africa Local Content
                                                </h4>
                                                <span className="disp">
                                                    Showcasing the best of African untapped artistic talent.
                                                    Inspiring and growing African to self-actualization
                                                </span>
                                                <p className="pt-4">
                                                    
                                                </p>
                                            </div>

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

export default Bakground;