import React from "react";
import {ReactComponent as HtmlIcon} from "../../src/images/html.svg"
import {ReactComponent as CssIcon} from "../../src/images/css.svg"
import {ReactComponent as JsIcon} from "../../src/images/javascript.svg"
import {ReactComponent as BootstrapIcon} from "../../src/images/bootstrap.svg"
import {ReactComponent as SassIcon} from "../../src/images/sass.svg"
import {ReactComponent as ReactIcon} from "../../src/images/react.svg"
import {ReactComponent as WorpressIcon} from "../../src/images/wp.svg"
import {ReactComponent as FigmaIcon} from "../../src/images/figma.svg"
import {ReactComponent as PhotoshopIcon} from "../../src/images/photoshop.svg"
import {ReactComponent as GitIcon} from "../../src/images/github.svg"



const MySkill = () => {
    let imgStyle = {
        width : "50px",
        height : "100px"
    }
    return <>
    
        <div className="container">
            <div className="row justify-content-center align-items-center">
                <div className="col-lg-12">
                    <h2 className="custom-title">My Skills</h2>
                </div>
                <div className="row">
                    <div className="col-xl-2 col-lg-2 col-md-4 col-sm-6 col-6 mt-3">
                        <div className="skill-box">
                            <HtmlIcon style={imgStyle}/>
                            <div className="skill-content">85%</div>
                        </div>
                        <h3 className="heading">Html</h3>
                    </div>
                    <div className="col-xl-2 col-lg-2 col-md-4 col-sm-6 col-6 mt-3">
                        <div className="skill-box">
                            <CssIcon style={imgStyle}/>
                            <div className="skill-content">80%</div>
                        </div>
                        <h3 className="heading">CSS</h3>
                    </div>
                    <div className="col-xl-2 col-lg-2 col-md-4 col-sm-6 col-6 mt-3">
                        <div className="skill-box">
                            <JsIcon style={imgStyle}/>
                            <div className="skill-content">60%</div>
                        </div>
                        <h3 className="heading">Javascript</h3>
                    </div>
                    <div className="col-xl-2 col-lg-2 col-md-4 col-sm-6 col-6 mt-3">
                        <div className="skill-box">
                            <ReactIcon style={imgStyle}/>
                            <div className="skill-content">60%</div>
                        </div>
                        <h3 className="heading">React Js</h3>
                    </div>   
                    <div className="col-xl-2 col-lg-2 col-md-4 col-sm-6 col-6 mt-3">
                        <div className="skill-box">
                            <SassIcon style={imgStyle}/>
                            <div className="skill-content">50%</div>
                        </div>
                        <h3 className="heading">Sass</h3>
                    </div> 
                    <div className="col-xl-2 col-lg-2 col-md-4 col-sm-6 col-6 mt-3">
                        <div className="skill-box">
                            <BootstrapIcon style={imgStyle}/>
                            <div className="skill-content">70%</div>
                        </div>
                        <h3 className="heading">Bootstrap 5</h3>
                    </div>
                    <div className="col-xl-2 col-lg-2 col-md-4 col-sm-6 col-6 mt-3">
                        <div className="skill-box">
                            <WorpressIcon style={imgStyle}/>
                            <div className="skill-content">50%</div>
                        </div>
                        <h3 className="heading">Wordpress</h3>
                    </div>
                    <div className="col-xl-2 col-lg-2 col-md-4 col-sm-6 col-6 mt-3">
                        <div className="skill-box">
                            <FigmaIcon style={imgStyle}/>
                            <div className="skill-content">35%</div>
                        </div>
                        <h3 className="heading">Figma</h3>
                    </div>
                    <div className="col-xl-2 col-lg-2 col-md-4 col-sm-6 col-6 mt-3">
                        <div className="skill-box">
                            <PhotoshopIcon style={imgStyle}/>
                            <div className="skill-content">40%</div>
                        </div>
                        <h3 className="heading">Photoshop</h3>
                    </div>    
                    <div className="col-xl-2 col-lg-2 col-md-4 col-sm-6 col-6 mt-3">
                        <div className="skill-box">
                            <GitIcon style={imgStyle}/>
                            <div className="skill-content">20%</div>                            
                        </div>
                        <h3 className="heading">Github</h3>
                    </div> 
                   
                       
                </div>
            </div>
        </div>
    </>
}

export default MySkill