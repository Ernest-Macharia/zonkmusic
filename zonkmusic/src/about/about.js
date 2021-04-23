import { Component } from "react"

import Navbar from '../components/headers/navbar' ;

import Sectione from './section1';
import Sectiontwo from '../components/content/section2';
import Sectionthree from './section2';
import Sectionfour from './section3';
class Contactclass extends Component{

    render(){
        return(
            <div>
                <Navbar myroute="about"/>
                <Sectione />
                <Sectiontwo chkroute="about" />
                <Sectionthree />
                <Sectionfour />
            </div>
        );
    }

}

export default Contactclass ;