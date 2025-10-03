import React from "react";

import { Link } from 'react-router-dom'

const PersonalInfo = (props) =>{
    return <>
          <div className="row">
                <div className="col-6 col-lg-6 animate__animated animate__fadeInLeft">
                        <ul class="about-list list-unstyled">
                            <li> <span class="title">first name :</span> <span class="value d-block d-sm-inline-block d-lg-block d-xl-inline-block">{props.fn}</span> </li>
                            <li> <span class="title">Age :</span> <span class="value d-block d-sm-inline-block d-lg-block d-xl-inline-block">{props.age}</span> </li>
                            <li> <span class="title">Freelance :</span> <span class="value d-block d-sm-inline-block d-lg-block d-xl-inline-block">{props.free}</span> </li>
                            <li> <span class="title">Phone :</span> <span class="value d-block d-sm-inline-block d-lg-block d-xl-inline-block">{props.phn}</span> </li>
                            <li> <span class="title">LinkedIn :</span> <span class="value d-block d-sm-inline-block d-lg-block d-xl-inline-block"><Link to='#'>{props.linked}</Link></span> </li>
                        </ul>
                </div>
                    <div className="col-6 col-lg-6">
                        <div class="about-content animate__animated animate__fadeInRight">    
                        <ul class="about-list list-unstyled">
                            <li> <span class="title">last name :</span> <span class="value d-block d-sm-inline-block d-lg-block d-xl-inline-block">{props.ln}</span> </li>
                            <li> <span class="title">Nationality :</span> <span class="value d-block d-sm-inline-block d-lg-block d-xl-inline-block">{props.nation}</span> </li>
                            <li> <span class="title">Address :</span> <span class="value d-block d-sm-inline-block d-lg-block d-xl-inline-block">{props.add}</span> </li>
                            <li> <span class="title">Email :</span> <span class="value d-block d-sm-inline-block d-lg-block d-xl-inline-block">{props.mail}</span> </li>
                            <li> <span class="title">Language :</span> <span class="value d-block d-sm-inline-block d-lg-block d-xl-inline-block">{props.lang}</span> </li>
                        </ul>                     
                        </div>
                    </div>  
                </div>
                <div className="col-12">      
                <a href = {Pdf} target = "_blank"><button type="button" className="btn-p theme-button">View CV</button></a>
                </div> 
    </>
}

export default PersonalInfo
