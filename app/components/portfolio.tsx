"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Slider from "react-slick"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState("all")

  const categories = ["all", "mobile", "web", "software"]

  const works = [
    {
      id: 1,
      title: "Free Book Reading App",
      category: "mobile",
      images: [
        "https://i.ibb.co/pBCY2dLw/Whats-App-Image-2025-02-04-at-11-42-11-AM.jpg",
        "https://i.ibb.co/xS6z8Cjj/Whats-App-Image-2025-02-04-at-11-42-16-AM.jpg",
        "https://i.ibb.co/SXDtr2LW/Whats-App-Image-2025-02-04-at-11-42-00-AM.jpg",
      ],
      year: "2024",
    },

 
    {
      id: 2,
      title: "QrScanner App",
      category: "mobile",
      images: [
        "https://i.ibb.co/twDM8GkV/Whats-App-Image-2025-02-04-at-9-46-52-PM.jpg",
        "https://i.ibb.co/mFMf6dq0/Whats-App-Image-2025-02-04-at-11-01-05-AM.jpg",
        "https://i.ibb.co/B52N7LRk/Whats-App-Image-2025-02-04-at-9-46-52-PM.jpg",
        "https://i.ibb.co/ynP9dFYt/Whats-App-Image-2025-02-04-at-11-01-04-AM.jpg"
      ],
      year: "2023",
    },
  ]

  const filteredWorks = works.filter((work) => (selectedCategory === "all" ? true : work.category === selectedCategory))

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  }

  return (
    <section className="bg-black py-20" id ="portfolio">
      <div className="container mx-auto px-4">
        <div className="mb-12 flex flex-wrap justify-center gap-4">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              onClick={() => setSelectedCategory(category)}
              className="text-sm capitalize"
            >
              {category}
            </Button>
          ))}
        </div>
        <motion.div layout className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence>
            {filteredWorks.map((work) => (
              <motion.div
                key={work.id}
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Card className="overflow-hidden bg-zinc-900">
                  <CardContent className="p-0">
                    <div className="group relative">
                      <Slider {...sliderSettings}>
                        {work.images.map((image, index) => (
                          <div key={index} className="relative">
                            <img
                              src={image || "/placeholder.svg"}
                              alt={`${work.title} screenshot ${index + 1}`}
                              className="h-[700px] w-full object-cover"
                            />
                          </div>
                        ))}
                      </Slider>
                      <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                        <h3 className="text-xl font-semibold text-white">{work.title}</h3>
                        <p className="mt-2 text-sm text-gray-300">{work.year}</p>
                        <p className="mt-2 text-sm text-gray-300 capitalize">{work.category}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}