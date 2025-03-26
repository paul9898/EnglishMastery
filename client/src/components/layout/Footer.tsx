export default function Footer() {
  return (
    <footer className="bg-primary text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h2 className="text-xl font-bold">ESL Learning Hub</h2>
            <p className="text-white/80 mt-2">Improving English skills one lesson at a time</p>
          </div>
          <div className="flex space-x-6">
            <a href="#" className="text-white hover:text-white/80 transition duration-150">
              <span className="sr-only">Contact</span>
              <i className="fa-solid fa-envelope text-xl"></i>
            </a>
            <a href="#" className="text-white hover:text-white/80 transition duration-150">
              <span className="sr-only">Facebook</span>
              <i className="fa-brands fa-facebook text-xl"></i>
            </a>
            <a href="#" className="text-white hover:text-white/80 transition duration-150">
              <span className="sr-only">Twitter</span>
              <i className="fa-brands fa-twitter text-xl"></i>
            </a>
            <a href="#" className="text-white hover:text-white/80 transition duration-150">
              <span className="sr-only">YouTube</span>
              <i className="fa-brands fa-youtube text-xl"></i>
            </a>
          </div>
        </div>
        <div className="mt-8 pt-6 border-t border-white/20 text-sm text-center text-white/60">
          <p>&copy; {new Date().getFullYear()} ESL Learning Hub. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
