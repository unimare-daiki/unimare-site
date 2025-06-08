"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calculator, Users, Calendar, Clock, Sparkles } from "lucide-react"

export default function PricingCalculator() {
  const [selectedTours, setSelectedTours] = useState<string[]>([])
  const [participants, setParticipants] = useState("")
  const [schedule, setSchedule] = useState("")
  const [duration, setDuration] = useState("")
  const [totalPrice, setTotalPrice] = useState(0)

  const tours = [
    { id: "turtle", name: "ウミガメシュノーケルツアー", basePrice: 8000, category: "海" },
    { id: "diving", name: "スキンダイビングツアー", basePrice: 10000, category: "海" },
    { id: "canoe", name: "マングローブカヌー", basePrice: 6000, category: "陸" },
    { id: "trekking", name: "原生林トレッキング", basePrice: 8000, category: "陸" },
    { id: "sunset", name: "サンセット&ナイト倍音ツアー", basePrice: 9000, category: "ウェルネス" },
    { id: "retreat", name: "直感リトリートツアー", basePrice: 15000, category: "ウェルネス" },
    { id: "thai", name: "タイ古式マッサージ＆ディープヘッド", basePrice: 12000, category: "マッサージ" },
    { id: "oil", name: "オイルマッサージ＆ディープヘッド", basePrice: 10000, category: "マッサージ" },
  ]

  const participantOptions = [
    { value: "1", label: "1名", multiplier: 1.0 },
    { value: "2", label: "2名", multiplier: 0.85 },
    { value: "3", label: "3名以上", multiplier: 0.75 },
  ]

  const scheduleOptions = [
    { value: "weekday", label: "平日", multiplier: 1.0 },
    { value: "weekend", label: "土日祝", multiplier: 1.2 },
  ]

  const durationOptions = [
    { value: "half", label: "半日", multiplier: 1.0 },
    { value: "full", label: "1日", multiplier: 1.8 },
  ]

  useEffect(() => {
    calculatePrice()
  }, [selectedTours, participants, schedule, duration])

  const calculatePrice = () => {
    if (selectedTours.length === 0 || !participants || !schedule || !duration) {
      setTotalPrice(0)
      return
    }

    const basePrice = selectedTours.reduce((sum, tourId) => {
      const tour = tours.find((t) => t.id === tourId)
      return sum + (tour?.basePrice || 0)
    }, 0)

    const participantMultiplier = participantOptions.find((p) => p.value === participants)?.multiplier || 1
    const scheduleMultiplier = scheduleOptions.find((s) => s.value === schedule)?.multiplier || 1
    const durationMultiplier = durationOptions.find((d) => d.value === duration)?.multiplier || 1

    const finalPrice = Math.round(basePrice * participantMultiplier * scheduleMultiplier * durationMultiplier)
    setTotalPrice(finalPrice)
  }

  const handleTourChange = (tourId: string, checked: boolean) => {
    if (checked) {
      setSelectedTours([...selectedTours, tourId])
    } else {
      setSelectedTours(selectedTours.filter((id) => id !== tourId))
    }
  }

  const scrollToContact = () => {
    const element = document.getElementById("contact")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "海":
        return "bg-blue-50 border-blue-200"
      case "陸":
        return "bg-green-50 border-green-200"
      case "ウェルネス":
        return "bg-amber-50 border-amber-200"
      case "マッサージ":
        return "bg-rose-50 border-rose-200"
      default:
        return "bg-gray-50 border-gray-200"
    }
  }

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "海":
        return "🌊"
      case "陸":
        return "🌲"
      case "ウェルネス":
        return "✨"
      case "マッサージ":
        return "💆"
      default:
        return "🎯"
    }
  }

  return (
    <section id="pricing-calculator" className="py-24 bg-gradient-to-b from-amber-50 to-stone-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <div className="inline-block bg-gradient-to-r from-emerald-500 to-teal-500 bg-clip-text text-transparent text-lg font-semibold tracking-wider mb-4">
            PRICING CALCULATOR
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-stone-800 mb-8 tracking-tight">
            料金
            <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
              自動計算
            </span>
          </h2>
          <p className="text-xl text-stone-600 max-w-3xl mx-auto leading-relaxed">
            あなたの希望プランを選んで、合計料金を自動計算！
            <br />
            組み合わせ自由で、お得なプランを見つけてください。
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <Card className="shadow-2xl border-2 border-emerald-100 bg-gradient-to-br from-white to-emerald-50">
            <CardHeader className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-t-lg">
              <CardTitle className="text-3xl flex items-center tracking-tight">
                <Calculator className="w-10 h-10 mr-4" />
                プラン＆料金計算
              </CardTitle>
            </CardHeader>
            <CardContent className="p-12">
              <div className="grid lg:grid-cols-2 gap-12">
                {/* Left Column - Tour Selection */}
                <div className="space-y-8">
                  <div>
                    <h3 className="text-2xl font-bold text-stone-800 mb-6 tracking-tight">体験メニューを選択</h3>
                    <div className="space-y-4">
                      {["海", "陸", "ウェルネス", "マッサージ"].map((category) => (
                        <div key={category}>
                          <h4 className="text-lg font-semibold text-stone-700 mb-3 flex items-center">
                            <span className="mr-2">{getCategoryIcon(category)}</span>
                            {category}の体験
                          </h4>
                          <div className="space-y-3 ml-6">
                            {tours
                              .filter((tour) => tour.category === category)
                              .map((tour) => (
                                <div
                                  key={tour.id}
                                  className={`flex items-center space-x-3 p-4 border-2 rounded-xl hover:shadow-lg transition-all ${getCategoryColor(category)}`}
                                >
                                  <Checkbox
                                    id={tour.id}
                                    checked={selectedTours.includes(tour.id)}
                                    onCheckedChange={(checked) => handleTourChange(tour.id, checked as boolean)}
                                  />
                                  <label htmlFor={tour.id} className="flex-1 cursor-pointer">
                                    <div className="flex justify-between items-center">
                                      <span className="font-medium text-stone-800">{tour.name}</span>
                                      <span className="text-emerald-600 font-bold">
                                        ¥{tour.basePrice.toLocaleString()}〜
                                      </span>
                                    </div>
                                  </label>
                                </div>
                              ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right Column - Options */}
                <div className="space-y-8">
                  <div>
                    <h3 className="text-2xl font-bold text-stone-800 mb-6 tracking-tight">詳細オプション</h3>
                    <div className="space-y-6">
                      <div>
                        <label className="block text-lg font-semibold text-stone-700 mb-3">
                          <Users className="w-5 h-5 inline mr-2" />
                          参加人数
                        </label>
                        <Select onValueChange={setParticipants}>
                          <SelectTrigger className="border-2 border-stone-200 focus:border-emerald-500 text-lg p-4 rounded-xl">
                            <SelectValue placeholder="人数を選択" />
                          </SelectTrigger>
                          <SelectContent>
                            {participantOptions.map((option) => (
                              <SelectItem key={option.value} value={option.value}>
                                {option.label}
                                {option.multiplier !== 1.0 && (
                                  <span className="text-emerald-600 ml-2">
                                    ({Math.round((1 - option.multiplier) * 100)}% OFF)
                                  </span>
                                )}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>

                      <div>
                        <label className="block text-lg font-semibold text-stone-700 mb-3">
                          <Calendar className="w-5 h-5 inline mr-2" />
                          日程
                        </label>
                        <Select onValueChange={setSchedule}>
                          <SelectTrigger className="border-2 border-stone-200 focus:border-emerald-500 text-lg p-4 rounded-xl">
                            <SelectValue placeholder="日程を選択" />
                          </SelectTrigger>
                          <SelectContent>
                            {scheduleOptions.map((option) => (
                              <SelectItem key={option.value} value={option.value}>
                                {option.label}
                                {option.multiplier !== 1.0 && (
                                  <span className="text-orange-600 ml-2">
                                    (+{Math.round((option.multiplier - 1) * 100)}%)
                                  </span>
                                )}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>

                      <div>
                        <label className="block text-lg font-semibold text-stone-700 mb-3">
                          <Clock className="w-5 h-5 inline mr-2" />
                          時間
                        </label>
                        <Select onValueChange={setDuration}>
                          <SelectTrigger className="border-2 border-stone-200 focus:border-emerald-500 text-lg p-4 rounded-xl">
                            <SelectValue placeholder="時間を選択" />
                          </SelectTrigger>
                          <SelectContent>
                            {durationOptions.map((option) => (
                              <SelectItem key={option.value} value={option.value}>
                                {option.label}
                                {option.multiplier !== 1.0 && (
                                  <span className="text-blue-600 ml-2">(×{option.multiplier})</span>
                                )}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </div>

                  {/* Price Display */}
                  <div className="bg-gradient-to-r from-emerald-50 via-teal-50 to-cyan-50 rounded-2xl p-8 border-2 border-emerald-200 shadow-lg">
                    <div className="flex items-center mb-4">
                      <Sparkles className="w-6 h-6 text-emerald-600 mr-2" />
                      <h3 className="text-2xl font-bold text-stone-800 tracking-tight">合計料金</h3>
                    </div>
                    <div className="text-5xl font-bold text-emerald-600 mb-4">
                      {totalPrice > 0 ? `¥${totalPrice.toLocaleString()}` : "¥0"}
                    </div>
                    {totalPrice > 0 && (
                      <p className="text-sm text-stone-600 leading-relaxed">
                        選択した体験: {selectedTours.length}個 |{" "}
                        {participants && participantOptions.find((p) => p.value === participants)?.label} |{" "}
                        {schedule && scheduleOptions.find((s) => s.value === schedule)?.label} |{" "}
                        {duration && durationOptions.find((d) => d.value === duration)?.label}
                      </p>
                    )}
                  </div>

                  {totalPrice > 0 && (
                    <Button
                      onClick={scrollToContact}
                      className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white py-4 text-xl font-bold rounded-xl shadow-lg"
                    >
                      この内容で予約・問い合わせする
                    </Button>
                  )}
                </div>
              </div>

              {/* Pricing Notes */}
              <div className="mt-12 p-6 bg-amber-50 border-2 border-amber-200 rounded-2xl">
                <h4 className="font-bold text-amber-800 mb-4 text-lg">料金について</h4>
                <ul className="text-sm text-amber-700 space-y-2 leading-relaxed">
                  <li>• 表示価格は基本料金です。季節や天候により変動する場合があります。</li>
                  <li>• 2名以上でご参加の場合、お得な割引が適用されます。</li>
                  <li>• 1日プランは複数の体験を組み合わせた特別価格です。</li>
                  <li>• 貸切プランをご希望の場合は、別途料金が発生します。</li>
                  <li>• マッサージプランは独立したプランとして、観光体験と組み合わせ可能です。</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
