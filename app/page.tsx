"use client";

import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import PotenciaSection from "./components/PotenciaSection";
import FuncionesPrincipalesSection from "./components/FuncionesPrincipalesSection";
import BenefitsSection from "./components/BenefitsSection";
import AIModuleSection from "./components/AIModuleSection";
import PricingSection from "./components/PricingSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-gray-50">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden -z-10">
        <div className="absolute top-0 right-0 w-1/3 h-1/2 bg-purple-50 rounded-full mix-blend-multiply filter blur-3xl opacity-70"></div>
        <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-indigo-50 rounded-full mix-blend-multiply filter blur-3xl opacity-70"></div>
      </div>

      {/* Navigation */}
      <Navbar />

      {/* Hero Section */}
      <HeroSection />

      {/* Banner Potencia tu Laboratorio */}
      <PotenciaSection />

      {/* Funciones Principales Section */}
      <FuncionesPrincipalesSection />

      {/* Beneficios Section */}
      <BenefitsSection />

      {/* AI Module Disclaimer Section */}
      <AIModuleSection />

      {/* Sección de Planes */}
      <PricingSection />

      <footer className="bg-gray-900 text-white py-8 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              By Zynovapp. {new Date().getFullYear()} Todos los derechos
              reservados.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a
                href="#"
                className="text-gray-400 hover:text-white text-sm transition-colors"
              >
                Términos y Condiciones
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white text-sm transition-colors"
              >
                Política de Privacidad
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
