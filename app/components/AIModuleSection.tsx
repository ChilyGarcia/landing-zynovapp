import Image from "next/image";
import Divider from "./Divider";

export default function AIModuleSection() {
    return (
        <section className="relative py-20 overflow-hidden bg-gradient-to-br from-purple-200 via-purple-100 to-pink-100">
            <div className="container mx-auto px-6 max-w-7xl">
                {/* Header */}
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                        Análisis Avanzado con <span className="text-purple-600">IA</span>
                    </h2>
                    <Divider width="w-32" className="bg-gradient-to-r from-[#F184FA] to-[#773FFF]" />
                    <p className="text-lg text-gray-800 max-w-4xl mx-auto leading-relaxed">
                        Nuestro algoritmo analiza los valores de laboratorio, compara con rangos de referencia y genera
                        interpretaciones automáticas y alertas visuales. Detecta tendencias, posibles patologías y anomalías antes que
                        el ojo humano.
                    </p>
                </div>

                {/* Aviso Importante */}
                <div className="max-w-5xl mx-auto mb-16">
                    <div className="bg-gradient-to-r from-purple-900 to-indigo-900 rounded-2xl p-8 border-t-4 border-amber-400 shadow-xl">
                        <div className="flex flex-col items-center text-center">
                            <div className="mb-4">
                                <Image
                                    src="/alerta.png"
                                    alt="Alerta"
                                    width={64}
                                    height={64}
                                    className="w-16 h-16"
                                />
                            </div>
                            <h3 className="text-xl font-bold text-amber-400 mb-3">
                                AVISO IMPORTANTE
                            </h3>
                            <p className="text-white text-lg">
                                &ldquo;Este módulo IA apoya la gestión clínica y diagnóstica. No sustituye la interpretación médica
                                profesional&rdquo;.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Grid de Resultado IA y Exámenes */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
                    {/* Resultado IA */}
                    <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-8 shadow-lg">
                        <h3 className="text-3xl font-bold text-gray-900 mb-4 text-center">
                            Resultado <span className="text-purple-600">IA</span>
                        </h3>
                        <p className="text-gray-700 text-center mb-8 leading-relaxed">
                            Interpreta resultados, asigna un nivel de urgencia y genera recomendaciones clínicas basadas en
                            datasets válidos y configurables.
                        </p>

                        <div className="space-y-4">
                            {/* Interpretación automática */}
                            <div className="bg-white border-2 border-purple-400 rounded-2xl p-5 flex items-center justify-between hover:shadow-md transition-shadow">
                                <div className="flex-1">
                                    <h4 className="font-bold text-gray-900 mb-1">Interpretación automática</h4>
                                    <p className="text-sm text-gray-600">Resumen en texto entendible para el área clínica.</p>
                                </div>
                                <div className="flex-shrink-0 ml-4">
                                    <Image
                                        src="/messages.png"
                                        alt="Interpretación automática"
                                        width={40}
                                        height={40}
                                        className="w-10 h-10"
                                    />
                                </div>
                            </div>

                            {/* Semáforo clínico */}
                            <div className="bg-white border-2 border-purple-400 rounded-2xl p-5 flex items-center justify-between hover:shadow-md transition-shadow">
                                <div>
                                    <h4 className="font-bold text-gray-900 mb-1">Semáforo clínico</h4>
                                    <p className="text-sm text-gray-600">Visualización por niveles: bajo, moderado, alto y crítico.</p>
                                </div>
                                <div className="flex gap-2">
                                    <div className="w-4 h-4 bg-red-500 rounded-full"></div>
                                    <div className="w-4 h-4 bg-amber-400 rounded-full"></div>
                                    <div className="w-4 h-4 bg-green-500 rounded-full"></div>
                                </div>

                            </div>

                            {/* Historial de análisis */}
                            <div className="bg-white border-2 border-purple-400 rounded-2xl p-5 flex items-center justify-between hover:shadow-md transition-shadow">
                                <div className="flex-1">
                                    <h4 className="font-bold text-gray-900 mb-1">Historial de análisis</h4>
                                    <p className="text-sm text-gray-600">Registro de revisiones IA y acciones tomadas.</p>
                                </div>
                                <div className="flex-shrink-0 ml-4">
                                    <Image
                                        src="/search-document.png"
                                        alt="Historial de análisis"
                                        width={40}
                                        height={40}
                                        className="w-10 h-10"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Exámenes */}
                    <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-8 shadow-lg">
                        <h3 className="text-3xl font-bold text-gray-900 mb-4 text-center">Exámenes</h3>
                        <p className="text-gray-700 text-center mb-8 leading-relaxed">
                            Generador de reportes personalizables con logo y firma digital.
                        </p>

                        {/* Tabla */}
                        <div className="bg-white rounded-2xl overflow-hidden border border-gray-200">
                            <table className="w-full">
                                <thead>
                                    <tr className="border-b border-gray-200">
                                        <th className="text-left py-4 px-6 font-bold text-gray-900">Tipo</th>
                                        <th className="text-left py-4 px-6 font-bold text-gray-900">Salida</th>
                                        <th className="text-center py-4 px-6 font-bold text-gray-900">Firma</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="border-b border-gray-100 hover:bg-purple-50 transition-colors">
                                        <td className="py-4 px-6 text-gray-800">Hemogramas</td>
                                        <td className="py-4 px-6 text-gray-800">PDF/CSV/XLSX</td>
                                        <td className="py-4 px-6 text-center">
                                            <svg
                                                className="w-6 h-6 text-green-600 mx-auto"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    d="M5 13l4 4L19 7"
                                                />
                                            </svg>
                                        </td>
                                    </tr>
                                    <tr className="border-b border-gray-100 hover:bg-purple-50 transition-colors">
                                        <td className="py-4 px-6 text-gray-800">Bioquímicos</td>
                                        <td className="py-4 px-6 text-gray-800">PDF/XLSX</td>
                                        <td className="py-4 px-6 text-center">
                                            <svg
                                                className="w-6 h-6 text-green-600 mx-auto"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    d="M5 13l4 4L19 7"
                                                />
                                            </svg>
                                        </td>
                                    </tr>
                                    <tr className="hover:bg-purple-50 transition-colors">
                                        <td className="py-4 px-6 text-gray-800">Inmunología</td>
                                        <td className="py-4 px-6 text-gray-800">PDF/XLSX</td>
                                        <td className="py-4 px-6 text-center">
                                            <svg
                                                className="w-6 h-6 text-green-600 mx-auto"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    d="M5 13l4 4L19 7"
                                                />
                                            </svg>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
