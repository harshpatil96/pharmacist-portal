import React from "react";

const OverviewPanel = () => {
  return (
    <div className="p-6 bg-gradient-to-br from-slate-50 to-blue-50 min-h-screen">
      {/* Header Section */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-slate-800 mb-2 tracking-tight">
          Dashboard Overview
        </h2>
        <div className="h-1 w-24 bg-gradient-to-r from-blue-600 to-teal-600 rounded-full"></div>
      </div>

      {/* Stats Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Today's Orders Card */}
        <div className="group relative overflow-hidden bg-white border border-slate-200 shadow-lg rounded-2xl p-6 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
          {/* Background Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-blue-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          
          {/* Icon Container */}
          <div className="relative mb-4">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"></path>
              </svg>
            </div>
            {/* Decorative Pills */}
            <div className="absolute -top-2 -right-2 w-4 h-4 bg-blue-200 rounded-full opacity-60 group-hover:animate-pulse"></div>
            <div className="absolute -bottom-1 -left-1 w-3 h-3 bg-blue-300 rounded-full opacity-40 group-hover:animate-bounce"></div>
          </div>

          <div className="relative">
            <h3 className="font-semibold text-slate-700 mb-2 text-lg">Today's Orders</h3>
            <div className="flex items-baseline space-x-2">
              <p className="text-4xl font-bold text-blue-600 group-hover:text-blue-700 transition-colors duration-300">
                12
              </p>
              <span className="text-sm text-green-500 font-medium bg-green-50 px-2 py-1 rounded-full">
                +8.5%
              </span>
            </div>
            <p className="text-sm text-slate-500 mt-2">vs. yesterday</p>
          </div>
        </div>

        {/* Low Stock Alerts Card */}
        <div className="group relative overflow-hidden bg-white border border-slate-200 shadow-lg rounded-2xl p-6 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
          {/* Background Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-red-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          
          {/* Icon Container */}
          <div className="relative mb-4">
            <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-red-600 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.34 16.5c-.77.833.192 2.5 1.732 2.5z"></path>
              </svg>
            </div>
            {/* Decorative Pills */}
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

          {/* Pulse animation for critical alerts */}
          <div className="absolute top-3 right-3">
            <div className="w-3 h-3 bg-red-500 rounded-full animate-ping"></div>
            <div className="w-3 h-3 bg-red-500 rounded-full absolute top-0"></div>
          </div>
        </div>

        {/* Pending Deliveries Card */}
        <div className="group relative overflow-hidden bg-white border border-slate-200 shadow-lg rounded-2xl p-6 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
          {/* Background Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 to-amber-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          
          {/* Icon Container */}
          <div className="relative mb-4">
            <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-amber-600 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2"></path>
              </svg>
            </div>
            {/* Decorative Pills */}
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

          {/* Loading animation for pending deliveries */}
          <div className="absolute bottom-3 right-3">
            <div className="flex space-x-1">
              <div className="w-2 h-2 bg-amber-400 rounded-full animate-bounce" style={{animationDelay: '0ms'}}></div>
              <div className="w-2 h-2 bg-amber-400 rounded-full animate-bounce" style={{animationDelay: '150ms'}}></div>
              <div className="w-2 h-2 bg-amber-400 rounded-full animate-bounce" style={{animationDelay: '300ms'}}></div>
            </div>
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