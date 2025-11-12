import axios from "axios";

const API = "http://localhost:8080/api/encomiendas";

export interface EncomiendaRequest {
    remitente: string;
    destinatario: string;
    direccion: string;
    descripcion: string;
}

export interface EstadoResponse {
    estado: string;
}

export const crearSolicitud = (data: EncomiendaRequest) =>
    axios.post('/api/crear', data);

export const consultarEstado = (codigo: string) =>
    axios.get<EstadoResponse>(`/api/estado/${codigo}`);
export const actualizarEstado = (codigo: string, estado: string) =>
    axios.put(`${API}/actualizar/${codigo}`, {estado});

