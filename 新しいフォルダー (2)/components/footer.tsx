import Link from "next/link"
import { Instagram, Youtube, Phone, Mail, MapPin, Heart, Star } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-slate-900 to-slate-800 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div className="md:col-span-2">
            <div className="flex items-center mb-4">
              <h3 className="text-3xl font-bold mr-4">UNIMARE</h3>
              <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-3 py-1 rounded-full text-xs font-bold flex items-center space-x-1">
                <Star className="w-3 h-3 fill-current" />
                <span>2024年受賞</span>
              </div>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              奄美大島 ウェルネス＆アドベンチャーツアー
              <br />
              ～1名からOK！完全カスタムで楽しむ自然と癒しの旅～
              <br />
              <br />
              奄美大島の豊かな自然と深いつながりを持つ地元ガイドが、
              <br />
              心に残る特別な島時間をお届けします。
            </p>
            <div className="flex space-x-4">
              <Link
                href="#"
                className="bg-gradient-to-r from-purple-500 to-pink-500 p-3 rounded-full hover:from-purple-600 hover:to-pink-600 transition-all transform hover:scale-110"
              >
                <Instagram className="w-5 h-5" />
              </Link>
              <Link
                href="#"
                className="bg-gradient-to-r from-red-500 to-red-600 p-3 rounded-full hover:from-red-600 hover:to-red-700 transition-all transform hover:scale-110"
              >
                <Youtube className="w-5 h-5" />
              </Link>
              <Link
                href="tel:0997-XX-XXXX"
                className="bg-gradient-to-r from-green-500 to-green-600 p-3 rounded-full hover:from-green-600 hover:to-green-700 transition-all transform hover:scale-110"
              >
                <Phone className="w-5 h-5" />
              </Link>
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-xl">体験メニュー</h4>
            <ul className="space-y-3 text-gray-300">
              <li>
                <Link href="#" className="hover:text-blue-300 transition-colors flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                  ウミガメシュノーケルツアー
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-blue-300 transition-colors flex items-center">
                  <span className="w-2 h-2 bg-emerald-500 rounded-full mr-2"></span>
                  スキンダイビングツアー
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-blue-300 transition-colors flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                  マングローブカヌー
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-blue-300 transition-colors flex items-center">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
                  原生林トレッキング
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-blue-300 transition-colors flex items-center">
                  <span className="w-2 h-2 bg-pink-500 rounded-full mr-2"></span>
                  絶景フォトツアー
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-blue-300 transition-colors flex items-center">
                  <span className="w-2 h-2 bg-orange-500 rounded-full mr-2"></span>
                  マッサージ付きプラン
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-xl">お問い合わせ</h4>
            <div className="space-y-4 text-gray-300">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-blue-400" />
                <div>
                  <p className="font-semibold">0997-XX-XXXX</p>
                  <p className="text-sm text-gray-400">9:00-18:00</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-blue-400" />
                <div>
                  <p className="font-semibold">info@unimare.jp</p>
                  <p className="text-sm text-gray-400">24時間受付</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-blue-400" />
                <div>
                  <p className="font-semibold">鹿児島県奄美市</p>
                  <p className="text-sm text-gray-400">詳細は予約時にご案内</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <Heart className="w-5 h-5 text-red-500" />
              <p className="text-gray-300">Made with love for Amami Oshima</p>
            </div>
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6 text-sm text-gray-400">
              <Link href="#" className="hover:text-white transition-colors">
                プライバシーポリシー
              </Link>
              <Link href="#" className="hover:text-white transition-colors">
                利用規約
              </Link>
              <Link href="#" className="hover:text-white transition-colors">
                特定商取引法に基づく表記
              </Link>
            </div>
          </div>
          <div className="text-center mt-6 text-gray-400">
            <p>&copy; 2024 UNIMARE. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
