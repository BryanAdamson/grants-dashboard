import React from 'react';
import Dashboard from './pages/Dashboard';
import './styles/App.module.css';
import Header from "./components/Layout/Header";

function App() {
    return (
        <div className="App">
            <Header />
            <Dashboard />
        </div>
    );
}

export default App;
