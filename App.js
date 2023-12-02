// App.js

import React, { useState, useEffect } from "react";
import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import axios from "axios";
import ColorList from "./ColorList";
import ColorDetails from "./ColorDetails";
import ColorForm from "./ColorForm";
import Nav from "./Nav";

function App() {
  const [colors, setColors] = useState([]);

  useEffect(() => {
    const fetchInitialColors = async () => {
      try {
        const response = await axios.get("http://localhost:5001/colors");
        setColors(response.data);
      } catch (error) {
        console.error("Error fetching initial colors:", error);
      }
    };

    fetchInitialColors();
  }, []);

  const addColor = async (newColor) => {
    setColors([newColor, ...colors]);
  };

  return (
    <Router>
      <div className="App">
        {/* Include the Nav component */}
        <Nav />

        <Routes>
          {/* Homepage */}
          <Route path="colors" element={<ColorList colors={colors} />} />

          {/* Dog details */}
          <Route
            path="colors/:color"
            element={<ColorDetails colors={colors} />}
          />

          {/* new color */}
          <Route
            path="colors/new"
            element={<ColorForm addColor={addColor} />}
          />

          {/* Redirect to homepage for unknown routes */}
          <Route path="*" element={<Navigate to="/colors" />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
