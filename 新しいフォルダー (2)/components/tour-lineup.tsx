import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Waves, TreePine, Heart, Clock, Sparkles } from "lucide-react"
import Image from "next/image"

export default function TourLineup() {
  const oceanTours = [
    {
      title: "ウミガメシュノーケルツアー",
      description:
        "透明度抜群の海でウミガメと一緒に泳ぐ感動体験。初心者でも安心、練習時間をしっかり確保し、安心感があると評判です。",
      image: "/images/diving-experience.jpg",
      duration: "3時間",
      difficulty: "初心者歓迎",
      price: "¥8,000〜",
      features: ["ウミガメ遭遇率90%", "丁寧な練習時間", "温かみのある写真撮影"],
      note: "基本は他ゲストと一緒。貸切プランも選択可",
      color: "from-blue-50 to-cyan-50",
      accent: "border-blue-200",
    },
    {
      title: "スキンダイビングツアー",
      description:
        "より深く海を楽しみたい方向け。素潜りで海中世界を探検し、魚たちとの距離をより近く感じられます。初心者でも丁寧にサポート。",
      image: "/images/underwater-silhouette.jpg",
      duration: "3.5時間",
      difficulty: "初心者OK",
      price: "¥10,000〜",
      features: ["深度5-10m", "魚群との遭遇", "安心サポート"],
      note: "基本は他ゲストと一緒。貸切プランも選択可",
      color: "from-blue-50 to-cyan-50",
      accent: "border-blue-200",
    },
  ]

  const landTours = [
    {
      title: "マングローブカヌー探検",
      description: "奄美の豊かなマングローブ林をカヌーで探検。野鳥や珍しい植物との出会いが待っています。",
      image: "/images/sugarcane-field.jpg",
      duration: "2.5時間",
      difficulty: "初心者歓迎",
      price: "¥6,000〜",
      features: ["野鳥観察", "マングローブ学習", "カヌー指導付き"],
      color: "from-green-50 to-emerald-50",
      accent: "border-green-200",
    },
    {
      title: "原生林の滝トレッキング",
      description:
        "世界自然遺産の原生林を歩き、秘境の滝を目指します。滝に打たれるプランにも対応。マイナスイオンたっぷりの森林浴も。",
      image: "/images/waterfall-experience.jpg",
      duration: "4時間",
      difficulty: "中級者向け",
      price: "¥8,000〜",
      features: ["秘境の滝", "滝打たれ体験", "森林浴"],
      color: "from-green-50 to-emerald-50",
      accent: "border-green-200",
    },
  ]

  const wellnessTours = [
    {
      title: "サンセット&ナイト倍音ツアー",
      description: "自然の中での癒しと倍音によるリラクゼーション体験。夕日と共に心が洗われる特別な時間を。",
      image: "/images/ocean-view.jpg",
      duration: "3時間",
      difficulty: "全ての方",
      price: "¥9,000〜",
      features: ["サンセット鑑賞", "倍音セラピー", "瞑想体験"],
      highlight: "心が洗われる",
      color: "from-amber-50 to-orange-50",
      accent: "border-amber-200",
    },
    {
      title: "直感リトリートツアー",
      description:
        "最大2名までの1日プラン。当日の天気に合わせて行き先を決める、自分の枠を超えたい方におすすめの特別体験。",
      image: "/images/forest-experience.jpg",
      duration: "1日",
      difficulty: "全ての方",
      price: "¥15,000〜",
      features: ["完全カスタム", "直感を磨く", "自分発見"],
      highlight: "最大2名限定",
      color: "from-purple-50 to-pink-50",
      accent: "border-purple-200",
    },
  ]

  const massagePlans = [
    {
      title: "タイ古式マッサージ＆ディープヘッドマッサージ",
      description:
        "90〜120分の本格的なマッサージ。独立したプランとして、観光体験と組み合わせた1日プランでもご案内可能。",
      image: "/images/forest-guide.jpg",
      duration: "90-120分",
      difficulty: "全ての方",
      price: "¥12,000〜",
      features: ["タイ古式", "ディープヘッド", "完全プライベート"],
      highlight: "独立プラン",
      color: "from-rose-50 to-pink-50",
      accent: "border-rose-200",
    },
    {
      title: "オイルマッサージ＆ディープヘッドマッサージ",
      description: "90分のオイルマッサージ。2名以上の場合は順番でお楽しみいただけます。施術のタイミングも柔軟に対応。",
      image: "/images/ancient-forest.jpg",
      duration: "90分",
      difficulty: "全ての方",
      price: "¥10,000〜",
      features: ["オイルマッサージ", "ディープヘッド", "柔軟対応"],
      highlight: "順番制対応",
      color: "from-rose-50 to-pink-50",
      accent: "border-rose-200",
    },
  ]

  const TourCard = ({ tour, category }: { tour: any; category: string }) => (
    <Card
      className={`overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 bg-gradient-to-br ${tour.color} border-2 ${tour.accent}`}
    >
      <div className="relative h-56">
        <Image src={tour.image || "/placeholder.svg"} alt={tour.title} fill className="object-cover" />
        <div className="absolute top-4 left-4">
          <Badge className="bg-white/90 text-stone-800 font-semibold shadow-lg">{category}</Badge>
        </div>
        <div className="absolute top-4 right-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm font-semibold backdrop-blur-sm">
          {tour.duration}
        </div>
        {tour.highlight && (
          <div className="absolute bottom-4 left-4 bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-4 py-2 rounded-full text-xs font-bold shadow-lg">
            {tour.highlight}
          </div>
        )}
      </div>
      <CardHeader className="pb-4">
        <div className="flex items-center justify-between">
          <CardTitle className="text-xl text-stone-800 tracking-tight">{tour.title}</CardTitle>
          <div className="text-2xl font-bold text-emerald-600">{tour.price}</div>
        </div>
        <div className="flex items-center space-x-4 text-sm text-stone-500">
          <div className="flex items-center">
            <Clock className="w-4 h-4 mr-1" />
            {tour.duration}
          </div>
          <Badge variant="outline" className="text-xs border-emerald-200 text-emerald-700">
            {tour.difficulty}
          </Badge>
        </div>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-stone-600 mb-6 leading-relaxed">{tour.description}</CardDescription>
        <div className="space-y-4">
          <div>
            <h4 className="font-semibold text-stone-800 mb-3">含まれるもの</h4>
            <div className="grid grid-cols-1 gap-2">
              {tour.features.map((feature: string, idx: number) => (
                <div key={idx} className="text-sm text-stone-600 flex items-center">
                  <span className="w-2 h-2 bg-emerald-500 rounded-full mr-3"></span>
                  {feature}
                </div>
              ))}
            </div>
          </div>
          {tour.note && (
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
              <p className="text-xs text-amber-800">
                <strong>ご注意：</strong> {tour.note}
              </p>
            </div>
          )}
        </div>
        <Button className="w-full mt-6 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-semibold py-3 rounded-xl shadow-lg">
          このツアーを選ぶ
        </Button>
      </CardContent>
    </Card>
  )

  return (
    <section id="tour-lineup" className="py-24 bg-gradient-to-b from-amber-50 to-stone-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <div className="inline-block bg-gradient-to-r from-emerald-500 to-teal-500 bg-clip-text text-transparent text-lg font-semibold tracking-wider mb-4">
            TOUR LINEUP
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-stone-800 mb-8 tracking-tight">
            体験
            <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
              ラインナップ
            </span>
          </h2>
          <p className="text-xl text-stone-600 max-w-3xl mx-auto leading-relaxed">
            海・陸・ウェルネス・マッサージの4つのカテゴリーから、お好みの体験を自由に組み合わせてください
          </p>
        </div>

        {/* Ocean Tours */}
        <div className="mb-20">
          <div className="flex items-center justify-center mb-12">
            <Waves className="w-10 h-10 text-blue-500 mr-4" />
            <h3 className="text-3xl font-bold text-stone-800 tracking-tight">海の体験</h3>
          </div>
          <div className="grid lg:grid-cols-2 gap-8">
            {oceanTours.map((tour, index) => (
              <TourCard key={index} tour={tour} category="海の体験" />
            ))}
          </div>
        </div>

        {/* Land Tours */}
        <div className="mb-20">
          <div className="flex items-center justify-center mb-12">
            <TreePine className="w-10 h-10 text-green-500 mr-4" />
            <h3 className="text-3xl font-bold text-stone-800 tracking-tight">陸の体験</h3>
          </div>
          <div className="grid lg:grid-cols-2 gap-8">
            {landTours.map((tour, index) => (
              <TourCard key={index} tour={tour} category="陸の体験" />
            ))}
          </div>
        </div>

        {/* Wellness Tours */}
        <div className="mb-20">
          <div className="flex items-center justify-center mb-12">
            <Sparkles className="w-10 h-10 text-amber-500 mr-4" />
            <h3 className="text-3xl font-bold text-stone-800 tracking-tight">ウェルネス・リラクゼーション</h3>
          </div>
          <div className="grid lg:grid-cols-2 gap-8">
            {wellnessTours.map((tour, index) => (
              <TourCard key={index} tour={tour} category="ウェルネス" />
            ))}
          </div>
        </div>

        {/* Massage Plans */}
        <div className="mb-20">
          <div className="flex items-center justify-center mb-12">
            <Heart className="w-10 h-10 text-rose-500 mr-4" />
            <h3 className="text-3xl font-bold text-stone-800 tracking-tight">マッサージプラン</h3>
          </div>
          <div className="grid lg:grid-cols-2 gap-8">
            {massagePlans.map((tour, index) => (
              <TourCard key={index} tour={tour} category="マッサージ" />
            ))}
          </div>
        </div>

        {/* Custom Plan CTA */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-emerald-50 via-teal-50 to-cyan-50 rounded-3xl p-12 max-w-5xl mx-auto border-2 border-emerald-100 shadow-xl">
            <h3 className="text-3xl font-bold text-stone-800 mb-6 tracking-tight">🎨 完全カスタムプランも可能！</h3>
            <p className="text-xl text-stone-600 mb-8 leading-relaxed">
              上記のツアーを自由に組み合わせて、あなただけのオリジナルプランを作成できます。
              <br />
              半日プラン・1日プランどちらでもOK！心に響く特別な体験を一緒に創造しましょう。
            </p>
            <Button
              size="lg"
              className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white px-12 py-4 rounded-full font-bold shadow-lg"
            >
              カスタムプランを相談する
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
