import axios from "axios";

// URL base de tu backend
const API = "http://localhost:8080/api";

// Tipos
export interface EncomiendaRequest {
    remitente: string;
    destinatario: string;
    direccion: string;
    descripcion: string;
}

export interface EstadoResponse {
    estado: string;
}

// 1) Crear solicitud de encomienda
// Backend esperado: POST /api/crear
export const crearSolicitud = (data: EncomiendaRequest) => {
    return axios.post(`${API}/crear`, data);
};

// 2) Consultar estado por código
// Backend esperado: GET /api/estado/{codigo}
export const consultarEstado = (codigo: string) => {
    return axios.get<EstadoResponse>(`${API}/estado/${codigo}`);
};

// 3) Actualizar estado de la encomienda
// Backend esperado: PUT /api/encomiendas/actualizar/{codigo}
export const actualizarEstado = (codigo: string, estado: string) => {
    return axios.put(`${API}/encomiendas/actualizar/${codigo}`, {
        estado,
    });
};
