import React, { useState } from "react";

const NewSwagForm = () => {
  function handleSubmit(e) {
    e.preventDefault();

    // const document =
    console.log(this);

    const form = document.querySelector("#new-swag-form");
    const formData = new FormData(form);
    form.reset();

    //     fetch('http://10.105.219.245:8000/swags', {
    // method: 'POST', body: temp1 }).then(res => res.json()).then(data => console.log(data))
  }

  return (
    <form onSubmit={handleSubmit} className="container" id="new-swag-form">
      <h1>Post A New Swag</h1>

      <style jsx>{`
        label {
          display: block;
          margin-bottom: 2rem;
          display: flex;
          justify-content: space-between;
        }

        label span {
          opacity: 0.6;
          display: inline-block;
          margin-right: 2rem;
          flex: 2;
        }

        input {
          border: 0;
          padding: 0.8rem;
          border-radius: 5px;
          font-size: 1rem;
          flex: 5;
        }

        input[type="file"] {
          background: white;
          color: black;
        }
      `}</style>

      <label>
        <span>Name</span>
        <input name="item_name" type="text" required />
      </label>

      <label>
        <span>Location</span>
        <input name="location" type="text" required />
      </label>

      <label>
        <span>Image</span>
        <input
          name="img"
          type="file"
          accept="image/png, image/jpeg"
          capture="environment"
        />
      </label>

      <label>
        <span>Details</span>
        <input type="text" name="details" />
      </label>

      <input type="submit" />
    </form>
  );
};

export default NewSwagForm;
