// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/login';
import Dashboard from './pages/page';
import GenerateInvoice from './pages/generate-invoice/generateInvoice';
import ViewInvoices from './pages/view-invoices/viewInvoice';
import CreateBudget from './pages/create-budget/CreateBudget'; // Nueva ruta para presupuestos

const App: React.FC = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/dashboard/generate-invoice" element={<GenerateInvoice />} />
          <Route path="/dashboard/view-invoices" element={<ViewInvoices />} />
          <Route path="/dashboard/create-budget" element={<CreateBudget />} /> {/* Nueva ruta */}
        </Routes>
      </Router>
    </div>
  );
};

export default App;