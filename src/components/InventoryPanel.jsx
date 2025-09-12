import React, { useState } from "react";
import {
  Package,
  PlusCircle,
  ClipboardList,
  CheckCircle,
  AlertTriangle,
  Zap,
  Edit3,
  Trash2,
  Calendar,
  AlertCircle 

} from "lucide-react";

const InventoryPanel = () => {
  const [inventory] = useState([
    { id: 1, name: "Paracetamol", stock: 20, expiry: "2025-03-01", category: "Analgesic" },
    { id: 2, name: "Ibuprofen", stock: 5, expiry: "2024-12-15", category: "Anti-inflammatory" },
    { id: 3, name: "Amoxicillin", stock: 50, expiry: "2026-01-20", category: "Antibiotic" },
  ]);

  const getStockStatus = (stock) => {
  if (stock < 10)
    return {
      color: "text-red-600",
      bg: "bg-red-50",
      icon: <AlertTriangle className="w-4 h-4 text-red-600" />,
    };
  if (stock < 30)
    return {
      color: "text-yellow-600",
      bg: "bg-yellow-50",
      icon: <AlertCircle className="w-4 h-4 text-yellow-600" />,
    };
  return {
    color: "text-green-600",
    bg: "bg-green-50",
    icon: <CheckCircle className="w-4 h-4 text-green-600" />,
  };
};


  const getExpiryStatus = (expiry) => {
  const expiryDate = new Date(expiry);
  const today = new Date();
  const daysUntilExpiry = Math.ceil(
    (expiryDate.getTime() - today.getTime()) / (1000 * 60 * 60 * 24)
  );

  if (daysUntilExpiry <= 0)
    return {
      color: "text-red-600",
      bg: "bg-red-50",
      label: "Expired",
    };
  if (daysUntilExpiry <= 30)
    return {
      color: "text-yellow-600",
      bg: "bg-yellow-50",
      label: `Expiring in ${daysUntilExpiry} days`,
    };
  return {
    color: "text-green-600",
    bg: "bg-green-50",
    label: `Valid (${daysUntilExpiry} days left)`,
  };
};



  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-teal-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-10 animate-fade-in-up">
          <div className="flex items-center space-x-4">
            <div className="w-14 h-14 bg-gradient-to-r from-blue-600 to-teal-600 rounded-xl flex items-center justify-center shadow-lg">
              <Package className="w-7 h-7 text-white" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-800">Medicine Inventory</h2>
              <p className="text-gray-600 mt-1">Pharmaceutical Stock Management</p>
            </div>
          </div>
          <button className="px-6 py-3 bg-gradient-to-r from-blue-600 to-teal-600 text-white rounded-xl flex items-center space-x-2 hover:from-blue-700 hover:to-teal-700 transition-all duration-300 transform hover:scale-105 shadow-lg">
            <PlusCircle className="w-5 h-5" />
            <span>Add Medicine</span>
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100 hover:shadow-xl transition">
            <p className="text-gray-500 text-sm font-medium">Total Items</p>
            <div className="flex items-center justify-between mt-2">
              <p className="text-3xl font-bold text-gray-800">{inventory.length}</p>
              <ClipboardList className="w-10 h-10 text-blue-600 bg-blue-50 p-2 rounded-full" />
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100 hover:shadow-xl transition">
            <p className="text-gray-500 text-sm font-medium">Low Stock Alerts</p>
            <div className="flex items-center justify-between mt-2">
              <p className="text-3xl font-bold text-red-600">{inventory.filter((i) => i.stock < 10).length}</p>
              <AlertTriangle className="w-10 h-10 text-red-600 bg-red-50 p-2 rounded-full" />
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100 hover:shadow-xl transition">
            <p className="text-gray-500 text-sm font-medium">Total Stock Units</p>
            <div className="flex items-center justify-between mt-2">
              <p className="text-3xl font-bold text-teal-600">{inventory.reduce((sum, i) => sum + i.stock, 0)}</p>
              <CheckCircle className="w-10 h-10 text-teal-600 bg-teal-50 p-2 rounded-full" />
            </div>
          </div>
        </div>

        {/* Inventory Table */}
        <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden animate-fade-in-up animation-delay-200">
          <div className="bg-gradient-to-r from-gray-50 to-blue-50 px-6 py-4 border-b border-gray-200">
            <h3 className="text-lg font-semibold text-gray-800 flex items-center space-x-2">
              <ClipboardList className="w-5 h-5 text-blue-600" />
              <span>Current Inventory</span>
            </h3>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-gray-50 text-left border-b border-gray-200">
                  <th className="p-6 text-sm font-semibold text-gray-700">Medicine</th>
                  <th className="p-6 text-sm font-semibold text-gray-700">Stock</th>
                  <th className="p-6 text-sm font-semibold text-gray-700">Expiry</th>
                  <th className="p-6 text-sm font-semibold text-gray-700 text-center">Actions</th>
                </tr>
              </thead>
              <tbody>
                {inventory.map((item, index) => {
                  const stockStatus = getStockStatus(item.stock);
                  const expiryStatus = getExpiryStatus(item.expiry);

                  return (
                    <tr
                      key={item.id}
                      className="border-b border-gray-100 hover:bg-blue-50/40 transition-all duration-300 group"
                      style={{ animationDelay: `${index * 120}ms` }}
                    >
                      {/* Medicine */}
                      <td className="p-6">
                        <h4 className="text-lg font-semibold text-gray-800 group-hover:text-blue-700 transition">
                          {item.name}
                        </h4>
                        <p className="text-sm text-gray-500">{item.category}</p>
                      </td>

                      {/* Stock */}
                      <td className="p-6">
                        <div className={`inline-flex items-center space-x-2 px-4 py-2 rounded-full ${stockStatus.bg}`}>
                          {stockStatus.icon}
                          <span className={`font-semibold ${stockStatus.color}`}>{item.stock} units</span>
                        </div>
                      </td>

                      {/* Expiry */}
                      <td className="p-6">
                        <div className={`inline-flex items-center space-x-2 px-4 py-2 rounded-full ${expiryStatus.bg}`}>
                          <Calendar className={`w-4 h-4 ${expiryStatus.color}`} />
                          <span className={`font-medium ${expiryStatus.color}`}>
                            {new Date(item.expiry).toLocaleDateString()}
                          </span>
                        </div>
                      </td>

                      {/* Actions */}
                      <td className="p-6">
                        <div className="flex items-center justify-center space-x-3">
                          <button className="flex items-center px-4 py-2 bg-amber-500 text-white rounded-lg hover:bg-amber-600 transition transform hover:scale-105 shadow-md">
                            <Edit3 className="w-4 h-4 mr-2" />
                            Edit
                          </button>
                          <button className="flex items-center px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition transform hover:scale-105 shadow-md">
                            <Trash2 className="w-4 h-4 mr-2" />
                            Delete
                          </button>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Animations */}
      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out forwards;
        }
        .animation-delay-200 {
          animation-delay: 200ms;
        }
      `}</style>
    </div>
  );
};

export default InventoryPanel;
