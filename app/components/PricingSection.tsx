import Divider from './Divider';

export default function PricingSection() {
    return (
        <section className="py-20 px-6 bg-white">
            <div className="container mx-auto max-w-6xl">
                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        Planes
                    </h2>
                    <Divider className="bg-gradient-to-r from-[#F184FA] to-[#773FFF]" />
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Selecciona el plan que mejor se adapte a tus necesidades
                    </p>
                </div>

                {/* Grid de planes */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Gratis */}
                    <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow border border-gray-200 flex flex-col">
                        <div className="p-8 text-left">
                            <h3 className="text-2xl font-bold text-gray-900 mb-2">
                                Gratis
                            </h3>
                            <p className="text-gray-600 mb-6">
                                Acceso a todas las funciones; límite de exámenes mensuales.
                            </p>
                            <div className="mb-6">
                                <span className="text-3xl font-bold text-[#5B4BDE]">
                                    Gratis
                                </span>
                            </div>
                            <ul className="space-y-3 text-gray-700">
                                <li className="flex items-start">
                                    <svg
                                        className="w-5 h-5 text-green-500 mr-2 mt-0.5"
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
                                    Ideal para pruebas y laboratorios pequeños.
                                </li>
                            </ul>
                        </div>
                        <div className="px-8 pb-8 mt-auto">
                            <button className="w-full bg-gradient-to-r from-[#5B4BDE] to-[#8B5CF6] text-white font-medium py-3 px-6 rounded-lg hover:opacity-90 transition-opacity">
                                Seleccionar
                            </button>
                        </div>
                    </div>

                    {/* Empresa */}
                    <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow border border-gray-200 flex flex-col">
                        <div className="p-8 text-left">
                            <h3 className="text-2xl font-bold text-gray-900 mb-2">
                                Empresa
                            </h3>
                            <p className="text-gray-600 mb-6">
                                Exámenes ilimitados · 100 GB de espacio
                            </p>
                            <div className="mb-6">
                                <span className="text-3xl font-bold text-[#5B4BDE]">
                                    70.000 COP
                                </span>
                                <span className="text-gray-500"> / mes</span>
                            </div>
                            <ul className="space-y-3 text-gray-700">
                                <li className="flex items-start">
                                    <svg
                                        className="w-5 h-5 text-green-500 mr-2 mt-0.5"
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
                                    Soporte básico y despliegue institucional.
                                </li>
                            </ul>
                        </div>
                        <div className="px-8 pb-8 mt-auto">
                            <button className="w-full bg-gradient-to-r from-[#5B4BDE] to-[#8B5CF6] text-white font-medium py-3 px-6 rounded-lg hover:opacity-90 transition-opacity">
                                Seleccionar
                            </button>
                        </div>
                    </div>

                    {/* Pro */}
                    <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow border border-gray-200 flex flex-col">
                        <div className="p-8 text-left">
                            <h3 className="text-2xl font-bold text-gray-900 mb-2">Pro</h3>
                            <p className="text-gray-600 mb-6">
                                Exámenes ilimitados · 200 GB · 50 análisis IA (consultas)
                            </p>
                            <div className="mb-6">
                                <span className="text-3xl font-bold text-[#5B4BDE]">
                                    110.000 COP
                                </span>
                                <span className="text-gray-500"> / mes</span>
                            </div>
                            <ul className="space-y-3 text-gray-700">
                                <li className="flex items-start">
                                    <svg
                                        className="w-5 h-5 text-green-500 mr-2 mt-0.5"
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
                                    Para laboratorios con mayor demanda y uso de IA.
                                </li>
                            </ul>
                        </div>
                        <div className="px-8 pb-8 mt-auto">
                            <button className="w-full bg-gradient-to-r from-[#5B4BDE] to-[#8B5CF6] text-white font-medium py-3 px-6 rounded-lg hover:opacity-90 transition-opacity">
                                Seleccionar
                            </button>
                        </div>
                    </div>

                    {/* IA (Créditos) */}
                    <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow border border-gray-200 flex flex-col">
                        <div className="p-8 text-left">
                            <h3 className="text-2xl font-bold text-gray-900 mb-2">
                                IA (Créditos)
                            </h3>
                            <p className="text-gray-600 mb-2">
                                Análisis de Inteligencia Artificial · 1 crédito × consulta
                            </p>
                            <p className="text-gray-700 font-medium mb-4">
                                Valor por crédito a cotizar
                            </p>
                            <ul className="space-y-3 text-gray-700">
                                <li className="flex items-start">
                                    <svg
                                        className="w-5 h-5 text-green-500 mr-2 mt-0.5"
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
                                    Compra créditos según consumo de análisis automático.
                                </li>
                            </ul>
                        </div>
                        <div className="px-8 pb-8 mt-auto">
                            <button className="w-full bg-gradient-to-r from-[#5B4BDE] to-[#8B5CF6] text-white font-medium py-3 px-6 rounded-lg hover:opacity-90 transition-opacity">
                                Cotizar crédito
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
