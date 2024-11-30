import React, { useEffect, useState } from 'react';
import './assets/styles/styles.css'; 
import { fetchTrips } from './api/api'; 
import MapComponent from './components/MapComponent';
import FilterComponent from './components/FilterComponent'; 
import ChartComponent from './components/ChartComponent'; 

const App = () => {
  const [trips, setTrips] = useState([]); 
  const [filteredData, setFilteredData] = useState([]); 
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(null); 

  useEffect(() => {
    const loadTrips = async () => {
      try {
        setLoading(true);
        const data = await fetchTrips({});
        setTrips(data); 
        setFilteredData(data); 
      } catch (err) {
        setError('Failed to fetch trips');
        console.error('Error fetching trips:', err);
      } finally {
        setLoading(false);
      }
    };
    loadTrips();
  }, []);

  const handleFilter = async (filters) => {
    try {
      setLoading(true);
      const data = await fetchTrips(filters);
      setFilteredData(data); 
    } catch (err) {
      setError('Failed to fetch filtered trips');
      console.error('Error fetching filtered trips:', err);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="loading">
        <h2>Loading...</h2>
      </div>
    );
  }

  if (error) {
    return (
      <div className="error-message">
        <h2>{error}</h2>
      </div>
    );
  }

  return (
    <div className="container">
      <h1>
        <i className="fa fa-taxi" aria-hidden="true"></i> Dashboard Analitik Perjalanan Taksi
      </h1>
      <FilterComponent onFilter={handleFilter} />
      <MapComponent trips={filteredData} />
      <ChartComponent key={JSON.stringify(filteredData)} data={filteredData} />
    </div>
  );
};

export default App;