import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import {Collapse} from 'reactstrap';

import logo from "./aaaaa.PNG"
import phone from './phone.png'
import down from './down.png'


class header extends Component {

    constructor(props) {
        super(props);

        this.state = {open: false}
        this.home = this.home.bind(this)
        this.show = this.show.bind(this)
        this.service = this.service.bind(this)
        this.about = this.about.bind(this)
    }
    
    show() { 
        return (
            this.setState({ open: !this.state.open })
        )
    }

    home() {
        window.location.replace("/#home")
        this.setState({ open: !this.state.open })
    }

    service() {
        window.location.replace("/#services")
        this.setState({ open: !this.state.open })
    }

    about() {
        window.location.replace("/#about")
        this.setState({ open: !this.state.open })
    }


    render() {
        return (
            <div className="container-fluid shadows" style={{overflow: 'hidden',width: '100vw', position: 'fixed', minHeight: 'calc(110px)', zIndex: 1, backgroundColor: 'white'}}>
                <div className="row d-flex" style={{height: '80px'}}>
                    <div className="col d-flex">
                        <div className="pt-2" style={{position: 'fixed', left: '8vw', font: 'calc(16px + .6vw) Verdana, sans-serif', color: '#a10000'}}>
                            New Paltz<br/> Seamless Gutters
                        </div>
                    </div>
                    <div className="pt-3" style={{position: 'fixed', right: '8vw'}}>
                        {/* <img src={phone} className="phone"/> */}
                        <div className="row" style={{fontStyle: 'bold', font: 'calc(14px + .6vw) Verdana, sans-serif', color: '#a10000'}}>
                            845-443-1052
                        </div>
                        <div className="row" style={{font: 'calc(6px + .6vw) Verdana, sans-serif', color: '#575757'}}>
                            travis@newpaltzseamlessgutters.com
                        </div>
                    </div>
                </div>
                <div className="row menu" style={{height: '30px', width: '80vw', paddingLeft: '10vw'}}>
                    <div className="myButton col d-flex justify-content-center align-items-center" onClick={this.home} style={{font: 'calc(12px + .3vw) bold Verdana, sans-serif'}}>
                        HOME
                    </div>
                    <div className="myButton col d-flex justify-content-center align-items-center" onClick={this.about} style={{font: 'calc(12px + .3vw) bold Verdana, sans-serif'}}>
                        ABOUT US
                    </div>
                    <div className="myButton col d-flex justify-content-center align-items-center" onClick={this.service} style={{font: 'calc(12px + .3vw) bold Verdana, sans-serif'}}>
                        SERVICES
                    </div>
                    <Link className="myButton col d-flex justify-content-center align-items-center" to='/estimate' style={{ textDecoration: 'none' }}>
                        <div  style={{font: 'calc(12px + .3vw) bold Verdana, sans-serif'}}>
                            ESTIMATES
                        </div>
                    </Link>
                    <Link className="myButton col d-flex justify-content-center align-items-center" to='/gallery' style={{ textDecoration: 'none' }}>
                        <div  style={{font: 'calc(12px + .3vw) bold Verdana, sans-serif'}}>
                            GALLERY
                        </div>
                    </Link>
                </div>
                <img src={down} onClick={() => this.show()} className='pp btn' style={{position: 'fixed', right: '50px', top: '70px', height: '40px'}}/>
                <Collapse className="pp" isOpen={this.state.open}>
                    <div className="col" style={{height: '30%', width: '50vw', paddingLeft: '1vw'}}>
                        <div className="myButton row d-flex justify-content-center align-items-center" onClick={this.home} style={{padding: '20px',font: 'calc(16px + .3vw) bold Verdana, sans-serif'}}>
                            HOME
                        </div>
                        <div className="myButton row d-flex justify-content-center align-items-center" onClick={this.about} style={{padding: '20px',font: 'calc(16px + .3vw) bold Verdana, sans-serif'}}>
                            ABOUT US
                        </div>
                        <div className="myButton row d-flex justify-content-center align-items-center" onClick={this.service} style={{padding: '20px',font: 'calc(16px + .3vw) bold Verdana, sans-serif'}}>
                            SERVICES
                        </div>
                        <Link className="myButton row d-flex justify-content-center align-items-center" to='/estimate' style={{padding: '20px', textDecoration: 'none' }}>
                            <div  style={{font: 'calc(16px + .3vw) bold Verdana, sans-serif'}}>
                                ESTIMATES
                            </div>
                        </Link>
                        <Link className="myButton row d-flex justify-content-center align-items-center" to='/gallery' style={{padding: '20px', textDecoration: 'none' }}>
                            <div  style={{font: 'calc(16px + .3vw) bold Verdana, sans-serif'}}>
                                GALLERY
                            </div>
                        </Link>
                    </div>
                </Collapse>
            </div>
        );
    }
}



export default header;