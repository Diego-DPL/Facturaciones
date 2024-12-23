import React from 'react';

interface Item {
  description: string;
  quantity: number;
  price: number;
}

interface BudgetTemplateProps {
  client: {
    name: string;
    address: string;
    date: string;
  };
  items: Item[];
  notes: string;
}

const BudgetTemplate: React.FC<BudgetTemplateProps> = ({ client, items, notes }) => {
  const total = items.reduce((sum, item) => sum + item.quantity * item.price, 0);

  return (
    <div
      id="budget-template"
      className="bg-white p-10 rounded-md shadow-lg text-gray-800 font-sans"
      style={{ width: '210mm', height: '297mm', padding: '10mm' }}
    >

      {/* Encabezado */}
      <div className="mb-8">
        <div className="grid grid-cols-2 gap-4">
            <div>
                <img src="../../public/LogoJMP.png" alt="JMP" className="" />
            </div>
            <div className="text-right">
                <div>
                    <p><strong>E-Mail: jmpeventosypro@gmail.com</strong></p>
                    <p><strong>Movil: 619 081 539</strong></p>
                    <p><strong>Nº Registro Instalador: 6470</strong></p>
                </div>
            </div>
        </div>
        <p><strong>JMP Eventos y Producciones</strong></p>
        <p><strong>C/ Cervantes, 52 .- CORIA - Cáceres</strong></p>
      </div>

      {/* Encabezado */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-center">Presupuesto</h1>
        <div className="flex justify-between mt-4">
          <div>
            <p><strong>Cliente:</strong> {client.name}</p>
            <p><strong>Dirección:</strong> {client.address}</p>
          </div>
          <div>
            <p><strong>Fecha:</strong> {client.date}</p>
          </div>
        </div>
      </div>

      {/* Tabla de servicios */}
      <table className="w-full text-left border-collapse border border-gray-300 mb-6">
        <thead>
          <tr>
            <th className="border border-gray-300 px-4 py-2">Descripción</th>
            <th className="border border-gray-300 px-4 py-2">Cantidad</th>
            <th className="border border-gray-300 px-4 py-2">Precio Unitario</th>
            <th className="border border-gray-300 px-4 py-2">Total</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, index) => (
            <tr key={index}>
              <td className="border border-gray-300 px-4 py-2">{item.description}</td>
              <td className="border border-gray-300 px-4 py-2">{item.quantity}</td>
              <td className="border border-gray-300 px-4 py-2">
                ${item.price.toFixed(2)}
              </td>
              <td className="border border-gray-300 px-4 py-2">
                ${(item.quantity * item.price).toFixed(2)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Total */}
      <div className="text-right mb-6">
        <p className="text-lg font-semibold">Total: ${total.toFixed(2)}</p>
      </div>

      {/* Notas */}
      {notes && (
        <div className="mb-6">
          <h2 className="text-xl font-semibold">Notas:</h2>
          <p className="mt-2">{notes}</p>
        </div>
      )}

      {/* Nota de aceptación */}
      <div className="mt-8">
        <p>
          <strong>Aceptación:</strong> Al firmar este presupuesto, aceptas los términos y
          condiciones especificados. Cualquier cambio en los servicios puede afectar el
          costo total.
        </p>
        <div className="flex justify-between mt-8">
          <div>
            <p>________________________</p>
            <p>Firma del Cliente</p>
          </div>
          <div>
            <p>________________________</p>
            <p>Firma del Proveedor</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BudgetTemplate;