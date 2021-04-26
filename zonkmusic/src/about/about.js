import { Component } from "react"

import Navbar from '../components/headers/navbar' ;

import Sectione from './section1';

import Sectionthree from './section3';
import Sectionfour from './section4';
class About extends Component{

    render(){
        
        return(
            
            <div>
                <Navbar myroute="about"/>
                <Sectione />
                <Sectionfour />
                <Sectionthree />
                
            </div>
        );
    }

}

export default About ;