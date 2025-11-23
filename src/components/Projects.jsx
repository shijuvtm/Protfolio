import { projects } from "../data/projects";
export default function Projects() {

  return (
    <section id="projects" className="py-16 bg-gray-50  w-full">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Featured Projects</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            A showcase of my recent work and technical implementations
          </p>

          <div className="space-y-12">
            {projects.map((project, index) => (
              <div key={index} className="bg-white rounded-lg p-8 shadow-sm">
                <h3 className="text-2xl font-semibold text-gray-800 mb-2">{project.title}</h3>
                <p className="text-gray-500 mb-4">{project.period}</p>
                <p className="text-gray-600 mb-4">{project.description}</p>

                <h4 className="font-medium text-gray-800 mb-2">Key Features:</h4>
                <ul className="list-disc list-inside text-gray-600 mb-6 space-y-1">
                  {project.features.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, i) => (
                    <span key={i} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <a
                    href={project.demoLink}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium"
                  >
                    View Demo
                  </a>
                  <a
                    href={project.codeLink}
                    className="border border-blue-600 text-blue-600 hover:bg-blue-50 px-4 py-2 rounded-lg font-medium"
                  >
                    Source Code
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
  );
}
