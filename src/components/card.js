import React, { Component } from 'react';

import Input from './input';

class ThankYouCard extends Component {

    constructor() {
        super()

        this.state = {
            nameOfRecipient: 'Orange',
            item: ''

            
        }
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(event) {

        this.setState({ nameOfRecipient: event.target.value})
    }

    render() {

        return (
            <div className="thank_you_card">
                <h1>{this.state.nameOfRecipient}</h1>
                <input onChange={(event) => this.handleInputChange(event)}/>
            </div>

        )

        return (
            <div className="thank_you_card">
                <h1>{this.state.nameOfRecipient}</h1>
                { Input('Name of Recipient') }
                { Input('Item') }
                { Input('Positive Emotion') }
                { Input('Positive Adjective') }
                { Input('Positive Adjective') }
                { Input('Name of Author') }
            </div>
        )
    }
}




export default ThankYouCard;

