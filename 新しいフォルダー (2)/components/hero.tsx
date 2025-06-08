"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { ChevronLeft, ChevronRight, Sparkles, Heart, Mountain } from "lucide-react"

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const heroImages = [
    {
      src: "/images/ocean-view.jpg",
      alt: "奄美大島の美しいエメラルドグリーンの海",
      title: "あなただけの旅を、奄美で叶える",
      subtitle: "自然と癒しを自由に組み合わせる、完全カスタム旅",
      accent: "海とひとつに",
    },
    {
      src: "/images/diving-experience.jpg",
      alt: "ウミガメとのシュノーケリング体験",
      title: "ウミガメと泳ぐ、感動の瞬間",
      subtitle: "透明度抜群の海で、特別な出会いを",
      accent: "生命とつながる",
    },
    {
      src: "/images/forest-experience.jpg",
      alt: "原生林での癒し体験",
      title: "世界自然遺産の森で、心を整える",
      subtitle: "古の森が教える、本当の豊かさ",
      accent: "森に還る",
    },
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [heroImages.length])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroImages.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroImages.length) % heroImages.length)
  }

  const scrollToCalculator = () => {
    const element = document.getElementById("pricing-calculator")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Slideshow */}
      <div className="absolute inset-0 z-0">
        {heroImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-2000 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={image.src || "/placeholder.svg"}
              alt={image.alt}
              fill
              className="object-cover"
              priority={index === 0}
            />
          </div>
        ))}
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/30 to-black/50" />
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-6 top-1/2 transform -translate-y-1/2 z-20 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full p-4 transition-all border border-white/20"
        aria-label="前の画像"
      >
        <ChevronLeft className="w-6 h-6 text-white" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-6 top-1/2 transform -translate-y-1/2 z-20 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full p-4 transition-all border border-white/20"
        aria-label="次の画像"
      >
        <ChevronRight className="w-6 h-6 text-white" />
      </button>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-6 max-w-6xl mx-auto">
        {/* Award Badge */}
        <div className="mb-8 flex justify-center">
          <div className="bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500 text-amber-900 px-8 py-3 rounded-full font-bold text-sm flex items-center space-x-2 shadow-2xl border border-amber-300">
            <Sparkles className="w-5 h-5 fill-current" />
            <span>2024年 トリップアドバイザー アドワーズ受賞</span>
          </div>
        </div>

        {/* Main Title */}
        <div className="mb-12">
          <div className="mb-4">
            <span className="inline-block bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent text-xl md:text-2xl font-medium tracking-wider">
              {heroImages[currentSlide].accent}
            </span>
          </div>
          <h1 className="text-4xl md:text-7xl font-bold mb-6 leading-tight tracking-tight">
            <span className="block text-white">奄美大島</span>
            <span className="block bg-gradient-to-r from-emerald-300 via-teal-300 to-cyan-300 bg-clip-text text-transparent">
              ウェルネス＆
            </span>
            <span className="block bg-gradient-to-r from-emerald-300 via-teal-300 to-cyan-300 bg-clip-text text-transparent">
              アドベンチャー
            </span>
          </h1>
          <div className="text-2xl md:text-4xl mb-6 font-light text-amber-100">{heroImages[currentSlide].title}</div>
          <p className="text-lg md:text-xl mb-8 opacity-90 max-w-3xl mx-auto leading-relaxed text-stone-100">
            {heroImages[currentSlide].subtitle}
          </p>
        </div>

        {/* Key Features */}
        <div className="grid md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto">
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all">
            <Heart className="w-10 h-10 mx-auto mb-3 text-rose-300" />
            <p className="font-bold text-lg mb-1">1名からOK</p>
            <p className="text-sm opacity-80 text-stone-200">奄美では珍しい一人旅対応</p>
          </div>
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all">
            <Sparkles className="w-10 h-10 mx-auto mb-3 text-amber-300" />
            <p className="font-bold text-lg mb-1">完全カスタム</p>
            <p className="text-sm opacity-80 text-stone-200">あなただけの特別な組み合わせ</p>
          </div>
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all">
            <Mountain className="w-10 h-10 mx-auto mb-3 text-emerald-300" />
            <p className="font-bold text-lg mb-1">自然と調和</p>
            <p className="text-sm opacity-80 text-stone-200">心身ともに深いリフレッシュ</p>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <Button
            size="lg"
            className="bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 hover:from-emerald-700 hover:via-teal-700 hover:to-cyan-700 text-white px-12 py-4 text-lg font-bold rounded-full shadow-2xl hover:shadow-3xl transition-all transform hover:scale-105 border border-emerald-400/30"
            onClick={scrollToCalculator}
          >
            料金を確認する
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-2 border-white/60 text-white hover:bg-white/10 hover:border-white px-12 py-4 text-lg font-bold rounded-full backdrop-blur-md"
            onClick={() => {
              const element = document.getElementById("tour-lineup")
              if (element) {
                element.scrollIntoView({ behavior: "smooth" })
              }
            }}
          >
            体験を見る
          </Button>
        </div>

        {/* Slide Indicators */}
        <div className="flex justify-center mt-16 space-x-3">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-4 h-4 rounded-full transition-all ${
                index === currentSlide ? "bg-white scale-125 shadow-lg" : "bg-white/40 hover:bg-white/60"
              }`}
              aria-label={`スライド ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
