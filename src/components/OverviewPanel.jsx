import React, { useState, useEffect } from "react";
import { 
  TrendingUp, 
  Users, 
  Activity, 
  Calendar,
  BarChart3,
  ArrowUpRight,
  ArrowDownRight,
  MoreHorizontal,
  Clock,
  AlertCircle,
  Package,
  DollarSign
} from "lucide-react";

const OverviewPanel = () => {
  const [time, setTime] = useState(new Date());
  const [stats, setStats] = useState({
    totalPatients: 1247,
    monthlyRevenue: 125600,
    activePrescriptions: 342,
    pendingTasks: 18
  });

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  // Sample data for charts
  const revenueData = [
    { month: 'Jan', revenue: 120000 },
    { month: 'Feb', revenue: 98000 },
    { month: 'Mar', revenue: 115000 },
    { month: 'Apr', revenue: 105000 },
    { month: 'May', revenue: 125600 },
    { month: 'Jun', revenue: 134000 },
  ];

  const prescriptionTrend = [120, 145, 132, 167, 189, 210, 195, 220, 242, 256, 278, 300];

  return (
    <div className="p-6 bg-gradient-to-br from-slate-50 to-blue-50 min-h-screen">
      {/* Header Section */}
      <div className="mb-8 flex justify-between items-center">
        <div>
          <h2 className="text-3xl font-bold text-slate-800 mb-2 tracking-tight">
            Dashboard Overview
          </h2>
          <div className="flex items-center text-slate-600">
            <Calendar className="w-4 h-4 mr-2" />
            <span>{time.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</span>
            <span className="mx-2">•</span>
            <Clock className="w-4 h-4 mr-2" />
            <span>{time.toLocaleTimeString()}</span>
          </div>
          <div className="h-1 w-24 bg-gradient-to-r from-blue-600 to-teal-600 rounded-full mt-2"></div>
        </div>
        <div className="flex space-x-4">
          <button className="px-4 py-2 bg-white border border-slate-200 rounded-lg shadow-sm hover:shadow-md transition-shadow flex items-center">
            <Activity className="w-4 h-4 mr-2" />
            Generate Report
          </button>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg shadow-sm hover:shadow-md hover:bg-blue-700 transition-all flex items-center">
            <TrendingUp className="w-4 h-4 mr-2" />
            Quick Analysis
          </button>
        </div>
      </div>

      {/* Main Dashboard Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Column - Stats Cards */}
        <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Today's Orders Card */}
          <div className="group relative overflow-hidden bg-white border border-slate-200 shadow-lg rounded-2xl p-6 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-blue-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <div className="relative mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"></path>
                </svg>
              </div>
              <div className="absolute -top-2 -right-2 w-4 h-4 bg-blue-200 rounded-full opacity-60 group-hover:animate-pulse"></div>
              <div className="absolute -bottom-1 -left-1 w-3 h-3 bg-blue-300 rounded-full opacity-40 group-hover:animate-bounce"></div>
            </div>

            <div className="relative">
              <h3 className="font-semibold text-slate-700 mb-2 text-lg">Today's Orders</h3>
              <div className="flex items-baseline space-x-2">
                <p className="text-4xl font-bold text-blue-600 group-hover:text-blue-700 transition-colors duration-300">
                  12
                </p>
                <span className="text-sm text-green-500 font-medium bg-green-50 px-2 py-1 rounded-full flex items-center">
                  <ArrowUpRight className="w-3 h-3 mr-1" />
                  +8.5%
                </span>
              </div>
              <p className="text-sm text-slate-500 mt-2">vs. yesterday</p>
            </div>
          </div>

          {/* Low Stock Alerts Card */}
          <div className="group relative overflow-hidden bg-white border border-slate-200 shadow-lg rounded-2xl p-6 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
            <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-red-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <div className="relative mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-red-600 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.34 16.5c-.77.833.192 2.5 1.732 2.5z"></path>
                </svg>
              </div>
              <div className="absolute -top-2 -right-2 w-4 h-4 bg-red-200 rounded-full opacity-60 group-hover:animate-pulse"></div>
              <div className="absolute -bottom-1 -left-1 w-3 h-3 bg-red-300 rounded-full opacity-40 group-hover:animate-bounce"></div>
            </div>

            <div className="relative">
              <h3 className="font-semibold text-slate-700 mb-2 text-lg">Low Stock Alerts</h3>
              <div className="flex items-baseline space-x-2">
                <p className="text-4xl font-bold text-red-500 group-hover:text-red-600 transition-colors duration-300">
                  3
                </p>
                <span className="text-sm text-red-500 font-medium bg-red-50 px-2 py-1 rounded-full">
                  Critical
                </span>
              </div>
              <p className="text-sm text-slate-500 mt-2">medications below threshold</p>
            </div>

            <div className="absolute top-3 right-3">
              <div className="w-3 h-3 bg-red-500 rounded-full animate-ping"></div>
              <div className="w-3 h-3 bg-red-500 rounded-full absolute top-0"></div>
            </div>
          </div>

          {/* Pending Deliveries Card */}
          <div className="group relative overflow-hidden bg-white border border-slate-200 shadow-lg rounded-2xl p-6 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
            <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 to-amber-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <div className="relative mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-amber-600 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2"></path>
                </svg>
              </div>
              <div className="absolute -top-2 -right-2 w-4 h-4 bg-amber-200 rounded-full opacity-60 group-hover:animate-pulse"></div>
              <div className="absolute -bottom-1 -left-1 w-3 h-3 bg-amber-300 rounded-full opacity-40 group-hover:animate-bounce"></div>
            </div>

            <div className="relative">
              <h3 className="font-semibold text-slate-700 mb-2 text-lg">Pending Deliveries</h3>
              <div className="flex items-baseline space-x-2">
                <p className="text-4xl font-bold text-amber-600 group-hover:text-amber-700 transition-colors duration-300">
                  5
                </p>
                <span className="text-sm text-amber-600 font-medium bg-amber-50 px-2 py-1 rounded-full">
                  In Progress
                </span>
              </div>
              <p className="text-sm text-slate-500 mt-2">shipments on route</p>
            </div>

            <div className="absolute bottom-3 right-3">
              <div className="flex space-x-1">
                <div className="w-2 h-2 bg-amber-400 rounded-full animate-bounce" style={{animationDelay: '0ms'}}></div>
                <div className="w-2 h-2 bg-amber-400 rounded-full animate-bounce" style={{animationDelay: '150ms'}}></div>
                <div className="w-2 h-2 bg-amber-400 rounded-full animate-bounce" style={{animationDelay: '300ms'}}></div>
              </div>
            </div>
          </div>

          {/* Monthly Revenue Card */}
          <div className="group relative overflow-hidden bg-white border border-slate-200 shadow-lg rounded-2xl p-6 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
            <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-green-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <div className="relative mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                <DollarSign className="w-6 h-6 text-white" />
              </div>
              <div className="absolute -top-2 -right-2 w-4 h-4 bg-green-200 rounded-full opacity-60 group-hover:animate-pulse"></div>
              <div className="absolute -bottom-1 -left-1 w-3 h-3 bg-green-300 rounded-full opacity-40 group-hover:animate-bounce"></div>
            </div>

            <div className="relative">
              <h3 className="font-semibold text-slate-700 mb-2 text-lg">Monthly Revenue</h3>
              <div className="flex items-baseline space-x-2">
                <p className="text-3xl font-bold text-green-600 group-hover:text-green-700 transition-colors duration-300">
                  ₹1,25,600
                </p>
                <span className="text-sm text-green-500 font-medium bg-green-50 px-2 py-1 rounded-full flex items-center">
                  <ArrowUpRight className="w-3 h-3 mr-1" />
                  +12.3%
                </span>
              </div>
              <p className="text-sm text-slate-500 mt-2">vs. previous month</p>
            </div>
          </div>

          {/* Revenue Chart Card */}
          <div className="md:col-span-2 group relative overflow-hidden bg-white border border-slate-200 shadow-lg rounded-2xl p-6 hover:shadow-2xl transition-all duration-500">
            <div className="flex justify-between items-center mb-6">
              <h3 className="font-semibold text-slate-700 text-lg">Revenue Trends</h3>
              <button className="text-slate-400 hover:text-slate-600">
                <MoreHorizontal className="w-5 h-5" />
              </button>
            </div>
            
            <div className="flex items-end justify-between h-40">
              {revenueData.map((item, index) => (
                <div key={index} className="flex flex-col items-center">
                  <div 
                    className="w-10 bg-gradient-to-t from-blue-500 to-blue-300 rounded-t-lg transition-all duration-300 hover:from-blue-600 hover:to-blue-400"
                    style={{ height: `${item.revenue / 1500}px` }}
                  ></div>
                  <span className="text-xs text-slate-500 mt-2">{item.month}</span>
                </div>
              ))}
            </div>
            
            <div className="flex justify-between mt-4 pt-4 border-t border-slate-100">
              <div>
                <p className="text-sm text-slate-500">Avg. Monthly Growth</p>
                <p className="font-semibold text-green-600 flex items-center">
                  <ArrowUpRight className="w-4 h-4 mr-1" />
                  8.2%
                </p>
              </div>
              <div>
                <p className="text-sm text-slate-500">Projected Next Month</p>
                <p className="font-semibold text-slate-700">₹1,38,400</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - Additional Stats and Quick Actions */}
        <div className="lg:col-span-4 space-y-8">
          {/* Summary Stats Card */}
          <div className="bg-white border border-slate-200 shadow-lg rounded-2xl p-6">
            <h3 className="font-semibold text-slate-700 mb-4 text-lg flex items-center">
              <Activity className="w-5 h-5 mr-2 text-blue-600" />
              System Summary
            </h3>
            
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  <Users className="w-5 h-5 mr-2 text-blue-500" />
                  <span className="text-slate-600">Total Patients</span>
                </div>
                <span className="font-semibold">{stats.totalPatients}</span>
              </div>
              
              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  <Package className="w-5 h-5 mr-2 text-amber-500" />
                  <span className="text-slate-600">Active Prescriptions</span>
                </div>
                <span className="font-semibold">{stats.activePrescriptions}</span>
              </div>
              
              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  <DollarSign className="w-5 h-5 mr-2 text-green-500" />
                  <span className="text-slate-600">Monthly Revenue</span>
                </div>
                <span className="font-semibold">₹{stats.monthlyRevenue.toLocaleString('en-IN')}</span>
              </div>
              
              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  <AlertCircle className="w-5 h-5 mr-2 text-red-500" />
                  <span className="text-slate-600">Pending Tasks</span>
                </div>
                <span className="font-semibold">{stats.pendingTasks}</span>
              </div>
            </div>
            
            <div className="mt-6 pt-4 border-t border-slate-100">
              <div className="flex items-center text-sm text-slate-500">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                System operating normally
              </div>
            </div>
          </div>

          {/* Quick Actions Card */}
          <div className="bg-white border border-slate-200 shadow-lg rounded-2xl p-6">
            <h3 className="font-semibold text-slate-700 mb-4 text-lg">Quick Actions</h3>
            
            <div className="grid grid-cols-2 gap-3">
              <button className="p-3 bg-blue-50 hover:bg-blue-100 rounded-lg transition-colors flex flex-col items-center">
                <svg className="w-6 h-6 text-blue-600 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"></path>
                </svg>
                <span className="text-sm text-slate-700">New Order</span>
              </button>
              
              <button className="p-3 bg-green-50 hover:bg-green-100 rounded-lg transition-colors flex flex-col items-center">
                <svg className="w-6 h-6 text-green-600 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                </svg>
                <span className="text-sm text-slate-700">Add Patient</span>
              </button>
              
              <button className="p-3 bg-amber-50 hover:bg-amber-100 rounded-lg transition-colors flex flex-col items-center">
                <svg className="w-6 h-6 text-amber-600 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path>
                </svg>
                <span className="text-sm text-slate-700">Alerts</span>
              </button>
              
              <button className="p-3 bg-purple-50 hover:bg-purple-100 rounded-lg transition-colors flex flex-col items-center">
                <BarChart3 className="w-6 h-6 text-purple-600 mb-2" />
                <span className="text-sm text-slate-700">Reports</span>
              </button>
            </div>
          </div>

          {/* Recent Activity Card */}
          <div className="bg-white border border-slate-200 shadow-lg rounded-2xl p-6">
            <h3 className="font-semibold text-slate-700 mb-4 text-lg">Recent Activity</h3>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3"></div>
                <div>
                  <p className="text-sm font-medium">New prescription from Dr. Sharma</p>
                  <p className="text-xs text-slate-500">10 minutes ago</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3"></div>
                <div>
                  <p className="text-sm font-medium">Order #ORD-1245 was delivered</p>
                  <p className="text-xs text-slate-500">45 minutes ago</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 mr-3"></div>
                <div>
                  <p className="text-sm font-medium">Low stock alert for Amoxicillin</p>
                  <p className="text-xs text-slate-500">2 hours ago</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3"></div>
                <div>
                  <p className="text-sm font-medium">Monthly financial report generated</p>
                  <p className="text-xs text-slate-500">5 hours ago</p>
                </div>
              </div>
            </div>
            
            <button className="w-full mt-4 py-2 text-sm text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
              View All Activity
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Decorative Element */}
      <div className="mt-12 flex justify-center">
        <div className="flex space-x-2">
          <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
          <div className="w-2 h-2 bg-teal-400 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
          <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
        </div>
      </div>
    </div>
  );
};

export default OverviewPanel;