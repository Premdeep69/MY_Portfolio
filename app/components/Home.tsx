"use client"

import { ArrowRight, Github, Mail, MapPin, Phone } from "lucide-react"
import { useEffect, useRef } from "react"
import { useTranslation } from "react-i18next"
import { useInView } from "react-intersection-observer"
import { Link } from "react-router-dom"
import { useGSAP } from "../hooks/useGSAP"
import { animateHeroEntry, animateSkillsStagger, createParallaxEffect } from "../utils/animation"
import AnimatedButton from "./AnimatedButton"
import AnimatedPage from "./AnimatedPage"

export default function Home() {
  const { t } = useTranslation()

  // Refs for hero elements
  const greetingRef = useRef<HTMLHeadingElement>(null)
  const nameRef = useRef<HTMLSpanElement>(null)
  const taglineRef = useRef<HTMLParagraphElement>(null)
  const descriptionRef = useRef<HTMLParagraphElement>(null)
  const buttonsRef = useRef<HTMLDivElement>(null)
  const contactInfoRef = useRef<HTMLDivElement>(null)
  const heroSectionRef = useRef<HTMLElement>(null)

  // Refs for skills
  const skillsRef = useRef<HTMLDivElement>(null)
  const [skillsInViewRef, skillsInView] = useInView({ threshold: 0.3, triggerOnce: true })

  // Hero animation
  useGSAP(() => {
    if (
      greetingRef.current &&
      nameRef.current &&
      taglineRef.current &&
      descriptionRef.current &&
      buttonsRef.current &&
      contactInfoRef.current
    ) {
      const tl = animateHeroEntry({
        greeting: greetingRef.current,
        name: nameRef.current,
        tagline: taglineRef.current,
        description: descriptionRef.current,
        buttons: buttonsRef.current,
        contactInfo: contactInfoRef.current,
      })

      return () => tl.kill()
    }
  }, [])

  // Parallax effect for hero background
  useGSAP(() => {
    let tween: gsap.core.Tween | undefined;
    if (heroSectionRef.current) {
      tween = createParallaxEffect(heroSectionRef.current, 0.3);
    }
    return () => {
      if (tween) tween.kill();
    };
  }, [])

  // Skills animation
  useEffect(() => {
    if (!!skillsInView && skillsRef.current) {
      const skillElements = Array.from(skillsRef.current.children) as HTMLElement[]
      animateSkillsStagger(skillElements)
    }
  }, [skillsInView])

  return (
    <AnimatedPage>
      <div className="min-h-screen">
        {/* Hero Section */}
        <section
          ref={heroSectionRef}
          className="bg-gradient-to-br from-blue-600 to-purple-700 text-white py-20 lg:py-32 relative overflow-hidden"
        >
          {/* Animated background elements */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-20 left-10 w-20 h-20 bg-white rounded-full animate-pulse"></div>
            <div className="absolute top-40 right-20 w-16 h-16 bg-yellow-300 rounded-full animate-bounce"></div>
            <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-white rounded-full animate-ping"></div>
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
                <span ref={greetingRef}>{t("home.greeting")} </span>
                <span ref={nameRef} className="text-yellow-300">
                  {t("home.name")}
                </span>
              </h1>
              <p ref={taglineRef} className="text-xl sm:text-2xl mb-8 text-blue-100">
                {t("home.tagline")}
              </p>
              <p ref={descriptionRef} className="text-lg mb-10 max-w-3xl mx-auto text-blue-50">
                {t("home.description")}
              </p>

              <div ref={buttonsRef} className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <AnimatedButton className="bg-yellow-400 text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-yellow-300 inline-flex items-center justify-center">
                  <Link to="/projects" className="flex items-center">
                    {t("home.viewProjects")} <ArrowRight className="ml-2" size={20} />
                  </Link>
                </AnimatedButton>
                <AnimatedButton className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600">
                  <Link to="/contact">{t("home.getInTouch")}</Link>
                </AnimatedButton>
              </div>

              {/* Contact Info */}
              <div
                ref={contactInfoRef}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto"
              >
                <div className="flex items-center justify-center space-x-2 text-blue-100 hover:text-yellow-300 transition-colors">
                  <Phone size={18} />
                  <span className="text-sm">+977 9811358831</span>
                </div>
                <div className="flex items-center justify-center space-x-2 text-blue-100 hover:text-yellow-300 transition-colors">
                  <Mail size={18} />
                  <span className="text-sm">Premdiprai1234@gmail.com</span>
                </div>
                <div className="flex items-center justify-center space-x-2 text-blue-100 hover:text-yellow-300 transition-colors">
                  <MapPin size={18} />
                  <span className="text-sm">Dharan, Sunsari</span>
                </div>
                <div className="flex items-center justify-center space-x-2 text-blue-100 hover:text-yellow-300 transition-colors">
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

            <div ref={skillsInViewRef}>
              <div ref={skillsRef} className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
                {[
                  "HTML/CSS",
                  "JavaScript",
                  "React Native",
                  "Node.js",
                  "MySQL",
                  "Python",
                ].map((skill) => (
                  <div
                    key={skill}
                    className="bg-gray-50 rounded-lg p-4 text-center hover:bg-blue-50 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 cursor-pointer"
                  >
                    <span className="font-medium text-gray-800">{skill}</span>
                  </div>
                ))}
              </div>
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
              <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {t("projects.projectList.libraryManagement.title")}
                </h3>
                <p className="text-gray-600 mb-4">{t("projects.projectList.libraryManagement.description")}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {["HTML", "CSS", "JavaScript", "JDBC", "MySQL", "Java"].map((tech) => (
                    <span
                      key={tech}
                      className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm hover:bg-blue-200 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{t("projects.projectList.gymTrainee.title")}</h3>
                <p className="text-gray-600 mb-4">{t("projects.projectList.gymTrainee.description")}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {["React Native", "Node.js", "MySQL"].map((tech) => (
                    <span
                      key={tech}
                      className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm hover:bg-green-200 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="text-center">
              <AnimatedButton className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 inline-flex items-center">
                <Link to="/projects" className="flex items-center">
                  {t("home.viewAllProjects")} <ArrowRight className="ml-2" size={18} />
                </Link>
              </AnimatedButton>
            </div>
          </div>
        </section>
      </div>
    </AnimatedPage>
  )
}
