# reactApp

## 1. Install node.js
- Official site: https://nodejs.org/en
- Version
```
node -v
npm -v
```
- Create React App
```
npx create-react-app frontend
```
- Install Bulma
```
cd frontend
npm install bulma
```
- Add the following command in src/index.css
```
import 'bulma/css/bulma.min.css';
```
- Update src/App.js
```
import React, { useEffect, useState } from 'react';

function App() {
  const [data, setData] = useState([]);
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
    fetchData();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="container">
      <h1 className="title">List</h1>
      <ul>
        {data.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
```
- Start React App
```
npm start
```
## 2. install .net core