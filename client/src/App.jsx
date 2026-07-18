
import { Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Login from "./pages/Loginpage";
import Register from "./pages/Registerpage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/signin" element={<Login/>} />
      <Route path="/signup" element={<Register/>} />

    </Routes>
  );
}

export default App;