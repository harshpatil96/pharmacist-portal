import React, { useState } from "react";
import { Truck, Bell, Globe, Save, Shield, SunMoon } from "lucide-react";

const SettingsPanel = () => {
  const [deliveryRadius, setDeliveryRadius] = useState(5);
  const [notifications, setNotifications] = useState(true);
  const [language, setLanguage] = useState("English");
  const [privacy, setPrivacy] = useState(false);
  const [theme, setTheme] = useState("light");

  const handleSave = () => {
    alert("✅ Settings Saved!");
  };

  return (
    <div className="min-h-screen bg-gray-50 flex justify-center p-6">
      <div className="w-full max-w-2xl bg-white shadow-lg rounded-2xl p-8">
        {/* Header */}
        <h1 className="text-2xl font-bold text-gray-800 mb-6 flex items-center space-x-2">
          <SunMoon className="w-6 h-6 text-blue-600" />
          <span>System Settings</span>
        </h1>

        <div className="space-y-6">
          {/* Theme Preference */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center space-x-2">
              <SunMoon className="w-5 h-5 text-indigo-600" />
              <span>Theme Preference</span>
            </label>
            <select
              value={theme}
              onChange={(e) => setTheme(e.target.value)}
              className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-indigo-500 bg-gray-50"
            >
              <option value="light">Light</option>
              <option value="dark">Dark</option>
              <option value="system">System Default</option>
            </select>
          </div>

          {/* Delivery Radius */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center space-x-2">
              <Truck className="w-5 h-5 text-green-600" />
              <span>Delivery Radius</span>
            </label>
            <input
              type="range"
              min="1"
              max="30"
              value={deliveryRadius}
              onChange={(e) => setDeliveryRadius(parseInt(e.target.value))}
              className="w-full"
            />
            <div className="flex justify-between text-sm text-gray-500">
              <span>1 km</span>
              <span>{deliveryRadius} km</span>
              <span>30 km</span>
            </div>
          </div>

          {/* Notifications */}
          <div className="flex items-center justify-between p-4 border rounded-lg">
            <div className="flex items-center space-x-3">
              <Bell className="w-5 h-5 text-amber-600" />
              <span className="font-medium text-gray-700">Enable Notifications</span>
            </div>
            <input
              type="checkbox"
              checked={notifications}
              onChange={() => setNotifications(!notifications)}
              className="h-5 w-5 text-blue-600 rounded"
            />
          </div>

          {/* Language */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center space-x-2">
              <Globe className="w-5 h-5 text-purple-600" />
              <span>Language</span>
            </label>
            <select
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-purple-500 bg-gray-50"
            >
              <option>English</option>
              <option>Hindi</option>
              <option>Marathi</option>
            </select>
          </div>

          {/* Privacy */}
          <div className="flex items-center justify-between p-4 border rounded-lg">
            <div className="flex items-center space-x-3">
              <Shield className="w-5 h-5 text-red-600" />
              <span className="font-medium text-gray-700">Privacy Mode</span>
            </div>
            <input
              type="checkbox"
              checked={privacy}
              onChange={() => setPrivacy(!privacy)}
              className="h-5 w-5 text-blue-600 rounded"
            />
          </div>
        </div>

        {/* Actions */}
        <div className="mt-8 flex justify-end space-x-3">
          <button className="px-5 py-2 rounded-lg border text-gray-600 hover:bg-gray-100">
            Cancel
          </button>
          <button
            onClick={handleSave}
            className="px-5 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg hover:from-blue-700 hover:to-indigo-700 flex items-center space-x-2"
          >
            <Save className="w-4 h-4" />
            <span>Save Settings</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SettingsPanel;
