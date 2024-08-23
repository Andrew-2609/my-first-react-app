import { useState } from "react";

function MyComponent() {
  const [cars, setCars] = useState([]);
  const [carYear, setCarYear] = useState(new Date().getFullYear());
  const [carMake, setCarMake] = useState("");
  const [carModel, setCarModel] = useState("");

  const handleAddCar = () => {
    const newCar = { year: carYear, make: carMake, model: carModel };
    setCars((c) => [...c, newCar]);

    setCarYear(new Date().getFullYear());
    setCarMake("");
    setCarModel("");
  };

  const handleRemoveCar = (index) => {
    setCars((c) => c.filter((_, i) => i !== index));
  };

  const handleYearChange = (e) => {
    setCarYear(e.target.value);
  };

  const handleMakeChange = (e) => {
    setCarMake(e.target.value);
  };

  const handleModelChange = (e) => {
    setCarModel(e.target.value);
  };

  const carsList = cars.map((car, index) => {
    return (
      <li key={index} onClick={() => handleRemoveCar(index)}>
        {car.year} {car.make} {car.model}
      </li>
    );
  });

  return (
    <div>
      <h2>List of Cars</h2>
      <ul>{carsList}</ul>
      <input
        type="number"
        value={carYear}
        onChange={handleYearChange}
        placeholder="Enter car year"
      />
      <input
        type="text"
        value={carMake}
        onChange={handleMakeChange}
        placeholder="Enter car make"
      />
      <input
        type="text"
        value={carModel}
        onChange={handleModelChange}
        placeholder="Enter car model"
      />
      <button onClick={handleAddCar}>Add car</button>
    </div>
  );
}

export default MyComponent;
