
import { Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Login from "./pages/Loginpage";
import Register from "./pages/Registerpage";
import Layout from "./components/Layout";
import Deshboard from "./pages/Deshboard";
import Account from "./pages/Account";
import Scheduler from "./pages/Scheduler";
import AiComposer from "./pages/AiComposer";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/signin" element={<Login />} />
      <Route path="/signup" element={<Register />} />
      <Route element={<Layout />}>
        <Route path="/dashbord" element={<Deshboard />} />
        <Route path="/accounts" element={<Account />} />
        <Route path="/schedule" element={<Scheduler />} />
        <Route path="/ai-composer" element={<AiComposer />} />


      </Route>

    </Routes>
  );
}

export default App;