import "./App.css";
import Auth from "./pages/Auth";
import { Routes, Route } from "react-router-dom";
import SuperAdminDashboard from "./pages/dashboards/SuperAdminDashboard";

function App() {
    return (
        <div>
            <Routes>
                <Route path="/login" element={<Auth />} />
                <Route path="/signup" element={<Auth />} />
                <Route path="/dashboard" element={<SuperAdminDashboard />} />
            </Routes>
        </div>
    );
}

export default App;
