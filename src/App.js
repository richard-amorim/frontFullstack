import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ClienteListComponent from './components/ClienteListComponent';
import AddClienteComponent from './components/AddClienteComponent';
import UpdateClienteComponent from './components/UpdateClienteComponent';



const App = () => {
  return (
      <Router>
        <div className="container">
          <Routes>
            <Route path="/" element={<ClienteListComponent />} />
            <Route path="/get/:id" element={<ClienteListComponent />} />
            <Route path="/add-cliente" element={<AddClienteComponent />} />
            <Route path="/update-cliente/:id" element={<UpdateClienteComponent />} />
            
          </Routes>
        </div>
      </Router>
  );
};

export default App;