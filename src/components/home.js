import React, { Component } from 'react';
import Header from './header'; 
import HeaderTwo from './headertwo';
import ThankYouCard from './card';
import ThinkingOfYouCard from './cardtwo';

class Home extends Component {
  render() {
    return (
      <div className ="home">
        { Header () }
        { HeaderTwo () }
        <ThankYouCard />
        <ThinkingOfYouCard />
      </div>
    );
  }
}

export default Home;