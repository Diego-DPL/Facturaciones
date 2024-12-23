// src/components/Layout.tsx
import React, { ReactNode } from 'react';
import { Link } from 'react-router-dom';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex h-screen bg-gray-100">
      <aside className="w-64 bg-white shadow-md">
        <div className="p-4">
          <h1 className="text-2xl font-semibold text-gray-800">Facturación</h1>
        </div>
        <nav className="mt-4">
          <Link to="/dashboard/generate-invoice" className="block py-2 px-4 text-gray-700 hover:bg-blue-500 hover:text-white">
            Generar Factura
          </Link>
          <Link to="/dashboard/view-invoices" className="block py-2 px-4 text-gray-700 hover:bg-blue-500 hover:text-white">
            Ver Facturas
          </Link>
          <Link to="/dashboard/create-budget" className="block py-2 px-4 text-gray-700 hover:bg-blue-500 hover:text-white">
            Crear Presupuesto
          </Link> {/* Enlace nuevo */}
        </nav>
      </aside>
      <main className="flex-1 p-8 overflow-y-auto">{children}</main>
    </div>
  );
};

export default Layout;