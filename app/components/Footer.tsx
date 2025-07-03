"use client"

import { useTranslation } from "react-i18next"
import { Github, Mail, Phone, Heart } from "lucide-react"
import { Link } from "react-router-dom"

export default function Footer() {
  const { t } = useTranslation()
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold mb-4">{t("home.name")}</h3>
            <p className="text-gray-300 mb-4">{t("footer.description")}</p>
            <div className="flex space-x-4">
              <a
                href="https://github.com/Premdeep69"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors"
              >
                <Github size={20} />
              </a>
              <a href="mailto:Premdiprai1234@gmail.com" className="text-gray-300 hover:text-white transition-colors">
                <Mail size={20} />
              </a>
              <a href="tel:+9779811358831" className="text-gray-300 hover:text-white transition-colors">
                <Phone size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">{t("footer.quickLinks")}</h4>
            <ul className="space-y-2">
              <li>
                <a href="/" className="text-gray-300 hover:text-white transition-colors">
                  {t("nav.home")}
                </a>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-white transition-colors">
                  {t("nav.about")}
                </Link>
              </li>
              <li>
                <Link to="/projects" className="text-gray-300 hover:text-white transition-colors">
                  {t("nav.projects")}
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-white transition-colors">
                  {t("nav.contact")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">{t("footer.getInTouch")}</h4>
            <div className="space-y-2 text-gray-300">
              <p>📧 Premdiprai1234@gmail.com</p>
              <p>📱 +977 9811358831</p>
              <p>📍 Dharan, Sunsari</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-300 flex items-center justify-center">
            © {currentYear} {t("home.name")}. {t("footer.madeWith")}{" "}
            <Heart className="text-red-500 mx-1" size={16} fill="currentColor" />
            {t("footer.and")}. {t("footer.allRights")}
          </p>
        </div>
      </div>
    </footer>
  )
}     