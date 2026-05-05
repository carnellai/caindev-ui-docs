import { Header } from '../components/Header'
import { Hero } from '../components/Hero'
import { TrustBar } from '../components/TrustBar'
import { Features } from '../components/Features'
import { ComponentGrid } from '../components/ComponentGrid'
import { QuickStart } from '../components/QuickStart'
import { Footer } from '../components/Footer'

export function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <TrustBar />
        <Features />
        <ComponentGrid />
        <QuickStart />
      </main>
      <Footer />
    </>
  )
}
