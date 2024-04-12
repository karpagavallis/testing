import React from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const Contact = () => {
    return <>

        <section className="address-section">
            <div className="gradient-circle"></div>
            <div className="container">
                <div className="row justify-content-center align-items-center">
                    <div className="col-lg-12 title-section">
                        <h1 className="text-center">Get in touch</h1>
                        <p className="text-center pt-3">I enjoy discussing new projects and design challenges. <br />Please share as much info, as possible so we can get the most out of our first catch-up.</p>

                    </div>
                </div>
                <div className="row pt-5">
                    <div className="col-lg-4">
                        <div className="address-box">
                            <div className="pb-3">
                                <i className="fa fa-phone"></i>
                                <h3 className="pt-3"><strong>9578443486</strong></h3>
                            </div>                          
                            
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="address-box">                            
                            <div className="pb-3">
                                <i className="fa fa-envelope"></i>
                                <h3 className="pt-3"><strong>karpagam28995@gmail.com</strong></h3>
                            </div>
                           
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="address-box">                           
                            <div>
                                <i className="fa fa-linkedin"></i>
                                <h3 className="pt-3"><strong>linkedin.com/in/karpagavalli-santharam-44a002102</strong></h3>
                            </div>
                           
                        </div>
                    </div>
                  
                </div>
            </div>
        </section>
    </>
}

export default Contact