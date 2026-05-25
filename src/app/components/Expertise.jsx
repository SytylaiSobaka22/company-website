export function Expertise() {
  const technologies = [
    { name: 'React', category: 'Frontend' },
    { name: 'Node.js', category: 'Backend' },
    { name: 'Python', category: 'Backend' },
    { name: 'AWS', category: 'Cloud' },
    { name: 'Azure', category: 'Cloud' },
    { name: 'Docker', category: 'DevOps' },
    { name: 'Kubernetes', category: 'DevOps' },
    { name: 'PostgreSQL', category: 'Database' },
    { name: 'MongoDB', category: 'Database' },
    { name: 'TypeScript', category: 'Language' },
    { name: 'GraphQL', category: 'API' },
    { name: 'Next.js', category: 'Framework' },
  ];

  return (
    <section id="expertise" className="py-24 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl mb-4">Technology Expertise</h2>
          <p className="text-slate-600 text-xl max-w-2xl mx-auto">
            We leverage the latest technologies and frameworks to build robust, scalable solutions.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          {technologies.map((tech, index) => (
            <div
              key={index}
              className="bg-white border border-slate-200 rounded-lg px-6 py-3 hover:shadow-lg hover:border-blue-400 hover:scale-105 transition-all duration-300 cursor-pointer"
            >
              <div className="flex items-center gap-3">
                <span className="text-slate-800">{tech.name}</span>
                <span className="text-xs text-slate-500 bg-slate-100 px-2 py-1 rounded">
                  {tech.category}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
