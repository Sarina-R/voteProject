import React, { useContext, useState } from "react";
import { Context } from "../App";
import { Button, Modal, Image } from "react-bootstrap";
import "./cards.scss";
import Detailes from "./Detailes";

const Cards = () => {
  const { data } = useContext(Context);
  const [votedCards, setVotedCards] = useState(data);
  const [showModal, setShowModal] = useState(false);
  const [voters, setVoters] = useState([]);
  const [showDetailes, setShowDetailes] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const handleVote = (id) => {
    const updatedCards = votedCards.map((item) =>
      item.id === id ? { ...item, voted: !item.voted } : item
    );
    setVotedCards(updatedCards);
    updateVoters(updatedCards);
    setShowModal(true);
  };

  const updateVoters = (updatedCards) => {
    const votedList = updatedCards
      .filter((item) => item.voted)
      .map((item) => item.name);
    setVoters(votedList);
  };

  const handleClose = () => setShowModal(false);
  const handleClosee = () => setShowDetailes(false);

  const handleShowDetails = (item) => {
    setSelectedItem(item);
    setShowDetailes(true);
  };

  return (
    <>
      <div className="row">
        {votedCards.map((item) => (
          <div
            key={item.id}
            className={`cards col-12 col-md-6 col-lg-4 text-center mb-4 p-4 pt-5 ${
              item.voted ? "voted" : "bg-white"
            }`}
          >
            <Image src={item.img} roundedCircle className="img" />
            <h4 className="mt-3 fs-5 mb-1 fw-bold">{item.name}</h4>
            <h6 className="fs-7">
              Running to Be:
              <span className="text-primary fw-bold">{item.RunnungToBe}</span>
            </h6>
            <p className="text-dark mt-3 mb-3 fs-8">{item.description}</p>
            <Button
              className="btn btn-primary fw-bolder fs-8"
              onClick={() => handleShowDetails(item)}
            >
              View Manifesto
            </Button>
            <Button
              className={`btn fw-bolder px-4 ms-2 fs-8 ${
                item.voted ? "btn-success" : "btn-danger"
              }`}
              onClick={() => handleVote(item.id)}
            >
              {item.voted ? "Voted" : "Vote"}
            </Button>
          </div>
        ))}
      </div>

      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Voters</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {voters.length > 0 ? (
            <ul>
              {voters.map((voter, index) => (
                <li key={index}>{voter}</li>
              ))}
            </ul>
          ) : (
            <p>No one has voted yet.</p>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

      {showDetailes && selectedItem && (
        <Modal show={showDetailes} onHide={handleClosee}>
          <Detailes handleClosee={handleClosee} item={selectedItem} />
        </Modal>
      )}
    </>
  );
};

export default Cards;
