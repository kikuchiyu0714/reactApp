
## 1. Install node.js
https://nodejs.org/en
### Version check
```
node -v
npm -v
```
### Create React App
```
npx create-react-app frontend
```
### Install Bulma
```
cd frontend
npm install bulma
```
### Install react-router
```
npm install react-router-dom
```
### Add the following command in src/index.css
```
import 'bulma/css/bulma.min.css';
```
### Update src/App.js
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
### Start React App
```
npm start
```
## 2. Install .NET SDK
https://dotnet.microsoft.com/en-us/download/dotnet/thank-you/sdk-8.0.403-macos-arm64-installer
### Create a new project
```
dotnet new webapi -o backend
```
### CORS settings in Program.cs
```
var builder = WebApplication.CreateBuilder(args);

builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowReactApp",
        policy => policy.WithOrigins("http://localhost:3000")
                        .AllowAnyHeader()
                        .AllowAnyMethod());
});

builder.Services.AddControllers();

var app = builder.Build();

app.UseCors("AllowReactApp");

app.MapControllers();

app.Run();
```
### Create Controllers/ValuesController.cs
```
using Microsoft.AspNetCore.Mvc;

[ApiController]
[Route("api/[controller]")]
public class ValuesController : ControllerBase
{
    [HttpGet]
    public IActionResult Get()
    {
        var values = new List<string> { "data1", "data2", "data3" };
        return Ok(values);
    }
}
```
### Start API
```
cd backend
dotnet run
```
### Access API
```
http://localhost:5225/api/values
```

## 3. Structure
```
reactApp/                  # Root
│
├── frontend/              # React
│   ├── node_modules/      # Packeages
│   ├── public/            # Static file
│   ├── src/               # Source code
│   │   ├── App.js         # Main component
│   │   └── index.css      # CSS
│   └── package.json       # Dependencies
│
├── backend/               # C# REST API
│   ├── Controllers/       # Controller
│   │   └── ValuesController.cs
│   ├── Program.cs         # Entry Point
│   ├── backend.csproj     # Project file
│   └── Properties/        # Settings
│
└── README.md              
```
