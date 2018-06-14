import React, { Component } from 'react';

class Content extends Component {
    render() {
        const data = this.props.data;
        return (
            <div>
                <p>
                    Dear <b>{data.nameOfRecipient}</b>.  Thank you so much for the <b>{data.item}</b>.  I really <b>{data.positiveEmotion}</b> it .  I appreciate your <b>{data.positiveAdjOne}</b> and <b>{data.positiveAdjTwo}</b> gesture.  Sincerely, <b>{data.nameOfAuthor}</b>
                </p>

            </div>
        )
    }
}

export default Content;