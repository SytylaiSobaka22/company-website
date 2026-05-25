import { Menu } from 'lucide-react';

export function Header() {
  return (
    <header className="bg-slate-900 text-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-orange-500 rounded-lg flex items-center justify-center">
              <span className="text-lg">IT</span>
            </div>
            <span className="text-xl">TechSolutions</span>
          </div>
          
          <nav className="hidden md:flex items-center gap-8">
            <a href="#services" className="hover:text-blue-400 transition-colors">Services</a>
            <a href="#expertise" className="hover:text-blue-400 transition-colors">Expertise</a>
            <a href="#pricing" className="hover:text-blue-400 transition-colors">Pricing</a>
            <a href="#portfolio" className="hover:text-blue-400 transition-colors">Portfolio</a>
            <a href="#team" className="hover:text-blue-400 transition-colors">Team</a>
            <a href="#contact" className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-lg transition-colors">Contact Us</a>
          </nav>
          
          <button className="md:hidden">
            <Menu />
          </button>
        </div>
      </div>
    </header>
  );
}
