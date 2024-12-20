import React from 'react';
import Layout from '../components/layout';

const Dashboard: React.FC = () => {
  return (
    <Layout>
      <h1 className="text-3xl font-semibold text-gray-800 mb-6">Panel de Facturación</h1>
      <p className="text-gray-600">Bienvenido al panel de facturación. Utiliza el menú lateral para navegar.</p>
    </Layout>
  );
};

export default Dashboard;

