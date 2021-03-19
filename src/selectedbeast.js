import React from 'react';
import Modal from 'react-bootstrap/Modal';

class SelectedBeast extends React.Component {
  render(){  
    return (
      <>
        <Modal show={this.props.show} onHide={this.props.handleClose}>
          <img src={this.props.favoriteBeast.image_url} width={450} alt={this.props.title}/>
        </Modal>
      </>
    );
  }
}

export default SelectedBeast;