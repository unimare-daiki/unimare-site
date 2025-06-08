"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronDown, ChevronUp } from "lucide-react"

export default function FAQ() {
  const [openItems, setOpenItems] = useState<number[]>([])

  const faqs = [
    {
      question: "シュノーケルやスキンダイビングは貸切できますか？",
      answer:
        "はい、貸切プランもご用意しています。基本プランでは他のゲストと一緒になることもありますが、プライベートな体験をご希望の場合は貸切プランをお選びください。料金は通常プランの1.5倍程度となります。",
    },
    {
      question: "マッサージはオプションですか？",
      answer:
        "マッサージは単なるオプションではなく、体験の一部として組み込まれるプランです。自然の中で受けるマッサージは、アクティビティと組み合わせることで、より深いリラクゼーション効果を得られるよう設計されています。",
    },
    {
      question: "1名から参加できますか？",
      answer:
        "はい、奄美では珍しい1名参加も可能です。お一人様でも安心してご参加いただけるよう、専属ガイドがしっかりとサポートいたします。他の参加者との交流も楽しめますし、プライベートプランもご用意しています。",
    },
    {
      question: "料金はどのように決まりますか？",
      answer:
        "料金は参加人数・日程（平日/土日祝）・時間（半日/1日）・選択する体験の組み合わせによって決まります。上記の料金計算機能をご利用いただくと、自動で合計金額を算出できます。2名以上でのご参加では割引も適用されます。",
    },
    {
      question: "雨天時はどうなりますか？",
      answer:
        "雨天時でも楽しめる代替プランをご用意しています。屋内でのマッサージ体験や、雨でも美しい滝トレッキング、文化体験などに変更可能です。安全を最優先に、天候に応じて最適なプランをご提案いたします。",
    },
    {
      question: "写真撮影はしてもらえますか？",
      answer:
        "はい！代表によるプロ撮影が人気の特徴の一つです。体験中の自然な表情や美しい奄美の風景を、プロの技術で撮影いたします。撮影した写真はデータでお渡しし、SNSでのシェアも大歓迎です。",
    },
    {
      question: "キャンセル料はかかりますか？",
      answer:
        "前日までのキャンセルは無料です。当日キャンセルの場合は50%、無連絡不参加の場合は100%のキャンセル料をいただいております。天候不良による中止の場合は、キャンセル料は一切かかりません。",
    },
    {
      question: "持ち物は何が必要ですか？",
      answer:
        "基本的な器材はすべてレンタル可能です。お客様にご用意いただくのは、水着、タオル、着替え、日焼け止めなど最小限のものだけ。詳細な持ち物リストは、ご予約確定後にお送りいたします。",
    },
  ]

  const toggleItem = (index: number) => {
    setOpenItems((prev) => (prev.includes(index) ? prev.filter((item) => item !== index) : [...prev, index]))
  }

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            よくある
            <span className="bg-gradient-to-r from-blue-600 to-emerald-600 bg-clip-text text-transparent">質問</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            お客様からよくいただくご質問にお答えします。
            <br />
            その他のご質問もお気軽にお問い合わせください。
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <Card key={index} className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-0">
                <button
                  onClick={() => toggleItem(index)}
                  className="w-full p-6 text-left hover:bg-gray-50 transition-colors flex items-center justify-between"
                >
                  <h3 className="text-lg font-semibold text-gray-900 pr-4">{faq.question}</h3>
                  {openItems.includes(index) ? (
                    <ChevronUp className="w-5 h-5 text-blue-500 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
                  )}
                </button>
                {openItems.includes(index) && (
                  <div className="px-6 pb-6">
                    <div className="border-t border-gray-200 pt-4">
                      <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="bg-blue-50 rounded-2xl p-8 max-w-2xl mx-auto border border-blue-200">
            <h3 className="text-xl font-bold text-gray-900 mb-4">他にもご質問がございますか？</h3>
            <p className="text-gray-600 mb-6">
              上記以外のご質問やご不明な点がございましたら、
              <br />
              お気軽にお問い合わせください。専門スタッフが丁寧にお答えいたします。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:0997-XX-XXXX"
                className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full font-semibold transition-colors"
              >
                📞 電話で質問する
              </a>
              <a
                href="#contact"
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full font-semibold transition-colors"
              >
                ✉️ メールで質問する
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
