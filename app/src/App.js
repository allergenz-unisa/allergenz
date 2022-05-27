import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainLayout from "./components/MainLayout";
import Allergeni from "./pages/Allergeni";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Registrazione from "./pages/Registrazione";
import Account from "./pages/Account";
import ModificaMenu from "./pages/ModificaMenu";
import { TitleContextProvider } from "./components/PageTitleContext";
import FormInsPortata from "./pages/FormInsPortata";
import InfoRistorante from "./pages/InfoRistorante";
import RistoCategoria from "./pages/RistoCategoria";
import Lattosio from "./pages/Lattosio";

function App() {
  return (
    <BrowserRouter>
      <TitleContextProvider>
        <MainLayout>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/allergeni" element={<Allergeni />} />
            <Route path="/login" element={<Login />} />
            <Route path="/registrazione" element={<Registrazione />} />
            <Route path="/account" element={<Account />} />
            <Route path="/modificaMenu" element={<ModificaMenu />}/>
            <Route path="/inserimento-portata" element={<FormInsPortata />}/>
            <Route path="/dettagli-ristorante" element={<InfoRistorante />}/>
            <Route path="/ristoranti-per-categoria" element={<RistoCategoria />}/>
            <Route path="/lattosio" element={<Lattosio />}/>
          </Routes>
        </MainLayout>
      </TitleContextProvider>
    </BrowserRouter>
  );
}

export default App;
