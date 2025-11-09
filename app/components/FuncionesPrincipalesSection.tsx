import { FiArrowRight } from "react-icons/fi";
import Image from "next/image";

export default function FuncionesPrincipalesSection() {
    return (
        <section className="py-20 bg-gradient-to-br from-indigo-50 via-purple-50 to-white relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0 opacity-30">
                <div className="absolute top-10 left-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl"></div>
                <div className="absolute bottom-10 right-10 w-72 h-72 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl"></div>
            </div>

            <div className="container mx-auto px-6 max-w-7xl relative z-10">
                {/* Header */}
                <div className="text-center mb-16">
                    <span className="inline-flex items-center gap-2 bg-[#5B4BDE]/10 text-[#5B4BDE] text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
                        <Image src="/icon.png" alt="Zynovapp icon" width={16} height={16} />
                        By Zynovapp
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                        <span className="bg-gradient-to-r from-[#5B4BDE] to-[#8B5CF6] bg-clip-text text-transparent">
                            FUNCIONES
                        </span>{" "}
                        <span className="text-gray-900">PRINCIPALES</span>
                    </h2>
                    <div className="w-32 h-1 bg-gradient-to-r from-white to-[#8B5CF6] mx-auto mb-6"></div>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                        Plataforma integral que automatiza la gestión clínica y el análisis
                        con IA, optimizando procesos y mejorando la toma de decisiones
                        médicas.
                    </p>
                </div>

                {/* Main Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
                    {/* Left Column */}
                    <div className="space-y-6">
                        {/* Gestión de Pacientes */}
                        <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-purple-100">
                            <div className="flex items-start gap-4">
                                <div className="flex-1">
                                    <h3 className="text-lg font-bold text-gray-800 mb-2">
                                        <span className="text-[#5B4BDE]">Gestión</span> De Pacientes
                                        Y Usuarios
                                    </h3>
                                    <p className="text-sm text-gray-600 mb-3">
                                        Registra, busca, filtra y gestiona historiales clínicos con
                                        facilidad.
                                    </p>
                                </div>
                                <FiArrowRight className="text-[#5B4BDE] text-xl flex-shrink-0 mt-1" />
                            </div>
                        </div>

                        {/* Gestión de Exámenes */}
                        <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-purple-100">
                            <div className="flex items-start gap-4">
                                <div className="flex-1">
                                    <h3 className="text-lg font-bold text-gray-800 mb-2">
                                        Gestión De <span className="text-[#5B4BDE]">Exámenes</span>
                                    </h3>
                                    <p className="text-sm text-gray-600 mb-3">
                                        Crea, valida y firma digitalmente resultados. Carga
                                        plantillas o personaliza formatos.
                                    </p>
                                </div>
                                <FiArrowRight className="text-[#5B4BDE] text-xl flex-shrink-0 mt-1" />
                            </div>
                        </div>

                        {/* Análisis IA */}
                        <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-purple-100">
                            <div className="flex items-start gap-4">
                                <div className="flex-1">
                                    <h3 className="text-lg font-bold text-gray-800 mb-2">
                                        Análisis <span className="text-[#5B4BDE]">IA</span> De
                                        Exámenes
                                    </h3>
                                    <p className="text-sm text-gray-600 mb-3">
                                        Obtén interpretación automática, alertas de riesgo,
                                        tendencias y comparativas con exámenes anteriores.
                                    </p>
                                </div>
                                <FiArrowRight className="text-[#5B4BDE] text-xl flex-shrink-0 mt-1" />
                            </div>
                        </div>
                    </div>

                    {/* Center Column - Doctor Image */}
                    <div className="flex justify-center items-center">
                        <div className="relative">
                            {/* Doctor Image */}
                            <div className="w-[400px] h-[480px] relative">
                                <Image
                                    src="/Doctora.png"
                                    alt="Doctora profesional"
                                    fill
                                    className="object-contain"
                                    priority
                                />
                            </div>
                        </div>
                    </div>

                    {/* Right Column */}
                    <div className="space-y-6">
                        {/* Estadísticas */}
                        <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-purple-100">
                            <div className="flex items-start gap-4">
                                <FiArrowRight className="text-[#5B4BDE] text-xl flex-shrink-0 mt-1 transform rotate-180" />
                                <div className="flex-1">
                                    <h3 className="text-lg font-bold text-gray-800 mb-2">
                                        <span className="text-[#5B4BDE]">Estadísticas</span> Y
                                        Evolución Del Estado De Salud
                                    </h3>
                                    <p className="text-sm text-gray-600 mb-3">
                                        Visualiza la evolución individual o poblacional con gráficos
                                        y reportes IA.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Informes */}
                        <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-purple-100">
                            <div className="flex items-start gap-4">
                                <FiArrowRight className="text-[#5B4BDE] text-xl flex-shrink-0 mt-1 transform rotate-180" />
                                <div className="flex-1">
                                    <h3 className="text-lg font-bold text-gray-800 mb-2">
                                        Informes
                                    </h3>
                                    <p className="text-sm text-gray-600 mb-3">
                                        Genera reportes descargables con indicación del nivel de
                                        urgencia.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Gestión de Especialistas */}
                        <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-purple-100">
                            <div className="flex items-start gap-4">
                                <FiArrowRight className="text-[#5B4BDE] text-xl flex-shrink-0 mt-1 transform rotate-180" />
                                <div className="flex-1">
                                    <h3 className="text-lg font-bold text-gray-800 mb-2">
                                        <span className="text-[#5B4BDE]">Gestión De Especialistas</span> Y
                                        Colaboradores:
                                    </h3>
                                    <p className="text-sm text-gray-600 mb-3">
                                        Control total de usuarios, roles y permisos dentro del
                                        laboratorio.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
