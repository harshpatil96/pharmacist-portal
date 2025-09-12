import React, { useState } from "react";
import { User, Pill, CheckCircle, XCircle, Clock, AlertTriangle, Loader2, Hospital } from "lucide-react";

const PrescriptionPanel = () => {
  const [prescriptions, setPrescriptions] = useState([
    { id: 1, patient: "Ravi Kumar", status: "Pending", drugs: "Paracetamol, Ibuprofen", priority: "high", timestamp: "2024-01-15 14:30" },
    { id: 2, patient: "Anita Sharma", status: "Accepted", drugs: "Amoxicillin", priority: "medium", timestamp: "2024-01-15 13:45" },
    { id: 3, patient: "Suresh Patel", status: "Under Review", drugs: "Metformin, Aspirin", priority: "low", timestamp: "2024-01-15 12:20" },
  ]);

  const [hoveredRow, setHoveredRow] = useState(null);

  const handleAction = (id, action) => {
    setPrescriptions(prescriptions.map(p => 
      p.id === id ? { ...p, status: action } : p
    ));
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "Pending": return "bg-amber-100 text-amber-800 border-amber-200";
      case "Accepted": return "bg-emerald-100 text-emerald-800 border-emerald-200";
      case "Rejected": return "bg-red-100 text-red-800 border-red-200";
      case "Under Review": return "bg-blue-100 text-blue-800 border-blue-200";
      default: return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  const getPriorityIcon = (priority) => {
    switch (priority) {
      case "high": return <AlertTriangle className="text-red-500" size={16} />;
      case "medium": return <Clock className="text-amber-500" size={16} />;
      case "low": return <CheckCircle className="text-green-500" size={16} />;
      default: return <Loader2 className="text-gray-400" size={16} />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8 animate-fade-in">
          <div className="flex items-center space-x-4 mb-2">
            <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg">
              <Hospital className="text-white" size={28} />
            </div>
            <div>
              <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-700 to-indigo-700 bg-clip-text text-transparent">
                Prescription Management
              </h1>
              <p className="text-gray-600 text-lg">Professional Healthcare Dashboard</p>
            </div>
          </div>
          <div className="h-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full w-24 animate-pulse"></div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          {[
            { title: "Total Prescriptions", value: prescriptions.length, color: "from-blue-500 to-blue-600", icon: <Pill size={24} /> },
            { title: "Pending Review", value: prescriptions.filter(p => p.status === "Pending").length, color: "from-amber-500 to-amber-600", icon: <Clock size={24} /> },
            { title: "Accepted", value: prescriptions.filter(p => p.status === "Accepted").length, color: "from-emerald-500 to-emerald-600", icon: <CheckCircle size={24} /> },
            { title: "High Priority", value: prescriptions.filter(p => p.priority === "high").length, color: "from-red-500 to-red-600", icon: <AlertTriangle size={24} /> },
          ].map((stat, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 animate-slide-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`h-2 bg-gradient-to-r ${stat.color} rounded-t-xl`}></div>
              <div className="p-6 flex items-center justify-between">
                <div>
                  <p className="text-gray-600 text-sm font-medium">{stat.title}</p>
                  <p className="text-3xl font-bold text-gray-800 mt-2">{stat.value}</p>
                </div>
                <div className="text-blue-600 opacity-80">{stat.icon}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Prescription Table */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden animate-fade-in-up">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-6">
            <h2 className="text-2xl font-bold text-white flex items-center space-x-3">
              <Hospital size={20} />
              <span>Prescription Queue</span>
            </h2>
            <p className="text-blue-100 mt-2">Manage and process patient prescriptions efficiently</p>
          </div>

          <div className="overflow-x-auto">
  <table className="w-full table-auto border-collapse">
    <thead>
  <tr className="bg-gray-50 border-b border-gray-200">
    <th className="text-left p-4 font-semibold text-gray-700 uppercase tracking-wide min-w-[150px]">
      <span className="inline-flex items-center space-x-2">
        <User size={18} />
        <span>Patient</span>
      </span>
    </th>
    <th className="text-left p-4 font-semibold text-gray-700 uppercase tracking-wide min-w-[180px]">
      <span className="inline-flex items-center space-x-2">
        <Pill size={18} />
        <span>Medications</span>
      </span>
    </th>
    <th className="text-left p-4 font-semibold text-gray-700 uppercase tracking-wide min-w-[120px]">
      <span className="inline-flex items-center space-x-2">
        <CheckCircle size={18} />
        <span>Status</span>
      </span>
    </th>
    <th className="text-left p-4 font-semibold text-gray-700 uppercase tracking-wide min-w-[140px]">
      <span className="inline-flex items-center space-x-2">
        <AlertTriangle size={18} />
        <span>Actions</span>
      </span>
    </th>
  </tr>
</thead>


    <tbody>
      {prescriptions.map((prescription) => (
        <tr key={prescription.id} className="border-b border-gray-100">
          {/* Patient Cell */}
          <td className="p-4 whitespace-nowrap">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">
                {prescription.patient.split(' ').map(n => n[0]).join('')}
              </div>
              <div>
                <div className="font-medium text-gray-900">{prescription.patient}</div>
                <div className="text-sm text-gray-500 flex items-center space-x-1">
                  <Clock size={14} />
                  <span>{prescription.timestamp}</span>
                </div>
              </div>
            </div>
          </td>
          {/* Medications Cell */}
          <td className="p-4 whitespace-nowrap">
            <div className="bg-gray-50 rounded-md p-2 border-l-4 border-blue-500">
              {prescription.drugs}
            </div>
          </td>
          {/* Status Cell */}
          <td className="p-4 whitespace-nowrap">
            <span className={`px-3 py-1 rounded-full text-sm font-semibold border-2 ${getStatusColor(prescription.status)}`}>
              {prescription.status}
            </span>
          </td>
          {/* Actions Cell */}
          <td className="p-4 whitespace-nowrap">
            <div className="flex gap-2">
              <button onClick={() => handleAction(prescription.id, "Accepted")} className="px-3 py-1 bg-green-500 text-white rounded-md">Accept</button>
              <button onClick={() => handleAction(prescription.id, "Rejected")} className="px-3 py-1 bg-red-500 text-white rounded-md">Reject</button>
              <button onClick={() => handleAction(prescription.id, "Under Review")} className="px-3 py-1 bg-blue-500 text-white rounded-md">Substitute</button>
            </div>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
</div>


          {/* Footer */}
          <div className="bg-gray-50 p-6 border-t border-gray-200 flex flex-col sm:flex-row justify-between items-center">
            <div className="text-gray-600">
              Showing {prescriptions.length} prescriptions
            </div>
            <div className="flex items-center space-x-4">
              <div className="text-sm text-gray-500">Powered by PharmaCare System</div>
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <div className="text-sm text-green-600 font-medium">System Online</div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(-20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slide-in {
          from { opacity: 0; transform: translateX(-30px); }
          to { opacity: 1; transform: translateX(0); }
        }
        .animate-fade-in { animation: fade-in 0.6s ease-out; }
        .animate-fade-in-up { animation: fade-in-up 0.8s ease-out; }
        .animate-slide-in { animation: slide-in 0.6s ease-out; }
      `}</style>
    </div>
  );
};

export default PrescriptionPanel;
