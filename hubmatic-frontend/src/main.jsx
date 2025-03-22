import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";

import DashboardLayout from "./layouts/DashboardLayout";
import Chat from "./pages/Chat";
import Calendar from "./pages/Calendar";
import Workflows from "./pages/Workflows";
import ApiHelper from "./pages/ApiHelper";
import Settings from "./pages/Settings";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DashboardLayout />}>
          <Route path="chat" element={<Chat />} />
          <Route path="calendar" element={<Calendar />} />
          <Route path="workflows" element={<Workflows />} />
          <Route path="ai-helper" element={<ApiHelper />} />
          <Route path="settings" element={<Settings />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
