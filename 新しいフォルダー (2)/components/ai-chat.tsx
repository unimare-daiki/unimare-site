"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { MessageCircle, X, Send, Bot, User } from "lucide-react"

export default function AIChat() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState([
    {
      type: "bot",
      content: "こんにちは！UNIMARETのAIアシスタントです。よくある質問にお答えします。何かご質問はありますか？",
    },
  ])
  const [inputValue, setInputValue] = useState("")

  const faqResponses = {
    "1名":
      "はい、奄美では珍しい1名参加も可能です。お一人様でも安心してご参加いただけるよう、専属ガイドがしっかりとサポートいたします。",
    貸切: "はい、貸切プランもご用意しています。基本プランでは他のゲストと一緒になることもありますが、プライベートな体験をご希望の場合は貸切プランをお選びください。",
    マッサージ:
      "マッサージは独立したプランとしてご案内しており、観光体験ツアーと組み合わせた1日プランでもご案内可能です。タイ古式マッサージ＆ディープヘッドマッサージ（90〜120分）、オイルマッサージ＆ディープヘッドマッサージ（90分）をご用意しています。",
    初心者: "はい、初心者でも安心してご参加いただけます。練習時間もしっかりとり、丁寧にサポートいたします。",
    写真: "プロの撮影やプロ機材での撮影ではありませんが、美しい自然の中で、あなたが自然なままでいる姿を写真に残します。親しみやすく温かみのある写真は、旅の思い出をより身近に感じさせてくれます。",
    ウェルネス:
      "自然の中での癒しをガイドの表現やインタープリテーションを通じて体感する体験です。特にサンセット&ナイト倍音ツアーや直感リトリートツアーで、ウェルネスを最大限に感じられます。",
    料金: "人数・日程・時間・組み合わせで自動計算できます。料金計算機能をご利用ください。2名以上でのご参加では割引も適用されます。",
    予約: "予約状況カレンダーで空き状況が一目で分かります。Squareによる事前決済も可能で、クレジットカード・デビットカード・電子マネーなどに対応しています。",
    直感リトリート:
      "最大2名までの1日プラン。当日のお天気に合わせてどこへ行くか決める、自分の枠を超えたい方におすすめの特別体験です。",
    倍音: "サンセット&ナイト倍音ツアーは、自然の中での癒しと倍音によるリラクゼーション体験です。夕日と共に心が洗われる特別な時間をお過ごしいただけます。",
  }

  const handleSend = () => {
    if (!inputValue.trim()) return

    const userMessage = { type: "user", content: inputValue }
    setMessages((prev) => [...prev, userMessage])

    // Simple keyword matching for FAQ responses
    let response =
      "申し訳ございませんが、その質問については直接お問い合わせください。電話（0997-XX-XXXX）またはLINEでお気軽にご連絡ください。"

    for (const [keyword, answer] of Object.entries(faqResponses)) {
      if (inputValue.includes(keyword)) {
        response = answer
        break
      }
    }

    setTimeout(() => {
      const botMessage = { type: "bot", content: response }
      setMessages((prev) => [...prev, botMessage])
    }, 1000)

    setInputValue("")
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSend()
    }
  }

  if (!isOpen) {
    return (
      <Button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 w-16 h-16 rounded-full bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 shadow-2xl z-50"
      >
        <MessageCircle className="w-8 h-8 text-white" />
      </Button>
    )
  }

  return (
    <Card className="fixed bottom-6 right-6 w-96 h-96 shadow-2xl z-50 border-2 border-emerald-200">
      <CardHeader className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white p-4">
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg flex items-center">
            <Bot className="w-6 h-6 mr-2" />
            AIアシスタント
          </CardTitle>
          <Button variant="ghost" size="sm" onClick={() => setIsOpen(false)} className="text-white hover:bg-white/20">
            <X className="w-5 h-5" />
          </Button>
        </div>
      </CardHeader>
      <CardContent className="p-0 flex flex-col h-80">
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {messages.map((message, index) => (
            <div key={index} className={`flex ${message.type === "user" ? "justify-end" : "justify-start"}`}>
              <div
                className={`max-w-xs p-3 rounded-lg ${
                  message.type === "user" ? "bg-emerald-600 text-white" : "bg-stone-100 text-stone-800"
                }`}
              >
                <div className="flex items-start space-x-2">
                  {message.type === "bot" && <Bot className="w-4 h-4 mt-1 text-emerald-600" />}
                  {message.type === "user" && <User className="w-4 h-4 mt-1" />}
                  <p className="text-sm leading-relaxed">{message.content}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="p-4 border-t border-stone-200">
          <div className="flex space-x-2">
            <Input
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="質問を入力してください..."
              className="flex-1"
            />
            <Button onClick={handleSend} className="bg-emerald-600 hover:bg-emerald-700 text-white">
              <Send className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
