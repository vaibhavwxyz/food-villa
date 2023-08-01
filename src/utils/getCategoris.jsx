import { useEffect, useState } from "react";
import { CATEGORIES_URL } from "./url";

const getCategories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategoriesFun();
  }, []);

  async function getCategoriesFun() {
    const data = await fetch(CATEGORIES_URL);
    const json = await data.json();
    setCategories(json.categories);
  }

  return categories;
};

export default getCategories;
