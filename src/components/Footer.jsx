import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 mt-auto">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 text-center md:text-left">

          {/* Logo & Info */}
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="text-xl font-bold tracking-tighter">
              ZArchitecture<span className="text-blue-600">.</span>
            </Link>
            <p className="mt-4 text-sm text-gray-500 leading-relaxed">
              Portfolio d'architecture<br />
              Zeineb Azzaoui
            </p>
          </div>

          {/* Navigation */}
          <div className="col-span-1 md:col-span-2 flex flex-col md:flex-row justify-center gap-8 md:gap-16">
            <div className="flex flex-col gap-4">
              <Link to="/" className="text-sm font-medium text-gray-900 hover:text-blue-600 transition-colors">Accueil</Link>
              <Link to="/projects" className="text-sm font-medium text-gray-900 hover:text-blue-600 transition-colors">Projets</Link>
            </div>
            <div className="flex flex-col gap-4">
              <Link to="/about" className="text-sm font-medium text-gray-900 hover:text-blue-600 transition-colors">À Propos</Link>
              <Link to="/contact" className="text-sm font-medium text-gray-900 hover:text-blue-600 transition-colors">Contact</Link>
            </div>
          </div>

          {/* Social */}
          <div className="col-span-1 md:col-span-1 flex flex-col items-center md:items-end gap-4">
            <a
              href="https://www.instagram.com/archi_by_za/profilecard/?igsh=MTc5d2w5YWF1YjA0Nw=="
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center hover:bg-black hover:text-white transition-all duration-300"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
            </a>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-12 pt-8 text-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} Copyright: <a href="https://zarchitecture.be/" className="hover:text-black transition-colors">zarchitecture.be</a></p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
