"use client"

import { useState } from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { X, ChevronLeft, ChevronRight, Instagram, Youtube, ExternalLink } from "lucide-react"

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  const images = [
    { src: "/images/ocean-view.jpg", alt: "エメラルドグリーンの美しい奄美の海", category: "海洋体験" },
    { src: "/images/forest-experience.jpg", alt: "ガジュマルの巨木での自然体験", category: "森林体験" },
    { src: "/images/diving-experience.jpg", alt: "海中でのダイビング体験", category: "海洋体験" },
    { src: "/images/waterfall-experience.jpg", alt: "森の滝での癒し体験", category: "森林体験" },
    { src: "/images/sugarcane-field.jpg", alt: "サトウキビ畑での楽しい体験", category: "島の風景" },
    { src: "/images/forest-guide.jpg", alt: "原生林でのガイド体験", category: "森林体験" },
    { src: "/images/ancient-forest.jpg", alt: "神秘的な原生林散策", category: "森林体験" },
    { src: "/images/underwater-silhouette.jpg", alt: "海中でのシルエット", category: "海洋体験" },
  ]

  const openLightbox = (index: number) => {
    setSelectedImage(index)
  }

  const closeLightbox = () => {
    setSelectedImage(null)
  }

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % images.length)
    }
  }

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage - 1 + images.length) % images.length)
    }
  }

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            写真・動画
            <span className="bg-gradient-to-r from-blue-600 to-emerald-600 bg-clip-text text-transparent">
              ギャラリー
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            代表撮影の絶景写真と体験者の笑顔をご覧ください。
            <br />
            SNSでも最新の情報をお届けしています。
          </p>
        </div>

        {/* Photo Gallery */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">📸 代表撮影フォトギャラリー</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {images.map((image, index) => (
              <div
                key={index}
                className="relative group overflow-hidden rounded-xl shadow-lg cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                onClick={() => openLightbox(index)}
              >
                <div className="aspect-square relative">
                  <Image
                    src={image.src || "/placeholder.svg"}
                    alt={image.alt}
                    fill
                    className="object-cover transition-transform group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="absolute bottom-4 left-4 text-white">
                    <p className="text-sm font-semibold">{image.category}</p>
                    <p className="text-xs opacity-90">{image.alt}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Social Media Section */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {/* Instagram */}
          <Card className="overflow-hidden shadow-xl">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mr-4">
                  <Instagram className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">Instagram</h3>
                  <p className="text-gray-600">@unimare_amami</p>
                </div>
              </div>

              <p className="text-gray-600 mb-6 leading-relaxed">
                日々の体験の様子や奄美大島の美しい瞬間を投稿中。
                お客様の笑顔や自然の絶景をリアルタイムでお届けしています。
              </p>

              <div className="grid grid-cols-3 gap-2 mb-6">
                <div className="aspect-square bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg flex items-center justify-center">
                  <span className="text-white text-xs font-semibold text-center">海洋体験</span>
                </div>
                <div className="aspect-square bg-gradient-to-br from-green-400 to-green-600 rounded-lg flex items-center justify-center">
                  <span className="text-white text-xs font-semibold text-center">森林浴</span>
                </div>
                <div className="aspect-square bg-gradient-to-br from-purple-400 to-purple-600 rounded-lg flex items-center justify-center">
                  <span className="text-white text-xs font-semibold text-center">マッサージ</span>
                </div>
              </div>

              <div className="bg-gray-50 rounded-lg p-4 mb-6">
                <div className="flex items-center space-x-2 mb-2">
                  <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
                  <span className="font-semibold">@unimare_amami</span>
                </div>
                <p className="text-sm text-gray-600 mb-2">
                  今日も素晴らしい海洋体験でした！🌊✨
                  <br />
                  #奄美大島 #海洋体験 #UNIMARE #ウミガメ
                </p>
                <div className="flex items-center space-x-4 text-xs text-gray-500">
                  <span>❤️ 234</span>
                  <span>💬 12</span>
                  <span>📤 8</span>
                </div>
              </div>

              <Button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white">
                <Instagram className="w-5 h-5 mr-2" />
                Instagramをフォロー
                <ExternalLink className="w-4 h-4 ml-2" />
              </Button>
            </CardContent>
          </Card>

          {/* YouTube */}
          <Card className="overflow-hidden shadow-xl">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-gradient-to-r from-red-500 to-red-600 rounded-full mr-4">
                  <Youtube className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">YouTube</h3>
                  <p className="text-gray-600">UNIMARE Channel</p>
                </div>
              </div>

              <p className="text-gray-600 mb-6 leading-relaxed">
                体験ツアーの詳細な様子や奄美大島の魅力を動画でお届け。 実際の体験の雰囲気を事前にご確認いただけます。
              </p>

              <div className="relative aspect-video bg-gray-200 rounded-lg overflow-hidden mb-6">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-green-500 flex items-center justify-center">
                  <div className="text-center text-white">
                    <Youtube className="w-16 h-16 mx-auto mb-2" />
                    <p className="font-semibold">奄美大島 海洋体験ツアー</p>
                    <p className="text-sm opacity-90">完全版 - 2024</p>
                  </div>
                </div>
                <div className="absolute bottom-2 right-2 bg-black/70 text-white px-2 py-1 rounded text-xs">15:32</div>
              </div>

              <div className="space-y-3 mb-6">
                <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                  <div className="w-12 h-8 bg-red-500 rounded flex items-center justify-center">
                    <Youtube className="w-4 h-4 text-white" />
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold text-sm">森林浴ツアー体験記</p>
                    <p className="text-xs text-gray-500">12,345 回視聴 • 1週間前</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                  <div className="w-12 h-8 bg-red-500 rounded flex items-center justify-center">
                    <Youtube className="w-4 h-4 text-white" />
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold text-sm">自然の中でのマッサージ</p>
                    <p className="text-xs text-gray-500">8,901 回視聴 • 2週間前</p>
                  </div>
                </div>
              </div>

              <Button className="w-full bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white">
                <Youtube className="w-5 h-5 mr-2" />
                YouTubeチャンネル登録
                <ExternalLink className="w-4 h-4 ml-2" />
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Lightbox */}
        {selectedImage !== null && (
          <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
            <button onClick={closeLightbox} className="absolute top-4 right-4 text-white hover:text-gray-300 z-10">
              <X className="w-8 h-8" />
            </button>

            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 z-10"
            >
              <ChevronLeft className="w-8 h-8" />
            </button>

            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 z-10"
            >
              <ChevronRight className="w-8 h-8" />
            </button>

            <div className="relative max-w-4xl max-h-full">
              <Image
                src={images[selectedImage].src || "/placeholder.svg"}
                alt={images[selectedImage].alt}
                width={800}
                height={600}
                className="max-w-full max-h-full object-contain"
              />
              <div className="absolute bottom-4 left-4 text-white bg-black/50 rounded-lg p-3">
                <p className="font-semibold">{images[selectedImage].category}</p>
                <p className="text-sm opacity-90">{images[selectedImage].alt}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
