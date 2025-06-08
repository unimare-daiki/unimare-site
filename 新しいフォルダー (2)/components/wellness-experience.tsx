import { Card, CardContent } from "@/components/ui/card"
import { Heart, Sparkles, Mountain, Waves } from "lucide-react"

export default function WellnessExperience() {
  return (
    <section className="py-24 bg-gradient-to-b from-stone-50 to-amber-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <div className="inline-block bg-gradient-to-r from-emerald-500 to-teal-500 bg-clip-text text-transparent text-lg font-semibold tracking-wider mb-4">
            WELLNESS EXPERIENCE
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-stone-800 mb-8 tracking-tight">
            観光体験ツアー内の
            <br />
            <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
              ウェルネスについて
            </span>
          </h2>
          <p className="text-xl text-stone-600 max-w-4xl mx-auto leading-relaxed">
            「自然の中での癒し」を体感する、ガイドの表現や自然の受け止め方、
            <br />
            インタープリテーションを通じて心身ともにリフレッシュできる体験をお届けします。
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Main Explanation */}
          <Card className="mb-16 bg-gradient-to-br from-emerald-50 to-teal-50 border-2 border-emerald-200 shadow-xl">
            <CardContent className="p-12">
              <div className="text-center mb-8">
                <Sparkles className="w-16 h-16 mx-auto text-emerald-500 mb-4" />
                <h3 className="text-3xl font-bold text-stone-800 mb-6 tracking-tight">
                  インタープリテーション（Interpretation）とは
                </h3>
              </div>
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <p className="text-lg text-stone-600 leading-relaxed mb-6">
                    ガイドツアーにおける「インタープリテーション」とは、ただ情報を説明するのではなく、
                    訪問者がその場所の価値や意味を深く理解し、心に響くように伝える技術や方法のこと。
                  </p>
                  <p className="text-lg text-stone-600 leading-relaxed">
                    「心に残るガイドの話し方」や「体験の意味づけ」を大切にし、
                    お客様が「感動した」「気づきがあった」「もっと知りたくなった」と感じるように導きます。
                  </p>
                </div>
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg">
                  <h4 className="font-bold text-stone-800 mb-4 text-xl">お客様の声</h4>
                  <div className="space-y-4">
                    <div className="flex items-center text-emerald-700">
                      <Heart className="w-5 h-5 mr-2" />
                      <span>「感動した」</span>
                    </div>
                    <div className="flex items-center text-emerald-700">
                      <Sparkles className="w-5 h-5 mr-2" />
                      <span>「気づきがあった」</span>
                    </div>
                    <div className="flex items-center text-emerald-700">
                      <Mountain className="w-5 h-5 mr-2" />
                      <span>「もっと知りたくなった」</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Wellness Features */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <Card className="bg-gradient-to-br from-amber-50 to-orange-50 border-2 border-amber-200 hover:shadow-xl transition-all">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="p-4 bg-amber-100 rounded-2xl mr-4">
                    <Waves className="w-8 h-8 text-amber-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-stone-800 tracking-tight">全ツアーにウェルネス意識</h3>
                </div>
                <p className="text-stone-600 leading-relaxed">
                  すべてのツアーにウェルネスの意識を込め、自然との調和を通じて心身のバランスを整える体験をお届けします。
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-purple-50 to-pink-50 border-2 border-purple-200 hover:shadow-xl transition-all">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="p-4 bg-purple-100 rounded-2xl mr-4">
                    <Mountain className="w-8 h-8 text-purple-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-stone-800 tracking-tight">特別なウェルネス体験</h3>
                </div>
                <p className="text-stone-600 leading-relaxed">
                  特にサンセット&ナイト倍音ツアーや直感リトリートツアーでは、ウェルネスを最大限に感じられるよう設計しています。
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Direct Intuition Retreat */}
          <Card className="bg-gradient-to-br from-rose-50 to-pink-50 border-2 border-rose-200 shadow-xl">
            <CardContent className="p-12">
              <div className="text-center mb-8">
                <Heart className="w-16 h-16 mx-auto text-rose-500 mb-4" />
                <h3 className="text-3xl font-bold text-stone-800 mb-6 tracking-tight">直感リトリートツアーについて</h3>
                <p className="text-lg text-stone-600 mb-8">最大2名までの1日プラン。こんな人におすすめ！</p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  "旅をスペシャルにしたい人",
                  "当日のお天気に合わせてどこへ行くか、何をするか決めたい人",
                  "自分の枠を超えたい人",
                  "本当の自分を見つけたい人",
                  "今より直感を磨きたい人",
                  "心の声に耳を傾けたい人",
                ].map((item, index) => (
                  <div
                    key={index}
                    className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-all"
                  >
                    <div className="flex items-center">
                      <span className="w-3 h-3 bg-rose-500 rounded-full mr-3"></span>
                      <span className="text-stone-700 font-medium">{item}</span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
