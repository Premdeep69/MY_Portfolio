"use client"

import { Award, GraduationCap, Target, User } from "lucide-react"
import { useTranslation } from "react-i18next"

export default function About() {
  const { t } = useTranslation()

  const skills = {
    technical: ["HTML/CSS", "JavaScript", "Python", "MySQL", "React Native", "Node.js", "JDBC", "Java"],
    soft: [t("skills.communication"), t("skills.problemSolving"), t("skills.teamwork"), t("skills.timeManagement")],
  }

  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{t("about.title")}</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t("about.subtitle")}
          </p>
        </div>

        {/* Career Objective */}
        <section className="mb-16">
          <div className="bg-blue-50 rounded-lg p-8">
            <div className="flex items-center mb-4">
              <Target className="text-blue-600 mr-3" size={24} />
              <h2 className="text-2xl font-bold text-gray-900">{t("about.careerObjective")}</h2>
            </div>
            <p className="text-gray-700 leading-relaxed">
              {t("about.careerDescription")}
            </p>
          </div>
        </section>

        {/* Education */}
        <section className="mb-16">
          <div className="flex items-center mb-8">
            <GraduationCap className="text-blue-600 mr-3" size={24} />
            <h2 className="text-2xl font-bold text-gray-900">{t("about.education")}</h2>
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-blue-600">
              <h3 className="text-xl font-bold text-gray-900 mb-2">{t("about.degree1")}</h3>
              <p className="text-blue-600 font-semibold mb-1">{t("about.college1")}</p>
              <p className="text-gray-600 mb-2">{t("about.location1")}</p>
              <p className="text-gray-500">{t("about.duration1")}</p>
              <p className="text-sm text-gray-600 mt-2">{t("about.address1")}</p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-green-600">
              <h3 className="text-xl font-bold text-gray-900 mb-2">{t("about.degree2")}</h3>
              <p className="text-green-600 font-semibold mb-1">{t("about.college2")}</p>
              <p className="text-gray-600 mb-2">{t("about.location2")}</p>
              <p className="text-gray-500">{t("about.duration2")}</p>
            </div>
          </div>
        </section>

        {/* Skills */}
        <section className="mb-16">
          <div className="flex items-center mb-8">
            <Award className="text-blue-600 mr-3" size={24} />
            <h2 className="text-2xl font-bold text-gray-900">{t("about.skills")}</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">{t("about.technicalSkills")}</h3>
              <div className="grid grid-cols-2 gap-3">
                {skills.technical.map((skill) => (
                  <div key={skill} className="bg-blue-50 text-blue-800 px-3 py-2 rounded-lg text-center font-medium">
                    {skill}
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">{t("about.softSkills")}</h3>
              <div className="space-y-3">
                {skills.soft.map((skill) => (
                  <div key={skill} className="bg-green-50 text-green-800 px-3 py-2 rounded-lg text-center font-medium">
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Personal Info */}
        <section>
          <div className="flex items-center mb-8">
            <User className="text-blue-600 mr-3" size={24} />
            <h2 className="text-2xl font-bold text-gray-900">{t("about.personalInfo")}</h2>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">{t("about.contactDetails")}</h3>
                <div className="space-y-2 text-gray-600">
                  <p>
                    <span className="font-medium">{t("about.phone")}:</span> +977 9811358831
                  </p>
                  <p>
                    <span className="font-medium">{t("about.email")}:</span> Premdiprai1234@gmail.com
                  </p>
                  <p>
                    <span className="font-medium">{t("about.address")}:</span> Dharan, Sunsari
                  </p>
                </div>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">{t("about.onlinePresence")}</h3>
                <div className="space-y-2">
                  <a
                    href="https://github.com/Premdeep69"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 transition-colors block"
                  >
                    {t("about.github")}: github.com/Premdeep69
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Reference */}
        <section className="mt-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">{t("about.reference")}</h2>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="font-bold text-gray-900 mb-1">Delish Khadka</h3>
            <p className="text-gray-600">delishkhadka@gmail.com</p>
          </div>
        </section>
      </div>
    </div>
  )
}
