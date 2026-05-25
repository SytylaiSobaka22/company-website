import { Check } from 'lucide-react';

export function Pricing() {
  const plans = [
    {
      name: 'Starter',
      price: '$999',
      period: '/month',
      description: 'Perfect for small businesses getting started',
      features: [
        'Up to 5 team members',
        'Basic cloud infrastructure',
        'Email support',
        'Monthly reports',
        'Security monitoring',
      ],
      popular: false,
    },
    {
      name: 'Professional',
      price: '$2,499',
      period: '/month',
      description: 'Ideal for growing companies',
      features: [
        'Up to 20 team members',
        'Advanced cloud solutions',
        'Priority 24/7 support',
        'Weekly reports & analytics',
        'Advanced security features',
        'Custom integrations',
        'Dedicated account manager',
      ],
      popular: true,
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: '',
      description: 'For large-scale organizations',
      features: [
        'Unlimited team members',
        'Enterprise cloud infrastructure',
        'White-glove support',
        'Real-time analytics',
        'Enterprise-grade security',
        'Custom development',
        'SLA guarantee',
        'On-site training',
      ],
      popular: false,
    },
  ];

  return (
    <section id="pricing" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl mb-4">Flexible Pricing Plans</h2>
          <p className="text-slate-600 text-xl max-w-2xl mx-auto">
            Choose the perfect plan for your business needs. All plans include our core services.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`bg-white rounded-2xl p-8 border-2 ${
                plan.popular
                  ? 'border-blue-500 shadow-2xl scale-105 relative'
                  : 'border-slate-200 hover:border-blue-300 hover:shadow-xl'
              } transition-all duration-300`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-blue-600 to-orange-600 text-white px-4 py-1 rounded-full text-sm">
                  Most Popular
                </div>
              )}
              
              <div className="mb-6">
                <h3 className="text-2xl mb-2">{plan.name}</h3>
                <div className="flex items-baseline mb-2">
                  <span className="text-5xl">{plan.price}</span>
                  <span className="text-slate-600 ml-2">{plan.period}</span>
                </div>
                <p className="text-slate-600">{plan.description}</p>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-3 rounded-lg transition-all ${
                  plan.popular
                    ? 'bg-blue-600 hover:bg-blue-700 text-white'
                    : 'border-2 border-slate-300 hover:border-blue-600 hover:text-blue-600'
                }`}
              >
                Get Started
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
