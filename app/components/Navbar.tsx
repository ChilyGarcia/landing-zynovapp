"use client";

import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import Image from "next/image";

export default function Navbar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <header className="fixed w-full z-50 bg-gradient-to-b from-[#7C3AED] to-[#A78BFA] shadow-md">
            <div className="container mx-auto px-6 py-3 md:py-4">
                <div className="flex items-center justify-between">
                    <a href="#" className="block w-32 md:w-40 h-10 relative">
                        <Image
                            src="/zynovapp-icon.png"
                            alt="ZynovApp Logo"
                            fill
                            className="object-contain"
                            priority
                        />
                    </a>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center space-x-8">
                        <a
                            href="#features"
                            className="text-white hover:text-white/80 transition-colors font-medium"
                        >
                            Funciones
                        </a>
                        <a
                            href="#solutions"
                            className="text-white hover:text-white/80 transition-colors font-medium"
                        >
                            IA
                        </a>
                        <a
                            href="#pricing"
                            className="text-white hover:text-white/80 transition-colors font-medium"
                        >
                            Planes
                        </a>
                        <a
                            href="#contact"
                            className="text-white hover:text-white/80 transition-colors font-medium"
                        >
                            Contacto
                        </a>
                    </nav>

                    <div className="hidden md:flex items-center space-x-4">
                        <a
                            target="_blank"
                            href="https://zynovapp.innovtes.xyz/"
                            className="text-white hover:text-white/80 transition-colors font-medium"
                        >
                            Iniciar
                        </a>
                        <a
                            href="#"
                            className="bg-white/20 backdrop-blur-sm text-white px-8 py-3 rounded-full font-medium hover:bg-white/30 transition-all"
                        >
                            Ver Demo
                        </a>
                    </div>

                    {/* Mobile menu button */}
                    <button
                        className="md:hidden text-white focus:outline-none p-1"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        aria-label="Menú de navegación"
                    >
                        {mobileMenuOpen ? (
                            <FiX size={28} className="text-white" />
                        ) : (
                            <FiMenu size={28} className="text-white" />
                        )}
                    </button>
                </div>

                {/* Mobile Navigation */}
                <div
                    className={`md:hidden transition-all duration-300 overflow-hidden ${mobileMenuOpen ? "max-h-96 mt-3 py-3" : "max-h-0 py-0 mt-0"
                        }`}
                >
                    <nav className="flex flex-col space-y-4">
                        <a
                            href="#features"
                            className="block py-2 px-3 text-white hover:bg-white/10 rounded-lg transition-colors font-medium"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            Funciones
                        </a>
                        <a
                            href="#solutions"
                            className="block py-2 px-3 text-white hover:bg-white/10 rounded-lg transition-colors font-medium"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            IA
                        </a>
                        <a
                            href="#pricing"
                            className="block py-2 px-3 text-white hover:bg-white/10 rounded-lg transition-colors font-medium"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            Planes
                        </a>
                        <a
                            href="#contact"
                            className="block py-2 px-3 text-white hover:bg-white/10 rounded-lg transition-colors font-medium"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            Contacto
                        </a>
                        <div className="pt-2 space-y-2">
                            <a
                                href="https://zynovapp.innovtes.xyz/"
                                target="_blank"
                                className="block w-full text-center bg-white text-[#5B4BDE] px-6 py-2.5 rounded-lg font-medium hover:bg-white/90 transition-opacity"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                Iniciar Sesión
                            </a>
                            <a
                                href="#"
                                className="block w-full text-center bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-lg font-medium hover:bg-white/30 transition-colors"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                Ver Demo
                            </a>
                        </div>
                    </nav>
                </div>
            </div>
        </header>
    );
}
