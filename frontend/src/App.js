import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import UserTable from './components/UserTable';
import Pagination from './components/Pagination';
import Detail from './components/Detail';

function App() {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(2);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:5225/api/values');
      if (!response.ok) {
        throw new Error(`Error ${response.statusText}`);
      }
      const result = await response.json();
      setData(result);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // Get data
  useEffect(() => {
    const fetchAndSetData = async () => {
      await fetchData();
    };
  
    fetchAndSetData();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentData = data.slice(indexOfFirstItem, indexOfLastItem);
  // Calculate page number
  const totalPages = Math.ceil(data.length / itemsPerPage);
  // Update page number
  const handlePageChange = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <Router>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <div className="container">
              <UserTable data={currentData} />
              <Pagination
                totalPages={totalPages}
                currentPage={currentPage}
                onPageChange={handlePageChange}
              />
            </div>
          }
        />
        <Route path="/details/:id" element={<Detail data={data} />} />
      </Routes>
    </Router>
  );
}

export default App;
