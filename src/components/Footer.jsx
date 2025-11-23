export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-12  w-full">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Shiju A</h3>
              <p className="text-gray-300">
                Full Stack Developer passionate about creating innovative solutions using modern technologies.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#about" className="text-gray-300 hover:text-white">About</a></li>
                <li><a href="#skills" className="text-gray-300 hover:text-white">Skills</a></li>
                <li><a href="#projects" className="text-gray-300 hover:text-white">Projects</a></li>
                <li><a href="#contact" className="text-gray-300 hover:text-white">Contact</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
              <ul className="space-y-2 text-gray-300">
                <li>shijuavtm@gmail.com</li>
                <li>+91 9497192475</li>
                <li>Kerala, India</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>© 2024 Shiju A. All rights reserved. | Built with passion and modern web technologies</p>
          </div>
        </div>
      </footer>
  );
}
