import { AnimatedSection } from './AnimatedSection';

export const Hero = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-blue-600 to-purple-700 flex items-center justify-center text-white">
      <div className="text-center max-w-4xl mx-auto px-4">
        <AnimatedSection animation="zoom" delay={100}>
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Scroll Animations con React
          </h1>
        </AnimatedSection>
        
        <AnimatedSection animation="fadeIn" delay={300}>
          <p className="text-xl md:text-2xl mb-8 opacity-90">
            Aprende a crear animaciones al hacer scroll usando Intersection Observer
          </p>
        </AnimatedSection>
        
        <AnimatedSection animation="bounce" delay={500}>
          <div className="animate-bounce mt-16">
            <span className="text-lg">↓ Desplázate para aprender ↓</span>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};
