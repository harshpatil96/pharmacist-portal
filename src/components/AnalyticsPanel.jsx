import React, { useState, useEffect } from "react";
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { TrendingUp, BarChart3, Activity, Target } from "lucide-react";

const salesData = [
  { month: "Jan", sales: 4000 },
  { month: "Feb", sales: 3000 },
  { month: "Mar", sales: 5000 },
  { month: "Apr", sales: 4200 },
  { month: "May", sales: 6000 },
];

const demandData = [
  { village: "Village A", demand: 120 },
  { village: "Village B", demand: 90 },
  { village: "Village C", demand: 150 },
  { village: "Village D", demand: 70 },
];

const AnalyticsPanel = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [activeChart, setActiveChart] = useState("sales");

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white/95 backdrop-blur-sm p-3 border border-blue-100 rounded-lg shadow-md">
        <p className="text-gray-700 font-medium">{label}</p>
        <p className="text-teal-600 font-semibold">
          {payload[0].dataKey === "sales" ? "Sales: ₹" : "Demand: "}
          <span className="text-blue-800">{payload[0].value}</span>
          {payload[0].dataKey === "demand" ? " units" : ""}
        </p>
      </div>
    );
  }
  return null;
};


  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div
          className={`mb-8 transition-all duration-1000 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
          }`}
        >
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2 bg-teal-600 rounded-lg shadow-sm">
              <Activity className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-slate-800">
              Analytics & Reports
            </h2>
          </div>
          <p className="text-gray-500 text-lg">
            Pharmaceutical distribution insights
          </p>
        </div>

        {/* Navigation */}
        <div
          className={`mb-8 transition-all duration-1000 delay-200 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <div className="flex gap-2 bg-white p-1 rounded-xl shadow-sm border border-gray-100">
            <button
              onClick={() => setActiveChart("sales")}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300 ${
                activeChart === "sales"
                  ? "bg-teal-600 text-white shadow-md"
                  : "text-gray-600 hover:bg-gray-50"
              }`}
            >
              <TrendingUp className="w-4 h-4" />
              Sales Analytics
            </button>
            <button
              onClick={() => setActiveChart("demand")}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300 ${
                activeChart === "demand"
                  ? "bg-teal-600 text-white shadow-md"
                  : "text-gray-600 hover:bg-gray-50"
              }`}
            >
              <BarChart3 className="w-4 h-4" />
              Demand Analysis
            </button>
          </div>
        </div>

        {/* Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Sales */}
          <div
            className={`transition-all duration-1000 delay-300 ${
              isLoaded
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            } ${activeChart !== "sales" ? "lg:opacity-50 lg:scale-95" : ""}`}
          >
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-2xl transition duration-300">
              <div className="bg-gradient-to-r from-teal-600 to-blue-600 p-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-white/20 rounded-lg">
                      <TrendingUp className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white">
                        Sales Trends
                      </h3>
                      <p className="text-blue-100 text-sm">
                        Monthly revenue analysis
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-bold text-white">₹22.2K</p>
                    <p className="text-blue-100 text-sm">Total Sales</p>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={salesData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                    <XAxis
                      dataKey="month"
                      tick={{ fill: "#6b7280", fontSize: 12 }}
                    />
                    <YAxis
                      tick={{ fill: "#6b7280", fontSize: 12 }}
                    />
                    <Tooltip content={<CustomTooltip />} />
                    <Line
                      type="monotone"
                      dataKey="sales"
                      stroke="url(#salesGradient)"
                      strokeWidth={3}
                      dot={{ fill: "#0d9488", strokeWidth: 2, r: 5 }}
                      activeDot={{ r: 7, stroke: "#0d9488", strokeWidth: 2 }}
                    />
                    <defs>
                      <linearGradient id="salesGradient" x1="0" y1="0" x2="1" y2="0">
                        <stop offset="0%" stopColor="#0d9488" />
                        <stop offset="100%" stopColor="#2563eb" />
                      </linearGradient>
                    </defs>
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>

          {/* Demand */}
          <div
            className={`transition-all duration-1000 delay-500 ${
              isLoaded
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            } ${activeChart !== "demand" ? "lg:opacity-50 lg:scale-95" : ""}`}
          >
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-2xl transition duration-300">
              <div className="bg-gradient-to-r from-blue-600 to-indigo-700 p-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-white/20 rounded-lg">
                      <Target className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white">
                        Demand Analysis
                      </h3>
                      <p className="text-blue-100 text-sm">
                        Village-wise distribution
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-bold text-white">430</p>
                    <p className="text-blue-100 text-sm">Total Units</p>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={demandData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                    <XAxis
                      dataKey="village"
                      tick={{ fill: "#6b7280", fontSize: 12 }}
                    />
                    <YAxis tick={{ fill: "#6b7280", fontSize: 12 }} />
                    <Tooltip content={<CustomTooltip />} />
                    <Bar
                      dataKey="demand"
                      fill="url(#demandGradient)"
                      radius={[4, 4, 0, 0]}
                    />
                    <defs>
                      <linearGradient id="demandGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#2563eb" />
                        <stop offset="100%" stopColor="#1e40af" />
                      </linearGradient>
                    </defs>
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        </div>

        {/* Summary */}
        <div
          className={`mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 transition-all duration-1000 delay-700 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {[
            { label: "Growth Rate", value: "+15.3%", color: "text-green-600", bg: "bg-green-100", icon: TrendingUp },
            { label: "Active Villages", value: "4", color: "text-blue-600", bg: "bg-blue-100", icon: Target },
            { label: "Efficiency", value: "94.2%", color: "text-teal-600", bg: "bg-teal-100", icon: Activity },
          ].map((card, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl p-6 shadow-md border border-gray-100 hover:shadow-lg transition duration-300"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-500 text-sm">{card.label}</p>
                  <p className={`text-2xl font-bold ${card.color}`}>
                    {card.value}
                  </p>
                </div>
                <div className={`p-3 ${card.bg} rounded-full`}>
                  <card.icon className={`w-6 h-6 ${card.color}`} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AnalyticsPanel;
