import React, { useState } from "react";
import Input from "../atoms/Input.tsx";
import Select from "../atoms/Select.tsx";
import Button from "../atoms/Button.tsx";
import Imagen from "../../assets/img/Actualizar_Estado.png";
import { actualizarEstado } from "../../services/api.ts";

export default function ActualizarEstadoForm() {
    const [codigo, setCodigo] = useState("");
    const [estado, setEstado] = useState("");

    const actualizar = async () => {
        if (!codigo.trim() || !estado.trim()) {
            alert("Debe ingresar un código y seleccionar un estado.");
            return;
        }

        try {
            await actualizarEstado(codigo.trim(), estado);
            alert("Estado actualizado correctamente");
            setCodigo("");
            setEstado("");
        } catch (error) {
            console.error(error);
            alert("Error al actualizar. Verifica si el código existe.");
        }
    };

    return (
        <div className="container mt-4">
            <div className="row justify-content-center align-items-center">

                {/* Imagen */}
                <div className="col-12 col-md-6 d-flex justify-content-center mb-4 mb-md-0">
                    <img
                        src={Imagen}
                        alt="Actualizar Estado"
                        className="img-fluid"
                        style={{ maxHeight: "500px", objectFit: "contain" }}
                    />
                </div>

                {/* Formulario */}
                <div className="col-12 col-md-6">
                    <div className="card p-4 shadow" style={{ borderRadius: 12 }}>
                        <h3 className="text-center mb-3">Actualizar Estado</h3>

                        <div className="mb-3">
                            <label>Código de Seguimiento</label>
                            <Input
                                value={codigo}
                                onChange={(e) => setCodigo(e.target.value)}
                                placeholder="Ingrese código"
                            />
                        </div>

                        <div className="mb-3">
                            <label>Nuevo Estado</label>
                            <Select
                                value={estado}
                                onChange={(e) => setEstado(e.target.value)}
                            >
                                <option value="">Seleccione</option>
                                <option value="EN_RECEPCION">En Recepción</option>
                                <option value="EN_DESPACHO">En Despacho</option>
                                <option value="EN_TRANSITO">En Tránsito</option>
                                <option value="ENTREGADO">Entregado</option>
                            </Select>
                        </div>

                        <Button onClick={actualizar} className="w-100">
                            Actualizar
                        </Button>
                    </div>
                </div>

            </div>
        </div>
    );
}
