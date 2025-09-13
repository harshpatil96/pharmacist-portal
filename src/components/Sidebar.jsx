import React from "react";
import {
  LayoutDashboard,
  Pill,
  Boxes,
  CreditCard,
  ShoppingCart,
  BarChart3,
  Settings,
  Sparkles,
  Hospital,
} from "lucide-react";

const Sidebar = ({ active, setActive }) => {
  const menuItems = [
    { id: "overview", label: "Overview", icon: <LayoutDashboard size={20} /> },
    { id: "prescriptions", label: "Prescriptions", icon: <Pill size={20} /> },
    { id: "inventory", label: "Inventory", icon: <Boxes size={20} /> },
    { id: "billing", label: "Billing", icon: <CreditCard size={20} /> },
    { id: "orders", label: "Orders", icon: <ShoppingCart size={20} /> },
    { id: "analytics", label: "Analytics", icon: <BarChart3 size={20} /> },
    { id: "settings", label: "Settings", icon: <Settings size={20} /> },
    { id: "extra", label: "Extra Features", icon: <Sparkles size={20} /> },
  ];

  return (
    <div className="fixed top-0 left-0 h-screen w-64 bg-gradient-to-b from-green-50 to-green-100 text-gray-800 shadow-md flex flex-col">
      
      {/* Logo Section */}
      {/* Logo Section */}
<div className="p-4 border-b border-green-200 flex items-center space-x-3">
  <div className="w-10 h-10 rounded-full overflow-hidden flex items-center justify-center shadow-sm bg-green-400">
  <img
    src="/logo.png" // replace with your image path
    alt="Logo"
    className="w-full h-full object-cover object-center"
  />
</div>

  <div>
    <h1 className="text-lg font-bold">S.A.H.A.Y.A</h1>
    <p className="text-xs text-green-700">Healthcare Dashboard</p>
  </div>
</div>


      {/* Navigation Items */}
      <nav className="flex-1 overflow-y-auto p-4">
        <ul className="space-y-2">
          {menuItems.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => setActive(item.id)}
                className={`w-full flex items-center space-x-3 p-3 rounded-lg transition-all duration-200
                  ${
                    active === item.id
                      ? "bg-green-200 border-l-4 border-green-500 text-green-800"
                      : "hover:bg-green-100 text-gray-700"
                  }`}
              >
                <span>{item.icon}</span>
                <span className="font-medium">{item.label}</span>
              </button>
            </li>
          ))}
        </ul>
      </nav>

      {/* Footer Section */}
      <div className="p-4 border-t border-green-200">
        <div className="flex items-center space-x-2 text-green-700">
          <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
          <span className="text-sm">System Online</span>
        </div>
        <p className="text-xs text-green-600 mt-2">Powered by S.A.H.A.Y.A</p>
      </div>
    </div>
  );
};

export default Sidebar;
