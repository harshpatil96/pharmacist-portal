import React, { useState } from "react";
import { ShieldCheck, GraduationCap, FileText, AlertTriangle, Activity } from "lucide-react";

const ExtraFeaturesPanel = () => {
  const [emergencyStock, setEmergencyStock] = useState(50);
  const [trainingMode, setTrainingMode] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50 p-6">
      {/* Header */}
      <div className="mb-10 animate-fade-in">
        <h2 className="text-3xl font-extrabold bg-gradient-to-r from-blue-800 to-green-600 bg-clip-text text-transparent mb-2">
          Advanced Features
        </h2>
        <p className="text-gray-600 text-lg">
          Professional pharmacy management tools
        </p>
        <div className="w-28 h-1 bg-gradient-to-r from-blue-600 to-green-500 rounded-full mt-3"></div>
      </div>

      <div className="grid gap-8 max-w-5xl">
        {/* Emergency Medicine Reserve */}
        <div className="group bg-white/95 backdrop-blur-md shadow-lg rounded-2xl p-6 border border-red-100 hover:shadow-2xl hover:-translate-y-1 transition-all duration-500">
          <div className="flex items-center mb-5">
            <div className="bg-gradient-to-br from-red-500 to-red-600 p-3 rounded-xl shadow-lg group-hover:scale-110 transition-transform duration-300">
              <ShieldCheck className="h-6 w-6 text-white" />
            </div>
            <div className="ml-4">
              <h3 className="text-xl font-semibold text-gray-800 group-hover:text-red-600 transition-colors duration-300">
                Emergency Medicine Reserve
              </h3>
              <p className="text-gray-600 text-sm">
                Critical care medication stockpile
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-red-50 to-orange-50 p-5 rounded-xl border-l-4 border-red-400">
            <p className="mb-4 text-gray-700 flex items-center">
              <AlertTriangle className="h-4 w-4 text-red-500 mr-2" />
              Reserved for ambulances and critical emergency use
            </p>
            <div className="relative">
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Emergency Stock Quantity
              </label>
              <input
                type="number"
                value={emergencyStock}
                onChange={(e) => setEmergencyStock(e.target.value)}
                className="w-full px-4 py-3 border-2 border-red-200 rounded-xl focus:border-red-500 focus:ring-2 focus:ring-red-200 focus:ring-opacity-50 transition-all duration-300 text-lg font-semibold bg-white"
                placeholder="Enter quantity"
              />
              <span className="absolute right-3 top-11 text-red-500 font-semibold text-sm">
                units
              </span>
            </div>
          </div>
        </div>

        {/* Training Mode */}
        <div className="group bg-white/95 backdrop-blur-md shadow-lg rounded-2xl p-6 border border-blue-100 hover:shadow-2xl hover:-translate-y-1 transition-all duration-500">
          <div className="flex items-center mb-5">
            <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-3 rounded-xl shadow-lg group-hover:scale-110 transition-transform duration-300">
              <GraduationCap className="h-6 w-6 text-white" />
            </div>
            <div className="ml-4">
              <h3 className="text-xl font-semibold text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
                Pharmacist Training Mode
              </h3>
              <p className="text-gray-600 text-sm">
                Interactive learning environment
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-5 rounded-xl border-l-4 border-blue-400">
            <label className="flex items-center space-x-4 cursor-pointer group-hover:scale-[1.02] transition-transform duration-300">
              <div className="relative">
                <input
                  type="checkbox"
                  checked={trainingMode}
                  onChange={() => setTrainingMode(!trainingMode)}
                  className="sr-only"
                />
                <div
                  className={`w-14 h-8 rounded-full shadow-inner transition-all duration-500 ${
                    trainingMode
                      ? "bg-gradient-to-r from-blue-500 to-blue-600"
                      : "bg-gray-300"
                  }`}
                >
                  <div
                    className={`w-6 h-6 bg-white rounded-full shadow-lg transform transition-all duration-500 mt-1 ${
                      trainingMode ? "translate-x-7" : "translate-x-1"
                    }`}
                  ></div>
                </div>
              </div>
              <div>
                <span className="text-lg font-semibold text-gray-800">
                  Enable Tutorial Mode
                </span>
                <p className="text-sm text-gray-600">
                  {trainingMode
                    ? "Active — Tutorial guidance enabled"
                    : "Inactive — Normal operation mode"}
                </p>
              </div>
            </label>
          </div>
        </div>

        {/* Audit Logs */}
        <div className="group bg-white/95 backdrop-blur-md shadow-lg rounded-2xl p-6 border border-green-100 hover:shadow-2xl hover:-translate-y-1 transition-all duration-500">
          <div className="flex items-center mb-5">
            <div className="bg-gradient-to-br from-green-500 to-green-600 p-3 rounded-xl shadow-lg group-hover:scale-110 transition-transform duration-300">
              <FileText className="h-6 w-6 text-white" />
            </div>
            <div className="ml-4">
              <h3 className="text-xl font-semibold text-gray-800 group-hover:text-green-600 transition-colors duration-300">
                Audit Logs
              </h3>
              <p className="text-gray-600 text-sm">Real-time activity monitoring</p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-5 rounded-xl border-l-4 border-green-400 space-y-3">
            {[
              {
                drug: "Paracetamol",
                action: "dispensed to",
                user: "Ravi",
                color: "text-green-500",
                time: "10:30 AM",
              },
              {
                drug: "Ibuprofen",
                action: "stock updated by",
                user: "Anita",
                color: "text-blue-500",
                time: "12:15 PM",
              },
              {
                drug: "Amoxicillin",
                action: "prescription",
                user: "rejected",
                color: "text-red-500",
                time: "2:00 PM",
              },
            ].map((log, i) => (
              <div
                key={i}
                className="flex items-center p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover:scale-[1.02]"
              >
                <Activity className={`h-4 w-4 ${log.color} mr-3 animate-pulse`} />
                <div className="flex-1 text-sm">
                  <span className="font-semibold text-gray-800">{log.drug}</span>{" "}
                  <span className="text-gray-600">{log.action} </span>
                  <span
                    className={`font-semibold ${
                      log.color.includes("red")
                        ? "text-red-600"
                        : log.color.includes("blue")
                        ? "text-blue-600"
                        : "text-green-600"
                    }`}
                  >
                    {log.user}
                  </span>
                </div>
                <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
                  {log.time}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExtraFeaturesPanel;
