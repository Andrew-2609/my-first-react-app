import { useState } from "react";

function ColorPicker() {
  const [color, setColor] = useState("#FFFFFF");
  const [invertedColor, setInvertedColor] = useState("#000000");

  const handleColorChange = (e) => {
    setColor(e.target.value);
    setInvertedColor(calculateInvertedColor(color));
  };

  const calculateInvertedColor = (colorHex) => {
    let r = parseInt(colorHex.slice(1, 3), 16);
    let g = parseInt(colorHex.slice(3, 5), 16);
    let b = parseInt(colorHex.slice(5, 7), 16);
    r = 255 - r;
    g = 255 - g;
    b = 255 - b;

    return `#${r.toString(16).padStart(2, "0")}${g
      .toString(16)
      .padStart(2, "0")}${b.toString(16).padStart(2, "0")}`;
  };

  return (
    <div className="color-picker-container">
      <h1>Color Picker</h1>
      <div className="color-display" style={{ backgroundColor: color }}>
        <p style={{ color: invertedColor }}>Selected color: {color}</p>
      </div>
      <label>Select a Color:</label>
      <input type="color" value={color} onChange={handleColorChange} />
    </div>
  );
}

export default ColorPicker;
