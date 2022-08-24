import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function ErrorModal(props) {
  
  return (
    <>
    <div onClick={props.onConfirm}>
      <Modal show={props.errorShow}  animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>{props.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{props.message}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.onConfirm}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      </div>
    </>
  );
}

export default ErrorModal;