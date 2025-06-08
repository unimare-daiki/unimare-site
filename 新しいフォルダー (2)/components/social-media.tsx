"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Instagram, Youtube, ExternalLink } from "lucide-react"

export default function SocialMedia() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">SNS & 動画</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            InstagramやYouTubeで最新の体験情報や美しい奄美の風景をお届けしています。
            <br />
            リアルな体験の様子をぜひご覧ください。
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Instagram Section */}
          <Card className="overflow-hidden shadow-xl">
            <CardHeader className="bg-gradient-to-r from-purple-500 to-pink-500 text-white">
              <CardTitle className="flex items-center space-x-3 text-2xl">
                <Instagram className="w-8 h-8" />
                <span>Instagram</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="space-y-4">
                <p className="text-gray-600 leading-relaxed">
                  日々の体験の様子や奄美大島の美しい瞬間を投稿しています。 お客様の笑顔や自然の絶景をお楽しみください。
                </p>

                {/* Instagram Post Preview */}
                <div className="grid grid-cols-3 gap-2">
                  <div className="aspect-square bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg flex items-center justify-center">
                    <span className="text-white text-xs font-semibold">海洋体験</span>
                  </div>
                  <div className="aspect-square bg-gradient-to-br from-green-400 to-green-600 rounded-lg flex items-center justify-center">
                    <span className="text-white text-xs font-semibold">森林浴</span>
                  </div>
                  <div className="aspect-square bg-gradient-to-br from-purple-400 to-purple-600 rounded-lg flex items-center justify-center">
                    <span className="text-white text-xs font-semibold">マッサージ</span>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="flex items-center space-x-2 mb-2">
                    <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
                    <span className="font-semibold">@unimare_amami</span>
                  </div>
                  <p className="text-sm text-gray-600">
                    今日も素晴らしい海洋体験でした！🌊✨
                    <br />
                    #奄美大島 #海洋体験 #UNIMARE
                  </p>
                  <div className="flex items-center space-x-4 mt-2 text-xs text-gray-500">
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
              </div>
            </CardContent>
          </Card>

          {/* YouTube Section */}
          <Card className="overflow-hidden shadow-xl">
            <CardHeader className="bg-gradient-to-r from-red-500 to-red-600 text-white">
              <CardTitle className="flex items-center space-x-3 text-2xl">
                <Youtube className="w-8 h-8" />
                <span>YouTube</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="space-y-4">
                <p className="text-gray-600 leading-relaxed">
                  体験ツアーの詳細な様子や奄美大島の魅力を動画でお届け。 実際の体験の雰囲気を事前にご確認いただけます。
                </p>

                {/* YouTube Video Preview */}
                <div className="relative aspect-video bg-gray-200 rounded-lg overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-green-500 flex items-center justify-center">
                    <div className="text-center text-white">
                      <Youtube className="w-16 h-16 mx-auto mb-2" />
                      <p className="font-semibold">奄美大島 海洋体験ツアー</p>
                      <p className="text-sm opacity-90">完全版 - 2024</p>
                    </div>
                  </div>
                  <div className="absolute bottom-2 right-2 bg-black/70 text-white px-2 py-1 rounded text-xs">
                    15:32
                  </div>
                </div>

                <div className="space-y-3">
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
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Social Stats */}
        <div className="mt-16 text-center">
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6">
              <Instagram className="w-12 h-12 text-purple-500 mx-auto mb-3" />
              <div className="text-3xl font-bold text-gray-900">2.5K+</div>
              <div className="text-gray-600">フォロワー</div>
            </div>
            <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-xl p-6">
              <Youtube className="w-12 h-12 text-red-500 mx-auto mb-3" />
              <div className="text-3xl font-bold text-gray-900">1.2K+</div>
              <div className="text-gray-600">チャンネル登録者</div>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-6">
              <div className="text-4xl mb-3">⭐</div>
              <div className="text-3xl font-bold text-gray-900">4.9</div>
              <div className="text-gray-600">平均評価</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
