import { AnimatedSection } from './AnimatedSection';

export const BestPractices = () => {
  return (
    <section className="min-h-screen bg-white py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <AnimatedSection animation="fadeIn">
          <h2 className="text-4xl font-bold text-gray-800 mb-12 text-center">
            Mejores Prácticas
          </h2>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-8">
          <AnimatedSection animation="slideLeft" delay={200}>
            <div className="bg-red-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-red-800 mb-4">❌ Evitar</h3>
              <ul className="text-gray-700 space-y-2">
                <li>• Observers por cada elemento</li>
                <li>• Animaciones pesadas en scroll</li>
                <li>• No hacer cleanup de observers</li>
                <li>• Threshold muy sensibles</li>
              </ul>
            </div>
          </AnimatedSection>

          <AnimatedSection animation="slideRight" delay={400}>
            <div className="bg-green-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-green-800 mb-4">✅ Recomendado</h3>
              <ul className="text-gray-700 space-y-2">
                <li>• Un observer global</li>
                <li>• Animaciones con CSS</li>
                <li>• Cleanup adecuado</li>
                <li>• Threshold razonables (0.1-0.3)</li>
              </ul>
            </div>
          </AnimatedSection>
        </div>

        <AnimatedSection animation="zoom" delay={600}>
          <div className="bg-blue-50 p-6 rounded-lg mt-8 text-center">
            <h3 className="text-2xl font-bold text-blue-800 mb-4">🎉 ¡Felicidades!</h3>
            <p className="text-lg text-gray-700">
              Ahora sabes crear scroll animations eficientes con React e Intersection Observer
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};