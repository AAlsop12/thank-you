import React, { Component } from 'react';

import Input from './input';

class ThankYouCard extends Component {
    render() {
        return (
            <div className="thank_you_card">
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

