import { Component } from "react"
import { Link } from "react-router-dom";


class Sectione extends Component {

    render() {
        return (
            <div id="galediv1">
                <div id="introshadow">
                    <div className="container-lg py-5">
                        <h4 className="display-4 font-weight-normal" id="myred2">Gallery</h4>
                        <div className="text-white">
                            <span className="mr-2">
                                <Link to="/bilb" className=" text-light" id="crumbs">Home</Link>
                            </span> /
                            <span className="ml-3" id="lightgre">
                                Gallery
                            </span>
                           
                        </div>
                    </div>

                </div>
            </div>
        );
    }

}

export default Sectione;