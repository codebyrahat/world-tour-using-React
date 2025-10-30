import { useEffect, useState } from "react";
import Details from "../Details/Details";

const Countries = () => {
  const [countries, setCountries] = useState([]);
  // use State for handle Add Details
  const [details, setDetails] = useState([]);
  // handling add details function
  const handleAddDetails = (country) => {
    const newDetails = [...details, country];
    setDetails(newDetails);
    // console.log(details);
  };

  // use effect to load api
  useEffect(() => {
    fetch("https://restcountries.com/v3.1/name/Bangladesh")
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);
  return (
    <div>
      <h3>Array Length:{countries.length} </h3>
      <div>
        {" "}
        {countries.map((country) => (
          <Details
            key={country.idd.root}
            country={country}
            handleAddDetails={handleAddDetails}
          ></Details>
        ))}
      </div>
      <br />
      <h1>Country Name:</h1>
      <br />
      {details.map((country) => (
        <li>{country.name?.common}</li>
      ))}
    </div>
  );
};

export default Countries;
