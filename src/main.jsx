import ReactDOM from "react-dom/client";
import "./index.css";
import Router from "./Router/Router";
import React from "react";
import AuthProvider from "./Aurhentications/AuthProvier/AuthProvider";
import { Toaster } from "react-hot-toast";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
    <div className="max-w-screen-xl mx-auto ">
    <Toaster
        position="top-center"
        reverseOrder={false}
      />
      <Router></Router>
    </div>
    </AuthProvider>
  </React.StrictMode>
);
