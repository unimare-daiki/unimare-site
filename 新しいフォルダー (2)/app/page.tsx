import type { Metadata } from "next"
import Header from "@/components/header"
import Hero from "@/components/hero"
import Features from "@/components/features"
import TourLineup from "@/components/tour-lineup"
import WellnessExperience from "@/components/wellness-experience"
import PricingCalculator from "@/components/pricing-calculator"
import SocialGallery from "@/components/social-gallery"
import Testimonials from "@/components/testimonials"
import Awards from "@/components/awards"
import AIChat from "@/components/ai-chat"
import Contact from "@/components/contact"
import Footer from "@/components/footer"
import ReservationCalendar from "@/components/reservation-calendar"
import BlogSection from "@/components/blog-section"

export const metadata: Metadata = {
  title: "奄美大島 ウェルネス＆アドベンチャーツアー | UNIMARE - あなただけの旅を、奄美で叶える",
  description:
    "1名から参加可能な奄美大島ウェルネス&アドベンチャーツアー。自然と癒しを自由に組み合わせる完全カスタム旅。ウミガメシュノーケル、直感リトリート、マッサージプランを心ゆくまで。2024年トリップアドバイザー受賞。",
  keywords:
    "奄美大島, ウェルネスツアー, 1名参加, 直感リトリート, サンセット倍音, マッサージ, ウミガメシュノーケル, 自然体験, 癒し, カスタムプラン",
  openGraph: {
    title: "奄美大島 ウェルネス＆アドベンチャーツアー | UNIMARE",
    description: "あなただけの旅を、奄美で叶える。1名から参加可能、自然と癒しを自由に組み合わせる完全カスタム旅",
    images: ["/images/ocean-view.jpg"],
    type: "website",
    locale: "ja_JP",
  },
}

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-stone-50 to-amber-50">
      <Header />
      <Hero />
      <Features />
      <TourLineup />
      <WellnessExperience />
      <PricingCalculator />
      <SocialGallery />
      <Testimonials />
      <ReservationCalendar />
      <BlogSection />
      <Awards />
      <Contact />
      <Footer />
      <AIChat />
    </main>
  )
}
