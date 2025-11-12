import React, { useState } from "react";
import SearchBar from "../molecules/SearchBar";
import { consultarEstado } from "../../services/api.mock.ts";

interface Props {
    setEstado: (estado: string) => void;
}

export default function ConsultarEstadoForm({ setEstado }: Props) {
    const [codigo, setCodigo] = useState("");

    const buscar = async () => {
        try {
            const res = await consultarEstado(codigo);
            setEstado(res.data.estado);
        } catch {
            alert("Código no encontrado");
        }
    };

    return (
        <div className="d-flex justify-content-center mt-4">
            <div className="card p-4 shadow" style={{ maxWidth: 600, width: "100%" }}>

                <h4 className="text-center mb-4">Ingrese su Codigo</h4>

                <SearchBar
                    value={codigo}
                    onChange={(e) => setCodigo(e.target.value)}
                    onClick={buscar}
                />
            </div>
        </div>
    );
}
