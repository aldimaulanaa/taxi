import React, { useState } from 'react';

const FilterComponent = ({ onFilter }) => {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [minFare, setMinFare] = useState(0);
  const [maxFare, setMaxFare] = useState(100);
  const [minDistance, setMinDistance] = useState(0);
  const [maxDistance, setMaxDistance] = useState(100);

  const handleSubmit = (e) => {
    e.preventDefault();
    onFilter({ startDate, endDate, minFare, maxFare, minDistance, maxDistance });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} />
      <input type="date" value={endDate} onChange={(e) => setEndDate(e.target.value)} />
      <input type="number" value={minFare} onChange={(e) => setMinFare(e.target.value)} placeholder="Min Fare" />
      <input type="number" value={maxFare} onChange={(e) => setMaxFare(e.target.value)} placeholder="Max Fare" />
      <input type="number" value={minDistance} onChange={(e) => setMinDistance(e.target.value)} placeholder="Min Distance" />
      <input type="number" value={maxDistance} onChange={(e) => setMaxDistance(e.target.value)} placeholder="Max Distance" />
      <button type="submit">Filter</button>
    </form>
  );
};

export default FilterComponent;