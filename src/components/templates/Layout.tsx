import { Link } from "react-router-dom";

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <nav
                className="navbar navbar-expand-lg navbar-dark"
                style={{
                    background: "linear-gradient(90deg, #000 0%, #333 100%)",
                }}
            >
                <div className="container">
                    {/* LOGO */}
                    <Link to="/" className="navbar-brand text-white fw-bold fs-3 d-flex align-items-center">
                        <i className="bi bi-box-seam me-2"></i>
                        Dinobox
                    </Link>

                    {/* BOTÓN HAMBURGUESA (el que te faltaba) */}
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNav"
                        aria-controls="navbarNav"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    {/* MENÚ */}
                    <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                        <ul className="navbar-nav gap-3">

                            <li className="nav-item">
                                <Link to="/" className="nav-link text-white fw-semibold d-flex align-items-center">
                                    <i className="bi bi-plus-circle me-2"></i>
                                    Crear Solicitud
                                </Link>
                            </li>

                            <li className="nav-item">
                                <Link to="/consultar" className="nav-link text-white fw-semibold d-flex align-items-center">
                                    <i className="bi bi-search me-2"></i>
                                    Consultar Estado
                                </Link>
                            </li>

                            <li className="nav-item">
                                <Link to="/actualizar" className="nav-link text-white fw-semibold d-flex align-items-center">
                                    <i className="bi bi-arrow-repeat me-2"></i>
                                    Actualizar Estado
                                </Link>
                            </li>

                        </ul>
                    </div>
                </div>
            </nav>

            {/* CONTENIDO */}
            <main className="container py-5 d-flex justify-content-center">
                {children}
            </main>
        </>
    );
}
