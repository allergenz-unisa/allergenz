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
import FormModificaPortata from "./pages/FormModificaPortata";
import InfoRistorante from "./pages/InfoRistorante";
import RistoCategoria from "./pages/RistoCategoria";
import InfoAllergene from "./pages/InfoAllergene";
import FormSegnalazione from "./pages/FormSegnalazione";
import RistoranteEsistente from "./pages/RistoranteEsistente";
import Conferma from "./pages/Conferma";
import "./index.css";

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
            <Route path="/modifica-menu/:id/" element={<ModificaMenu />} />
            <Route
              path="/inserimento-portata/:id"
              element={<FormInsPortata />}
            />
            <Route path="/modifica-portata" element={<FormModificaPortata />} />
            <Route path="/dettagli-ristorante" element={<InfoRistorante />} />
            <Route
              path="/ristoranti-per-categoria"
              element={<RistoCategoria />}
            />
            <Route path="/dettagli-allergene" element={<InfoAllergene />} />
            <Route
              path="/form-segnalazione-locale"
              element={<FormSegnalazione />}
            />
            <Route path="/conferma" element={<Conferma />} />
            <Route
              path="/RistoranteEsistente"
              element={<RistoranteEsistente />}
            />
          </Routes>
        </MainLayout>
      </TitleContextProvider>
    </BrowserRouter>
  );
}

export default App;
