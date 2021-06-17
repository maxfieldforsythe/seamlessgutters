import React, { Component } from 'react';

import Header from './header'

class Estimate extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            phone: '',
            question: ''
        }
        this.handleChangePhone = this.handleChangePhone.bind(this)
        this.handleChangeName = this.handleChangeName.bind(this)
        this.handleChangeEmail = this.handleChangeEmail.bind(this)
        this.handleChangeQuestion = this.handleChangeQuestion.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this);
        this.sleep = this.sleep.bind(this);
    }

    handleChangeName(event) {
        this.setState({name: event.target.value});
    }

    handleChangeEmail(event) {
        this.setState({email: event.target.value});
    }

    handleChangePhone(event) {
        this.setState({phone: event.target.value});
    }

    handleChangeQuestion(event) {
        this.setState({question: event.target.value});
    }

    handleSubmit (event) {
        event.preventDefault();
        const templateId = 'template_pllfxzp';
    
        this.sendFeedback(templateId, {phone: this.state.phone,message_html: this.state.question, from_name: this.state.name, reply_to: this.state.email})
    }
    
    sendFeedback (templateId, variables) {
      window.emailjs.send(
        'Gmail', templateId,
        variables
        ).then(res => {
          new Notification("Message sent!")
        })
        // Handle errors here however you like, or use a React error boundary
        .catch(err => console.error('Oh well, you failed. Here some thoughts on the error that occured:', err))
        this.sleep(100).then(() => {
            window.location.replace("/#home")
          })
    }

    sleep(milliseconds) {
        return new Promise(resolve => setTimeout(resolve, milliseconds))
    }

    render() {
        return (
            <div id="estimate" href="#/estimate">
                <Header/>
                <div className="container-fluid d-flex" style={{width: '75vw'}}>
                    <div className="col" style={{marginTop: '160px', height: '60vh'}}>
                        <div className="row d-flex" style={{textAlign: 'center', font: 'bold calc(15px + 1vw) Verdana, sans-serif'}}>
                            Fill out the form below and we will be in contact with you as soon as possible!
                        </div>
                        <div className="row d-flex">
                            <div  style={{width: '100vw', height: '6px', backgroundColor: '#a10000', marginTop: '20px', borderRadius: '20px'}}/>
                        </div>
                        <form onSubmit={this.handleSubmit} style={{paddingTop: '30px'}}>
                            <div className="row-3 d-flex justify-content-center">
                                <label>
                                    <div className="row-3 d-flex justify-content-start" style={{fontSize: '28px'}}>
                                        Name:
                                    </div>
                                    <input type="text" value={this.state.name} onChange={this.handleChangeName} style={{width: '75vw', maxWidth: '600px'}}/>
                                </label>
                            </div>
                            <div className="row-3 d-flex justify-content-center">
                                <label>
                                    <div className="row-3 d-flex justify-content-start" style={{fontSize: '28px'}}>
                                        Email:
                                    </div>
                                    <input type="text" value={this.state.email} onChange={this.handleChangeEmail} style={{width: '75vw', maxWidth: '600px'}}/>
                                </label>
                            </div>
                            <div className="row-3 d-flex justify-content-center">
                                <label>
                                    <div className="row-3 d-flex justify-content-start" style={{fontSize: '28px'}}>
                                        Phone (optional):
                                    </div>
                                    <input type="text" value={this.state.phone} onChange={this.handleChangePhone} style={{width: '75vw', maxWidth: '600px'}}/>
                                </label>
                            </div>
                            <div className="row-3 d-flex justify-content-center">
                                <label>
                                    <div className="row-3 d-flex justify-content-start" style={{fontSize: '28px'}}>
                                        Additional Details:
                                    </div>
                                    <input cols="50" rows="10" type="text" value={this.state.question} onChange={this.handleChangeQuestion} style={{width: '75vw', maxWidth: '600px', paddingBottom: '20px'}}/>
                                </label>
                            </div>
                            <div className="row-3 d-flex justify-content-center">
                                <input type="submit" value="Submit" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default Estimate;