import React, { useState } from "react";
import ConsultarEstadoForm from "../organisms/ConsultarEstadoForm";
import EstadoTracker from "../organisms/EstadoTracker";

export default function ConsultarEstado() {
    const [estado, setEstado] = useState("");

    return (
        <div className="container mt-4">

            <h2 className="text-center mb-4">Estado de Encomienda</h2>

            <div className="d-flex justify-content-center mb-4">
                <ConsultarEstadoForm setEstado={setEstado} />
            </div>

            {estado && <EstadoTracker estado={estado} />}
        </div>
    );
}
