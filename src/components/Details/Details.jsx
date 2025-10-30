import "./Details.css";
import { useState } from "react";

const Details = ({ country, handleAddDetails }) => {
  const { common } = country.name;
  //   useState button for check toggle button
  const [isToggled, setIsToggled] = useState(false);
  // event Handler
  const handleToggled = () => {
    setIsToggled(!isToggled);
  };
  return (
    <div>
      <p>
        Common Name: <strong>{common}</strong>
      </p>
      <button onClick={handleToggled}>
        {isToggled ? "Toggle True" : "Toggle False"}
      </button>
      <br />
      <div className={isToggled ? "toggleTrue" : "toggleFalse"}>
        {isToggled ? "Toggle Condition True" : "Toggle Condition False"}
      </div>
      <br /> <br />
      {/* passing parameter through function into another Component */}
      <button
        onClick={() => {
          handleAddDetails(country);
        }}
      >
        Add Details
      </button>
    </div>
  );
};

export default Details;
