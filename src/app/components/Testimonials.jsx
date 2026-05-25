import { Star, Quote } from 'lucide-react';

export function Testimonials() {
  const testimonials = [
    {
      name: 'Jennifer Martinez',
      role: 'CTO, FinTech Innovations',
      content: 'TechSolutions transformed our entire infrastructure. Their expertise in cloud migration saved us 40% in costs while improving performance dramatically.',
      rating: 5,
    },
    {
      name: 'Robert Thompson',
      role: 'CEO, Healthcare Plus',
      content: 'The team delivered our healthcare platform ahead of schedule and under budget. Their attention to security and compliance was exceptional.',
      rating: 5,
    },
    {
      name: 'Lisa Wang',
      role: 'Director of IT, RetailCorp',
      content: 'Outstanding service and support. They truly understand business needs and translate them into technical solutions that work.',
      rating: 5,
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl mb-4">What Our Clients Say</h2>
          <p className="text-slate-600 text-xl max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our clients have to say about working with us.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 relative"
            >
              <Quote className="w-12 h-12 text-blue-200 absolute top-6 right-6" />
              
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-orange-400 text-orange-400" />
                ))}
              </div>

              <p className="text-slate-700 mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>

              <div>
                <div className="mb-1">{testimonial.name}</div>
                <div className="text-sm text-slate-600">{testimonial.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
