import React from "react";
import Img from '../images/karpu.png';
import CounterBox from "./CounterBox";
import PersonalInfo from "./PersonalInfo";
import MySkill from "./MySkill";
import Education from "./Education";


const AboutMe = () => {
    return <>
        <section className="about-section">
            <div className="gradient-circle"></div>
            <div className="container">
                <div className="row justify-content-center align-items-center">
                    <div className="col-lg-12 title-section">
                        <h1 className="text-center">About <span>Me</span></h1>
                        <div className="mobile-image d-block d-md-none">
                            <img src={Img} className="img-fluid" />
                        </div>
                    </div>
                    <div className="row pt-5">
                        <div class="col-12">
                            <h2 class="custom-title">Personal Infos</h2>
                        </div>
                        <div className="col-12 col-lg-7 col-xl-7 pt-3">
                            <PersonalInfo fn="Karpagavalli" ln="Santharam" age="28 Years" nation="Indian" fl="Available" phn="9578443486" linked="KarpagavalliS" add="Madurai" mail="karpagam28995@gmail.com" lang="Tamil, English" />
                        </div>
                        <div className="col-12 col-lg-5 col-xl-5 mt-3">
                            <CounterBox />
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="skill-section">
            <MySkill />
        </section>

        <section className="educate-section">
            <Education />
        </section>


       
    </>

}

export default AboutMe