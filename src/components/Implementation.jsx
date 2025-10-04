import { AnimatedSection } from './AnimatedSection';

export const Implementation = () => {
  return (
    <section className="min-h-screen bg-white py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <AnimatedSection animation="fadeIn">
          <h2 className="text-4xl font-bold text-gray-800 mb-8 text-center">
            Implementación Paso a Paso
          </h2>
        </AnimatedSection>

        <AnimatedSection animation="slideLeft" delay={200}>
          <div className="bg-yellow-50 p-6 rounded-lg mb-6">
            <h3 className="text-2xl font-semibold text-yellow-800 mb-4">1. Hook Personalizado</h3>
            <pre className="bg-gray-800 text-green-400 p-4 rounded overflow-x-auto">
{`// Un observer GLOBAL para todos los elementos
const useIntersectionObserver = () => {
  const [ref, isVisible] = // lógica del observer
  return [ref, isVisible];
};`}
            </pre>
          </div>
        </AnimatedSection>

        <AnimatedSection animation="slideRight" delay={400}>
          <div className="bg-green-50 p-6 rounded-lg mb-6">
            <h3 className="text-2xl font-semibold text-green-800 mb-4">2. Componente Animado</h3>
            <pre className="bg-gray-800 text-green-400 p-4 rounded overflow-x-auto">
{`// Componente reutilizable
const AnimatedSection = ({ children }) => {
  const [ref, isVisible] = useIntersectionObserver();
  return (
    <div ref={ref} className={\`fade-in \${isVisible ? 'visible' : ''}\`}>
      {children}
    </div>
  );
};`}
            </pre>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};