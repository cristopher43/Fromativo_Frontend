import axios from "axios";

const API_BASE = "http://localhost:3000/api/v1/encomienda";

export interface EncomiendaRequest {
    remitente: string;
    destinatario: string;
    direccion: string;
    descripcion: string;
}

export interface EstadoResponse {
    estado: string;
    codigo?: string;
    // otros campos que pueda devolver el backend
}

// Crear solicitud
export const crearSolicitud = (data: EncomiendaRequest) =>
    axios.post(API_BASE, data);

// Consultar estado (devuelve la encomienda completa si existe)
export const consultarEstado = (codigo: string) =>
    axios.get<EstadoResponse>(`${API_BASE}/${codigo}`);

// Actualizar estado
export const actualizarEstado = (codigo: string, estado: string) =>
    axios.put(`${API_BASE}/${codigo}`, { estado });
