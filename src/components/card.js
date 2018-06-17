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
            nameOfAuthor: '',
            contentVisible: false 
        }
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
            this.setState({
                nameOfRecipient: '',
                item: '',
                positiveEmotion: '',
                positiveAdjOne: '',
                positiveAdjTwo: '',
                nameOfAuthor: '',
                contentVisible: false
            })
        } else {
            this.setState({contentVisible: true})
        }

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
            <form onSubmit={this.handleFormSubmit} className="thank_you_card">
                <div className="card__inputs">
                    {
                        inputData.map(data => Input ( (data), this.handleInputChange))
                    }
                </div>
                <button type="submit">{!this.state.contentVisible ? 'Generate Thank You Card' : 'Clear Form'}</button>
                {
                    this.state.contentVisible ? <Content data={this.state}/> : ''
                }
            </form>
        )
    }
}




export default ThankYouCard;

