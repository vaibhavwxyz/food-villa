const CareerInsta = ({ isVisible, setIsVisible }) => {
  return (
    <div className="my-10">
      <h1 className="text-2xl font-bold">CareerInsta</h1>
      {isVisible.career ? (
        <button
          className="bg-indigo-200 px-2 rounded-md"
          onClick={() =>
            setIsVisible({
              about: false,
              contact: false,
              career: false,
            })
          }
        >
          hide
        </button>
      ) : (
        <button
          className="bg-indigo-200 px-2 rounded-md"
          onClick={() =>
            setIsVisible({
              about: false,
              contact: false,
              career: true,
            })
          }
        >
          show
        </button>
      )}
      {isVisible.career && (
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque
          laudantium debitis magni, id excepturi quidem, qui nemo saepe iste
          sequi autem vitae placeat quisquam doloribus temporibus distinctio
          tenetur. Officia fugit quaerat necessitatibus aliquam quia expedita
          mollitia dolorem quidem? Rem eaque officia corrupti dolorem eligendi.
          Ipsam impedit facilis dolores distinctio amet, maiores itaque aperiam
          similique magni non dolore nemo excepturi illo at minus sint fugit
          laborum quas voluptates perferendis eum? Sit, amet, labore provident
          quasi quia dolor, doloremque perferendis neque similique voluptatibus
          cupiditate dignissimos quo? Nesciunt cum nisi alias cupiditate animi
          harum nulla, debitis quibusdam quis, quisquam necessitatibus suscipit
          esse quos.
        </p>
      )}
    </div>
  );
};

export default CareerInsta;
