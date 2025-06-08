"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X, Instagram, Youtube, Phone, Star } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMenuOpen(false)
  }

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/95 backdrop-blur-md shadow-xl" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className={`text-3xl font-bold transition-colors ${isScrolled ? "text-gray-900" : "text-white"}`}
          >
            UNIMARE
          </Link>

          {/* Award Badge */}
          <div className="hidden md:flex items-center">
            <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-3 py-1 rounded-full text-xs font-bold flex items-center space-x-1 mr-6">
              <Star className="w-3 h-3 fill-current" />
              <span>2024年受賞</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("tour-lineup")}
              className={`font-semibold transition-colors hover:text-blue-500 ${
                isScrolled ? "text-gray-700" : "text-white"
              }`}
            >
              体験メニュー
            </button>
            <button
              onClick={() => scrollToSection("pricing-calculator")}
              className={`font-semibold transition-colors hover:text-blue-500 ${
                isScrolled ? "text-gray-700" : "text-white"
              }`}
            >
              料金計算
            </button>
            <button
              onClick={() => scrollToSection("testimonials")}
              className={`font-semibold transition-colors hover:text-blue-500 ${
                isScrolled ? "text-gray-700" : "text-white"
              }`}
            >
              お客様の声
            </button>
            <button
              onClick={() => scrollToSection("faq")}
              className={`font-semibold transition-colors hover:text-blue-500 ${
                isScrolled ? "text-gray-700" : "text-white"
              }`}
            >
              よくある質問
            </button>
          </nav>

          {/* Contact & Social */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link
              href="tel:0997-XX-XXXX"
              className={`transition-colors hover:text-blue-500 ${isScrolled ? "text-gray-700" : "text-white"}`}
            >
              <Phone className="w-5 h-5" />
            </Link>
            <Link
              href="#"
              className={`transition-colors hover:text-blue-500 ${isScrolled ? "text-gray-700" : "text-white"}`}
            >
              <Instagram className="w-5 h-5" />
            </Link>
            <Link
              href="#"
              className={`transition-colors hover:text-blue-500 ${isScrolled ? "text-gray-700" : "text-white"}`}
            >
              <Youtube className="w-5 h-5" />
            </Link>
            <Button
              onClick={() => scrollToSection("contact")}
              className="bg-gradient-to-r from-blue-600 to-emerald-600 hover:from-blue-700 hover:to-emerald-700 text-white px-6 py-2 rounded-full font-bold shadow-lg"
            >
              予約する
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className={`lg:hidden ${isScrolled ? "text-gray-900" : "text-white"}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="lg:hidden mt-4 pb-4 border-t border-gray-200 bg-white rounded-lg shadow-lg">
            <div className="flex flex-col space-y-4 pt-4 px-4">
              <button
                onClick={() => scrollToSection("tour-lineup")}
                className="text-gray-700 hover:text-blue-500 transition-colors text-left font-semibold"
              >
                体験メニュー
              </button>
              <button
                onClick={() => scrollToSection("pricing-calculator")}
                className="text-gray-700 hover:text-blue-500 transition-colors text-left font-semibold"
              >
                料金計算
              </button>
              <button
                onClick={() => scrollToSection("testimonials")}
                className="text-gray-700 hover:text-blue-500 transition-colors text-left font-semibold"
              >
                お客様の声
              </button>
              <button
                onClick={() => scrollToSection("faq")}
                className="text-gray-700 hover:text-blue-500 transition-colors text-left font-semibold"
              >
                よくある質問
              </button>
              <div className="flex items-center space-x-4 pt-4 border-t border-gray-200">
                <Link href="tel:0997-XX-XXXX" className="text-gray-700 hover:text-blue-500">
                  <Phone className="w-5 h-5" />
                </Link>
                <Link href="#" className="text-gray-700 hover:text-blue-500">
                  <Instagram className="w-5 h-5" />
                </Link>
                <Link href="#" className="text-gray-700 hover:text-blue-500">
                  <Youtube className="w-5 h-5" />
                </Link>
              </div>
              <Button
                onClick={() => scrollToSection("contact")}
                className="bg-gradient-to-r from-blue-600 to-emerald-600 hover:from-blue-700 hover:to-emerald-700 text-white font-bold py-3 rounded-lg"
              >
                予約する
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
