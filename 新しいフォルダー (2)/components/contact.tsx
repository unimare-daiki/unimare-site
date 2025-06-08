"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Phone, Mail, MessageCircle, Calendar, Clock, MapPin, CreditCard } from "lucide-react"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    participants: "",
    preferredDate: "",
    experiences: [] as string[],
    duration: "",
    schedule: "",
    message: "",
    agreeToTerms: false,
  })

  const experiences = [
    { id: "turtle", name: "ウミガメシュノーケルツアー", category: "海" },
    { id: "diving", name: "スキンダイビングツアー", category: "海" },
    { id: "canoe", name: "マングローブカヌー", category: "陸" },
    { id: "trekking", name: "原生林トレッキング", category: "陸" },
    { id: "sunset", name: "サンセット&ナイト倍音ツアー", category: "ウェルネス" },
    { id: "retreat", name: "直感リトリートツアー", category: "ウェルネス" },
    { id: "thai", name: "タイ古式マッサージ＆ディープヘッド", category: "マッサージ" },
    { id: "oil", name: "オイルマッサージ＆ディープヘッド", category: "マッサージ" },
  ]

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!formData.agreeToTerms) {
      alert("利用規約への同意が必要です。")
      return
    }
    console.log("Form submitted:", formData)
    alert("お問い合わせありがとうございます。24時間以内にご連絡いたします。")
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSelectChange = (name: string, value: string) => {
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const handleExperienceChange = (experienceId: string, checked: boolean) => {
    if (checked) {
      setFormData({
        ...formData,
        experiences: [...formData.experiences, experienceId],
      })
    } else {
      setFormData({
        ...formData,
        experiences: formData.experiences.filter((id) => id !== experienceId),
      })
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

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-stone-50 to-amber-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <div className="inline-block bg-gradient-to-r from-emerald-500 to-teal-500 bg-clip-text text-transparent text-lg font-semibold tracking-wider mb-4">
            CONTACT
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-stone-800 mb-8 tracking-tight">
            ご予約・
            <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
              お問い合わせ
            </span>
          </h2>
          <p className="text-xl text-stone-600 max-w-3xl mx-auto leading-relaxed">
            WEBフォーム・LINE・電話で簡単予約！
            <br />
            希望プラン・日程・人数を選んでお申込みください。
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="shadow-2xl border-2 border-emerald-100 bg-gradient-to-br from-white to-emerald-50">
              <CardHeader className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-t-lg">
                <CardTitle className="text-3xl flex items-center tracking-tight">
                  <Calendar className="w-10 h-10 mr-4" />
                  予約・お問い合わせフォーム
                </CardTitle>
              </CardHeader>
              <CardContent className="p-10">
                <form onSubmit={handleSubmit} className="space-y-8">
                  {/* Personal Information */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-lg font-bold text-stone-700 mb-3">
                        お名前 *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="山田太郎"
                        className="border-2 border-stone-200 focus:border-emerald-500 text-lg p-4 rounded-xl"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-lg font-bold text-stone-700 mb-3">
                        メールアドレス *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="example@email.com"
                        className="border-2 border-stone-200 focus:border-emerald-500 text-lg p-4 rounded-xl"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-lg font-bold text-stone-700 mb-3">
                        電話番号
                      </label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="090-1234-5678"
                        className="border-2 border-stone-200 focus:border-emerald-500 text-lg p-4 rounded-xl"
                      />
                    </div>
                    <div>
                      <label className="block text-lg font-bold text-stone-700 mb-3">参加人数 *</label>
                      <Select onValueChange={(value) => handleSelectChange("participants", value)}>
                        <SelectTrigger className="border-2 border-stone-200 focus:border-emerald-500 text-lg p-4 rounded-xl">
                          <SelectValue placeholder="人数を選択" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="1">1名</SelectItem>
                          <SelectItem value="2">2名</SelectItem>
                          <SelectItem value="3">3名</SelectItem>
                          <SelectItem value="4">4名</SelectItem>
                          <SelectItem value="5+">5名以上</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  {/* Tour Preferences */}
                  <div>
                    <label className="block text-lg font-bold text-stone-700 mb-6">希望体験メニュー *</label>
                    <div className="space-y-6">
                      {["海", "陸", "ウェルネス", "マッサージ"].map((category) => (
                        <div key={category}>
                          <h4 className="text-lg font-semibold text-stone-700 mb-3">{category}の体験</h4>
                          <div className="grid md:grid-cols-2 gap-3">
                            {experiences
                              .filter((exp) => exp.category === category)
                              .map((experience) => (
                                <div
                                  key={experience.id}
                                  className={`flex items-center space-x-3 p-4 border-2 rounded-xl hover:shadow-lg transition-all ${getCategoryColor(experience.category)}`}
                                >
                                  <Checkbox
                                    id={experience.id}
                                    checked={formData.experiences.includes(experience.id)}
                                    onCheckedChange={(checked) =>
                                      handleExperienceChange(experience.id, checked as boolean)
                                    }
                                  />
                                  <label htmlFor={experience.id} className="cursor-pointer font-medium text-stone-800">
                                    {experience.name}
                                  </label>
                                </div>
                              ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="grid md:grid-cols-3 gap-6">
                    <div>
                      <label htmlFor="preferredDate" className="block text-lg font-bold text-stone-700 mb-3">
                        希望日程 *
                      </label>
                      <Input
                        id="preferredDate"
                        name="preferredDate"
                        type="date"
                        required
                        value={formData.preferredDate}
                        onChange={handleChange}
                        className="border-2 border-stone-200 focus:border-emerald-500 text-lg p-4 rounded-xl"
                      />
                    </div>
                    <div>
                      <label className="block text-lg font-bold text-stone-700 mb-3">時間 *</label>
                      <Select onValueChange={(value) => handleSelectChange("duration", value)}>
                        <SelectTrigger className="border-2 border-stone-200 focus:border-emerald-500 text-lg p-4 rounded-xl">
                          <SelectValue placeholder="時間を選択" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="half">半日プラン</SelectItem>
                          <SelectItem value="full">1日プラン</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <label className="block text-lg font-bold text-stone-700 mb-3">日程 *</label>
                      <Select onValueChange={(value) => handleSelectChange("schedule", value)}>
                        <SelectTrigger className="border-2 border-stone-200 focus:border-emerald-500 text-lg p-4 rounded-xl">
                          <SelectValue placeholder="日程を選択" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="weekday">平日</SelectItem>
                          <SelectItem value="weekend">土日祝</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-lg font-bold text-stone-700 mb-3">
                      ご要望・ご質問 *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="ご希望の体験内容、時間、特別なリクエスト、アレルギーや体調面での注意事項などをお書きください"
                      className="border-2 border-stone-200 focus:border-emerald-500 text-lg p-4 rounded-xl"
                    />
                  </div>

                  <div className="flex items-start space-x-3">
                    <Checkbox
                      id="agreeToTerms"
                      checked={formData.agreeToTerms}
                      onCheckedChange={(checked) => setFormData({ ...formData, agreeToTerms: checked as boolean })}
                    />
                    <label htmlFor="agreeToTerms" className="text-stone-600 cursor-pointer leading-relaxed">
                      <span className="font-semibold">利用規約</span>および
                      <span className="font-semibold">プライバシーポリシー</span>に同意します *
                    </label>
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white py-5 text-xl font-bold rounded-xl shadow-lg"
                  >
                    送信する
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            {/* Phone Contact */}
            <Card className="shadow-xl border-2 border-green-100 bg-gradient-to-br from-white to-green-50">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="p-4 bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl shadow-lg">
                    <Phone className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-stone-800 mb-3 text-xl tracking-tight">電話でのお問い合わせ</h3>
                    <p className="text-3xl font-bold text-green-600 mb-2">0997-XX-XXXX</p>
                    <p className="text-stone-500 mb-2">受付時間: 9:00-18:00</p>
                    <p className="text-sm text-stone-400 mb-4">※緊急時は24時間対応</p>
                    <Button className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-xl font-bold">
                      今すぐ電話する
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* LINE Contact */}
            <Card className="shadow-xl border-2 border-green-100 bg-gradient-to-br from-white to-green-50">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="p-4 bg-gradient-to-r from-green-400 to-green-500 rounded-2xl shadow-lg">
                    <MessageCircle className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-stone-800 mb-3 text-xl tracking-tight">LINEでお問い合わせ</h3>
                    <p className="text-green-600 font-bold mb-2 text-lg">@unimare_amami</p>
                    <p className="text-stone-500 mb-2">受付時間: 8:00-21:00</p>
                    <p className="text-sm text-stone-400 mb-4">※時間外は翌営業時間内にご返信いたします</p>
                    <Button className="w-full bg-green-500 hover:bg-green-600 text-white py-3 rounded-xl font-bold">
                      LINEで問い合わせ
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Email Contact */}
            <Card className="shadow-xl border-2 border-blue-100 bg-gradient-to-br from-white to-blue-50">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="p-4 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-2xl shadow-lg">
                    <Mail className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-stone-800 mb-3 text-xl tracking-tight">メールでのお問い合わせ</h3>
                    <p className="text-blue-600 font-bold mb-2 text-lg">info@unimare.jp</p>
                    <p className="text-stone-500 mb-2">24時間受付</p>
                    <p className="text-sm text-stone-400">※24時間以内に返信いたします</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Square Payment */}
            <Card className="shadow-xl border-2 border-purple-100 bg-gradient-to-br from-white to-purple-50">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="p-4 bg-gradient-to-r from-purple-500 to-purple-600 rounded-2xl shadow-lg">
                    <CreditCard className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-stone-800 mb-3 text-xl tracking-tight">事前決済システム</h3>
                    <p className="text-purple-600 font-bold mb-2 text-lg">Square決済対応</p>
                    <p className="text-stone-500 mb-2">安全・安心の事前決済</p>
                    <p className="text-sm text-stone-400">※クレジットカード・電子マネー対応</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Location Info */}
            <Card className="shadow-xl border-2 border-amber-100 bg-gradient-to-br from-white to-amber-50">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="p-4 bg-gradient-to-r from-amber-500 to-orange-600 rounded-2xl shadow-lg">
                    <MapPin className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-stone-800 mb-3 text-xl tracking-tight">集合場所</h3>
                    <p className="text-stone-600 mb-2 text-lg">鹿児島県奄美市</p>
                    <p className="text-stone-500 mb-2">詳細な集合場所はご予約時にお知らせ</p>
                    <p className="text-sm text-stone-400">※送迎サービスもございます</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Business Hours */}
            <Card className="shadow-xl border-2 border-cyan-100 bg-gradient-to-br from-white to-cyan-50">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="p-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl shadow-lg">
                    <Clock className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-stone-800 mb-3 text-xl tracking-tight">営業時間</h3>
                    <p className="text-stone-600 mb-2 text-lg">9:00 - 18:00</p>
                    <p className="text-stone-500 mb-2">年中無休</p>
                    <p className="text-sm text-stone-400">※悪天候時は休業の場合があります</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
