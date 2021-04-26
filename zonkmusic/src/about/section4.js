import { Component } from "react";
import Typewriter from "typewriter-effect";


class Sectionfour extends Component {
    render() {
        return (
            <div style={{backgroundColor:"black"}}>
                <div className="container-lg py-5" >
                    <div className="pb-3" >
                    
                        <h2 className="display-4 font-weight-normal" id="eve">
                            <Typewriter
                            options={{
                                strings: ['OUR MISSION'],
                                autoStart: true,
                                loop: true,
                            }}
                            />
                        </h2>
                        <p>
                            <Typewriter
                            options={{
                                strings: ['Growing Entertainment market across the world through the production, promotion and recording of high quality entertainment. Zonk Music; we are all about taking Africans music to the world, with the continent having diverse rich culture','We believe Zonk Music will be able to show case all the best of Africa',
                                'Zonk Music and its multi-platform approach respond  to take the needs and interests of Africans. We seek to empower artist and inspire to democratize trends and offer concrete African Music in style. Zonk Music will own and have control over all masters in Zonk Music, copyrights and licenses will be fully owned by Zonk Music'],
                                autoStart: true,
                                loop: true,
                            }}
                        
                            />
                        
                        </p>
                    </div>
                </div>
                <div className="container-lg py-5">
                    <div className="pb-3">
                        <h2 className="display-4 font-weight-normal" id="eve">
                        <Typewriter
                            options={{
                                strings: ['MARKETING'],
                                autoStart: true,
                                loop: true,
                            }}
                        
                            />
                            
                        </h2>
                        <p>
                        <Typewriter
                            options={{
                                strings: ['Zonk Music will distribute, produce, manufacture, market, promote and enforce its masters owned 100% through various platforms. ',
                                ' Our main goal is to be creative and effective in terms of marketing our artist will be provided with world class marketing strategy, staring from the studio moments to the final production. ','We will have multi-faceted promotional strategy and hire independent record promoters, with having other platforms inhouse such as Zonk Magazine, Zonk Tv, Zonk News and Zonk Radio this gives Zonk Music a strong promotional print, video and medium.'],
                                autoStart: true,
                                loop: true,
                            }}
                        
                            />
                    
                        
                        </p>
                    </div>
                </div>
                <div className="container-lg py-5">
                    <div className="pb-3">
                        <h2 className="display-4 font-weight-normal" id="eve">
                        <Typewriter
                            options={{
                                strings: ['EXECUTIVE SUMMARY'],
                                autoStart: true,
                                loop: true,
                            }}
                        
                            />
                            
                        </h2>
                        <p>
                        <Typewriter
                            options={{
                                strings: ['Zonk Music, chairman Andrew Chimpondah a qualified chartered accountant who will oversee all our financials. He maintains strong affiliations in the industry and with his hard work, dedication and humbleness we believe Africa is in good hands. ',

                                'C.E.O Dineo Mante Phasha a black woman who is holding a Bachelor degree in accounting and also her being a public figure we at Zonk Music believe our artist will be protected and be treated with fairness. ',
                                
                                'Our Head of Zonk Music Martin Wanga known as Pinto IQ is a music specialist who believes music heals and connects the world, having him on board indeed is a privilege and at Zonk Music we fully support him. '],
                                autoStart: true,
                                loop: true,
                            }}
                        
                            />
                        
                        </p>
                    </div>
                </div>
            </div>
        );
    };
}

export default Sectionfour;