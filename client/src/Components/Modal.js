import React, { Component } from 'react';
import Form from './Form';

class Modal extends Component {
    render() {
        let backgroundStyle = {
            position: 'fixed',
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            backgroundColor: 'rgba(0,0,0,0.4)',
            padding: 50,
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
        }
        let popUpStyle = {
            backgroundColor: '#fff',
            borderRadius: 5,
            maxWidth: 800,
            minHeight: 500,
            margin: '0 auto',
            padding: 30
        }
        return (
            <div style={backgroundStyle} className="modal-main-wrapper">
                <div style={popUpStyle} className="modal-div-wrapper">
                    <Form toggle={this.props.toggle} add/>
                </div>
            </div>
        )
    }
}

export default Modal;
