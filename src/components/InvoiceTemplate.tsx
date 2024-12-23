import React from 'react';

interface Item {
  name: string;
  quantity: number;
  price: number;
}

interface InvoiceTemplateProps {
  client: {
    name: string;
    address: string;
    nif: string;
  };
  items: Item[];
}

const InvoiceTemplate: React.FC<InvoiceTemplateProps> = ({ client, items }) => {
  const total = items.reduce((sum, item) => sum + item.quantity * item.price, 0);

  return (
    <div
      id="invoice-template"
      className="bg-white p-10 rounded-md shadow-lg text-gray-800"
      style={{ width: '210mm', height: '297mm', padding: '10mm' }}
    >
      <h1 className="text-2xl font-bold mb-4">Factura</h1>
      <div className="mb-6">
        <p><strong>Cliente:</strong> {client.name}</p>
        <p><strong>Dirección:</strong> {client.address}</p>
        <p><strong>NIF/CIF:</strong> {client.nif}</p>
      </div>
      <table className="w-full text-left border-collapse border border-gray-300">
        <thead>
          <tr>
            <th className="border border-gray-300 px-4 py-2">Producto</th>
            <th className="border border-gray-300 px-4 py-2">Cantidad</th>
            <th className="border border-gray-300 px-4 py-2">Precio Unitario</th>
            <th className="border border-gray-300 px-4 py-2">Total</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, index) => (
            <tr key={index}>
              <td className="border border-gray-300 px-4 py-2">{item.name}</td>
              <td className="border border-gray-300 px-4 py-2">{item.quantity}</td>
              <td className="border border-gray-300 px-4 py-2">${item.price.toFixed(2)}</td>
              <td className="border border-gray-300 px-4 py-2">${(item.quantity * item.price).toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="mt-4">
        <p><strong>Total:</strong> ${total.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default InvoiceTemplate;