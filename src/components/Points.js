import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';
import details from './details.json';

export const Points = () => {
  const [data, setData] = useState([]); // State to store the sorted data

  useEffect(() => {
    // Sort the data once and store it in state
    const sortedData = details.sort((a, b) => b.points - a.points);
    setData(sortedData);
  }, []); // Empty dependency array to run the effect only once

  return (
    <div>
      <h2 id="heads">Points Table - 2024 </h2>
      <table id="table">
        <thead>
          <tr>
            <th>Name</th>
            <th style={{ borderCollapse: "collapse" }}>Points</th>
          </tr>
        </thead>
        <tbody>
          {data.map((person) => (
            <tr key={person.name}>
              <td>{person.name}</td>
              <td className="points">{person.points}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <Link id='link'  to="/point-details">More about Point details</Link>
    </div>
  );
};
