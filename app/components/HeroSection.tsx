import { FiArrowRight, FiChevronDown } from "react-icons/fi";

export default function HeroSection() {
    return (
        <section className="relative min-h-screen md:h-[1080px] overflow-hidden">
            {/* Purple gradient background - responsive heights */}
            <div className="absolute top-0 left-0 w-full h-[55vh] md:h-[580px] bg-gradient-to-b from-[#773FFF] via-[#F184FA] to-white rounded-b-[30px] md:rounded-b-[50px]"></div>
            {/* White background for the rest */}
            <div className="absolute top-[55vh] md:top-[580px] left-0 w-full bottom-0 bg-white"></div>
            {/* White glow effect in center top */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[500px] h-[500px] bg-white/80 rounded-full blur-[120px]"></div>

            {/* Decorative gradient blobs - hidden on mobile */}
            <div className="absolute top-0 left-0 w-full h-full hidden md:block">
                <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-purple-400/20 rounded-full blur-3xl"></div>
                <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-purple-300/15 rounded-full blur-3xl"></div>
            </div>

            <div className="container mx-auto px-4 md:px-6 pt-20 md:pt-32 relative z-10 pb-8 md:pb-0">
                <div className="max-w-4xl mx-auto text-center">
                    {/* Logo icon */}
                    <div className="mb-6 md:mb-8 flex justify-center">
                        <img className="w-8 h-8 md:w-10 md:h-10 text-white" src="icon.png" alt="" />
                    </div>

                    {/* Main heading */}
                    <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 leading-tight px-2">
                        <span className="text-[#7C3AED]">Gestión y análisis inteligente</span>{" "}
                        <span className="text-gray-900">de exámenes de laboratorio clínico con</span>{" "}
                        <span className="text-[#7C3AED]">IA</span>
                    </h1>

                    {/* Description */}
                    <p className="text-base md:text-lg lg:text-xl text-gray-700 mb-8 md:mb-10 max-w-3xl mx-auto leading-relaxed px-4">
                        Plataforma web basada en Inteligencia Artificial que permite cargar,
                        analizar y gestionar resultados de laboratorio clínico de manera rápida,
                        segura y precisa.
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 md:mb-16 px-4">
                        <a
                            href="#"
                            className="w-full sm:w-auto bg-gradient-to-r from-[#7C3AED] to-[#A78BFA] text-white px-8 py-3 md:py-4 rounded-xl font-semibold hover:opacity-90 transition-all shadow-lg hover:shadow-xl text-base md:text-lg"
                        >
                            Plan Gratis
                        </a>
                        <a
                            href="https://zynovapp.innovtes.xyz/dashboard"
                            target="_blank"
                            className="w-full sm:w-auto bg-white border-2 border-[#7C3AED] text-[#7C3AED] px-8 py-3 md:py-4 rounded-xl font-semibold hover:bg-[#7C3AED]/5 transition-all flex items-center justify-center gap-2 text-base md:text-lg"
                        >
                            Ver Demo
                            <FiArrowRight className="transition-transform group-hover:translate-x-1" />
                        </a>
                    </div>

                    {/* Floating white cards - positioned relative to content */}
                    <div className="relative mt-8 md:mt-0">
                        {/* Gradient background behind cards */}
                        <div className="absolute -top-4 h-[200px] md:h-[250px] bg-gradient-to-b from-white via-[#F5EBFF] to-[#E9D5FF] rounded-3xl md:rounded-[40px] -z-10" style={{ width: 'calc(100vw - 16px)', marginLeft: 'calc(-50vw + 50% + 8px)' }}></div>

                        {/* Large card - center */}
                        <div className="mx-auto w-[95%] max-w-[600px] h-[180px] md:h-[320px] bg-white/80 backdrop-blur-sm rounded-2xl md:rounded-3xl shadow-2xl"></div>

                        {/* Small card - top right */}
                        <div className="absolute right-0 -top-2 md:-top-12 md:right-[10%] w-[30%] md:w-[240px] h-[100px] md:h-[180px] bg-white/80 backdrop-blur-sm rounded-2xl md:rounded-3xl shadow-2xl"></div>

                        {/* Medium card - bottom left */}
                        <div className="absolute left-0 top-8 md:top-24 md:left-[5%] w-[30%] md:w-[280px] h-[100px] md:h-[200px] bg-white/80 backdrop-blur-sm rounded-2xl md:rounded-3xl shadow-2xl"></div>
                    </div>
                </div>
            </div>

            {/* Flecha hacia abajo */}
            <div className="flex justify-center mt-8">
                <div className="text-[#5B4BDE]">
                    <FiChevronDown className="text-4xl animate-bounce" strokeWidth={2} />
                    <FiChevronDown className="text-4xl -mt-6 animate-bounce" style={{ animationDelay: '0.2s' }} strokeWidth={2} />
                </div>
            </div>
        </section>
    );
}
