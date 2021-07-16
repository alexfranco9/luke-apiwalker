import './App.css';
import { Router } from '@reach/router';
import Form from './components/Form';
import Results from './components/Results';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  const [data, setData] = useState();
  const [error, setError] = useState();
    return (
    <div className="App">
      <br/>
    <Form data={ setData } error={ setError }/>
      <Router>
        <Results Info={ data } error={ error } path="/:resource/:id" />
      </Router>
    </div>
  );
}

export default App;
