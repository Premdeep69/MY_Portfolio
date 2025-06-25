"use client"

import { ExternalLink, Filter, Github } from "lucide-react"
import { useState } from "react"
import { useTranslation } from "react-i18next"

interface Project {
  id: number
  title: string
  description: string
  longDescription: string
  technologies: string[]
  githubUrl?: string
  liveUrl?: string
  category: string
}

export default function Projects() {
  const { t } = useTranslation()
  
  const projects: Project[] = [
    {
      id: 1,
      title: t("projects.projectList.libraryManagement.title"),
      description: t("projects.projectList.libraryManagement.description"),
      longDescription: t("projects.projectList.libraryManagement.longDescription"),
      technologies: ["HTML", "CSS", "JavaScript", "JDBC", "MySQL", "Java"],
      githubUrl: "https://github.com/Premdeep69",
      category: t("projects.categories.webDevelopment"),
    },
    {
      id: 2,
      title: t("projects.projectList.gymTrainee.title"),
      description: t("projects.projectList.gymTrainee.description"),
      longDescription: t("projects.projectList.gymTrainee.longDescription"),
      technologies: ["React Native", "Node.js", "MySQL"],
      githubUrl: "https://github.com/Premdeep69",
      category: t("projects.categories.mobileDevelopment"),
    },
    {
      id: 3,
      title: t("projects.projectList.portfolio.title"),
      description: t("projects.projectList.portfolio.description"),
      longDescription: t("projects.projectList.portfolio.longDescription"),
      technologies: ["React", "React Router", "Tailwind CSS", "Vercel"],
      githubUrl: "https://github.com/Premdeep69",
      liveUrl: "#",
      category: t("projects.categories.webDevelopment"),
    },
  ]

  const [selectedFilter, setSelectedFilter] = useState(t("projects.categories.all"))
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  const categories = [t("projects.categories.all"), t("projects.categories.webDevelopment"), t("projects.categories.mobileDevelopment")]
  const allTechnologies = Array.from(new Set(projects.flatMap((p) => p.technologies)))

  const filteredProjects =
    selectedFilter === t("projects.categories.all") ? projects : projects.filter((project) => project.category === selectedFilter)

  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{t("projects.title")}</h1>
          <p className="text-xl text-gray-600">{t("projects.subtitle")}</p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <div className="flex items-center text-gray-600 mr-4">
            <Filter size={20} className="mr-2" />
            <span className="font-medium">{t("projects.filterBy")}</span>
          </div>
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedFilter(category)}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                selectedFilter === category ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Technology Filter */}
        <div className="mb-12">
          <h3 className="text-lg font-semibold text-gray-900 mb-4 text-center">{t("projects.technologiesUsed")}</h3>
          <div className="flex flex-wrap justify-center gap-2">
            {allTechnologies.map((tech) => (
              <span key={tech} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow overflow-hidden cursor-pointer"
              onClick={() => setSelectedProject(project)}
            >
              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-bold text-gray-900">{project.title}</h3>
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs font-medium">
                    {project.category}
                  </span>
                </div>

                <p className="text-gray-600 mb-4 line-clamp-3">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <span key={tech} className="bg-blue-50 text-blue-700 px-2 py-1 rounded text-sm">
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-sm">
                      +{project.technologies.length - 3} more
                    </span>
                  )}
                </div>

                <div className="flex space-x-3">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="flex items-center text-gray-600 hover:text-gray-900 transition-colors"
                    >
                      <Github size={18} className="mr-1" />
                      <span className="text-sm">{t("projects.code")}</span>
                    </a>
                  )}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="flex items-center text-blue-600 hover:text-blue-800 transition-colors"
                    >
                      <ExternalLink size={18} className="mr-1" />
                      <span className="text-sm">{t("projects.liveDemo")}</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* No Projects Found */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600 text-lg">{t("projects.noProjects")}</p>
          </div>
        )}

        {/* Project Modal */}
        {selectedProject && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h2 className="text-2xl font-bold text-gray-900">{selectedProject.title}</h2>
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="text-gray-500 hover:text-gray-700 text-2xl"
                  >
                    ×
                  </button>
                </div>

                <div className="mb-4">
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                    {selectedProject.category}
                  </span>
                </div>

                <p className="text-gray-700 mb-6 leading-relaxed">{selectedProject.longDescription}</p>

                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">{t("projects.technologiesUsed")}</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((tech) => (
                      <span key={tech} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-lg text-sm font-medium">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex space-x-4">
                  {selectedProject.githubUrl && (
                    <a
                      href={selectedProject.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center bg-gray-900 text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors"
                    >
                      <Github size={18} className="mr-2" />
                      {t("projects.viewCode")}
                    </a>
                  )}
                  {selectedProject.liveUrl && (
                    <a
                      href={selectedProject.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      <ExternalLink size={18} className="mr-2" />
                      {t("projects.liveDemo")}
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
