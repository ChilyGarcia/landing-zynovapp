"use client";

import { FiChevronDown } from "react-icons/fi";
import Image from "next/image";
import Divider from "./Divider";
import { useState } from "react";

export default function BenefitsSection() {
    const [selectedBenefit, setSelectedBenefit] = useState(0);

    const benefits = [
        {
            icon: "/mano.png",
            alt: "Mano",
            text: "Reduce tiempos de análisis y entrega de resultados."
        },
        {
            icon: "/checklist.png",
            alt: "Checklist",
            text: "Minimiza errores humanos con validaciones automáticas."
        },
        {
            icon: "/security.png",
            alt: "Security",
            text: "Cumple con estándares de seguridad y confidencialidad."
        },
        {
            icon: "/tablero.png",
            alt: "Tablero",
            text: "Toma decisiones basadas en datos con reportes e indicadores."
        }
    ];

    return (
        <section className="py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
            <div className="container mx-auto px-6 max-w-6xl relative">
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-bold text-[#5B4BDE] mb-4">
                        BENEFICIOS
                    </h2>
                    <Divider width="w-32" className="bg-gradient-to-r from-[#F184FA] to-[#773FFF]" />
                    <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                        Automatización, seguridad y análisis en un solo sistema.
                    </p>
                </div>

                <div className="bg-gradient-to-r from-[#242486] to-[#5A1BB4] rounded-[3rem] p-8 md:p-12 shadow-2xl">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                        {benefits.map((benefit, index) => (
                            <div
                                key={index}
                                onClick={() => setSelectedBenefit(index)}
                                onMouseEnter={() => setSelectedBenefit(index)}
                                className={`rounded-3xl p-8 flex flex-col items-center text-center transition-all duration-300 cursor-pointer ${selectedBenefit === index
                                    ? "bg-white shadow-lg scale-105"
                                    : "bg-transparent hover:bg-white/10"
                                    }`}
                            >
                                <div className="w-16 h-16 flex items-center justify-center mb-6 relative">
                                    <Image
                                        src={benefit.icon}
                                        alt={benefit.alt}
                                        width={64}
                                        height={64}
                                        className={`object-contain transition-all duration-300 ${selectedBenefit === index
                                            ? "[filter:brightness(0)_saturate(100%)_invert(32%)_sepia(89%)_saturate(2476%)_hue-rotate(238deg)_brightness(92%)_contrast(92%)]"
                                            : "brightness-0 invert"
                                            }`}
                                    />
                                </div>
                                <p
                                    className={`font-medium leading-relaxed transition-colors duration-300 ${selectedBenefit === index
                                        ? "text-[#5B4BDE]"
                                        : "text-white/90"
                                        }`}
                                >
                                    {benefit.text}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Flecha hacia abajo */}
                <div className="flex justify-center mt-8">
                    <div className="text-[#5B4BDE]">
                        <FiChevronDown className="text-4xl animate-bounce" strokeWidth={2} />
                        <FiChevronDown className="text-4xl -mt-6 animate-bounce" style={{ animationDelay: '0.2s' }} strokeWidth={2} />
                    </div>
                </div>
            </div>
        </section>
    );
}
