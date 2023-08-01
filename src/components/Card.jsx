const Card = ({ cardData }) => {
  const { strMealThumb: image, strMeal, strArea } = cardData;

  return (
    <div className="shadow-lg rounded-md p-2">
      <img className="rounded-xl" src={image} alt="img" />
      <h3 className="font-semibold text-xl mt-1">{strMeal}</h3>
      <h3>{strArea}</h3>
    </div>
  );
};

export default Card;
