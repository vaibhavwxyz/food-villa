import { useState, useEffect, useContext } from "react";
import Shimmer from "./Shimmer";
import Search from "./Search";
import Card from "./Card";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";

const Body = () => {
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  useEffect(() => {
    getRestaurants();
  }, []);

  async function getRestaurants() {
    const data = await fetch(
      "https://www.themealdb.com/api/json/v1/1/search.php?s="
    );
    const json = await data.json();
    setAllRestaurants(json?.meals);
    setFilteredRestaurants(json?.meals);
  }

  const isOnline = useOnline();

  if (!isOnline) {
    return (
      <h1 className="text-2xl font-bold my-10">
        🧰 Offline, please check your internet connection!!
      </h1>
    );
  }

  return allRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <Search
        allRestaurant={allRestaurants}
        setFilteredRestaurants={setFilteredRestaurants}
      />

      <div className="grid grid-cols-4 gap-5 mb-10">
        {filteredRestaurants.map((restaurant) => {
          return (
            <Link
              to={"restaurant/" + restaurant.idMeal}
              key={restaurant.idMeal}
            >
              <Card cardData={restaurant} />
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default Body;
