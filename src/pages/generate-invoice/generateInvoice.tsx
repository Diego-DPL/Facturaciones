import React, { useState } from 'react';
import Layout from '../../components/layout';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import InvoiceTemplate from '../../components/InvoiceTemplate';

const GenerateInvoice: React.FC = () => {
  const [client, setClient] = useState({ name: '', address: '', nif: '' });
  const [items, setItems] = useState([{ name: '', quantity: 0, price: 0 }]);
  const [showModal, setShowModal] = useState(false);

  const handleClientChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setClient({ ...client, [e.target.name]: e.target.value });
  };

  const handleItemChange = (index: number, e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const newItems = [...items];
    newItems[index] = {
      ...newItems[index],
      [name]: name === 'quantity' || name === 'price' ? parseFloat(value) || 0 : value,
    };
    setItems(newItems);
  };

  const addItem = () => {
    setItems([...items, { name: '', quantity: 0, price: 0 }]);
  };

  const generatePDF = async () => {
    const invoiceElement = document.getElementById('invoice-template');
    if (!invoiceElement) {
      alert('No se encontró el elemento de la factura');
      return;
    }

    try {
      const canvas = await html2canvas(invoiceElement, { scale: 2 });
      const imgData = canvas.toDataURL('image/png');

      const pdf = new jsPDF({
        orientation: 'portrait',
        unit: 'px',
        format: 'a4',
      });

      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();

      pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
      pdf.save('factura.pdf');
    } catch (error) {
      console.error('Error al generar el PDF:', error);
      alert('Hubo un error al generar la factura');
    }
  };

  return (
    <Layout>
      <h1 className="text-3xl font-semibold text-gray-800 mb-6">Generar Factura</h1>
      <form className="space-y-6">
        {/* Datos del Cliente */}
        <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <h2 className="text-xl font-semibold mb-4">Datos del Cliente</h2>
          <div className="grid grid-cols-1 gap-6">
            <input
              type="text"
              name="name"
              placeholder="Nombre del cliente"
              value={client.name}
              onChange={handleClientChange}
              className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
            <input
              type="text"
              name="address"
              placeholder="Dirección"
              value={client.address}
              onChange={handleClientChange}
              className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
            <input
              type="text"
              name="nif"
              placeholder="NIF/CIF"
              value={client.nif}
              onChange={handleClientChange}
              className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
        </div>

        {/* Productos/Servicios */}
        <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <h2 className="text-xl font-semibold mb-4">Productos/Servicios</h2>
          {items.map((item, index) => (
            <div key={index} className="grid grid-cols-3 gap-4 mb-4">
              <input
                type="text"
                name="name"
                placeholder="Nombre del producto"
                value={item.name}
                onChange={(e) => handleItemChange(index, e)}
                className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
              <input
                type="number"
                name="quantity"
                placeholder="Cantidad"
                value={item.quantity}
                onChange={(e) => handleItemChange(index, e)}
                className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
              <input
                type="number"
                name="price"
                placeholder="Precio"
                value={item.price}
                onChange={(e) => handleItemChange(index, e)}
                className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
          ))}
          <button
            type="button"
            onClick={addItem}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Añadir Producto
          </button>
        </div>

        <button
          type="button"
          onClick={() => setShowModal(true)} // Abre el modal
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Previsualizar Factura
        </button>
      </form>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="relative bg-white rounded shadow-lg w-full max-w-4xl h-4/5 flex flex-col">
            <div className="overflow-auto p-6 flex-1">
              <InvoiceTemplate client={client} items={items} />
            </div>
            <div className="p-4 flex justify-end space-x-4 bg-gray-100 border-t border-gray-300">
              <button
                onClick={() => setShowModal(false)} // Cierra el modal
                className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
              >
                Editar
              </button>
              <button
                onClick={generatePDF} // Genera el PDF
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                Imprimir
              </button>
            </div>
          </div>
        </div>
      )}
    </Layout>
  );
};

export default GenerateInvoice;