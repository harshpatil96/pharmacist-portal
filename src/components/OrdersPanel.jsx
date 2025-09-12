import React, { useState } from "react";
import { Package, Clock, Truck, CheckCircle, Eye, Edit3 } from "lucide-react";

const OrdersPanel = () => {
  const [orders] = useState([
    { 
      id: "ORD-001", 
      patient: "Ravi Kumar", 
      status: "Processing",
      medication: "Metformin 500mg",
      quantity: "30 tablets",
      orderDate: "2024-01-15",
      priority: "Normal"
    },
    { 
      id: "ORD-002", 
      patient: "Anita Sharma", 
      status: "Packed",
      medication: "Lisinopril 10mg",
      quantity: "60 tablets",
      orderDate: "2024-01-15",
      priority: "High"
    },
    { 
      id: "ORD-003", 
      patient: "Suresh Gupta", 
      status: "Out for Delivery",
      medication: "Atorvastatin 20mg",
      quantity: "90 tablets",
      orderDate: "2024-01-14",
      priority: "Normal"
    },
    { 
      id: "ORD-004", 
      patient: "Priya Patel", 
      status: "Delivered",
      medication: "Omeprazole 40mg",
      quantity: "28 capsules",
      orderDate: "2024-01-14",
      priority: "Normal"
    },
  ]);

  const getStatusIcon = (status) => {
    switch (status) {
      case "Processing":
        return <Clock className="w-4 h-4" />;
      case "Packed":
        return <Package className="w-4 h-4" />;
      case "Out for Delivery":
        return <Truck className="w-4 h-4" />;
      case "Delivered":
        return <CheckCircle className="w-4 h-4" />;
      default:
        return <Clock className="w-4 h-4" />;
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "Processing":
        return "bg-amber-100 text-amber-800 border-amber-200";
      case "Packed":
        return "bg-blue-100 text-blue-800 border-blue-200";
      case "Out for Delivery":
        return "bg-purple-100 text-purple-800 border-purple-200";
      case "Delivered":
        return "bg-green-100 text-green-800 border-green-200";
      default:
        return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  const getPriorityColor = (priority) => {
    return priority === "High" 
      ? "bg-red-100 text-red-700 border-red-200" 
      : "bg-gray-100 text-gray-600 border-gray-200";
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="mb-8 animate-fade-in">
          <div className="bg-white rounded-2xl shadow-xl border border-slate-200 p-8">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-3xl font-bold text-slate-800 mb-2">
                  Order Management System
                </h1>
                <p className="text-slate-600 text-lg">
                  Monitor and manage pharmaceutical orders with real-time tracking
                </p>
              </div>
              <div className="hidden md:block">
                <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl p-4">
                  <Package className="w-8 h-8 text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          {[
            { label: "Total Orders", value: "4", color: "from-blue-500 to-blue-600", icon: Package },
            { label: "Processing", value: "1", color: "from-amber-500 to-amber-600", icon: Clock },
            { label: "In Transit", value: "1", color: "from-purple-500 to-purple-600", icon: Truck },
            { label: "Delivered", value: "1", color: "from-green-500 to-green-600", icon: CheckCircle }
          ].map((stat, index) => (
            <div 
              key={stat.label}
              className="bg-white rounded-xl shadow-lg border border-slate-200 p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-slate-600 text-sm font-medium mb-1">{stat.label}</p>
                  <p className="text-2xl font-bold text-slate-800">{stat.value}</p>
                </div>
                <div className={`bg-gradient-to-r ${stat.color} rounded-lg p-3`}>
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Orders Table */}
        <div className="bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden animate-fade-in-up">
          <div className="bg-gradient-to-r from-slate-800 to-slate-700 px-8 py-6">
            <h2 className="text-xl font-bold text-white">Recent Orders</h2>
            <p className="text-slate-300 mt-1">Track and manage prescription orders</p>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-slate-50 border-b border-slate-200">
                <tr>
                  <th className="text-left py-4 px-6 font-semibold text-slate-700">Order ID</th>
                  <th className="text-left py-4 px-6 font-semibold text-slate-700">Patient Details</th>
                  <th className="text-left py-4 px-6 font-semibold text-slate-700">Medication</th>
                  <th className="text-left py-4 px-6 font-semibold text-slate-700">Priority</th>
                  <th className="text-left py-4 px-6 font-semibold text-slate-700">Status</th>
                  <th className="text-left py-4 px-6 font-semibold text-slate-700">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                {orders.map((order, index) => (
                  <tr 
                    key={order.id} 
                    className="hover:bg-slate-50 transition-colors duration-200 animate-table-row"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <td className="py-4 px-6">
                      <div className="font-mono text-sm font-semibold text-slate-800">
                        {order.id}
                      </div>
                      <div className="text-xs text-slate-500">{order.orderDate}</div>
                    </td>
                    <td className="py-4 px-6">
                      <div className="font-semibold text-slate-800">{order.patient}</div>
                      <div className="text-sm text-slate-600">Patient ID: PT-{order.id.slice(-3)}</div>
                    </td>
                    <td className="py-4 px-6">
                      <div className="font-medium text-slate-800">{order.medication}</div>
                      <div className="text-sm text-slate-600">Qty: {order.quantity}</div>
                    </td>
                    <td className="py-4 px-6">
                      <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium border ${getPriorityColor(order.priority)}`}>
                        {order.priority}
                      </span>
                    </td>
                    <td className="py-4 px-6">
                      <span className={`inline-flex items-center gap-2 px-3 py-2 rounded-full text-sm font-medium border ${getStatusColor(order.status)}`}>
                        {getStatusIcon(order.status)}
                        {order.status}
                      </span>
                    </td>
                    <td className="py-4 px-6">
                      <div className="flex gap-2">
                        <button className="inline-flex items-center gap-1 px-3 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-lg transition-all duration-200 transform hover:scale-105 focus:ring-2 focus:ring-blue-500 focus:ring-offset-1">
                          <Eye className="w-4 h-4" />
                          View
                        </button>
                        <button className="inline-flex items-center gap-1 px-3 py-2 bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-medium rounded-lg transition-all duration-200 transform hover:scale-105 focus:ring-2 focus:ring-emerald-500 focus:ring-offset-1">
                          <Edit3 className="w-4 h-4" />
                          Update
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-8 text-center">
          <p className="text-slate-600">
            Secure pharmaceutical order management system • Last updated: {new Date().toLocaleDateString()}
          </p>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

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

        @keyframes table-row {
          from {
            opacity: 0;
            transform: translateX(-10px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.6s ease-out;
        }

        .animate-slide-up {
          animation: slide-up 0.6s ease-out;
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out;
        }

        .animate-table-row {
          animation: table-row 0.5s ease-out;
        }
      `}</style>
    </div>
  );
};

export default OrdersPanel;