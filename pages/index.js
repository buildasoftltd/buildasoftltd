import Header from '../components/Header/Header'
import BlogSection from '../components/BlogSection/BlogSection'
import MainSection from '../components/MainSection/MainSection'
import MissionSection from '../components/MissionSection/MissionSection'

import Head from 'next/head'
import styles from '../styles/Home.module.css'
import TeamSection from '../components/Team/TeamSection'
import ProductSection from '../components/ProductsSection/ProductsSection'
import Footer from '../components/Footer/Footer'

export default function Home() {
  return (
    <>
      <Header />
      <MissionSection />
      <ProductSection />
      <TeamSection />
      {/* <BlogSection /> */}
      <Footer />
    </>
  )
}
