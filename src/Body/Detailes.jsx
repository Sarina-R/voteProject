import React from "react";
import { Button, Modal } from "react-bootstrap";
import PropTypes from "prop-types";

const Detailes = ({ item, handleClosee }) => {
  return (
    <>
      <Modal.Header closeButton>
        <Modal.Title>Details</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>{item.name}</p>
        <p>{item.details}</p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClosee}>
          Close
        </Button>
      </Modal.Footer>
    </>
  );
};

Detailes.propTypes = {
  item: PropTypes.object.isRequired,
  handleClosee: PropTypes.func.isRequired,
};

export default Detailes;
