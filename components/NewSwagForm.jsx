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
    <form onSubmit={handleSubmit} id="new-swag-form">
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
        <textarea name="details"></textarea>
      </label>

      <input type="submit" />
    </form>
  );
};

export default NewSwagForm;
