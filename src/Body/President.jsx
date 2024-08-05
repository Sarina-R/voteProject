import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../main";
import { Container } from "react-bootstrap";

const President = () => {
  const { id } = useParams();
  const { data } = useContext(Context);

  const presidentData = data.find((item) => item.id === parseInt(id));
  return (
    <Container className="m-5">
      {presidentData ? (
        <>
          <h1>{presidentData.name}</h1>
          <p>{presidentData.details}</p>
          {presidentData.videoUrl && (
            <video width="600" controls>
              <source src={presidentData.videoUrl} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          )}
        </>
      ) : (
        <p>Loading...</p>
      )}
    </Container>
  );
};

export default President;
