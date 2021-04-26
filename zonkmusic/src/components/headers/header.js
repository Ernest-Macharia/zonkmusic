import { Component } from "react";


// import Carousel from './carousel';
import Navbar from './navbar';
import Backgro from './backgro';



class Header extends Component {

    render() {
        return (
            <div>

                {/* <Carousel /> */}
                <Navbar myroute="home"/>
                <Backgro />
                

            </div>
        );
    }

}

export default Header;