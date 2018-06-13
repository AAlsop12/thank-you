import React, { Component } from 'react';

import Input from './input';

class ThankYouCard extends Component {

    constructor() {
        super()

        this.state = {
            nameOfRecipient: 'Orange',
            item: ''

            
        }
    }

    handleInputChange() {
        this.setState({ nameOfRecipient: 'Leslie'})
    }

    render() {

        return (
            <div className="thank_you_card">
                <h1>{this.state.nameOfRecipient}</h1>
                <input/>
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

