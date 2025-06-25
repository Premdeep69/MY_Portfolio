"use client"

import { ArrowRight, Github, Mail, MapPin, Phone } from "lucide-react"
import { useTranslation } from "react-i18next"
import { Link } from "react-router-dom"

export default function Home() {
  const { t } = useTranslation()

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-purple-700 text-white py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              {t("home.greeting")} <span className="text-yellow-300">{t("home.name")}</span>
            </h1>
            <p className="text-xl sm:text-2xl mb-8 text-blue-100">
              {t("home.tagline")}
            </p>
            <p className="text-lg mb-10 max-w-3xl mx-auto text-blue-50">
              {t("home.description")}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link
                to="/projects"
                className="bg-yellow-400 text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition-colors inline-flex items-center justify-center"
              >
                {t("home.viewProjects")} <ArrowRight className="ml-2" size={20} />
              </Link>
              <Link
                to="/contact"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
              >
                {t("home.getInTouch")}
              </Link>
            </div>

            {/* Contact Info */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
              <div className="flex items-center justify-center space-x-2 text-blue-100">
                <Phone size={18} />
                <span className="text-sm">+977 9811358831</span>
              </div>
              <div className="flex items-center justify-center space-x-2 text-blue-100">
                <Mail size={18} />
                <span className="text-sm">Premdiprai1234@gmail.com</span>
              </div>
              <div className="flex items-center justify-center space-x-2 text-blue-100">
                <MapPin size={18} />
                <span className="text-sm">Dharan, Sunsari</span>
              </div>
              <div className="flex items-center justify-center space-x-2 text-blue-100">
                <Github size={18} />
                <a
                  href="https://github.com/Premdeep69"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm hover:text-yellow-300 transition-colors"
                >
                  GitHub Profile
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Skills Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">{t("home.technicalSkills")}</h2>
            <p className="text-gray-600">{t("home.skillsDescription")}</p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {["HTML/CSS", "JavaScript", "React Native", "Node.js", "MySQL", "Python"].map((skill) => (
              <div key={skill} className="bg-gray-50 rounded-lg p-4 text-center hover:bg-blue-50 transition-colors">
                <span className="font-medium text-gray-800">{skill}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects Preview */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">{t("home.featuredProjects")}</h2>
            <p className="text-gray-600">{t("home.projectsDescription")}</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold text-gray-900 mb-3">{t("projects.projectList.libraryManagement.title")}</h3>
              <p className="text-gray-600 mb-4">
                {t("projects.projectList.libraryManagement.description")}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["HTML", "CSS", "JavaScript", "JDBC", "MySQL", "Java"].map((tech) => (
                  <span key={tech} className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold text-gray-900 mb-3">{t("projects.projectList.gymTrainee.title")}</h3>
              <p className="text-gray-600 mb-4">
                {t("projects.projectList.gymTrainee.description")}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["React Native", "Node.js", "MySQL"].map((tech) => (
                  <span key={tech} className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="text-center">
            <Link
              to="/projects"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-flex items-center"
            >
              {t("home.viewAllProjects")} <ArrowRight className="ml-2" size={18} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
