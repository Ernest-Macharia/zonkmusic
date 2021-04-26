import { Component } from "react"
import Navbar from '../components/headers/navbar' ;

import Sectione from './section1';
import Sectiontwo from './section2';
class Event extends Component{

    render(){
        return(
            <div>
                <Navbar myroute="events"/>
                <Sectione />
                <Sectiontwo />
            </div>
        );
    }

}

export default Event ;