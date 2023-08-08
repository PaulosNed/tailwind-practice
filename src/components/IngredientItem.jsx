import React from "react";

function IngredientItem({ ingredients }) {
  return (
    <div className="flex gap-16 items-start">
      <h1 className="font-bold">Ingredients:</h1>
      <div className="flex gap-2 flex-wrap">
        {ingredients.map((ingredient) => (<div className="text-sm py-1 px-2 rounded-full bg-gray-700 text-gray-200">{ingredient}</div>))}
      </div>
    </div>
  );
}

export default IngredientItem;
