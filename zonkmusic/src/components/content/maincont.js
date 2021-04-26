import { Component } from "react";


import Section1 from './section1';
import Section2 from './section2';
import Section3 from './section3';
import Section4 from './section4';
import Section5 from './section5';



class Content extends Component {

    render() {
        return (
            <div>

                <Section1 />
                <Section2 chkroute="home"/>
                <Section3 />
                <Section4 />
                <Section5 />

            </div>
        );
    }

}

export default Content;