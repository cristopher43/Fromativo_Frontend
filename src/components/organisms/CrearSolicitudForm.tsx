import React, { useState } from "react";
import FormGroup from "../molecules/FormGroup.tsx";
import Button from "../atoms/Button.tsx";
import Imagen from '../../assets/img/aaaa.jpg';
import { crearSolicitud, type EncomiendaRequest } from "../../services/api.mock.ts";


export default function CrearSolicitudForm() {
    const [form, setForm] = useState<EncomiendaRequest>({
        remitente: "",
        destinatario: "",
        direccion: "",
        descripcion: ""
    });

    const [codigo, setCodigo] = useState("");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const enviar = async (e?: React.FormEvent) => {
        e?.preventDefault();
        try {
            const res = await crearSolicitud(form);
            setCodigo(res.data.codigoSeguimiento);
        } catch {
            alert("Error al crear la solicitud");
        }
    };

    return (
        <div className="container mt-4">
            <div className="row justify-content-center align-items-center">

                {/*Imagen*/}
                <div className="col-12 col-md-6 d-flex justify-content-center mb-4 mb-md-0">
                    <img
                        src={Imagen}
                        alt="Imagen Encomienda"
                        className="img-fluid"
                        style={{ maxHeight: "450px", objectFit: "cover" }}

                    />
                </div>

                {/*Formulario*/}
                <div className="col-12 col-md-6">
                    <form
                        onSubmit={enviar}
                        className="card p-4 shadow"
                        style={{ borderRadius: 20 }}
                    >
                        <h3 className="text-center mb-4">Nueva Encomienda</h3>

                        <FormGroup
                            label="Remitente"
                            name="remitente"
                            onChange={handleChange}
                            value={form.remitente}
                        />

                        <FormGroup
                            label="Destinatario"
                            name="destinatario"
                            onChange={handleChange}
                            value={form.destinatario}
                        />

                        <FormGroup
                            label="Dirección"
                            name="direccion"
                            onChange={handleChange}
                            value={form.direccion}
                        />

                        <FormGroup
                            label="Descripción"
                            name="descripcion"
                            onChange={handleChange}
                            value={form.descripcion}
                        />

                        <Button type="submit" className="mt-3 w-100">
                            Enviar Solicitud
                        </Button>

                        {codigo && (
                            <div className="alert alert-success mt-3 text-center">
                                Código generado: <b>{codigo}</b>
                            </div>
                        )}
                    </form>
                </div>

            </div>
        </div>
    );
}
