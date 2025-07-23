import "./App.css";
import Auth from "./pages/Auth";
import { Routes, Route } from "react-router-dom";

function App() {
    return (
        <div>
            <Routes>
                <Route path="/login" element={<Auth />} />
                <Route path="/signup" element={<Auth />} />
            </Routes>
        </div>
    );
}

export default App;
