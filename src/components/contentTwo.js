import React, { Component } from 'react';

class Content extends Component {
    render() {
        const data = this.props.data;
        return (
            <div>

                <p>Dear <b>{data.nameOfRecipient}</b>. I just wanted to let you know that I am thinking about you!  You are so <b>{data.positiveAdjOne}</b> and <b>{data.positiveAdjTwo}</b>.  When I am around you, I feel <b>{data.positiveEmotion}</b>.  Thank you for being so <b>{data.positiveAdjThree}</b>!  Sincerely, <b>{data.nameOfAuthor}</b>. </p>                

            </div>
        )
    }
}

export default Content;