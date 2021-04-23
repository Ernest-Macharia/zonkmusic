import { Component } from "react";

class Sectiontwo extends Component {
    render() {
        return (
            <div id="section1" >
                <div className="container-lg text-white py-5">
                    <div className="pb-3">
                        <h4 className="displ " id="lightgre">
                         Coverage

                        </h4>
                    </div>
                    <div className="row" >
                       
                        <div className="col-md-3">
                            <h2 className="display-4  font-weight-normal">NO #1</h2>
                            <h5 id="myred2"> Ranking</h5>
                        </div>

                        <div className="col-md-3">
                            <h2 className="display-4  font-weight-normal">458</h2>
                            <h5 id="myred2"> Hours Of Music</h5>
                        </div>

                        <div className="col-md-3">
                            <h2 className="display-4 text-warnjing font-weight-normal">4M+</h2>
                            <h5 id="myred2" > Viewers</h5>
                        </div>

                        <div className="col-md-3">
                            <h2 className="display-4 text-wrning font-weight-normal">38</h2>
                            <h5 id="myred2"> New Shows</h5>
                        </div>
                        </div>

                    

                </div>


            </div>
        );
    };
}

export default Sectiontwo;