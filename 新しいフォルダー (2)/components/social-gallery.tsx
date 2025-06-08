"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Instagram, Youtube, ExternalLink, Heart, Play } from "lucide-react"

export default function SocialGallery() {
  return (
    <section className="py-24 bg-gradient-to-b from-stone-50 to-amber-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <div className="inline-block bg-gradient-to-r from-emerald-500 to-teal-500 bg-clip-text text-transparent text-lg font-semibold tracking-wider mb-4">
            SOCIAL GALLERY
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-stone-800 mb-8 tracking-tight">
            写真・動画
            <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
              ギャラリー
            </span>
          </h2>
          <p className="text-xl text-stone-600 max-w-3xl mx-auto leading-relaxed">
            温かみのある写真と体験の様子をSNSでお届け。
            <br />
            リアルタイムで奄美の魅力をお楽しみください。
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Instagram */}
          <Card className="overflow-hidden shadow-2xl border-2 border-pink-100 bg-gradient-to-br from-white to-pink-50">
            <CardContent className="p-10">
              <div className="flex items-center mb-8">
                <div className="p-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl mr-6 shadow-lg">
                  <Instagram className="w-10 h-10 text-white" />
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-stone-800 tracking-tight">Instagram</h3>
                  <p className="text-stone-600 text-lg">@unimare_amami</p>
                </div>
              </div>

              <p className="text-stone-600 mb-8 leading-relaxed text-lg">
                日々の体験の様子や奄美大島の美しい瞬間を投稿中。
                お客様の自然な笑顔や絶景をリアルタイムでお届けしています。
              </p>

              <div className="grid grid-cols-3 gap-3 mb-8">
                <div className="aspect-square bg-gradient-to-br from-blue-400 to-cyan-500 rounded-xl flex items-center justify-center shadow-lg">
                  <span className="text-white text-sm font-bold text-center">海洋体験</span>
                </div>
                <div className="aspect-square bg-gradient-to-br from-green-400 to-emerald-500 rounded-xl flex items-center justify-center shadow-lg">
                  <span className="text-white text-sm font-bold text-center">森林浴</span>
                </div>
                <div className="aspect-square bg-gradient-to-br from-amber-400 to-orange-500 rounded-xl flex items-center justify-center shadow-lg">
                  <span className="text-white text-sm font-bold text-center">ウェルネス</span>
                </div>
              </div>

              <div className="bg-stone-50 rounded-2xl p-6 mb-8 border border-stone-200">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
                  <span className="font-bold text-stone-800">@unimare_amami</span>
                </div>
                <p className="text-stone-600 mb-3 leading-relaxed">
                  今日も素晴らしい海洋体験でした！🌊✨
                  <br />
                  自然なままの笑顔が一番美しい
                  <br />
                  #奄美大島 #ウェルネス #UNIMARE #自然体験
                </p>
                <div className="flex items-center space-x-6 text-sm text-stone-500">
                  <span className="flex items-center">
                    <Heart className="w-4 h-4 mr-1 text-red-500" />
                    234
                  </span>
                  <span>💬 12</span>
                  <span>📤 8</span>
                </div>
              </div>

              <Button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white py-4 text-lg font-bold rounded-xl shadow-lg">
                <Instagram className="w-6 h-6 mr-3" />
                Instagramをフォロー
                <ExternalLink className="w-5 h-5 ml-3" />
              </Button>
            </CardContent>
          </Card>

          {/* YouTube */}
          <Card className="overflow-hidden shadow-2xl border-2 border-red-100 bg-gradient-to-br from-white to-red-50">
            <CardContent className="p-10">
              <div className="flex items-center mb-8">
                <div className="p-4 bg-gradient-to-r from-red-500 to-red-600 rounded-2xl mr-6 shadow-lg">
                  <Youtube className="w-10 h-10 text-white" />
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-stone-800 tracking-tight">YouTube</h3>
                  <p className="text-stone-600 text-lg">UNIMARE Channel</p>
                </div>
              </div>

              <p className="text-stone-600 mb-8 leading-relaxed text-lg">
                体験ツアーの詳細な様子や奄美大島の魅力を動画でお届け。 実際の体験の雰囲気を事前にご確認いただけます。
              </p>

              <div className="relative aspect-video bg-gradient-to-br from-blue-500 to-emerald-500 rounded-2xl overflow-hidden mb-8 shadow-lg">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-white">
                    <Play className="w-20 h-20 mx-auto mb-4 opacity-80" />
                    <p className="font-bold text-xl">奄美大島 ウェルネス体験</p>
                    <p className="text-sm opacity-90">完全版 - 2024</p>
                  </div>
                </div>
                <div className="absolute bottom-3 right-3 bg-black/70 text-white px-3 py-1 rounded-lg text-sm font-semibold">
                  15:32
                </div>
              </div>

              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-4 p-4 bg-stone-50 rounded-xl border border-stone-200">
                  <div className="w-16 h-12 bg-red-500 rounded-lg flex items-center justify-center shadow">
                    <Youtube className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <p className="font-bold text-stone-800">直感リトリートツアー体験記</p>
                    <p className="text-sm text-stone-500">12,345 回視聴 • 1週間前</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4 p-4 bg-stone-50 rounded-xl border border-stone-200">
                  <div className="w-16 h-12 bg-red-500 rounded-lg flex items-center justify-center shadow">
                    <Youtube className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <p className="font-bold text-stone-800">サンセット倍音ツアー</p>
                    <p className="text-sm text-stone-500">8,901 回視聴 • 2週間前</p>
                  </div>
                </div>
              </div>

              <Button className="w-full bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white py-4 text-lg font-bold rounded-xl shadow-lg">
                <Youtube className="w-6 h-6 mr-3" />
                YouTubeチャンネル登録
                <ExternalLink className="w-5 h-5 ml-3" />
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Social Stats */}
        <div className="mt-20 text-center">
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 border-2 border-purple-100 shadow-lg">
              <Instagram className="w-16 h-16 text-purple-500 mx-auto mb-4" />
              <div className="text-4xl font-bold text-stone-800 mb-2">2.5K+</div>
              <div className="text-stone-600 font-semibold">フォロワー</div>
            </div>
            <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-2xl p-8 border-2 border-red-100 shadow-lg">
              <Youtube className="w-16 h-16 text-red-500 mx-auto mb-4" />
              <div className="text-4xl font-bold text-stone-800 mb-2">1.2K+</div>
              <div className="text-stone-600 font-semibold">チャンネル登録者</div>
            </div>
            <div className="bg-gradient-to-br from-amber-50 to-yellow-50 rounded-2xl p-8 border-2 border-amber-100 shadow-lg">
              <div className="text-5xl mb-4">⭐</div>
              <div className="text-4xl font-bold text-stone-800 mb-2">4.9</div>
              <div className="text-stone-600 font-semibold">平均評価</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
