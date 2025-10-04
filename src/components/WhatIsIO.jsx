import { AnimatedSection } from './AnimatedSection';

export const WhatIsIO = () => {
  return (
    <section className="min-h-screen bg-white py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <AnimatedSection animation="fadeIn">
          <h2 className="text-4xl font-bold text-gray-800 mb-8 text-center">
            ¿Qué es Intersection Observer?
          </h2>
        </AnimatedSection>

        <AnimatedSection animation="slideLeft" delay={200}>
          <div className="bg-blue-50 p-6 rounded-lg mb-8">
            <h3 className="text-2xl font-semibold text-blue-800 mb-4">
              🎯 El Vigilante Inteligente
            </h3>
            <p className="text-lg text-gray-700">
              Intersection Observer es una API del navegador que observa elementos y te avisa 
              <strong> solo cuando cambian su visibilidad</strong>, no en cada pixel de scroll.
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection animation="slideRight" delay={400}>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-green-50 p-6 rounded-lg">
              <h4 className="text-xl font-semibold text-green-800 mb-3">
                ✅ ANTES (Tradicional)
              </h4>
              <ul className="text-gray-700 space-y-2">
                <li>• Event listener en cada scroll</li>
                <li>• Cálculos manuales de posición</li>
                <li>• Mal performance</li>
                <li>• Código complejo</li>
              </ul>
            </div>

            <div className="bg-purple-50 p-6 rounded-lg">
              <h4 className="text-xl font-semibold text-purple-800 mb-3">
                🚀 AHORA (IntersectionObserver)
              </h4>
              <ul className="text-gray-700 space-y-2">
                <li>• El navegador hace el trabajo pesado</li>
                <li>• Solo se ejecuta cuando hay cambios</li>
                <li>• Excelente performance</li>
                <li>• Código simple y limpio</li>
              </ul>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};