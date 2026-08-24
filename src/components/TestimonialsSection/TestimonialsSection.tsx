import './TestimonialsSection.css';

const TESTIMONIALS = [
  {
    quote:
      'Primeira vez que uso o copy trader e estou gostando muito, principalmente por funcionar em qualquer corretora, dando liberdade de escolha.',
    since: 'Cliente desde 2024',
    duration: 'Copy Invest há 9 meses',
    featured: true,
  },
  {
    quote: 'Muito fácil de implantar e pode ser muito lucrativo.',
    since: 'Cliente desde 2020',
    duration: 'Copy Invest há 2a 6m',
  },
  {
    quote:
      'Oferece a oportunidade de expandir sua carteira sem precisar dedicar tempo diariamente.',
    since: 'Cliente desde 2025',
    duration: 'Copy Invest há 5 meses',
  },
];

function TestimonialsSection() {
  return (
    <section className="testimonials-section">
      <div className="testimonials-section__header">
        <h2 className="testimonials-section__title">Quem usa, indica</h2>
      </div>

      <div className="testimonials-section__grid">
        {TESTIMONIALS.map((testimonial, index) => (
          <div
            key={index}
            className={[
              'testimonials-section__card',
              testimonial.featured && 'testimonials-section__card--featured',
            ]
              .filter(Boolean)
              .join(' ')}
          >
            <p className="testimonials-section__quote">{testimonial.quote}</p>
            <div className="testimonials-section__meta">
              <span>{testimonial.since}</span>
              <span>{testimonial.duration}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default TestimonialsSection;
