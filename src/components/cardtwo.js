import React, { Component } from 'react';

import InputTwo from './inputtwo';

class ThinkingOfYouCard extends Component {
    render() {
        return (
            <div className="thinking_of_you_card">
                { InputTwo('Name of Recipient') }
                { InputTwo('Positive Adjective') }
                { InputTwo('Positive Adjective') }
                { InputTwo('Positie Emotion') }
                { InputTwo('Positive Adjective') }
                { InputTwo('Name of Author') }
            </div>
        )
    }
}




export default ThinkingOfYouCard;

