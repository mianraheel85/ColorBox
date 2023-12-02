import React from "react";
import { useParams, Navigate, Link } from "react-router-dom";
import { checkColor } from "./ColorList";

function ColorDetails({ colors }) {
  let { color } = useParams();
  color = checkColor(color);
  const colorIndex = colors.findIndex((c) => c === color);

  if (colorIndex === -1) {
    return <Navigate to="/colors" />;
  }

  const colorDetails = colors[colorIndex];
  console.log(colorDetails);

  return (
    <div>
      <h2>{color} Details</h2>
      <div
        style={{ backgroundColor: color, width: "100px", height: "100px" }}
      ></div>
      <p>Value: {colorDetails}</p>
      <Link to="/">Go Back</Link>
    </div>
  );
}

export default ColorDetails;
