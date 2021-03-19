import React from 'react';
import Header from './header';
import Main from './main';
import Footer from './footer';
import data from './assets/data.json';
import SelectedBeast from './selectedbeast';
import FormInfo from './forminfo.js';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      newData: data,
      filteredData: data,
      displayModal: false,
      favoriteBeast: {},
    }
  }

  displayAsModal = (index) => {
    this.setState ({favoriteBeast: this.state.filteredData[index], displayModal: true});
  }

  handleClose =() => {
    this.setState({displayModal: false});
  }

  handleInput = (e) => {this.setState({ filteredData: this.state.newData.filter (value => {
    if (e === 'all'){
      return value;
    } else {
      return value.horns === Number(e);
    }
  })})};


  render () {
    return (
      <div className="App">
        <header>
          <Header />
          <FormInfo 
          handleInput={this.handleInput}
          />
          <Main
          displayAsModal={this.displayAsModal}
          cards= {(this.state.filteredData) !== null ? (this.state.filteredData) : (this.state.newData)}
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
