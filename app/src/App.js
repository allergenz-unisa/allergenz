import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import MainLayout from "./components/MainLayout";
import Allergeni from "./pages/Allergeni";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <BrowserRouter>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/allergeni" element={<Allergeni />} />
        </Routes>
      </MainLayout>
    </BrowserRouter>
  );
}

export default App;
