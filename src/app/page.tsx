import HeroComponent from "@/components/HeroComponents/HeroComponent"
import Header from "@/components/layout/HeaderComponents/Header"

export default async function Home() {
  return (
    <div className="min-h-screen font-[family-name:var(--font-geist-sans)]">
      <Header />
      <HeroComponent />
    </div>
  )
}
