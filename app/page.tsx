"use client";

import {
  FiZap,
  FiShield,
  FiTrendingUp,
  FiAward,
  FiUsers,
  FiBarChart2,
} from "react-icons/fi";
import { FiSearch, FiAlertTriangle } from "react-icons/fi";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import PotenciaSection from "./components/PotenciaSection";
import FuncionesPrincipalesSection from "./components/FuncionesPrincipalesSection";

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
      <section className="py-20 bg-gradient-to-br from-[#5B4BDE] to-[#8B5CF6] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
        </div>
        <div className="container mx-auto px-6 max-w-6xl relative">
          <div className="text-center mb-16">
            <span className="inline-block bg-white/20 text-white text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
              Ventajas Clave
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Beneficios
            </h2>
            <div className="w-20 h-1 bg-white/50 mx-auto mb-6"></div>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Exercitationem, eum dolorem nam excepturi aliquid quod magnam amet
              ex ut repellat quos necessitatibus modi quasi suscipit fugiat
              atque soluta magni assumenda.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white/5 backdrop-blur-md p-8 rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300 transform hover:-translate-y-1">
              <div className="w-14 h-14 bg-white/10 rounded-xl flex items-center justify-center mb-6">
                <FiZap className="text-white text-2xl" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">
                Análisis Rápidos
              </h3>
              <p className="text-white/80">
                Reduce significativamente los tiempos de análisis y entrega de
                resultados con nuestra plataforma optimizada para la eficiencia.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-md p-8 rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300 transform hover:-translate-y-1">
              <div className="w-14 h-14 bg-white/10 rounded-xl flex items-center justify-center mb-6">
                <FiShield className="text-white text-2xl" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">
                Máxima Precisión
              </h3>
              <p className="text-white/80">
                Minimiza errores humanos con validaciones automáticas y procesos
                estandarizados que garantizan resultados confiables.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-md p-8 rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300 transform hover:-translate-y-1">
              <div className="w-14 h-14 bg-white/10 rounded-xl flex items-center justify-center mb-6">
                <FiAward className="text-white text-2xl" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">
                Seguridad Garantizada
              </h3>
              <p className="text-white/80">
                Nuestra plataforma cumple con los más altos estándares de
                seguridad y confidencialidad para proteger tus datos sensibles.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-md p-8 rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300 transform hover:-translate-y-1">
              <div className="w-14 h-14 bg-white/10 rounded-xl flex items-center justify-center mb-6">
                <FiBarChart2 className="text-white text-2xl" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">
                Inteligencia de Negocios
              </h3>
              <p className="text-white/80">
                Toma decisiones basadas en datos con reportes detallados y
                paneles de control interactivos que muestran indicadores clave.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* AI Module Disclaimer Section */}
      <section className="relative py-16 overflow-hidden bg-gradient-to-br from-gray-900 to-gray-800">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1MCIgaGVpZ2h0PSI1MCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIj48cGF0aCBkPSJNMTkgMTRjMS40OS0xLjQ2IDIuMjYtMy41MyAyLTIgLjI2IDEuNTMtMS42MSAyLjI0LTIgMy0uNS43Ni0x.NS0yLTEtMi0yLjUtMS41LTMuNS0zLTMuNXYtM2EyIDIgMCAwIDAtMi0yaC0xYTIgMiAwIDAgMC0yIDJ2M2MwIC40LS4xLjgtLjMgMS4xLS4yLjMtLjUuNS0uguNCIvPjwvc3ZnPg==')] bg-center"></div>
        </div>
        <div className="container mx-auto px-6 max-w-6xl relative z-10">
          <div className="text-center mb-12">
            <span className="inline-block bg-gradient-to-r from-purple-500 to-pink-500 text-white text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
              Módulo de Inteligencia Artificial
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Análisis Avanzado con IA
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto mb-6 rounded-full"></div>
          </div>

          <div className="max-w-4xl mx-auto text-center mb-12">
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Nuestro algoritmo analiza los valores de laboratorio, compara con
              rangos de referencia y genera interpretaciones automáticas y
              alertas visuales. Detecta tendencias, posibles patologías y
              anomalías antes que el ojo humano.
            </p>

            <div className="bg-gradient-to-r from-purple-900/50 to-pink-900/50 border-l-4 border-amber-400 p-6 rounded-r-lg shadow-lg transform transition-all duration-300 hover:scale-[1.01] hover:shadow-xl hover:shadow-purple-500/10">
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-amber-400/20 p-2 rounded-lg mr-4">
                  <svg
                    className="w-6 h-6 text-amber-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                    />
                  </svg>
                </div>
                <div className="text-left">
                  <h3 className="text-xl font-bold text-amber-300 mb-2">
                    Aviso Importante
                  </h3>
                  <p className="text-white/90 leading-relaxed">
                    <span className="text-amber-200 font-medium">
                      &ldquo;Este módulo IA apoya la gestión clínica y
                      diagnóstica. No sustituye la interpretación médica
                      profesional.&rdquo;
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-6">
            {[
              {
                icon: <FiSearch className="w-8 h-8 text-purple-400" />,
                title: "Análisis Automático",
                desc: "Interpretación inteligente de resultados",
              },
              {
                icon: <FiAlertTriangle className="w-8 h-8 text-red-400" />,
                title: "Alertas Tempranas",
                desc: "Detección de anomalías en tiempo real",
              },
              {
                icon: <FiTrendingUp className="w-8 h-8 text-blue-400" />,
                title: "Tendencias",
                desc: "Seguimiento de patrones de salud",
              },
              {
                icon: <FiShield className="w-8 h-8 text-green-400" />,
                title: "Seguro",
                desc: "Cumplimiento de normativas de salud",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10 hover:border-purple-400/30 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/10"
              >
                <div className="mb-3">{item.icon}</div>
                <h4 className="text-lg font-semibold text-white mb-1">
                  {item.title}
                </h4>
                <p className="text-white/70 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Sección de Planes */}
      <section className="py-20 px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Planes
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#5B4BDE] to-[#8B5CF6] mx-auto mb-6 rounded-full" />
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
