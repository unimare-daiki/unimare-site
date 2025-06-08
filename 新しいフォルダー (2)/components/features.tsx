import { Card, CardContent } from "@/components/ui/card"
import { Heart, Palette, Camera, Sparkles, Award, Calendar } from "lucide-react"

export default function Features() {
  const features = [
    {
      icon: <Heart className="w-12 h-12 text-rose-500" />,
      title: "1名から参加OK",
      description: "奄美では珍しい一人旅対応",
      detail:
        "お一人様でも心から安心してご参加いただけます。自分だけの時間を大切に、新しい出会いも楽しめる特別な体験を。",
      color: "from-rose-50 to-pink-50",
      accent: "border-rose-200",
    },
    {
      icon: <Palette className="w-12 h-12 text-emerald-500" />,
      title: "完全カスタマイズ",
      description: "自然と癒しを自由に組み合わせ",
      detail: "半日・1日プランを問わず、お客様の心に響く体験を自由に組み合わせ。あなただけの特別な島時間を創造します。",
      color: "from-emerald-50 to-teal-50",
      accent: "border-emerald-200",
    },
    {
      icon: <Sparkles className="w-12 h-12 text-amber-500" />,
      title: "ウェルネス体験",
      description: "心身ともに深いリフレッシュ",
      detail: "マッサージは独立したプランとして、観光体験と組み合わせた1日プランでご案内。自然と調和した真の癒しを。",
      color: "from-amber-50 to-yellow-50",
      accent: "border-amber-200",
    },
    {
      icon: <Camera className="w-12 h-12 text-indigo-500" />,
      title: "温かみのある写真",
      description: "自然なままの姿を美しく",
      detail:
        "プロ機材ではなく、親しみやすく温かみのある写真で、あなたが自然なままでいる姿を残します。旅の思い出をより身近に。",
      color: "from-indigo-50 to-purple-50",
      accent: "border-indigo-200",
    },
    {
      icon: <Award className="w-12 h-12 text-orange-500" />,
      title: "受賞実績",
      description: "2024年トリップアドバイザー受賞",
      detail: "お客様からの高い評価をいただき、権威ある賞を受賞。信頼と実績に裏打ちされた品質をお約束します。",
      color: "from-orange-50 to-red-50",
      accent: "border-orange-200",
    },
    {
      icon: <Calendar className="w-12 h-12 text-cyan-500" />,
      title: "安心予約システム",
      description: "カレンダー確認＆事前決済",
      detail: "予約状況カレンダーで空き状況を一目で確認。Square決済システムで安全・スムーズなお支払いが可能です。",
      color: "from-cyan-50 to-blue-50",
      accent: "border-cyan-200",
    },
  ]

  return (
    <section className="py-24 bg-gradient-to-b from-stone-50 to-amber-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <div className="inline-block bg-gradient-to-r from-emerald-500 to-teal-500 bg-clip-text text-transparent text-lg font-semibold tracking-wider mb-4">
            FEATURES
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-stone-800 mb-8 tracking-tight">
            UNIMARETが
            <br />
            <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
              選ばれる理由
            </span>
          </h2>
          <p className="text-xl text-stone-600 max-w-3xl mx-auto leading-relaxed">
            奄美大島での特別な体験を、お客様一人ひとりの心に寄り添ってお届けします
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className={`group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 bg-gradient-to-br ${feature.color} border-2 ${feature.accent} relative overflow-hidden`}
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-l from-white/20 to-transparent rounded-full transform translate-x-16 -translate-y-16"></div>
              <CardContent className="p-8 relative">
                <div className="flex items-center justify-between mb-6">
                  <div className="p-4 bg-white/80 backdrop-blur-sm rounded-2xl group-hover:scale-110 transition-transform shadow-lg">
                    {feature.icon}
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-stone-800 mb-3 tracking-tight">{feature.title}</h3>
                <p className="text-emerald-700 font-semibold mb-4 text-lg">{feature.description}</p>
                <p className="text-stone-600 leading-relaxed">{feature.detail}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-20">
          <div className="bg-gradient-to-r from-emerald-50 via-teal-50 to-cyan-50 rounded-3xl p-12 max-w-5xl mx-auto border-2 border-emerald-100 shadow-xl">
            <h3 className="text-3xl font-bold text-stone-800 mb-6 tracking-tight">
              🌿 あなただけの特別なプランを一緒に創りませんか？ 🌿
            </h3>
            <p className="text-xl text-stone-600 mb-8 leading-relaxed">
              1名様から、ご希望に合わせて完全カスタマイズ。
              <br />
              奄美大島での忘れられない思い出を、心を込めて一緒に創造しましょう。
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
