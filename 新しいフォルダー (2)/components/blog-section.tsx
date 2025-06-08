import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CalendarDays, ArrowRight, Clock } from "lucide-react"
import Image from "next/image"

export default function BlogSection() {
  const blogPosts = [
    {
      title: "奄美大島の海でウミガメと泳ぐ感動体験",
      excerpt: "透明度抜群の海で出会う、ウミガメとの一期一会。今日は特別な出会いがありました...",
      image: "/images/diving-experience.jpg",
      date: "2024年5月15日",
      readTime: "3分",
      tags: ["海洋体験", "ウミガメ", "シュノーケル"],
    },
    {
      title: "世界自然遺産・奄美の森が教えてくれること",
      excerpt: "原生林の中で感じる、本来の自然の姿。マイナスイオンたっぷりの森で心身をリセット...",
      image: "/images/forest-experience.jpg",
      date: "2024年5月12日",
      readTime: "4分",
      tags: ["森林浴", "トレッキング", "世界自然遺産"],
    },
    {
      title: "サンセット倍音ツアーで心を整える",
      excerpt: "夕日と共に響く倍音の世界。自然と一体になる特別な時間をレポートします...",
      image: "/images/ocean-view.jpg",
      date: "2024年5月8日",
      readTime: "5分",
      tags: ["ウェルネス", "サンセット", "倍音"],
    },
  ]

  return (
    <section className="py-24 bg-gradient-to-b from-amber-50 to-stone-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <div className="inline-block bg-gradient-to-r from-emerald-500 to-teal-500 bg-clip-text text-transparent text-lg font-semibold tracking-wider mb-4">
            BLOG
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-stone-800 mb-8 tracking-tight">
            奄美の
            <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
              日常ブログ
            </span>
          </h2>
          <p className="text-xl text-stone-600 max-w-3xl mx-auto leading-relaxed">
            毎日更新！奄美大島の自然や体験の様子をお届けします。
            <br />
            島の魅力を感じる特別な瞬間をぜひご覧ください。
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {blogPosts.map((post, index) => (
            <Card
              key={index}
              className="overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-2 border-emerald-100 bg-gradient-to-br from-white to-emerald-50"
            >
              <div className="relative h-56">
                <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex flex-wrap gap-2 mb-2">
                    {post.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="bg-white/80 backdrop-blur-sm text-stone-800 text-xs font-semibold px-2 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <CardHeader className="pb-2">
                <CardTitle className="text-xl text-stone-800 tracking-tight line-clamp-2">{post.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center text-sm text-stone-500 mb-4">
                  <CalendarDays className="w-4 h-4 mr-1" />
                  <span className="mr-4">{post.date}</span>
                  <Clock className="w-4 h-4 mr-1" />
                  <span>読了時間: {post.readTime}</span>
                </div>
                <p className="text-stone-600 mb-6 line-clamp-3">{post.excerpt}</p>
                <Button
                  variant="outline"
                  className="w-full border-2 border-emerald-200 text-emerald-700 hover:bg-emerald-50"
                >
                  続きを読む
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Card className="inline-block bg-gradient-to-r from-emerald-50 via-teal-50 to-cyan-50 border-2 border-emerald-100 shadow-lg">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-stone-800 mb-4 tracking-tight">もっと奄美の魅力を知りたい方へ</h3>
              <p className="text-stone-600 mb-6 max-w-2xl">
                毎日更新中のブログでは、奄美大島の自然や文化、体験の様子など、島の魅力をたっぷりとお届けしています。
                ツアー参加前の予習や、奄美大島への旅行計画にぜひご活用ください。
              </p>
              <Button className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white px-8 py-3 rounded-xl font-bold shadow-lg">
                ブログ一覧を見る
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
