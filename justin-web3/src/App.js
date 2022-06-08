import React from "react";
import './App.css';
import Navbar from "./Components/Navbar";
import Header from "./Components/Header";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import { NextUIProvider } from '@nextui-org/react';

function App() {
  return (
    <NextUIProvider>
    <div className="App">
        <Router>
          <Navbar/>
          <Header/>
          <Routes>
            <Route path="/" eact />
          </Routes>
        </Router>
    </div>
    </NextUIProvider>
  );
}

export default App;
