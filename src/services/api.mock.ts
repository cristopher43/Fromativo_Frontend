export interface EncomiendaRequest {
    remitente: string;
    destinatario: string;
    direccion: string;
    descripcion: string;
}

const BD_MOCK: Record<string, { estado: string }> = {};

function generarCodigo() {
    return Math.random().toString(36).substring(2, 10).toUpperCase();
}

//CREAR SOLICITUD
export const crearSolicitud = async (data: EncomiendaRequest) => {
    const codigo = generarCodigo();

    BD_MOCK[codigo] = { estado: "RECIBIDO" };

    return Promise.resolve({
        data: {
            codigoSeguimiento: codigo,
            mensaje: "Solicitud creada (mock)"
        }
    });
};

//CONSULTAR ESTADO
export const consultarEstado = async (codigo: string) => {

    if (!BD_MOCK[codigo]) {
        return Promise.reject(new Error("No existe"));
    }

    return Promise.resolve({
        data: { estado: BD_MOCK[codigo].estado }
    });
};

//ACTUALIZAR ESTADO
export const actualizarEstado = async (codigo: string, estado: string) => {

    if (!BD_MOCK[codigo]) {
        return Promise.reject(new Error("No existe"));
    }

    BD_MOCK[codigo].estado = estado;

    return Promise.resolve({
        data: { mensaje: "Actualizado exitosamente (mock)" }
    });
};
