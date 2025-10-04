import { AnimatedSection } from './AnimatedSection';

export const AnimationsDemo = () => {
  const animations = [
    { name: 'fadeIn', label: 'Fade In', emoji: '✨' },
    { name: 'slideLeft', label: 'Slide Left', emoji: '⬅️' },
    { name: 'slideRight', label: 'Slide Right', emoji: '➡️' },
    { name: 'zoom', label: 'Zoom In', emoji: '🔍' },
    { name: 'bounce', label: 'Bounce', emoji: '🏀' }
  ];

  return (
    <section className="min-h-screen bg-gray-900 py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <AnimatedSection animation="fadeIn">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">
            Demo de Animaciones
          </h2>
        </AnimatedSection>

        <div className="space-y-8">
          {animations.map((anim, index) => (
            <AnimatedSection 
              key={anim.name}
              animation={anim.name}
              delay={index * 100}
            >
              <div className="bg-gray-800 p-8 rounded-lg text-white text-center">
                <div className="text-4xl mb-4">{anim.emoji}</div>
                <h3 className="text-2xl font-bold mb-2">{anim.label}</h3>
                <p className="text-gray-300">Esta animación usa: <code>{anim.name}</code></p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};