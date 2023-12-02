import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function ColorForm({ addColor }) {
  const [newColor, setNewColor] = useState("");
  const goTo = useNavigate();

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!newColor) return alert("choose a color");
    addColor(newColor);
    setNewColor("");
    goTo("/");
  };

  return (
    <div>
      <h2>Add New Color</h2>
      <form onSubmit={handleFormSubmit}>
        <label>
          Color:
          <input
            type="color"
            value={newColor}
            onChange={(e) => setNewColor(e.target.value)}
          />
        </label>
        <br />
        <br />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default ColorForm;
