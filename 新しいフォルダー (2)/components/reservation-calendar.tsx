"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, CalendarIcon, CheckCircle, Clock, Users, Info } from "lucide-react"
import { Badge } from "@/components/ui/badge"

export default function ReservationCalendar() {
  const [currentMonth, setCurrentMonth] = useState(new Date())
  const [selectedDate, setSelectedDate] = useState<Date | null>(null)

  // 現在の月のカレンダーデータを生成
  const generateCalendarDays = () => {
    const year = currentMonth.getFullYear()
    const month = currentMonth.getMonth()

    // 月の最初の日と最後の日
    const firstDay = new Date(year, month, 1)
    const lastDay = new Date(year, month + 1, 0)

    // 月の最初の日の曜日（0: 日曜日, 1: 月曜日, ..., 6: 土曜日）
    const firstDayOfWeek = firstDay.getDay()

    // カレンダーに表示する日数（前月の日数 + 当月の日数 + 翌月の日数）
    const daysInMonth = lastDay.getDate()

    // カレンダーデータの生成
    const days = []

    // 前月の日を追加
    for (let i = 0; i < firstDayOfWeek; i++) {
      const prevMonthLastDay = new Date(year, month, 0).getDate()
      days.push({
        date: new Date(year, month - 1, prevMonthLastDay - firstDayOfWeek + i + 1),
        isCurrentMonth: false,
        availability: "none",
      })
    }

    // 当月の日を追加
    for (let i = 1; i <= daysInMonth; i++) {
      // ランダムな予約状況を生成（実際のアプリでは実際のデータを使用）
      const randomAvailability = () => {
        const rand = Math.random()
        if (rand < 0.2) return "full"
        if (rand < 0.5) return "limited"
        return "available"
      }

      // 過去の日付は予約不可
      const today = new Date()
      today.setHours(0, 0, 0, 0)
      const currentDate = new Date(year, month, i)
      currentDate.setHours(0, 0, 0, 0)

      let availability = "none"
      if (currentDate >= today) {
        availability = randomAvailability()
      }

      days.push({
        date: new Date(year, month, i),
        isCurrentMonth: true,
        availability,
      })
    }

    // 翌月の日を追加（6行×7列 = 42マスになるまで）
    const remainingDays = 42 - days.length
    for (let i = 1; i <= remainingDays; i++) {
      days.push({
        date: new Date(year, month + 1, i),
        isCurrentMonth: false,
        availability: "none",
      })
    }

    return days
  }

  const calendarDays = generateCalendarDays()

  // 前月へ
  const prevMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1))
  }

  // 翌月へ
  const nextMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1))
  }

  // 日付選択
  const handleDateClick = (day: any) => {
    if (day.availability !== "none") {
      setSelectedDate(day.date)
    }
  }

  // 曜日の表示
  const weekdays = ["日", "月", "火", "水", "木", "金", "土"]

  // 予約状況に応じたスタイルとラベルを取得
  const getAvailabilityStyle = (availability: string) => {
    switch (availability) {
      case "available":
        return {
          bgColor: "bg-emerald-100 hover:bg-emerald-200",
          textColor: "text-emerald-700",
          borderColor: "border-emerald-300",
          label: "予約可能",
        }
      case "limited":
        return {
          bgColor: "bg-amber-100 hover:bg-amber-200",
          textColor: "text-amber-700",
          borderColor: "border-amber-300",
          label: "残りわずか",
        }
      case "full":
        return {
          bgColor: "bg-red-100",
          textColor: "text-red-700",
          borderColor: "border-red-300",
          label: "予約満席",
        }
      default:
        return {
          bgColor: "bg-gray-100",
          textColor: "text-gray-400",
          borderColor: "border-gray-200",
          label: "予約不可",
        }
    }
  }

  return (
    <section className="py-24 bg-gradient-to-b from-stone-50 to-amber-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <div className="inline-block bg-gradient-to-r from-emerald-500 to-teal-500 bg-clip-text text-transparent text-lg font-semibold tracking-wider mb-4">
            RESERVATION CALENDAR
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-stone-800 mb-8 tracking-tight">
            予約
            <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
              カレンダー
            </span>
          </h2>
          <p className="text-xl text-stone-600 max-w-3xl mx-auto leading-relaxed">
            リアルタイムで予約状況を確認できます。
            <br />
            空き状況を確認して、ご希望の日程でご予約ください。
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <Card className="shadow-2xl border-2 border-emerald-100 bg-gradient-to-br from-white to-emerald-50">
            <CardHeader className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-t-lg">
              <CardTitle className="text-3xl flex items-center tracking-tight">
                <Calendar className="w-10 h-10 mr-4" />
                予約状況カレンダー
              </CardTitle>
            </CardHeader>
            <CardContent className="p-10">
              {/* カレンダーヘッダー */}
              <div className="flex justify-between items-center mb-8">
                <Button
                  variant="outline"
                  onClick={prevMonth}
                  className="border-2 border-stone-200 hover:border-emerald-300 text-stone-600"
                >
                  前月
                </Button>
                <h3 className="text-2xl font-bold text-stone-800">
                  {currentMonth.getFullYear()}年 {currentMonth.getMonth() + 1}月
                </h3>
                <Button
                  variant="outline"
                  onClick={nextMonth}
                  className="border-2 border-stone-200 hover:border-emerald-300 text-stone-600"
                >
                  翌月
                </Button>
              </div>

              {/* 曜日ヘッダー */}
              <div className="grid grid-cols-7 mb-4">
                {weekdays.map((day, index) => (
                  <div
                    key={index}
                    className={`text-center font-bold py-2 ${
                      index === 0 ? "text-red-500" : index === 6 ? "text-blue-500" : "text-stone-600"
                    }`}
                  >
                    {day}
                  </div>
                ))}
              </div>

              {/* カレンダー本体 */}
              <div className="grid grid-cols-7 gap-2">
                {calendarDays.map((day, index) => {
                  const availStyle = getAvailabilityStyle(day.availability)
                  return (
                    <div
                      key={index}
                      onClick={() => handleDateClick(day)}
                      className={`
                        relative h-24 p-2 border-2 rounded-xl transition-all
                        ${day.isCurrentMonth ? availStyle.borderColor : "border-gray-100"} 
                        ${day.isCurrentMonth ? availStyle.bgColor : "bg-gray-50"} 
                        ${day.availability !== "none" ? "cursor-pointer" : "cursor-default"}
                        ${selectedDate && day.date.toDateString() === selectedDate.toDateString() ? "ring-2 ring-emerald-500" : ""}
                      `}
                    >
                      <div
                        className={`
                        text-right font-semibold
                        ${
                          !day.isCurrentMonth
                            ? "text-gray-300"
                            : new Date().toDateString() === day.date.toDateString()
                              ? "text-emerald-600"
                              : day.date.getDay() === 0
                                ? "text-red-500"
                                : day.date.getDay() === 6
                                  ? "text-blue-500"
                                  : availStyle.textColor
                        }
                      `}
                      >
                        {day.date.getDate()}
                      </div>

                      {day.isCurrentMonth && day.availability !== "none" && (
                        <div className="absolute bottom-2 left-2 right-2">
                          <Badge
                            className={`
                              w-full justify-center text-xs font-semibold
                              ${
                                day.availability === "available"
                                  ? "bg-emerald-500"
                                  : day.availability === "limited"
                                    ? "bg-amber-500"
                                    : "bg-red-500"
                              } text-white
                            `}
                          >
                            {availStyle.label}
                          </Badge>
                        </div>
                      )}
                    </div>
                  )
                })}
              </div>

              {/* 凡例 */}
              <div className="mt-8 bg-white/80 backdrop-blur-sm rounded-xl p-6 border-2 border-stone-100">
                <h4 className="font-bold text-stone-800 mb-4 flex items-center">
                  <Info className="w-5 h-5 mr-2 text-emerald-500" />
                  予約状況の見方
                </h4>
                <div className="grid md:grid-cols-4 gap-4">
                  <div className="flex items-center">
                    <div className="w-4 h-4 bg-emerald-500 rounded-full mr-2"></div>
                    <span className="text-stone-600">予約可能</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-4 h-4 bg-amber-500 rounded-full mr-2"></div>
                    <span className="text-stone-600">残りわずか</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-4 h-4 bg-red-500 rounded-full mr-2"></div>
                    <span className="text-stone-600">予約満席</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-4 h-4 bg-gray-300 rounded-full mr-2"></div>
                    <span className="text-stone-600">予約不可</span>
                  </div>
                </div>
              </div>

              {/* 選択した日付の詳細 */}
              {selectedDate && (
                <div className="mt-8 bg-gradient-to-r from-emerald-50 to-teal-50 rounded-xl p-6 border-2 border-emerald-100">
                  <h4 className="font-bold text-stone-800 mb-4 text-xl flex items-center">
                    <CalendarIcon className="w-6 h-6 mr-2 text-emerald-500" />
                    {selectedDate.getFullYear()}年 {selectedDate.getMonth() + 1}月 {selectedDate.getDate()}日の予約状況
                  </h4>
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="bg-white/80 backdrop-blur-sm rounded-lg p-4 border border-emerald-100">
                      <div className="flex items-center mb-2">
                        <Clock className="w-5 h-5 text-emerald-500 mr-2" />
                        <h5 className="font-semibold text-stone-700">午前の部</h5>
                      </div>
                      <div className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-emerald-500 mr-2" />
                        <span className="text-stone-600">予約可能</span>
                      </div>
                    </div>
                    <div className="bg-white/80 backdrop-blur-sm rounded-lg p-4 border border-emerald-100">
                      <div className="flex items-center mb-2">
                        <Clock className="w-5 h-5 text-emerald-500 mr-2" />
                        <h5 className="font-semibold text-stone-700">午後の部</h5>
                      </div>
                      <div className="flex items-center">
                        <Users className="w-4 h-4 text-amber-500 mr-2" />
                        <span className="text-stone-600">残り2名様</span>
                      </div>
                    </div>
                    <div className="bg-white/80 backdrop-blur-sm rounded-lg p-4 border border-emerald-100">
                      <div className="flex items-center mb-2">
                        <Clock className="w-5 h-5 text-emerald-500 mr-2" />
                        <h5 className="font-semibold text-stone-700">1日コース</h5>
                      </div>
                      <div className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-emerald-500 mr-2" />
                        <span className="text-stone-600">予約可能</span>
                      </div>
                    </div>
                  </div>
                  <div className="mt-6 text-center">
                    <Button
                      className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white px-8 py-3 rounded-xl font-bold shadow-lg"
                      onClick={() => {
                        const element = document.getElementById("contact")
                        if (element) {
                          element.scrollIntoView({ behavior: "smooth" })
                        }
                      }}
                    >
                      この日程で予約する
                    </Button>
                  </div>
                </div>
              )}

              <div className="mt-8 bg-amber-50 border-2 border-amber-200 rounded-xl p-6">
                <div className="flex items-center mb-4">
                  <Info className="w-6 h-6 text-amber-500 mr-2" />
                  <h4 className="font-bold text-amber-800 text-lg">ご予約について</h4>
                </div>
                <ul className="text-amber-700 space-y-2 leading-relaxed">
                  <li>• カレンダーは毎日更新されます。最新の空き状況をご確認ください。</li>
                  <li>• ご希望の日程が満席の場合でも、お気軽にお問い合わせください。</li>
                  <li>• 天候により、ツアー内容が変更になる場合がございます。</li>
                  <li>• 前日までのキャンセルは無料です。当日キャンセルは50%のキャンセル料が発生します。</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
