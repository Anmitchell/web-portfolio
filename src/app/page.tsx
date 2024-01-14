import HeroSection from '@/components/heroSection'
import Nav from '@/components/navbar'
import Content from '@/components/content'

export default function Home() {
  return (
    <div className='container m-auto grid gap-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 selection:bg-[#ffffff]'>
      <HeroSection />
      <Nav />
      <Content />
    </div>
  )
}
