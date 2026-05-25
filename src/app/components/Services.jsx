import { Cloud, Code, Database, Lock, Smartphone, Cog } from 'lucide-react';

export function Services() {
  const services = [
    {
      icon: Cloud,
      title: 'Cloud Solutions',
      description: 'Scalable cloud infrastructure and migration services for seamless digital transformation.',
    },
    {
      icon: Code,
      title: 'Custom Development',
      description: 'Tailored software solutions built with cutting-edge technologies to meet your unique needs.',
    },
    {
      icon: Database,
      title: 'Data Management',
      description: 'Comprehensive data analytics, storage, and management solutions for better insights.',
    },
    {
      icon: Lock,
      title: 'Cybersecurity',
      description: 'Advanced security measures to protect your digital assets and ensure compliance.',
    },
    {
      icon: Smartphone,
      title: 'Mobile Solutions',
      description: 'Native and cross-platform mobile applications for iOS and Android platforms.',
    },
    {
      icon: Cog,
      title: 'IT Consulting',
      description: 'Strategic technology consulting to optimize your IT infrastructure and processes.',
    },
  ];

  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl mb-4">Our Services</h2>
          <p className="text-slate-600 text-xl max-w-2xl mx-auto">
            Comprehensive IT solutions designed to drive innovation and accelerate your business growth.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white border border-slate-200 rounded-xl p-8 hover:shadow-xl hover:border-blue-300 transition-all duration-300 group cursor-pointer"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-orange-500 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <service.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl mb-3">{service.title}</h3>
              <p className="text-slate-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
