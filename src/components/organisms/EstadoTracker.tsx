import React from "react";
import "./EstadoTracker.css";

import caja from "../../assets/img/aaaa.jpg";
import camion from "../../assets/img/aaaa.jpg";
import avion from "../../assets/img/aaaa.jpg";
import check from "../../assets/img/aaaa.jpg";

interface Props {
    estado: string;
}

export default function EstadoTracker({ estado }: Props) {
    const estados = [
        {
            id: "EN_RECEPCION",
            titulo: "En Recepción",
            descripcion: "Tu encomienda ha sido recibida.",
            icon: caja,
        },
        {
            id: "EN_DESPACHO",
            titulo: "En Despacho",
            descripcion: "La encomienda está siendo preparada para despacho.",
            icon: camion,
        },
        {
            id: "EN_TRANSITO",
            titulo: "En Tránsito",
            descripcion: "Tu encomienda va en camino.",
            icon: avion,
        },
        {
            id: "ENTREGADO",
            titulo: "Entregado",
            descripcion: "La encomienda ha sido entregada.",
            icon: check,
        },
    ];

    return (
        <div className="estado-container">
            {estados.map((e) => {
                const activo = estado === e.id;

                return (
                    <div
                        key={e.id}
                        className={`estado-card ${activo ? "activo" : ""}`}
                    >
                        <img src={e.icon} className="estado-icon" />

                        <h5 className={`estado-title ${activo ? "text-primary" : ""}`}>
                            {e.titulo}
                        </h5>

                        <p className="estado-desc">{e.descripcion}</p>
                    </div>
                );
            })}
        </div>
    );
}
