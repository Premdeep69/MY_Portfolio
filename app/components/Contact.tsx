"use client"

import type React from "react"

import { useRef, useState } from "react"
import { useTranslation } from "react-i18next"

import { CheckCircle, Github, Mail, MapPin, Phone, Send } from "lucide-react"
import { useGSAP } from "../hooks/useGSAP"
import { animateFormSuccess, animateSectionFadeIn } from "../utils/animation"
import AnimatedButton from "./AnimatedButton"
import AnimatedPage from "./AnimatedPage"

export default function Contact() {
  const { t } = useTranslation()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const headerRef = useRef<HTMLDivElement>(null)
  const contactInfoRef = useRef<HTMLDivElement>(null)
  const formRef = useRef<HTMLDivElement>(null)
  const successRef = useRef<HTMLDivElement>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitted(true)
    if (successRef.current) {
      animateFormSuccess(successRef.current)
    }
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({ name: "", email: "", subject: "", message: "" })
    }, 3000)
  }

  const contactInfo = [
    {
      icon: Phone,
      label: t("contact.labels.phone"),
      value: "+977 9811358831",
      href: "tel:+9779811358831",
    },
    {
      icon: Mail,
      label: t("contact.labels.email"),
      value: "Premdiprai1234@gmail.com",
      href: "mailto:Premdiprai1234@gmail.com",
    },
    {
      icon: MapPin,
      label: t("contact.labels.location"),
      value: "Dharan, Sunsari",
      href: "#",
    },
    {
      icon: Github,
      label: t("contact.labels.github"),
      value: "github.com/Premdeep69",
      href: "https://github.com/Premdeep69",
    },
  ]

  useGSAP(() => {
    if (headerRef.current) animateSectionFadeIn(headerRef.current, "up")
  }, [])
  useGSAP(() => {
    if (contactInfoRef.current) animateSectionFadeIn(contactInfoRef.current, "left")
  }, [])
  useGSAP(() => {
    if (formRef.current) animateSectionFadeIn(formRef.current, "right")
  }, [])

  return (
    <AnimatedPage>
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div ref={headerRef} className="text-center mb-16">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">{t("contact.title")}</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">{t("contact.subtitle")}</p>
          </div>
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div ref={contactInfoRef}>
              <h2 className="text-2xl font-bold text-gray-900 mb-8">{t("contact.contactInfo")}</h2>
              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <div key={index} className="flex items-center space-x-4 p-4 rounded-lg hover:bg-gray-50 transition-all duration-300 hover:shadow-md hover:-translate-y-1">
                    <div className="bg-blue-100 p-3 rounded-lg hover:bg-blue-200 transition-colors">
                      <item.icon className="text-blue-600" size={24} />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">{item.label}</p>
                      {item.href !== "#" ? (
                        <a
                          href={item.href}
                          target={item.href.startsWith("http") ? "_blank" : undefined}
                          rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                          className="text-blue-600 hover:text-blue-800 transition-colors hover:underline"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-gray-600">{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* Contact Form */}
            <div ref={formRef}>
              <h2 className="text-2xl font-bold text-gray-900 mb-8">{t("contact.sendMessage")}</h2>
              {isSubmitted ? (
                <div ref={successRef} className="bg-green-50 border border-green-200 rounded-lg p-8 text-center">
                  <CheckCircle className="text-green-600 mx-auto mb-4" size={48} />
                  <h3 className="text-lg font-semibold text-green-800 mb-2">{t("contact.form.successTitle")}</h3>
                  <p className="text-green-700">{t("contact.form.successMessage")}</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        {t("contact.form.name")} *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                        placeholder={t("contact.form.namePlaceholder")}
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        {t("contact.form.email")} *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                        placeholder={t("contact.form.emailPlaceholder")}
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                      {t("contact.form.subject")} *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                      placeholder={t("contact.form.subjectPlaceholder")}
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      {t("contact.form.message")} *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors resize-vertical"
                      placeholder={t("contact.form.messagePlaceholder")}
                    />
                  </div>
                  <AnimatedButton
                    type="submit"
                    className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center"
                  >
                    <Send className="mr-2" size={18} />
                    {t("contact.form.sendButton")}
                  </AnimatedButton>
                </form>
              )}
            </div>
          </div>
          {/* Reference Section */}
          <div className="mt-16 pt-16 border-t border-gray-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Reference</h2>
            <div className="max-w-md mx-auto bg-white rounded-lg shadow-md p-6 text-center">
              <h3 className="text-lg font-bold text-gray-900 mb-2">Delish Khadka</h3>
              <a href="mailto:delishkhadka@gmail.com" className="text-blue-600 hover:text-blue-800 transition-colors">
                delishkhadka@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </AnimatedPage>
  )
}
