import React, { useState } from "react";

import { DollarSign, FileText, Clock, CheckCircle, Eye, Download, Search, Filter, AlertCircle } from "lucide-react";


const BillingPanel = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState("all");

  const bills = [
    {
      id: 1,
      patient: "Ravi Kumar",
      amount: "₹450",
      status: "Paid",
      date: "2024-01-15",
      invoiceNo: "INV-2024-001",
      description: "Medication Consultation",
    },
    {
      id: 2,
      patient: "Anita Sharma",
      amount: "₹1200",
      status: "Pending",
      date: "2024-01-18",
      invoiceNo: "INV-2024-002",
      description: "Prescription & Lab Tests",
    },
    {
      id: 3,
      patient: "Dr. Priya Patel",
      amount: "₹850",
      status: "Paid",
      date: "2024-01-20",
      invoiceNo: "INV-2024-003",
      description: "Medical Supplies",
    },
  ];

  const filteredBills = bills.filter((bill) => {
    const matchesSearch =
      bill.patient.toLowerCase().includes(searchTerm.toLowerCase()) ||
      bill.invoiceNo.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter =
      filterStatus === "all" ||
      bill.status.toLowerCase() === filterStatus.toLowerCase();
    return matchesSearch && matchesFilter;
  });

  const getStatusIcon = (status) =>
  status === "Paid" ? <CheckCircle className="w-4 h-4" /> : <Clock className="w-4 h-4" />;

  const getStatusBadge = (status) => {
    const baseClasses =
      "inline-flex items-center gap-1 px-3 py-1 rounded-full text-sm font-medium transition-all duration-200";
    const statusClasses =
      status === "Paid"
        ? "bg-emerald-50 text-emerald-700 border border-emerald-200"
        : "bg-amber-50 text-amber-700 border border-amber-200";

    return (
      <span className={`${baseClasses} ${statusClasses}`}>
        {getStatusIcon(status)}
        {status}
      </span>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-teal-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 mb-8 backdrop-blur-sm">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-gradient-to-r from-blue-500 to-teal-500 rounded-xl shadow-md">
                <DollarSign className="w-8 h-8 text-white" />
              </div>
              <div>
                <h2 className="text-3xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
                  Billing & Payments
                </h2>
                <p className="text-gray-600 mt-1">
                  Manage patient invoices and payment records
                </p>
              </div>
            </div>

            {/* Summary cards */}
            <div className="flex items-center gap-3">
              <div className="bg-blue-50 border border-blue-200 rounded-lg px-4 py-2">
                <div className="text-sm text-blue-600 font-medium">
                  Total Revenue
                </div>
                <div className="text-2xl font-bold text-blue-700">₹2,500</div>
              </div>
              <div className="bg-teal-50 border border-teal-200 rounded-lg px-4 py-2">
                <div className="text-sm text-teal-600 font-medium">Pending</div>
                <div className="text-2xl font-bold text-teal-700">₹1,200</div>
              </div>
            </div>
          </div>

          {/* Search + Filter */}
          <div className="flex gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search by patient or invoice..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50 transition"
              />
            </div>
            <div className="relative">
              <Filter className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <select
                value={filterStatus}
                onChange={(e) => setFilterStatus(e.target.value)}
                className="pl-10 pr-8 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50 cursor-pointer transition"
              >
                <option value="all">All Status</option>
                <option value="paid">Paid</option>
                <option value="pending">Pending</option>
              </select>
            </div>
          </div>
        </div>

        {/* Table */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
          <table className="w-full">
            <thead>
              <tr className="bg-gradient-to-r from-gray-50 to-blue-50 border-b border-gray-200">
                <th className="text-left p-6 text-sm font-semibold text-gray-700 uppercase tracking-wider">
                  Patient
                </th>
                <th className="text-left p-6 text-sm font-semibold text-gray-700 uppercase tracking-wider">
                  Invoice
                </th>
                <th className="text-left p-6 text-sm font-semibold text-gray-700 uppercase tracking-wider">
                  Amount
                </th>
                <th className="text-left p-6 text-sm font-semibold text-gray-700 uppercase tracking-wider">
                  Status
                </th>
                <th className="text-left p-6 text-sm font-semibold text-gray-700 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {filteredBills.map((bill, index) => (
                <tr
                  key={bill.id}
                  className="hover:bg-gradient-to-r hover:from-blue-25 hover:to-teal-25 transition-all group"
                  style={{
                    animation: `slideInUp 0.4s ease-out ${index * 0.1}s both`,
                  }}
                >
                  <td className="p-6">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-100 to-teal-100 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                        <FileText className="w-6 h-6 text-blue-600" />
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900 text-lg">
                          {bill.patient}
                        </div>
                        <div className="text-gray-500 text-sm">
                          {bill.description}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="p-6">
                    <div>
                      <div className="font-mono text-sm bg-gray-100 px-2 py-1 rounded-md inline-block mb-1">
                        {bill.invoiceNo}
                      </div>
                      <div className="text-gray-500 text-sm">{bill.date}</div>
                    </div>
                  </td>
                  <td className="p-6 text-2xl font-bold text-gray-900">
                    {bill.amount}
                  </td>
                  <td className="p-6">{getStatusBadge(bill.status)}</td>
                  <td className="p-6">
                    <div className="flex gap-2">
                      <button className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white rounded-xl shadow-md transform hover:scale-105 text-sm font-medium transition">
                        <Eye className="w-4 h-4" />
                        View
                      </button>
                      <button className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 text-white rounded-xl shadow-md transform hover:scale-105 text-sm font-medium transition">
                        <Download className="w-4 h-4" />
                        Download
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {filteredBills.length === 0 && (
            <div className="text-center py-12">
              <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FileText className="w-12 h-12 text-gray-400" />
              </div>
              <h3 className="text-lg font-semibold text-gray-700 mb-2">
                No bills found
              </h3>
              <p className="text-gray-500">
                Try adjusting your search or filter criteria
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Animation styles */}
      <style>{`
        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .blue-25 {
          background-color: rgba(239, 246, 255, 0.5);
        }
        .teal-25 {
          background-color: rgba(240, 253, 250, 0.5);
        }
      `}</style>
    </div>
  );
};

export default BillingPanel;
