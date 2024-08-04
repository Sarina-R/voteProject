import React from "react";

const Card = () => {
  return (
    <>
      <div class="text-center mb-4 votcard shadow-md bg-white p-4 pt-5">
        <h4 class="mt-3 fs-5 mb-1 fw-bold">Reena Anath</h4>
        <h6 class="fs-7">
          Runnung to Be: <span class="text-primary fw-bold"></span>
        </h6>
        <p class="text-dark mt-3 mb-3 fs-8"></p>
        <button
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
          class="btn btn-primary fw-bolder fs-8"
        >
          View Manifesto
        </button>
        <button class="btn btn-danger fw-bolder px-4 ms-2 fs-8">Vote</button>
      </div>
    </>
  );
};

export default Card;
