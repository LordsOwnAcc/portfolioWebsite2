import React from "react"
import Hero from "./components/hero"
import Gallery from "./components/gallery"
import Portfolio from "./components/portfolio"
import Social from "./components/social"
import Footer from "./components/footer"
import BackgroundPaths from "./components/hero2"

export default function Page() {
  return (
    <main className="min-h-screen bg-black text-white">
      
      <BackgroundPaths 
      title="Sumit Yadav"/>
      <section id="featured-works">
       <Gallery/>
        <Portfolio />
      </section>
      <Social />
      <Footer />
    </main>
  )
}