import React, { useState } from 'react';
import Layout from '../../components/layout';

interface Invoice {
  id: number;
  number: string;
  date: string;
  client: string;
  total: number;
}

const ViewInvoices: React.FC = () => {
  const [invoices, setInvoices] = useState<Invoice[]>([
    { id: 1, number: 'INV-001', date: '2023-05-01', client: 'Cliente A', total: 1000 },
    { id: 2, number: 'INV-002', date: '2023-05-15', client: 'Cliente B', total: 1500 },
    { id: 3, number: 'INV-003', date: '2023-06-01', client: 'Cliente C', total: 2000 },
  ]);

  const [selectedInvoice, setSelectedInvoice] = useState<Invoice | null>(null);

  const handleInvoiceClick = (invoice: Invoice) => {
    setSelectedInvoice(invoice);
  };

  const closeModal = () => {
    setSelectedInvoice(null);
  };

  return (
    <Layout>
      <h1 className="text-3xl font-semibold text-gray-800 mb-6">Ver Facturas</h1>
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <table className="min-w-full">
          <thead>
            <tr>
              <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                Número
              </th>
              <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                Fecha
              </th>
              <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                Cliente
              </th>
              <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                Total
              </th>
            </tr>
          </thead>
          <tbody>
            {invoices.map((invoice) => (
              <tr
                key={invoice.id}
                onClick={() => handleInvoiceClick(invoice)}
                className="cursor-pointer hover:bg-gray-100"
              >
                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-300">
                  {invoice.number}
                </td>
                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-300">
                  {invoice.date}
                </td>
                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-300">
                  {invoice.client}
                </td>
                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-300">
                  ${invoice.total.toFixed(2)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {selectedInvoice && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full">
          <div className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white">
            <div className="mt-3 text-center">
              <h3 className="text-lg leading-6 font-medium text-gray-900">Detalles de la Factura</h3>
              <div className="mt-2 px-7 py-3">
                <p className="text-sm text-gray-500">
                  Número: {selectedInvoice.number}
                </p>
                <p className="text-sm text-gray-500">
                  Fecha: {selectedInvoice.date}
                </p>
                <p className="text-sm text-gray-500">
                  Cliente: {selectedInvoice.client}
                </p>
                <p className="text-sm text-gray-500">
                  Total: ${selectedInvoice.total.toFixed(2)}
                </p>
              </div>
              <div className="items-center px-4 py-3">
                <button
                  onClick={closeModal}
                  className="px-4 py-2 bg-blue-500 text-white text-base font-medium rounded-md w-full shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300"
                >
                  Cerrar
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </Layout>
  );
};

export default ViewInvoices;

