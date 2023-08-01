import { useEffect, useState } from "react";
import { RESTAURANT_INFO_URL } from "./url";

const getRestaurantInfo = (id) => {
  const [restaurant, setRestaurant] = useState([]);

  useEffect(() => {
    getRestaurantInformation();
  }, []);

  async function getRestaurantInformation() {
    const data = await fetch(RESTAURANT_INFO_URL + id);
    const json = await data.json();
    setRestaurant(json.meals);
  }

  return restaurant;
};

export default getRestaurantInfo;
