import React, { useState } from 'react';

export default function AgeCalculator () {
  const [birthdate, setBirthdate] = useState('');
  const [results, setResults] = useState([]);

  const calculateAgeOnPlanets = () => {
    const planets = {
      Mercury: 88,
      Venus: 225,
      Earth: 365.25,
      Mars: 687,
      Jupiter: 4332.59,
      Saturn: 10755.70,
      Uranus: 30688.5,
      Neptune: 60224.2
    };

    const birthdateDate = new Date(birthdate);
    const currentdateDate = new Date();

    const ageInDays = Math.floor((currentdateDate - birthdateDate) / (1000 * 60 * 60 * 24));

    const results = Object.keys(planets).map(planet => {
      const ageOnPlanet = ageInDays / planets[planet];
      return { planet, age: ageOnPlanet.toFixed(2) };
    });

    setResults(results);
  };

  return (
    <div className="App">
      <h1>Planet Age Calculator</h1>
      <label>
        Enter your birthdate:
        <input type="date" value={birthdate} onChange={(e) => setBirthdate(e.target.value)} />
      </label>
      <button onClick={calculateAgeOnPlanets}>Calculate</button>

      <h2>Results:</h2>
      <ul>
        {results.map(result => (
          <li key={result.planet}>
            You are  {result.age} years old on {result.planet}.
          </li>
        ))}
      </ul>
    </div>
  );
}


