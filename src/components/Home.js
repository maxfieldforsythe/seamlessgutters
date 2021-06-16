import React, { Component } from 'react';
import OnHoverScrollContainer from "./CustomScrollDiv";
import '../App.css'

import Header from './header'
import Gutter from './adsfasdf.jpg'
import Gutter2 from './Gutters-2.jpg'
import GutterIcon from './gutter.png'
import hammer from './hammer.png'
import shield from './shield.png'

class Home extends Component {
    render() {
        return (
            <div className="scrollhost">
                <Header/>
                <OnHoverScrollContainer>
                <div id="home" style={{height: '110px'}}></div>
                <img  src={Gutter} className="bgImage shadows"/>
                <div id="about" className="d-flex justify-content-center align-items-center" style={{disaply: 'flex', height: '8vh', backgroundColor: '#e8e8e8', color: '#9c9c9c', font: 'calc(15px + .5vw) Verdana, sans-serif'}}>
                    Committed to superior quality and results!
                </div>
                <div style={{paddingTop: '100px', font: 'bold calc(36px + .5vw) Verdana, sans-serif'}} className="heady about d-flex justify-content-center">
                    About Our Business
                </div>
                <div  style={{width: '80%', height: '6px', backgroundColor: '#a10000', marginTop: '20px', borderRadius: '20px', marginLeft: '10vw'}}/>
                <img className="center" src={Gutter2} style={{width: '35vw',marginTop: '30px', marginLeft: '50vw', transform: 'translate(-50%)'}}/>
                <div id="about" style={{height: '16vh', width: '70%', marginBottom: 'calc(400px - 12vw)',marginLeft: 'auto', marginRight: 'auto', paddingTop:'30px', font: 'calc(13px + .5vw) Verdana, sans-serif', lineHeight: '35px'}} className="about d-flex justify-content-center">
                    New Paltz Seamless Gutters is a family owned and operated business located right here in the heart of the Hudson valley. We are commited to providing the highest quality seamless gutters for your home. Not just a gutter that looks nice, but one that will last for years to come. Through precision measurements and alignments we can assure you that these our gutters will hold strong. With flexible sizing options we will find the perfect fit for you! 
                </div>
                <div id="services" style={{width: '80vw', paddingTop: '200px', font: 'bold calc(36px + .5vw) Verdana, sans-serif'}} className="heady d-flex justify-content-center ml-auto mr-auto">
                    Our Services
                </div>
                <div  style={{width: '80%', height: '6px', backgroundColor: '#a10000', marginTop: '20px', borderRadius: '20px', marginLeft: '10vw'}}/>
                <div style={{height: '50vh' , paddingTop: '40px'}} className="d-flex justify-content-center">
                    <div className="row" style={{width: '80vw'}}>
                        <div className="col-md-3 ml-auto mr-auto">
                            <div className="container">
                                <div className="row d-flex justify-content-center">
                                    <img src={GutterIcon} style={{height: '10vw', paddingBottom: '20px'}}/>
                                </div>
                                <div style={{font: 'bold calc(13px + .5vw) Verdana, sans-serif'}}className="row services d-flex justify-content-start">
                                    5" / 6" Seamless Gutters
                                </div>
                                <div style={{font: 'calc(10px + .5vw) Verdana, sans-serif'}} class="sub row d-flex justify-content-center">
                                    We offer both 5 and 6 inch gutters to ensure that you get the best fit and look. Our gutters are of the highest quality and are extremely durable in all weather conditions.
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 ml-auto mr-auto">
                            <div className="container">
                            <div className="row d-flex justify-content-center">
                                    <img src={shield} style={{height: '10vw', paddingBottom: '20px'}}/>
                                </div>
                                <div  style={{font: 'bold calc(13px + .5vw) Verdana, sans-serif'}} className="services row  d-flex justify-content-start">
                                    Gutter Guards
                                </div>
                                <div style={{font: 'calc(10px + .5vw) Verdana, sans-serif'}} class="sub row d-flex justify-content-center">
                                    When it comes to keeping leaves and other unwanted objects out of your gutter, our gutter guards will provide long lasting protection.
                                </div>
                            </div>
                        </div>    
                        <div className="col-md-3 ml-auto mr-auto">
                            <div className="container">
                            <div className="row d-flex justify-content-center">
                                    <img src={hammer} style={{height: '10vw', paddingBottom: '20px'}}/>
                                </div>
                                <div  style={{font: 'bold calc(13px + .5vw) Verdana, sans-serif'}} className="services row  d-flex justify-content-start">
                                    Repair & Maintenance
                                </div>
                                <div style={{font: 'calc(10px + .5vw) Verdana, sans-serif'}} class="sub row d-flex justify-content-center">
                                    Not only do we do installations. We also offer repair and maintenance services to keep your gutters healthy for years to come.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div style={{height: '22vh', paddingTop: '170px'}} className="d-flex justify-content-center">
                    
                </div>
                </OnHoverScrollContainer>
            </div>
        );
    }
}

export default Home;