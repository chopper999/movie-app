import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Router from "./routes/router";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <div className="App">
      <Router />
      <ToastContainer
        position="top-right"
        closeButton={false}
        closeOnClick={false}
        hideProgressBar={false}
        autoClose={2000}
      />
    </div>
  );
}

export default App;
