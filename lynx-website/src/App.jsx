// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard"; // فرض بر این که این فایل ساخته شده

function App() {
  return (
    <Router>
      <Routes>
        {/* مسیر ثبت‌نام فقط یک‌بار برای هر کاربر */}
        <Route path="/signup" element={<SignUp />} />

        {/* صفحه لاگین */}
        <Route path="/login" element={<Login />} />

        {/* داشبورد پس از ورود موفق */}
        <Route path="/dashboard" element={<Dashboard />} />

        {/* هدایت کاربران به signup برای اولین‌بار */}
        <Route path="/" element={<Navigate to="/signup" />} />
      </Routes>
    </Router>
  );
}

export default App;
