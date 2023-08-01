import getCategories from "../utils/getCategoris";

const Categories = () => {
  const categories = getCategories();
  return (
    <div>
      {categories.map((categories, index) => (
        <h1 key={index}>{categories.strCategory}</h1>
      ))}
    </div>
  );
};

export default Categories;
