import { Card, CardContent } from "@/components/ui/card"
import { Star, Quote, Heart, MapPin } from "lucide-react"
import Image from "next/image"

export default function Testimonials() {
  const testimonials = [
    {
      name: "田中 美咲様",
      location: "東京都",
      age: "20代",
      rating: 5,
      image: "/placeholder.svg?height=80&width=80",
      comment:
        "1人で参加できて、とても安心でした！ガイドさんが親切で、他の参加者の方とも楽しく過ごせました。ウミガメと泳げた時は感動で涙が出そうでした。温かみのある写真もたくさん撮っていただき、友達に自慢しています。",
      experience: "ウミガメシュノーケル + 温かみのある写真撮影",
      date: "2024年3月",
      highlight: "1人参加",
      source: "Google",
    },
    {
      name: "佐藤 健太様・由美様",
      location: "大阪府",
      age: "30代夫婦",
      rating: 5,
      image: "/placeholder.svg?height=80&width=80",
      comment:
        "マッサージプランとツアーを組み合わせて、心も体もリフレッシュできました！海で遊んだ後の森でのマッサージは最高の贅沢でした。夫婦の良い思い出になりました。独立したプランとして組み合わせられるのが良かったです。",
      experience: "海洋体験 + マッサージプラン（1日コース）",
      date: "2024年2月",
      highlight: "マッサージ体験",
      source: "トリップアドバイザー",
    },
    {
      name: "山田 花子様",
      location: "福岡県",
      age: "40代",
      rating: 5,
      image: "/placeholder.svg?height=80&width=80",
      comment:
        "サンセット&ナイト倍音ツアーで心が洗われました！自然の中での倍音体験は初めてでしたが、深いリラクゼーションを感じることができました。ガイドさんのインタープリテーションも素晴らしく、奄美の自然をより深く理解できました。",
      experience: "サンセット&ナイト倍音ツアー",
      date: "2024年1月",
      highlight: "ウェルネス体験",
      source: "Google",
    },
    {
      name: "鈴木 太郎様",
      location: "神奈川県",
      age: "50代",
      rating: 5,
      image: "/placeholder.svg?height=80&width=80",
      comment:
        "直感リトリートツアーで自分の新しい一面を発見できました！当日の天気に合わせて行き先を決めるスタイルが新鮮で、本当に直感が磨かれた気がします。最大2名までという特別感も良かったです。人生観が変わる体験でした。",
      experience: "直感リトリートツアー（1日プラン）",
      date: "2024年4月",
      highlight: "自分発見",
      source: "トリップアドバイザー",
    },
  ]

  const googleReviews = [
    {
      name: "松本 真理様",
      rating: 5,
      comment:
        "予約状況カレンダーで空き状況が一目で分かり、Square決済も安心でした。当日まで不安でしたが、丁寧なサポートで安心して楽しめました。",
      date: "2024年3月",
      source: "Google",
    },
    {
      name: "高橋 誠様",
      rating: 5,
      comment: "写真がプロ機材ではないからこそ、自然で温かみがあって良かったです。旅の思い出がより身近に感じられます。",
      date: "2024年2月",
      source: "Google",
    },
  ]

  return (
    <section className="py-24 bg-gradient-to-b from-amber-50 to-stone-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <div className="inline-block bg-gradient-to-r from-emerald-500 to-teal-500 bg-clip-text text-transparent text-lg font-semibold tracking-wider mb-4">
            TESTIMONIALS
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-stone-800 mb-8 tracking-tight">
            お客様の
            <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">声</span>
          </h2>
          <p className="text-xl text-stone-600 max-w-3xl mx-auto leading-relaxed">
            実際にご利用いただいたお客様からの嬉しいお声をご紹介します。
            <br />
            皆様の笑顔と感動が私たちの一番の励みです。
          </p>
        </div>

        {/* Main Testimonials */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="h-full hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-2 border-emerald-100 bg-gradient-to-br from-white to-emerald-50"
            >
              <CardContent className="p-8">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center">
                    <Quote className="w-8 h-8 text-emerald-500 mr-3" />
                    <div className="flex">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                      {testimonial.highlight}
                    </span>
                    <span className="bg-stone-100 text-stone-600 px-3 py-1 rounded-full text-xs font-semibold">
                      {testimonial.source}
                    </span>
                  </div>
                </div>

                <p className="text-stone-600 mb-8 leading-relaxed italic text-lg">"{testimonial.comment}"</p>

                <div className="border-t border-emerald-100 pt-6">
                  <div className="flex items-center space-x-4">
                    <Image
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      width={60}
                      height={60}
                      className="rounded-full object-cover border-2 border-emerald-200"
                    />
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-bold text-stone-800 text-lg">{testimonial.name}</p>
                          <div className="flex items-center text-sm text-stone-500">
                            <MapPin className="w-4 h-4 mr-1" />
                            {testimonial.location} • {testimonial.age}
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="text-sm text-emerald-600 font-semibold">{testimonial.experience}</p>
                          <p className="text-xs text-stone-500">{testimonial.date}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Google Reviews Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-stone-800 mb-4 tracking-tight">Googleの口コミ</h3>
            <p className="text-lg text-stone-600">検索でも高評価をいただいています</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {googleReviews.map((review, index) => (
              <Card key={index} className="bg-gradient-to-br from-blue-50 to-cyan-50 border-2 border-blue-100">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-xs font-semibold">
                      {review.source}
                    </span>
                  </div>
                  <p className="text-stone-600 mb-4 leading-relaxed">"{review.comment}"</p>
                  <div className="flex justify-between items-center text-sm text-stone-500">
                    <span className="font-semibold">{review.name}</span>
                    <span>{review.date}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Review Summary */}
        <div className="bg-gradient-to-r from-emerald-50 via-teal-50 to-cyan-50 rounded-3xl p-12 text-center border-2 border-emerald-100 shadow-xl">
          <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto mb-8">
            <div>
              <div className="text-5xl font-bold text-emerald-600 mb-2">4.9</div>
              <div className="flex justify-center mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-stone-600 font-semibold">平均評価</p>
            </div>
            <div>
              <div className="text-5xl font-bold text-teal-600 mb-2">98%</div>
              <div className="flex justify-center mb-2">
                <Heart className="w-6 h-6 text-rose-500 fill-current" />
              </div>
              <p className="text-stone-600 font-semibold">お客様満足度</p>
            </div>
            <div>
              <div className="text-5xl font-bold text-cyan-600 mb-2">85%</div>
              <div className="flex justify-center mb-2">
                <span className="text-2xl">🔄</span>
              </div>
              <p className="text-stone-600 font-semibold">リピーター率</p>
            </div>
            <div>
              <div className="text-5xl font-bold text-amber-600 mb-2">500+</div>
              <div className="flex justify-center mb-2">
                <span className="text-2xl">📝</span>
              </div>
              <p className="text-stone-600 font-semibold">レビュー数</p>
            </div>
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-stone-800 mb-6 tracking-tight">お客様からの評価ポイント</h3>
            <div className="grid md:grid-cols-2 gap-4 text-stone-600">
              <div className="flex items-center">
                <span className="w-3 h-3 bg-emerald-500 rounded-full mr-3"></span>
                1名参加でも安心のサポート
              </div>
              <div className="flex items-center">
                <span className="w-3 h-3 bg-teal-500 rounded-full mr-3"></span>
                温かみのある自然な写真撮影
              </div>
              <div className="flex items-center">
                <span className="w-3 h-3 bg-amber-500 rounded-full mr-3"></span>
                マッサージプランの満足度
              </div>
              <div className="flex items-center">
                <span className="w-3 h-3 bg-rose-500 rounded-full mr-3"></span>
                ウェルネス体験の深さ
              </div>
              <div className="flex items-center">
                <span className="w-3 h-3 bg-purple-500 rounded-full mr-3"></span>
                カスタムプランの柔軟性
              </div>
              <div className="flex items-center">
                <span className="w-3 h-3 bg-cyan-500 rounded-full mr-3"></span>
                予約システムの使いやすさ
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
