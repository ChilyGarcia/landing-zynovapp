export default function PotenciaSection() {
    return (
        <div className="bg-gradient-to-b from-gray-50 to-white py-16">
            <div className="container mx-auto px-6">
                <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 max-w-5xl mx-auto">
                    {/* Header */}
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
                        <span className="text-[#8B5CF6]">Potencia</span>{" "}
                        <span className="text-gray-800">tu Laboratorio</span>
                    </h2>
                    <p className="text-center text-gray-600 mb-8 max-w-3xl mx-auto">
                        Descubre la próxima generación en gestión de laboratorios clínicos con tecnología de punta
                    </p>

                    {/* Content Box */}
                    <div className="bg-gradient-to-br from-purple-100 to-purple-50 rounded-2xl p-8 md:p-10">
                        {/* Icon */}
                        <div className="flex justify-center mb-6">
                            <img className="w-12 h-12 object-contain" src="icon.png" alt="zynovapp" />
                        </div>

                        {/* Description */}
                        <p className="text-center text-gray-700 mb-6 text-base md:text-lg">
                            Plataforma web basada en <span className="font-semibold text-gray-900">Inteligencia Artificial</span> que permite{" "}
                            <span className="font-semibold text-gray-900">cargar</span>, analizar y gestionar
                            resultados de laboratorio clínico de manera{" "}
                            <span className="font-semibold text-gray-900">rápida, segura y precisa.</span>
                        </p>

                        {/* Quote */}
                        <div className="border-l-4 border-[#8B5CF6] pl-6 py-2">
                            <p className="italic text-gray-700 text-sm md:text-base">
                                "Nuestra tecnología IA potencia la precisión diagnóstica y eficiencia operativa de los laboratorios
                                clínicos, garantizando seguridad, trazabilidad y cumplimiento normativo"
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
