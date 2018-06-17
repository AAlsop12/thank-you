import React, { Component } from 'react';

import Input from './inputtwo';
import Content from './contenttwo';

const INITIAL_STATE = {
    nameOfRecipient: '',
    positiveAdjOne: '',
    positiveAdjTwo: '',
    positiveEmotion: '',
    positiveAdjThree: '',
    nameOfAuthor: '',
    contentVisible: false
 }

class ThinkingOfYouCard extends Component {
    constructor() {
        super()

        this.state = INITIAL_STATE;

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
    }

    handleInputChange(event) {

        this.setState({ [event.target.name]: event.target.value})
        console.log(this.state)
    }

    handleFormSubmit(event) {
        event.preventDefault()

        if(this.state.contentVisible) {
            this.setState (INITIAL_STATE)
            } else {
                this.setState({contentVisible: true})
            }
        }
    render() {

        const inputData = [
            {word: 'Name of Recipient', state: this.state.nameOfRecipient, name: 'nameOfRecipient'},
            {word: 'Positive Adjective', state: this.state.positiveAdjOne, name: 'positiveAdjOne'},
            {word: 'Positive Adjective', state: this.state.positiveAdjTwo, name: 'positiveAdjTwo'},
            {word: 'Positive Emotion', state: this.state.positiveEmotion, name: 'positiveEmotion'},
            {word: 'Positive Adjective', state: this.state.positiveAdjThree, name: 'positiveAdjThree'},
            {word: 'Name of Author', state: this.state.nameOfAuthor, name: 'nameOfAuthor'}
    ]

    return (
        <form onSubmit={this.handleFormSubmit} className="thank_you_card">
            <div className="card_two__inputs">
                {
                    inputData.map(data => Input ( (data), this.handleInputChange))
                }
            </div>
            <button type="submit">{this.state.contentVisible ? "Clear Form" : "Generate Thinking of You Card" }</button>
                {
                    this.state.contentVisible ? <Content data={this.state}/> : ''
                }
        </form>
    )
    }
}




export default ThinkingOfYouCard;

