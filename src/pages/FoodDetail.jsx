import React from "react";
import { useLoaderData } from "react-router-dom";
import DetailItem from "../components/DetailItem";
import IngredientItem from "../components/IngredientItem";

function FoodDetail() {
  const food = useLoaderData();
  return (
    <main className="px-16 py-6 md:col-span-2 bg-gray-100 min-h-screen">
      <header className="mt-20 bg-cover bg-center h-64 brightness-50" style={{ backgroundImage: `url('${food.img}')` }}>
        <h2 className="text-white  text-6xl font-semibold leading-none tracking-wider">
          {food.name}
        </h2>
      </header>

      <div>
        <h4 className="font-bold pb-2 mt-12 border-b border-gray-200">
          Recipe Details
        </h4>

        <div className="mt-8">
            <div className="flex flex-col gap-2">
                <DetailItem title='Recipe Name' name={food.name}/>
                <DetailItem title='Prepared by' name={food.by}/>
                <DetailItem title='Time to Prepare' name={food.time}/>
                <IngredientItem ingredients={food.ingredients}/>
                <DetailItem title='Instruction' name={food.description}/>
            </div>
        </div>
      </div>
    </main>
  );
}

export default FoodDetail;
