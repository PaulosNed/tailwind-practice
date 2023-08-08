import React from "react";
import Food1 from "../img/stew.jpg";
import { useLoaderData } from "react-router-dom";
import Card from "../components/Card";

function Foods() {
  const foods = useLoaderData();

  return (
    <main className="px-16 py-6 md:col-span-2 bg-gray-100">
      <div className="flex justify-center md:justify-end">
        <a
          href="#"
          className="btn text-primary border-primary md:border-2 hover:bg-primary hover:text-white transition ease-out duration-500"
        >
          Log in
        </a>
        <a
          href="#"
          className="btn text-primary ml-2 border-primary md:border-2 hover:bg-primary hover:text-white transition ease-out duration-500"
        >
          Sign up
        </a>
      </div>

      <header className="mt-4">
        <h2 className="text-gray-700 text-6xl font-semibold leading-none tracking-wider">
          Recipes
        </h2>
        {/* <h3 className="text-2xl font-semibold tracking-wider">For Ninjas</h3> */}
      </header>

      <div>
        <h4 className="font-bold pb-2 mt-12 border-b border-gray-200">
          Latest Recipes
        </h4>

        <div className="mt-8 grid lg:grid-cols-3 gap-10">
          {foods.map((food) => <Card id={food.id} img={food.img} time={food.time} by={food.by} name={food.name}/>)}
        </div>

        <h4 className="font-bold pb-2 mt-12 border-b border-gray-200">
          Most Popular
        </h4>

        <div className="mt-8 grid lg:grid-cols-3 gap-10">
          {foods.map((food) => <Card id={food.id} img={food.img} time={food.time} by={food.by} name={food.name}/>)}
        </div>
      </div>

      <div className="mt-12 flex justify-center">
        <div className="btn bg-secondary-100 text-secondary-200 inline-block hover:shadow-inner transform hover:scale-125 hover:bg-opacity-50 transition ease-out duration-300">
          Load more
        </div>
      </div>
    </main>
  );
}

export default Foods;
