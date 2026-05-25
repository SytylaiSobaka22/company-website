import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: 'What services does TechSolutions offer?',
      answer: 'We offer comprehensive IT services including cloud solutions, custom software development, cybersecurity, data management, mobile app development, and IT consulting. Our team works with businesses of all sizes to deliver tailored solutions.',
    },
    {
      question: 'How long does a typical project take?',
      answer: 'Project timelines vary based on scope and complexity. A simple web application might take 4-8 weeks, while enterprise cloud migrations can take 3-6 months. We provide detailed timelines during our discovery phase and maintain clear communication throughout.',
    },
    {
      question: 'Do you provide ongoing support and maintenance?',
      answer: 'Yes! All our plans include ongoing support and maintenance. We offer different support tiers from email support to 24/7 priority support with dedicated account managers, depending on your chosen plan.',
    },
    {
      question: 'What industries do you specialize in?',
      answer: 'We have extensive experience across multiple industries including finance, healthcare, retail, manufacturing, and technology. Our team adapts to industry-specific requirements and compliance standards.',
    },
    {
      question: 'Can you work with our existing systems?',
      answer: 'Absolutely. We specialize in integrating with existing systems and legacy infrastructure. Our team conducts thorough assessments to ensure seamless integration and minimal disruption to your operations.',
    },
    {
      question: 'What is your pricing model?',
      answer: 'We offer flexible pricing options including monthly subscription plans and custom enterprise packages. Pricing depends on your specific needs, team size, and required services. Contact us for a personalized quote.',
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl mb-4">Frequently Asked Questions</h2>
          <p className="text-slate-600 text-xl">
            Find answers to common questions about our services and processes.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white border border-slate-200 rounded-xl overflow-hidden hover:border-blue-300 transition-colors"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-slate-50 transition-colors"
              >
                <span className="text-lg pr-8">{faq.question}</span>
                <ChevronDown
                  className={`w-6 h-6 text-blue-600 flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <div className="px-6 pb-5 text-slate-600 leading-relaxed">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
