import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Award, Users, Heart, Leaf } from "lucide-react"

export default function About() {
  const achievements = [
    {
      icon: <Award className="w-8 h-8 text-yellow-500" />,
      title: "地域認定ガイド",
      description: "奄美大島観光協会認定の専門ガイド資格を保有",
    },
    {
      icon: <Users className="w-8 h-8 text-blue-500" />,
      title: "1000組以上の実績",
      description: "これまでに1000組以上のお客様をご案内",
    },
    {
      icon: <Heart className="w-8 h-8 text-pink-500" />,
      title: "お客様満足度98%",
      description: "リピーター率も高く、多くの方にご満足いただいています",
    },
    {
      icon: <Leaf className="w-8 h-8 text-green-500" />,
      title: "エコツーリズム推進",
      description: "持続可能な観光を通じて自然保護に貢献",
    },
  ]

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">私たちについて</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            奄美大島の自然を愛し、その魅力を多くの方に伝えたい。
            <br />
            そんな想いから始まったUNIMARE の物語をご紹介します。
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <Image
                src="/images/forest-guide.jpg"
                alt="森でガイドをする様子"
                width={300}
                height={400}
                className="rounded-lg shadow-lg object-cover h-64"
              />
              <Image
                src="/images/ancient-forest.jpg"
                alt="原生林での体験"
                width={300}
                height={400}
                className="rounded-lg shadow-lg object-cover h-64 mt-8"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 bg-white rounded-lg shadow-xl p-4 max-w-xs">
              <p className="text-sm text-gray-600">"自然との繋がりを大切に、一期一会の体験を"</p>
              <p className="text-xs text-gray-500 mt-2">- UNIMARE 代表</p>
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">海とひとつに、自然とひとつに</h3>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  UNIMARETは、奄美大島の豊かな自然と深いつながりを持つ地元ガイドが運営する、
                  体験型エコツアーとリラクゼーションの専門店です。
                </p>
                <p>
                  「Activity & Relaxation」をテーマに、ゲストと自然の繋がり、
                  自然からの癒しを大切にした特別な体験をお届けしています。
                </p>
                <p>
                  奄美大島の美しい海、世界自然遺産に登録された原生林、 そして島の豊かな文化を心から愛する私たちが、
                  一人ひとりのお客様に合わせたオーダーメイドの島時間をご提案いたします。
                </p>
              </div>
            </div>

            <div className="bg-blue-50 p-6 rounded-xl">
              <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                <Heart className="w-5 h-5 text-pink-500 mr-2" />
                私たちの想い
              </h4>
              <p className="text-gray-700 leading-relaxed">
                島の魅力を存分に体験していただき、自然の中で心身ともにリフレッシュしていただくこと。
                そして、奄美大島の自然の素晴らしさを次世代に繋げていくこと。 それが私たちの一番の願いです。
              </p>
            </div>
          </div>
        </div>

        {/* Achievements */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {achievements.map((achievement, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex justify-center mb-4">{achievement.icon}</div>
                <h4 className="font-semibold text-gray-900 mb-2">{achievement.title}</h4>
                <p className="text-sm text-gray-600">{achievement.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
