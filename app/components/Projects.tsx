"use client"

import { ExternalLink, Filter, Github } from "lucide-react"
import { useEffect, useRef, useState } from "react"
import { useTranslation } from "react-i18next"
import { useInView } from "react-intersection-observer"
import { useGSAP } from "../hooks/useGSAP"
import { animateProjectCards, animateSectionFadeIn } from "../utils/animation"
import AnimatedButton from "./AnimatedButton"
import AnimatedPage from "./AnimatedPage"

interface Project {
  id: number
  titleKey: string
  descriptionKey: string
  longDescriptionKey: string
  technologies: string[]
  githubUrl?: string
  liveUrl?: string
  category: string
}

export default function Projects() {
  const { t } = useTranslation()
  const projectsGridRef = useRef<HTMLDivElement>(null)
  const headerRef = useRef<HTMLDivElement>(null)
  const filtersRef = useRef<HTMLDivElement>(null)

  const [projectsInViewRef, projectsInView] = useInView({ threshold: 0.1, triggerOnce: true })

  const projects: Project[] = [
    {
      id: 1,
      titleKey: "projects.projectList.libraryManagement.title",
      descriptionKey: "projects.projectList.libraryManagement.description",
      longDescriptionKey: "projects.projectList.libraryManagement.longDescription",
      technologies: ["HTML", "CSS", "JavaScript", "JDBC", "MySQL", "Java"],
      githubUrl: "https://github.com/Premdeep69",
      category: "Web Development",
    },
    {
      id: 2,
      titleKey: "projects.projectList.gymTrainee.title",
      descriptionKey: "projects.projectList.gymTrainee.description",
      longDescriptionKey: "projects.projectList.gymTrainee.longDescription",
      technologies: ["React Native", "Node.js", "MySQL"],
      githubUrl: "https://github.com/Premdeep69",
      category: "Mobile Development",
    },
    {
      id: 3,
      titleKey: "projects.projectList.portfolio.title",
      descriptionKey: "projects.projectList.portfolio.description",
      longDescriptionKey: "projects.projectList.portfolio.longDescription",
      technologies: ["React", "React Router", "Tailwind CSS", "Vercel"],
      githubUrl: "https://github.com/Premdeep69",
      liveUrl: "#",
      category: "Web Development",
    },
  ]

  const [selectedFilter, setSelectedFilter] = useState("All")
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  const categories = [
    { key: "All", label: t("projects.categories.all") },
    { key: "Web Development", label: t("projects.categories.webDevelopment") },
    { key: "Mobile Development", label: t("projects.categories.mobileDevelopment") },
  ]

  const allTechnologies = Array.from(new Set(projects.flatMap((p) => p.technologies)))

  const filteredProjects =
    selectedFilter === "All" ? projects : projects.filter((project) => project.category === selectedFilter)

  // Header animation
  useGSAP(() => {
    let tween: gsap.core.Tween | undefined;
    if (headerRef.current) {
      tween = animateSectionFadeIn(headerRef.current, "up");
    }
    return () => {
      if (tween) tween.kill();
    };
  }, [])

  // Filters animation
  useGSAP(() => {
    let tween: gsap.core.Tween | undefined;
    if (filtersRef.current) {
      tween = animateSectionFadeIn(filtersRef.current, "up");
    }
    return () => {
      if (tween) tween.kill();
    };
  }, [])

  // Projects animation
  useEffect(() => {
    if (!!projectsInView && projectsGridRef.current) {
      const projectCards = Array.from(projectsGridRef.current.children) as HTMLElement[]
      animateProjectCards(projectCards)
    }
  }, [projectsInView, filteredProjects])

  return (
    <AnimatedPage>
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div ref={headerRef} className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">{t("projects.title")}</h1>
            <p className="text-xl text-gray-600">{t("projects.subtitle")}</p>
          </div>

          {/* Filter Buttons */}
          <div ref={filtersRef} className="flex flex-wrap justify-center gap-4 mb-12">
            <div className="flex items-center text-gray-600 mr-4">
              <Filter size={20} className="mr-2" />
              <span className="font-medium">{t("projects.filterBy")}</span>
            </div>
            {categories.map((category) => (
              <AnimatedButton
                key={category.key}
                onClick={() => setSelectedFilter(category.key)}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                  selectedFilter === category.key
                    ? "bg-blue-600 text-white shadow-lg"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300 hover:shadow-md"
                }`}
              >
                {category.label}
              </AnimatedButton>
            ))}
          </div>

          {/* Technology Filter */}
          <div className="mb-12">
            <h3 className="text-lg font-semibold text-gray-900 mb-4 text-center">{t("projects.technologiesUsed")}</h3>
            <div className="flex flex-wrap justify-center gap-2">
              {allTechnologies.map((tech) => (
                <span
                  key={tech}
                  className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium hover:bg-blue-200 transition-colors cursor-pointer"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Projects Grid */}
          <div ref={projectsInViewRef}>
            <div ref={projectsGridRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project) => (
                <div
                  key={project.id}
                  className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer transform hover:-translate-y-2 hover:scale-105"
                  onClick={() => setSelectedProject(project)}
                >
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="text-xl font-bold text-gray-900">{t(project.titleKey)}</h3>
                      <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs font-medium">
                        {project.category === "Web Development"
                          ? t("projects.categories.webDevelopment")
                          : t("projects.categories.mobileDevelopment")}
                      </span>
                    </div>

                    <p className="text-gray-600 mb-4 line-clamp-3">{t(project.descriptionKey)}</p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <span
                          key={tech}
                          className="bg-blue-50 text-blue-700 px-2 py-1 rounded text-sm hover:bg-blue-100 transition-colors"
                        >
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
                          className="flex items-center text-gray-600 hover:text-gray-900 transition-all duration-200 hover:scale-110"
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
                          className="flex items-center text-blue-600 hover:text-blue-800 transition-all duration-200 hover:scale-110"
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
          </div>

          {/* Project Modal */}
          {selectedProject && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50 animate-fadeIn">
              <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto animate-slideInUp">
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h2 className="text-2xl font-bold text-gray-900">{t(selectedProject.titleKey)}</h2>
                    <AnimatedButton
                      onClick={() => setSelectedProject(null)}
                      className="text-gray-500 hover:text-gray-700 text-2xl p-2 rounded-full hover:bg-gray-100"
                    >
                      ×
                    </AnimatedButton>
                  </div>

                  <div className="mb-4">
                    <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                      {selectedProject.category === "Web Development"
                        ? t("projects.categories.webDevelopment")
                        : t("projects.categories.mobileDevelopment")}
                    </span>
                  </div>

                  <p className="text-gray-700 mb-6 leading-relaxed">{t(selectedProject.longDescriptionKey)}</p>

                  <div className="mb-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">{t("projects.technologiesUsed")}</h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="bg-blue-100 text-blue-800 px-3 py-1 rounded-lg text-sm font-medium hover:bg-blue-200 transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex space-x-4">
                    {selectedProject.githubUrl && (
                      <AnimatedButton className="bg-gray-900 text-white px-4 py-2 rounded-lg hover:bg-gray-800 flex items-center">
                        <a
                          href={selectedProject.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center"
                        >
                          <Github size={18} className="mr-2" />
                          {t("projects.viewCode")}
                        </a>
                      </AnimatedButton>
                    )}
                    {selectedProject.liveUrl && (
                      <AnimatedButton className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 flex items-center">
                        <a
                          href={selectedProject.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center"
                        >
                          <ExternalLink size={18} className="mr-2" />
                          {t("projects.liveDemo")}
                        </a>
                      </AnimatedButton>
                    )}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* No Projects Message */}
          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-600 text-lg">{t("projects.noProjects")}</p>
            </div>
          )}
        </div>
      </div>
    </AnimatedPage>
  )
}
