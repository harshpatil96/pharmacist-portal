import React, { useState, useEffect } from "react";
import {
  Package,
  PlusCircle,
  ClipboardList,
  CheckCircle,
  AlertTriangle,
  Edit3,
  Trash2,
  Calendar,
  AlertCircle,
} from "lucide-react";
import {
  collection,
  addDoc,
  updateDoc,
  deleteDoc,
  onSnapshot,
  doc,
} from "firebase/firestore";
import { db } from "../context/firebase"; // import your firebase.js

const InventoryPanel = () => {
  const [inventory, setInventory] = useState([]);
  const [newMedicine, setNewMedicine] = useState({
    name: "",
    stock: "",
    expiry: "",
    category: "",
  });

  // 🔹 Fetch inventory in real-time
  useEffect(() => {
    const unsub = onSnapshot(collection(db, "inventory"), (snapshot) => {
      const items = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      setInventory(items);
    });
    return () => unsub();
  }, []);

  // 🔹 Add new medicine
  const handleAddMedicine = async () => {
    if (!newMedicine.name || !newMedicine.stock || !newMedicine.expiry) {
      alert("Please fill all fields");
      return;
    }
    await addDoc(collection(db, "inventory"), {
      ...newMedicine,
      stock: parseInt(newMedicine.stock),
    });
    setNewMedicine({ name: "", stock: "", expiry: "", category: "" });
  };

  // 🔹 Edit medicine (update stock/category/expiry)
  const handleEditMedicine = async (id, updatedData) => {
    const docRef = doc(db, "inventory", id);
    await updateDoc(docRef, updatedData);
  };

  // 🔹 Delete medicine
  const handleDeleteMedicine = async (id) => {
    await deleteDoc(doc(db, "inventory", id));
  };

  // Helpers
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
        <div className="flex items-center justify-between mb-10">
          <div className="flex items-center space-x-4">
            <div className="w-14 h-14 bg-gradient-to-r from-blue-600 to-teal-600 rounded-xl flex items-center justify-center shadow-lg">
              <Package className="w-7 h-7 text-white" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-800">Medicine Inventory</h2>
              <p className="text-gray-600 mt-1">Pharmaceutical Stock Management</p>
            </div>
          </div>
          {/* Add medicine form */}
          <div className="flex flex-wrap items-center gap-3 bg-white p-4 rounded-xl shadow-md border border-gray-200">
  {/* Medicine Name */}
  <input
    type="text"
    placeholder="e.g. Paracetamol"
    value={newMedicine.name}
    onChange={(e) => setNewMedicine({ ...newMedicine, name: e.target.value })}
    className="flex-1 min-w-[180px] px-4 py-2 border border-gray-300 rounded-lg placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all shadow-sm"
  />

  {/* Stock Units */}
  <input
    type="number"
    placeholder="e.g. 50 units"
    value={newMedicine.stock}
    onChange={(e) => setNewMedicine({ ...newMedicine, stock: e.target.value })}
    className="w-36 px-4 py-2 border border-gray-300 rounded-lg placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all shadow-sm"
  />

  {/* Expiry Date */}
  <input
    type="date"
    value={newMedicine.expiry}
    onChange={(e) => setNewMedicine({ ...newMedicine, expiry: e.target.value })}
    className="w-52 px-4 py-2 border border-gray-300 rounded-lg text-gray-600 focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-all shadow-sm"
    placeholder="Select expiry date"
  />

  {/* Category */}
  <input
    type="text"
    placeholder="e.g. Antibiotic / Analgesic"
    value={newMedicine.category}
    onChange={(e) =>
      setNewMedicine({ ...newMedicine, category: e.target.value })
    }
    className="flex-1 min-w-[180px] px-4 py-2 border border-gray-300 rounded-lg placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all shadow-sm"
  />

  {/* Add Button */}
  <button
    onClick={handleAddMedicine}
    className="flex items-center px-6 py-2.5 bg-gradient-to-r from-blue-600 to-teal-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-teal-700 transition-all transform hover:scale-105 shadow-md"
  >
    <PlusCircle className="w-5 h-5 mr-2" />
    Add Medicine
  </button>
</div>


        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100">
            <p className="text-gray-500 text-sm font-medium">Total Items</p>
            <div className="flex items-center justify-between mt-2">
              <p className="text-3xl font-bold text-gray-800">{inventory.length}</p>
              <ClipboardList className="w-10 h-10 text-blue-600 bg-blue-50 p-2 rounded-full" />
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100">
            <p className="text-gray-500 text-sm font-medium">Low Stock Alerts</p>
            <div className="flex items-center justify-between mt-2">
              <p className="text-3xl font-bold text-red-600">
                {inventory.filter((i) => i.stock < 10).length}
              </p>
              <AlertTriangle className="w-10 h-10 text-red-600 bg-red-50 p-2 rounded-full" />
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100">
            <p className="text-gray-500 text-sm font-medium">Total Stock Units</p>
            <div className="flex items-center justify-between mt-2">
              <p className="text-3xl font-bold text-teal-600">
                {inventory.reduce((sum, i) => sum + i.stock, 0)}
              </p>
              <CheckCircle className="w-10 h-10 text-teal-600 bg-teal-50 p-2 rounded-full" />
            </div>
          </div>
        </div>

        {/* Inventory Table */}
        <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
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
                      className="border-b border-gray-100 hover:bg-blue-50/40 transition-all duration-300"
                    >
                      {/* Medicine */}
                      <td className="p-6">
                        <h4 className="text-lg font-semibold text-gray-800">
                          {item.name}
                        </h4>
                        <p className="text-sm text-gray-500">{item.category}</p>
                      </td>

                      {/* Stock */}
                      <td className="p-6">
                        <div
                          className={`inline-flex items-center space-x-2 px-4 py-2 rounded-full ${stockStatus.bg}`}
                        >
                          {stockStatus.icon}
                          <span className={`font-semibold ${stockStatus.color}`}>
                            {item.stock} units
                          </span>
                        </div>
                      </td>

                      {/* Expiry */}
                      <td className="p-6">
                        <div
                          className={`inline-flex items-center space-x-2 px-4 py-2 rounded-full ${expiryStatus.bg}`}
                        >
                          <Calendar className={`w-4 h-4 ${expiryStatus.color}`} />
                          <span className={`font-medium ${expiryStatus.color}`}>
                            {new Date(item.expiry).toLocaleDateString()}
                          </span>
                        </div>
                      </td>

                      {/* Actions */}
                      <td className="p-6">
                        <div className="flex items-center justify-center space-x-3">
                          <button
                            onClick={() =>
                              handleEditMedicine(item.id, {
                                stock: item.stock + 1, // demo edit
                              })
                            }
                            className="flex items-center px-4 py-2 bg-amber-500 text-white rounded-lg hover:bg-amber-600"
                          >
                            <Edit3 className="w-4 h-4 mr-2" />
                            Edit
                          </button>
                          <button
                            onClick={() => handleDeleteMedicine(item.id)}
                            className="flex items-center px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
                          >
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
    </div>
  );
};

export default InventoryPanel;
