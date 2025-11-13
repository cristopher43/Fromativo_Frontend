import React, { useState } from "react";
import SearchBar from "../molecules/SearchBar";
import { consultarEstado } from "../../services/api.ts";

interface Props {
    setEstado: (estado: string) => void;
}

export default function ConsultarEstadoForm({ setEstado }: Props) {
    const [codigo, setCodigo] = useState("");

    const buscar = async () => {
        if (!codigo.trim()) {
            alert("Ingrese un código válido");
            return;
        }
        try {
            const res = await consultarEstado(codigo.trim());
            // La API de Nest devuelve la encomienda (con campo estado),
            // aquí nos aseguramos de extraer el campo correcto
            const estadoResp =
                res?.data?.estado ||
                (res?.data && (res.data as any).status) ||
                "";
            if (!estadoResp) {
                alert("No se encontró la encomienda");
                setEstado("");
                return;
            }
            setEstado(estadoResp);
        } catch (error) {
            console.error(error);
            alert("Error al consultar el estado. Verifica el código.");
            setEstado("");
        }
    };

    return (
        <div className="d-flex justify-content-center mt-4">
            <div className="card p-4 shadow" style={{ maxWidth: 600, width: "100%" }}>
                <h4 className="text-center mb-4">Ingrese su Código</h4>
                <SearchBar
                    value={codigo}
                    onChange={(e) => setCodigo(e.target.value)}
                    onClick={buscar}
                />
            </div>
        </div>
    );
}
