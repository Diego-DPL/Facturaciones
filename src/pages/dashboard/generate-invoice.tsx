import React, { useState } from 'react';
import Layout from '../../components/layout';
import jsPDF from 'jspdf';
// import html2canvas from 'html2canvas';

const GenerateInvoice: React.FC = () => {
  const [client, setClient] = useState({ name: '', address: '', nif: '' });
  const [items, setItems] = useState([{ name: '', quantity: 0, price: 0 }]);

  const handleClientChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setClient({ ...client, [e.target.name]: e.target.value });
  };

  const handleItemChange = (index: number, e: React.ChangeEvent<HTMLInputElement>) => {
    const newItems = [...items];
    newItems[index] = { ...newItems[index], [e.target.name]: e.target.value };
    setItems(newItems);
  };

  const addItem = () => {
    setItems([...items, { name: '', quantity: 0, price: 0 }]);
  };

  const generatePDF = async () => {
    // const invoiceElement = document.getElementById('invoice-template');
    console.log('generar pdf');
    const pdf = new jsPDF();
    pdf.text('Hola, esta es una prueba de PDF', 10, 10);
    pdf.save('prueba.pdf');

    // if (!invoiceElement) {
    //   alert('No se encontró el elemento de la factura');
    //   return;
    // }

    // try {
    //   // Renderizar el contenido como imagen
    //   const canvas = await html2canvas(invoiceElement, { scale: 2 });
    //   const imgData = canvas.toDataURL('image/png');

    //   // Crear PDF
    //   const pdf = new jsPDF({
    //     orientation: 'portrait',
    //     unit: 'px',
    //     format: 'a4',
    //   });

    //   // Dimensiones del PDF
    //   const pdfWidth = pdf.internal.pageSize.getWidth();
    //   const pdfHeight = pdf.internal.pageSize.getHeight();

    //   pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
    //   pdf.save('factura.pdf');

    //   alert('Factura generada con éxito');
    // } catch (error) {
    //   console.error('Error al generar el PDF:', error);
    //   alert('Hubo un error al generar la factura');
    // }
  };

  return (
    <Layout>
      <h1 className="text-3xl font-semibold text-gray-800 mb-6">Generar Factura</h1>
      <form className="space-y-6">
        {/* Formulario */}
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
            Añadir Produsdsacto
          </button>
        </div>

        <button
          type="button"
          onClick={generatePDF}
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Generaaar PDF
        </button>
      </form>

      {/* Plantilla de factura */}
      <div id="invoice-template" className="bg-white p-10 rounded-md shadow-lg text-gray-800">
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
          <p><strong>Total:</strong> ${items.reduce((sum, item) => sum + item.quantity * item.price, 0).toFixed(2)}</p>
        </div>
      </div>
    </Layout>
  );
};

export default GenerateInvoice;