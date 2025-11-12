import Layout from "./components/templates/Layout";
import CrearSolicitud from "./components/pages/CrearSolicitud";
import ConsultarEstado from "./components/pages/ConsultarEstado";
import ActualizarEstado from "./components/pages/ActualizarEstado";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
    return (
        <BrowserRouter>
            <Layout>
                <Routes>
                    <Route path="/" element={<CrearSolicitud />} />
                    <Route path="/consultar" element={<ConsultarEstado />} />
                    <Route path="/actualizar" element={<ActualizarEstado />} />
                </Routes>
            </Layout>
        </BrowserRouter>
    );
}
