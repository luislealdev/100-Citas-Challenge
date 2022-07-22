import { useState } from "react";
export const RandomDate = ({ideas}) => {
  const [randomDate, setRandomDate] = useState("");

  const handleButtonClick = () => {
    const randomNumber = Math.round(Math.random() * 100);
    setRandomDate(ideas[randomNumber]);
  };

  return (
    <>
      <div className="dateGenerator">
        <h5>Genera una cita automáticamente</h5>
        <p>{randomDate}</p>
        <button className="btn btn-danger" onClick={handleButtonClick}>
          Generar
        </button>
      </div>
    </>
  );
};
