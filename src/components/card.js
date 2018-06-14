import React, { Component } from 'react';

import Input from './input';
import Content from './content';

class ThankYouCard extends Component {

    constructor() {
        super()

        this.state = {
            nameOfRecipient: '',
            item: '',
            positiveEmotion: '',
            positiveAdjOne: '',
            positiveAdjTwo: '',
            nameOfAuthor: ''

            
        }
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(event) {

        this.setState({ [event.target.name]: event.target.value})
        console.log(this.state)
    }

    render() {

        const inputData = [
                {word: 'Name of Recipient', state: this.state.nameOfRecipient, name: 'nameOfRecipient'},
                {word: 'Item', state: this.state.item, name: 'item'},
                {word: 'Positive Emotion', state: this.state.positiveEmotion, name: 'positiveEmotion'},
                {word: 'Positive Adjective', state: this.state.positiveAdjOne, name: 'positiveAdjOne'},
                {word: 'Positive Adjective', state: this.state.positiveAdjTwo, name: 'positiveAdjTwo'},
                {word: 'Name of Author', state: this.state.nameOfAuthor, name: 'nameOfAuthor'}
        ]


        return (
            <div className="thank_you_card">
                    {
                        inputData.map(data => Input ( (data), this.handleInputChange))
                    }
                    <Content data={this.state}/>
            </div>
        )
    }
}




export default ThankYouCard;

