// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/login';
import Dashboard from './dashboard/page';
import GenerateInvoice from './dashboard/generate-invoice/generateInvoice';
import ViewInvoices from './dashboard/view-invoices/viewInvoice';

const App: React.FC = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/dashboard/generate-invoice" element={<GenerateInvoice />} />
          <Route path="/dashboard/view-invoices" element={<ViewInvoices />} />
       
        </Routes>
      </Router>
    </div>
  );
};

export default App;
