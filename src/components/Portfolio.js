import React from "react";
import Cube from '../images/cube.png'
import Ilios from '../images/ilios.png'
import Sq from '../images/sq.png'
import Squad from'../images/squad.png'
import Peugeot from '../images/peugeot.png'
import Aravind from '../images/aravind.png'
import Dauro from '../images/dauro.png'
import Quickac from '../images/quickac.png'
import Oldac from '../images/oldac.png'
import Usedac from '../images/usedac.png'
import Rn from '../images/rn.png'
import Dfoxx from '../images/dfoxx.png'
import Mme from '../images/mme.png'
import Maha from '../images/maha.png'
import Audit from '../images/audit.png'
import Gas from '../images/gas.png'
import { Link } from "react-router-dom";

const Portfolio = () => {
    return <>
        <section className="port-section">
            <div className="gradient-circle"></div>
            <div className="container">
                <div className="row justify-content-center align-items-center">
                    <div className="col-lg-12 title-section">
                        <h1 className="text-center">My <span>Portfolio</span></h1>
                    </div>
                </div>
                    <div className="row justify-content-center align-items-center pt-5">
                    <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6">
                    <Link to="https://www.ilios.digital/">
                        <div className="portfolio_box mb-4">
                            <div className="cards">
                                <div className="card">
                                    <div className="card-image">
                                        <img src={Ilios} />
                                    </div>
                                    <h2 className="card-title">Ilios Digital</h2>
                                </div>
                            </div>
                        </div>
                    </Link>
                    </div>
                    <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6">
                    <Link to="https://squadcube.io/">
                        <div className="portfolio_box mb-4">
                            <div className="cards">
                                <div className="card">
                                    <div className="card-image">
                                        <img src={Squad} />
                                    </div>
                                    <h2 className="card-title">Squadcube Solutions</h2>
                                </div>
                            </div>
                        </div>
                    </Link>
                    </div>
                    <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6">
                    <Link to="https://www.draravindsivf.com/">
                        <div className="portfolio_box mb-4">
                            <div className="cards">
                                <div className="card">
                                    <div className="card-image">
                                        <img src={Aravind} />
                                    </div>
                                    <h2 className="card-title">Dr.Aravind IVF</h2>
                                </div>
                            </div>
                        </div>
                    </Link>
                    </div>
                    <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6">
                    <Link to="https://squadcube.com/">
                        <div className="portfolio_box mb-4">
                            <div className="cards">
                                <div className="card">
                                    <div className="card-image">
                                        <img src={Sq} />
                                    </div>
                                    <h2 className="card-title">Squadcube</h2>
                                </div>
                            </div>
                        </div>
                    </Link>
                    </div>
                    <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6">
                    <Link to="https://www.peugeot.co.uk/">
                        <div className="portfolio_box mb-4">
                            <div className="cards">
                                <div className="card">
                                    <div className="card-image">
                                        <img src={Peugeot} />
                                    </div>
                                    <h2 className="card-title">Peugeot</h2>
                                </div>
                            </div>
                        </div>
                    </Link>
                    </div>
                    {/* /--------------Squad cube-------------/ */}
                    <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6">
                    <Link to="https://digitalauro.in/">
                        <div className="portfolio_box mb-4">
                            <div className="cards">
                                <div className="card">
                                    <div className="card-image">
                                        <img src={Dauro} />
                                    </div>
                                    <h2 className="card-title">Digital Auro</h2>
                                </div>
                            </div>
                        </div>
                    </Link>
                    </div>
                    <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6">
                    <Link to="https://rn-academy.in/">
                        <div className="portfolio_box mb-4">
                            <div className="cards">
                                <div className="card">
                                    <div className="card-image">
                                        <img src={Rn} />
                                    </div>
                                    <h2 className="card-title">Rn Academy</h2>
                                </div>
                            </div>
                        </div>
                    </Link>
                    </div>
                    <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6">
                    <Link to="https://usedacbuyerschennai.in/">
                        <div className="portfolio_box mb-4">
                            <div className="cards">
                                <div className="card">
                                    <div className="card-image">
                                        <img src={Usedac} />
                                    </div>
                                    <h2 className="card-title">Used Ac Buyer chennai</h2>
                                </div>
                            </div>
                        </div>
                    </Link>
                    </div>
                    <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6">
                    <Link to="https://oldacbuyerschennai.com/">
                        <div className="portfolio_box mb-4">
                            <div className="cards">
                                <div className="card">
                                    <div className="card-image">
                                        <img src={Oldac} />
                                    </div>
                                    <h2 className="card-title">Old Ac Buyer chennai</h2>
                                </div>
                            </div>
                        </div>
                    </Link>
                    </div>
                    <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6">
                    <Link to="https://quickscrapbuyerchennai.com/our-services">
                        <div className="portfolio_box mb-4">
                            <div className="cards">
                                <div className="card">
                                    <div className="card-image">
                                        <img src={Quickac} />
                                    </div>
                                    <h2 className="card-title">Quick Scrap Buyer</h2>
                                </div>
                            </div>
                        </div>
                    </Link>
                    </div>
                    <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6">
                    <Link to="https://manimegalaienterprises.com/">
                        <div className="portfolio_box mb-4">
                            <div className="cards">
                                <div className="card">
                                    <div className="card-image">
                                        <img src={Mme} />
                                    </div>
                                    <h2 className="card-title">Manimegalaienterprises</h2>
                                </div>
                            </div>
                        </div>
                    </Link>
                    </div>
                    <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6">
                    <Link to="https://srivaarugas.com/">
                        <div className="portfolio_box mb-4">
                            <div className="cards">
                                <div className="card">
                                    <div className="card-image">
                                        <img src={Gas} />
                                    </div>
                                    <h2 className="card-title">Srivaru Gas Agency</h2>
                                </div>
                            </div>
                        </div>
                    </Link>
                    </div>
                    <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6">
                    <Link to="https://nationalefiling.com/">
                        <div className="portfolio_box mb-4">
                            <div className="cards">
                                <div className="card">
                                    <div className="card-image">
                                        <img src={Audit} />
                                    </div>
                                    <h2 className="card-title">National efiling</h2>
                                </div>
                            </div>
                        </div>
                    </Link>
                    </div>
                    <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6">
                    <Link to="https://mahaguruuniforms.com/">
                        <div className="portfolio_box mb-4">
                            <div className="cards">
                                <div className="card">
                                    <div className="card-image">
                                        <img src={Maha} />
                                    </div>
                                    <h2 className="card-title">Mahaguru Uniforms</h2>
                                </div>
                            </div>
                        </div>
                    </Link>
                    </div>
                    <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6">
                    <Link to="https://dfoxxsolutions.com/">
                        <div className="portfolio_box mb-4">
                            <div className="cards">
                                <div className="card">
                                    <div className="card-image">
                                        <img src={Dfoxx} />
                                    </div>
                                    <h2 className="card-title">Dfox Solutions</h2>
                                </div>
                            </div>
                        </div>
                    </Link>
                    </div>
                    {/* /--------------digital suro-------------/ */}
                    {/* /--------------cube 45-------------/ */}
                    <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6">
                    <Link to="https://www.cube45.org/">
                        <div className="portfolio_box mb-4">
                            <div className="cards">
                                <div className="card">
                                    <div className="card-image">
                                        <img src={Cube} />
                                    </div>
                                    <h2 className="card-title">Cube 45</h2>
                                </div>
                            </div>
                        </div>
                    </Link>
                    </div>
                    </div>
                    </div>
                
        </section>

    </>
}

export default Portfolio