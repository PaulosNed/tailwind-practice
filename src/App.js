import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import "./App.css";
import AppLayout from "./pages/AppLayout";
import Foods from "./pages/Foods";
import { foodsLoader, singleFoodLoader } from "./loaders/foodsLoader";
import FoodDetail from "./pages/FoodDetail";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<AppLayout />}>
        <Route index element={<Foods />}  loader={foodsLoader}/>
        <Route path="food/:id" element={<FoodDetail />} loader={singleFoodLoader}/>
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;
