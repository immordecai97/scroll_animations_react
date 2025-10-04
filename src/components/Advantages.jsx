import { AnimatedSection } from './AnimatedSection';

export const Advantages = () => {
  return (
    <section className="min-h-screen bg-gray-50 py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <AnimatedSection animation="fadeIn">
          <h2 className="text-4xl font-bold text-gray-800 mb-12 text-center">
            Ventajas del Enfoque Moderno
          </h2>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-6">
          <AnimatedSection animation="zoom" delay={100}>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Performance</h3>
              <p className="text-gray-600">Un solo observer para todos los elementos</p>
            </div>
          </AnimatedSection>

          <AnimatedSection animation="zoom" delay={200}>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Eficiente</h3>
              <p className="text-gray-600">Solo se ejecuta cuando hay cambios reales</p>
            </div>
          </AnimatedSection>

          <AnimatedSection animation="zoom" delay={300}>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <div className="text-4xl mb-4">🔧</div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Simple</h3>
              <p className="text-gray-600">Código limpio y fácil de mantener</p>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};