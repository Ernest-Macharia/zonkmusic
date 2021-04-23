import { Component } from "react"
import Navbar from '../components/headers/navbar' ;

import Sectione from './section1';
import Sectiontwo from './section2';
class Contactclass extends Component{

    render(){
        return(
            <div>
                <Navbar myroute="blog" />
                <Sectione />
                <Sectiontwo />
            </div>
        );
    }

}

export default Contactclass ;