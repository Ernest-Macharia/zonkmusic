import { Component } from "react";
import imglogo from '../../images/zonk-music.png';
import { Link } from "react-router-dom";

// import Carousel from './carousel';




class Logo extends Component {

    render() {
        return (
            <div className="log1">

                   <Link to="/">
                        <img src={imglogo} className="logo" alt="Komplab Logo" /> &nbsp;
                    </Link>

            </div>
        );
    }

}

export default Logo;