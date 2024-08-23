import { useState } from "react";

function MyComponent() {
  const [foods, setFoods] = useState(["Apple", "Banana"]);

  function handleAddFood() {
    const foodInput = document.getElementById("foodInput");
    const newFood = foodInput.value;
    foodInput.value = "";

    setFoods((f) => [...f, newFood]);
  }

  function handleRemoveFood(index) {
    setFoods((f) => f.filter((_, i) => i !== index));
  }

  const foodsList = foods.map((food, index) => {
    return (
      <li key={index} onClick={() => handleRemoveFood(index)}>
        {food}
      </li>
    );
  });

  return (
    <div>
      <h2>List of Foods</h2>
      <ul>{foodsList}</ul>

      <input type="text" id="foodInput" placeholder="Enter a food name" />
      <button onClick={handleAddFood}>Add Food</button>
    </div>
  );
}

export default MyComponent;
