import React from 'react';

class HornedBeasts extends React.Component {
  render () {
    return (
      <div id="beasts">
        <h2>{this.props.title}</h2>
        <img src={this.props.url} alt={this.props.alt} title={this.props.title}/>
        <p>{this.props.description}</p>
      </div>
    );
  }
}

export default HornedBeasts;
