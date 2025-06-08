import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Waves, TreePine, Heart, Camera, Star } from "lucide-react"
import Image from "next/image"

export default function Services() {
  const services = [
    {
      icon: <Waves className="w-12 h-12 text-blue-500" />,
      title: "海洋体験ツアー",
      description: "透明度抜群の奄美の海でシュノーケリングやダイビング体験。熱帯魚と泳ぐ感動の瞬間をお届けします。",
      image: "/images/diving-experience.jpg",
      features: ["シュノーケリング", "素潜り体験", "海洋生物観察", "水中撮影サポート"],
      price: "¥8,000〜",
      duration: "3時間",
      rating: 4.9,
    },
    {
      icon: <TreePine className="w-12 h-12 text-green-500" />,
      title: "原生林散策ツアー",
      description:
        "世界自然遺産の原生林で、マイナスイオンたっぷりの森林浴。ガジュマルの巨木や珍しい動植物との出会いを楽しめます。",
      image: "/images/forest-experience.jpg",
      features: ["ガジュマル巨木体験", "野鳥観察", "植物観察", "森林浴"],
      price: "¥6,000〜",
      duration: "2.5時間",
      rating: 4.8,
    },
    {
      icon: <Heart className="w-12 h-12 text-pink-500" />,
      title: "自然の中でのマッサージ",
      description:
        "森の中や海辺で受ける極上のマッサージ。自然の音に包まれながら、心身ともに深いリラクゼーションを体験できます。",
      image: "/images/waterfall-experience.jpg",
      features: ["アロママッサージ", "指圧", "リフレクソロジー", "自然音セラピー"],
      price: "¥10,000〜",
      duration: "1時間",
      rating: 5.0,
    },
    {
      icon: <Camera className="w-12 h-12 text-purple-500" />,
      title: "フォト&体験ツアー",
      description:
        "奄美の絶景スポットを巡りながら、プロのガイドが撮影をサポート。インスタ映えする思い出の写真をお撮りします。",
      image: "/images/sugarcane-field.jpg",
      features: ["絶景スポット案内", "撮影サポート", "インスタ映えスポット", "データお渡し"],
      price: "¥7,000〜",
      duration: "4時間",
      rating: 4.9,
    },
  ]

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">体験メニュー</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            奄美大島の自然を活かした多彩な体験プログラム。
            <br />
            一人ひとりに合わせたオーダーメイドの島時間をご提案します。
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => (
            <Card
              key={index}
              className="overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 bg-white"
            >
              <div className="relative h-64">
                <Image src={service.image || "/placeholder.svg"} alt={service.title} fill className="object-cover" />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center space-x-1">
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  <span className="text-sm font-semibold">{service.rating}</span>
                </div>
                <div className="absolute bottom-4 left-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm">
                  {service.duration}
                </div>
              </div>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    {service.icon}
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                  </div>
                  <div className="text-2xl font-bold text-blue-600">{service.price}</div>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 mb-6 leading-relaxed">{service.description}</CardDescription>
                <div className="grid grid-cols-2 gap-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="text-sm text-gray-500 flex items-center">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                      {feature}
                    </div>
                  ))}
                </div>
                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg">
                  詳細を見る・予約する
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <div className="bg-blue-50 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">🌟 特別プラン 🌟</h3>
            <p className="text-lg text-gray-700 mb-6">
              複数の体験を組み合わせたお得なパッケージプランもご用意しています。
              <br />
              お客様のご希望に合わせてカスタマイズも可能です。
            </p>
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-full font-semibold"
            >
              カスタムプランを相談する
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
