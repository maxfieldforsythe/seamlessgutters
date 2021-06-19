import React, { Component } from 'react';
import OnHoverScrollContainer from "./CustomScrollDiv";
import '../App.css'
import {Link} from 'react-router-dom'
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
                <div style={{position: 'relative'}}>
                    <img  src={Gutter} className="bgImage shadows"/>
                    <div style={{position: 'absolute', width: '40vw', marginLeft: '30vw', aspectRatio: '2', top: '50%', backgroundColor: 'rgba(50,50,50,0.95)', transform: 'translate(0%, -50%)'}}>
                        <div style={{color: '#fff', textAlign: 'center', paddingTop: 'calc(0px + 1vw)', fontSize: 'calc(5px + 2.5vw)'}}>
                            Looking for an estimate? <br/> Request one today!
                        </div>
                        <Link to='/estimate' style={{ textDecoration: 'none' }}>
                        <div className="btn d-flex justify-content-center align-items-center" style={{marginLeft: '10vw', marginTop: '1vw', width: '20vw', aspectRatio: '3', backgroundColor: '#a10000', fontSize: 'calc(1px + 2.5vw)', color: '#fff' }}>
                            Get an estimate
                        </div>
                        </Link>
                    </div>
                </div>
                <div id="about" className="d-flex justify-content-center align-items-center" style={{disaply: 'flex', height: '8vh', backgroundColor: '#e8e8e8', color: '#9c9c9c', font: 'calc(15px + .5vw) Verdana, sans-serif'}}>
                    Committed to superior quality and results!
                </div>
                <div style={{paddingTop: '100px', font: 'bold calc(36px + .5vw) Verdana, sans-serif'}} className="heady about d-flex justify-content-center">
                    About Our Business
                </div>
                <div  style={{width: '80%', height: '6px', backgroundColor: '#a10000', marginTop: '20px', borderRadius: '20px', marginLeft: '10vw'}}/>
                <img className="center" src={Gutter2} style={{width: '35vw',marginTop: '30px', marginLeft: '50vw', transform: 'translate(-50%)'}}/>
                <div id="about" style={{height: '16vh',  marginBottom: 'calc(400px - 12vw)',width: '70%',marginLeft: 'auto', marginRight: 'auto', paddingTop:'30px', font: 'calc(13px + .5vw) Verdana, sans-serif', lineHeight: '35px'}} className="about d-flex justify-content-center">
                    New Paltz Seamless Gutters is a locally owned and operated business located in the heart of the Hudson valley. We are committed to providing the highest quality gutter solutions for your home or business. Our systems are made with durable materials that will withstand harsh weather conditons and will exceed your expectations for years to come. We offer multiple size and color options to provide a custom fit and look for your home. We look forward to working with you. Request an estimate today!                 
                </div>

                <div id="services" style={{width: '80vw', paddingTop: '120px', font: 'bold calc(36px + .5vw) Verdana, sans-serif'}} className="heady d-flex justify-content-center ml-auto mr-auto">
                    Our Services
                </div>
                <div  style={{width: '80%', height: '6px', backgroundColor: '#a10000', marginTop: '20px', borderRadius: '20px', marginLeft: '10vw'}}/>
                <div style={{minHeight: '50vh' , paddingTop: '40px'}} className="d-flex justify-content-center">
                    <div className="row" style={{width: '80vw'}}>
                        <div className="col-md-3 ml-auto mr-auto">
                            <div className="container">
                                <div className="row d-flex justify-content-center">
                                    <img src={GutterIcon} className="ratio" style={{height: '10vw', paddingBottom: 'calc(5px + 1vw)', aspectRatio: '107.2%'}}/>
                                </div>
                                <div style={{font: 'bold calc(13px + .5vw) Verdana, sans-serif'}}className="row services d-flex justify-content-start">
                                    5" / 6" Seamless Gutters
                                </div>
                                <div style={{font: 'calc(10px + .5vw) Verdana, sans-serif'}} class="sub row d-flex justify-content-center">
                                We offer both standard 5” and oversized 6” gutters to accommodate any building size and style. Our gutters are of the highest quality and are extremely durable in all weather conditions.                                 </div>
                            </div>
                        </div>
                        <div className="col-md-3 ml-auto mr-auto">
                            <div className="container">
                            <div className="row d-flex justify-content-center">
                                    <img src={shield} className="ratio" style={{height: '10vw', paddingBottom: 'calc(5px + 1vw)', aspectRatio: '107.2%'}}/>
                                </div>
                                <div  style={{font: 'bold calc(13px + .5vw) Verdana, sans-serif'}} className="services row  d-flex justify-content-start">
                                    Gutter Guards
                                </div>
                                <div style={{font: 'calc(10px + .5vw) Verdana, sans-serif'}} class="sub row d-flex justify-content-center">
                                Keeping your gutters clean is critical to having a functioning system. We offer multiple gutter guards that are specific to your properties foliage. They will keep your gutters working properly and provide added strength for heavy winters. 
                                </div>
                            </div>
                        </div>    
                        <div className="col-md-3 ml-auto mr-auto">
                            <div className="container">
                            <div className="row d-flex justify-content-center">
                                    <img src={hammer} className="ratio" style={{height: '10vw', paddingBottom: 'calc(5px + 1vw)', aspectRatio: '107.2%'}}/>
                                </div>
                                <div  style={{font: 'bold calc(13px + .5vw) Verdana, sans-serif'}} className="services row  d-flex justify-content-start">
                                    Repair & Maintenance
                                </div>
                                <div style={{font: 'calc(10px + .5vw) Verdana, sans-serif'}} class="sub row d-flex justify-content-center">
                                Gutters should be cleaned twice a year in the spring and fall to make sure you have a system that works year round. It is important to repair any issues with the system to avoid any water damage and costly expenses in the future.
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