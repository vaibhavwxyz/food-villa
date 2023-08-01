import { useParams } from "react-router-dom";
import getRestaurantInfo from "../utils/GetRestaurantInfo";
import { useDispatch } from "react-redux";
import { addItem } from "../context/cartSlice";

const RestaurantMenu = () => {
  const { id } = useParams();
  const restaurant = getRestaurantInfo(id);

  const dispatch = useDispatch();

  const handelAddItem = (item) => {
    dispatch(addItem(item));
  };

  return (
    <div className="my-10">
      <h1 className="font-bold font-xl">Restorant id: {id}</h1>
      <img
        className="w-48 rounded-md"
        src={restaurant[0]?.strMealThumb}
        alt="img"
      />
      <h1 className="font-bold font-xl">{restaurant[0]?.strMeal}</h1>
      <h2>{restaurant[0]?.strArea}</h2>
      <div className="my-5">
        <h1 className="font-semibold mb-2">Ingredients: </h1>
        <div>
          <h3>
            {restaurant[0]?.strIngredient1}{" "}
            <button
              className="bg-pink-200 px-2 text-sm"
              onClick={() => handelAddItem(restaurant[0].strIngredient1)}
            >
              Add
            </button>
          </h3>
          <h3>
            {restaurant[0]?.strIngredient2}{" "}
            <button
              className="bg-pink-200 px-2 text-sm"
              onClick={() => handelAddItem(restaurant[0].strIngredient2)}
            >
              Add
            </button>
          </h3>
          <h3>
            {restaurant[0]?.strIngredient3}{" "}
            <button
              className="bg-pink-200 px-2 text-sm"
              onClick={() => handelAddItem(restaurant[0].strIngredient3)}
            >
              Add
            </button>
          </h3>
          <h3>
            {restaurant[0]?.strIngredient4}{" "}
            <button
              className="bg-pink-200 px-2 text-sm"
              onClick={() => handelAddItem(restaurant[0].strIngredient4)}
            >
              Add
            </button>
          </h3>
          <h3>
            {restaurant[0]?.strIngredient5}{" "}
            <button
              className="bg-pink-200 px-2 text-sm"
              onClick={() => handelAddItem(restaurant[0].strIngredient5)}
            >
              Add
            </button>
          </h3>
        </div>
        <button
          className="bg-green-200 px-2 rounded-md text-sm"
          onClick={() => handelAddItem()}
        >
          Add Item
        </button>
      </div>
    </div>
  );
};

export default RestaurantMenu;
