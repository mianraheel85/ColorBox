// ColorList.js

import React from "react";
import { Link } from "react-router-dom";

export const checkColor = (color) => {
  if (color.includes("#")) return color.replace("#", "*");
  if (color.includes("*")) return color.replace("*", "#");
  return color;
};

function ColorList({ colors }) {
  return (
    <div>
      <h2>Colors</h2>
      <ul>
        {colors?.map((color, index) => (
          <li key={index}>
            <span
              style={{
                backgroundColor: color,
                width: "20px",
                height: "10px",
                display: "inline-block",
                marginRight: "5px",
              }}
            ></span>
            <Link to={`/colors/${checkColor(color)}`}>{color}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ColorList;
