export const foodsLoader = async() => {
    const res = await fetch('http://localhost:4000/foods')

    return res.json()
}

export const singleFoodLoader = async ({ params }) => {
    const { id } = params;
    const res = await fetch(`http://localhost:4000/foods/${id}`);
  
    return res.json();
  };
  