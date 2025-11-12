import React, { useState } from "react";
import Input from "../atoms/Input.tsx";
import Select from "../atoms/Select.tsx";
import Button from "../atoms/Button.tsx";
import Imagen from "../../assets/img/aaaa.jpg"; // <-- tu imagen
import { actualizarEstado } from "../../services/api.mock.ts";

export default function ActualizarEstadoForm() {
    const [codigo, setCodigo] = useState("");
    const [estado, setEstado] = useState("");

    const actualizar = async () => {
        if (!codigo.trim() || !estado.trim()) {
            alert("Debe ingresar un código y seleccionar un estado.");
            return;
        }

        try {
            await actualizarEstado(codigo, estado);
            alert("Estado actualizado correctamente");
            setCodigo("");
            setEstado("");
        } catch {
            alert("Error al actualizar. Verifica si el código existe.");
        }
    };

    return (
        <div className="container mt-4">
            <div className="row justify-content-center align-items-center">

                {/* Imagen*/}
                <div className="col-12 col-md-6 d-flex justify-content-center mb-4 mb-md-0">
                    <img
                        src={Imagen}
                        alt="Actualizar estado"
                        className="img-fluid"
                        style={{
                            maxHeight: "380px",
                            borderRadius: "12px",
                            objectFit: "cover",
                        }}
                    />
                </div>

                {/*Formulario*/}
                <div className="col-12 col-md-6 d-flex justify-content-center">
                    <div
                        className="card p-4 shadow"
                        style={{
                            maxWidth: 500,
                            borderRadius: 20,
                            width: "100%",
                        }}
                    >
                        <h3 className="text-center mb-4">Actualizar Estado</h3>

                        <Input
                            placeholder="Código de la encomienda"
                            value={codigo}
                            onChange={(e) => setCodigo(e.target.value)}
                            className="mb-3"
                        />
                        <Select
                            value={estado}
                            onChange={(e) => setEstado(e.target.value)}
                            className="mb-3"
                        >
                            <option value="">Seleccione estado</option>
                            <option value="EN_RECEPCION">En Recepción</option>
                            <option value="EN_DESPACHO">En Despacho</option>
                            <option value="EN_TRANSITO">En Tránsito</option>
                            <option value="ENTREGADO">Entregado</option>
                        </Select>

                        <Button className="w-100 mt-2" onClick={actualizar}>
                            Actualizar Estado
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}
