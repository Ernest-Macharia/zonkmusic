import { Component } from "react"
import './shows.css'
import Navbar from '../components/headers/navbar' ;

import Sectione from './section1';
import Sectiontwo from './section2';
class Shows extends Component{

    render(){
        return(
            <div>
                <Navbar myroute="shows"/>
                <Sectione />
                <Sectiontwo />
            </div>
        );
    }

}

export default Shows ;