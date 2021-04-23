import { Component } from "react"

import Navbar from '../components/headers/navbar' ;
import Sectione from './section1';
import Sectiontwo from './section2';
// import Sectionthree from './section3';
class Contactclass extends Component{

    render(){
        return(
            <div>
                <Navbar myroute="gallery"/>
                <Sectione />
                <Sectiontwo />
                {/* <Sectionthree /> */}
            </div>
        );
    }

}

export default Contactclass ;