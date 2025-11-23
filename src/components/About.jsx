export default function About() {
  return (
    
    <section id="about" className="py-16 bg-white  w-full">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">About Me</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Get to know more about my background, skills, and passion for technology
          </p>

          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/2">
              <div className="bg-blue-50 p-6 rounded-lg mb-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Coding Enthusiast</h3>
                <p className="text-gray-600">Passionate about clean code and innovative solutions</p>
              </div>

              <h3 className="text-xl font-semibold text-gray-800 mb-4">Profile Summary</h3>
              <p className="text-gray-600 mb-6">
                Enthusiastic Computer Science graduate with hands-on experience in full-stack development,
                data structures, and machine learning. Skilled in Java, Python, Node.js, and React.
                Passionate about solving real-world problems using modern technologies.
              </p>
            </div>

            <div className="md:w-1/2">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">Education</h3>
                  <div className="bg-gray-50 p-4 rounded-lg mb-4">
                    <h4 className="font-medium text-gray-800">M.Sc. Computer Science</h4>
                    <p className="text-gray-600">80% (2022-2024)</p>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">Experience</h3>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-medium text-gray-800">Full Stack Development</h4>
                    <p className="text-gray-600">React & Drupal Intern</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    
  );
}

