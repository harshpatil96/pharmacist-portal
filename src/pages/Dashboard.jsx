import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import OverviewPanel from "../components/OverviewPanel";
import PrescriptionPanel from "../components/PrescriptionPanel";
import InventoryPanel from "../components/InventoryPanel";
import BillingPanel from "../components/BillingPanel";
import OrdersPanel from "../components/OrdersPanel";
import AnalyticsPanel from "../components/AnalyticsPanel";
import SettingsPanel from "../components/SettingsPanel";
import ExtraFeaturesPanel from "../components/ExtraFeaturesPanel";

const Dashboard = () => {
  const [active, setActive] = useState("overview");

  const renderPanel = () => {
    switch (active) {
      case "overview": return <OverviewPanel />;
      case "prescriptions": return <PrescriptionPanel />;
      case "inventory": return <InventoryPanel />;
      case "billing": return <BillingPanel />;
      case "orders": return <OrdersPanel />;
      case "analytics": return <AnalyticsPanel />;
      case "settings": return <SettingsPanel />;
      case "extra": return <ExtraFeaturesPanel />;
      default: return <OverviewPanel />;
    }
  };

  return (
    <div className="bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 min-h-screen">
      {/* Sidebar fixed to the left */}
      <Sidebar active={active} setActive={setActive} />

      {/* Main content area */}
      <main className="ml-64 p-6 overflow-y-auto min-h-screen transition-all duration-300">
        {renderPanel()}
      </main>
    </div>
  );
};

export default Dashboard;
