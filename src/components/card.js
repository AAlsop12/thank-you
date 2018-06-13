import React, { Component } from 'react';

import Input from './input';

class ThankYouCard extends Component {

    constructor() {
        super()

        this.state = {
            nameOfRecipient: '',
            item: ''

            
        }
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(event) {

        this.setState({ [event.target.name]: event.target.value})
        console.log(this.state)
    }

    render() {

        return (
            <div className="thank_you_card">
                <h1>{this.state.nameOfRecipient}</h1>
                { Input('Name of Recipient', this.state.NameOfRecipient, this.handleInputChange, 'nameOfRecipient') }
                { Input('Item', this.state.item, this.handleInputChange, 'item') }
                { Input('Positive Emotion') }
                { Input('Positive Adjective') }
                { Input('Positive Adjective') }
                { Input('Name of Author') }
            </div>
        )
    }
}




export default ThankYouCard;

