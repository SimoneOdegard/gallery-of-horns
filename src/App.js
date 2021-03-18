import React from 'react';
import Header from './header';
import Main from './main';
import Footer from './footer';
import data from './assets/data.json';
import SelectedBeast from './selectedbeast';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      newData: data,
      displayModal: false,
      favoriteBeast: {},
    }
  }

  displayAsModal = (index) => {
    this.setState ({favoriteBeast: this.state.newData[index], displayModal: true});
  }

  handleClose =() => {
    this.setState({displayModal: false});
  }

  render () {
    return (
      <div className="App">
        <header>
          <Header />
          <Main
          cards={this.state.newData}
          displayAsModal={this.displayAsModal}
          />
          <SelectedBeast
          show={this.state.displayModal}
          handleClose={this.handleClose}
          favoriteBeast={this.state.favoriteBeast}
          />
          <Footer />
        </header>
      </div>
    );
  }
}

export default App;
