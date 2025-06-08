import { Card, CardContent } from "@/components/ui/card"
import { Star, Award, Trophy, Medal, Sparkles } from "lucide-react"

export default function Awards() {
  return (
    <section className="py-24 bg-gradient-to-r from-amber-50 via-yellow-50 to-orange-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <div className="inline-block bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent text-lg font-semibold tracking-wider mb-4">
            AWARDS
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-stone-800 mb-8 tracking-tight">
            受賞
            <span className="bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">実績</span>
          </h2>
          <p className="text-xl text-stone-600 max-w-3xl mx-auto">
            お客様からの高い評価をいただき、権威ある賞を受賞いたしました
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <Card className="overflow-hidden shadow-2xl border-4 border-amber-200 bg-gradient-to-br from-white via-amber-50 to-yellow-50">
            <CardContent className="p-16 text-center">
              <div className="mb-12">
                <div className="inline-flex items-center justify-center w-32 h-32 bg-gradient-to-r from-amber-400 via-yellow-400 to-orange-500 rounded-full mb-8 shadow-2xl">
                  <Trophy className="w-16 h-16 text-white" />
                </div>
                <h3 className="text-4xl font-bold text-stone-800 mb-6 tracking-tight">
                  2024年 トリップアドバイザー
                  <br />
                  <span className="text-amber-600">アドワーズ受賞</span>
                </h3>
                <p className="text-xl text-stone-600 mb-8 leading-relaxed">
                  世界最大級の旅行プラットフォーム「トリップアドバイザー」にて、
                  <br />
                  優秀なサービス品質が認められ、栄誉ある賞を受賞いたしました。
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8 mb-12">
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-full mb-4 shadow-lg">
                    <Star className="w-10 h-10 text-white fill-current" />
                  </div>
                  <div className="text-3xl font-bold text-blue-600 mb-1">4.9</div>
                  <div className="text-stone-600 font-semibold">平均評価</div>
                </div>
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-full mb-4 shadow-lg">
                    <Award className="w-10 h-10 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-emerald-600 mb-1">98%</div>
                  <div className="text-stone-600 font-semibold">満足度</div>
                </div>
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full mb-4 shadow-lg">
                    <Medal className="w-10 h-10 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-purple-600 mb-1">500+</div>
                  <div className="text-stone-600 font-semibold">レビュー数</div>
                </div>
              </div>

              <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-amber-200">
                <div className="flex items-center justify-center mb-6">
                  <Sparkles className="w-8 h-8 text-amber-500 mr-3" />
                  <h4 className="font-bold text-stone-800 text-2xl tracking-tight">受賞理由</h4>
                </div>
                <div className="grid md:grid-cols-2 gap-6 text-stone-600">
                  <div className="flex items-center">
                    <span className="w-3 h-3 bg-amber-500 rounded-full mr-3"></span>
                    継続的な高評価の維持
                  </div>
                  <div className="flex items-center">
                    <span className="w-3 h-3 bg-amber-500 rounded-full mr-3"></span>
                    優れたカスタマーサービス
                  </div>
                  <div className="flex items-center">
                    <span className="w-3 h-3 bg-amber-500 rounded-full mr-3"></span>
                    独自性のあるウェルネス体験
                  </div>
                  <div className="flex items-center">
                    <span className="w-3 h-3 bg-amber-500 rounded-full mr-3"></span>
                    地域貢献への取り組み
                  </div>
                  <div className="flex items-center">
                    <span className="w-3 h-3 bg-amber-500 rounded-full mr-3"></span>
                    革新的な予約システム
                  </div>
                  <div className="flex items-center">
                    <span className="w-3 h-3 bg-amber-500 rounded-full mr-3"></span>
                    持続可能な観光の推進
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="text-center mt-16">
          <p className="text-xl text-stone-600 max-w-3xl mx-auto leading-relaxed">
            この受賞は、お客様一人ひとりからいただいた貴重なご意見とご支援の賜物です。
            <br />
            今後も変わらぬ品質でサービスを提供し、奄美大島の魅力をお届けしてまいります。
          </p>
        </div>
      </div>
    </section>
  )
}
