"use client"

import { motion } from "framer-motion"
import { useRef } from "react"
import { useInView } from "framer-motion"

export default function Gallery() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const images = [
    {
      src: "https://i.postimg.cc/RZ0ZHWvZ/piclumen-1738647859780.png",
      alt: "Art piece 1",
      title: "School ERP System",
    },
    {
      src: "https://i.postimg.cc/85N376Vy/freepik-the-style-is-candid-image-photography-with-natural-35255.jpg",
      alt: "Art piece 2",
      title: "Free Music App",
    },
    {
      src: "https://i.postimg.cc/mZdqrkpw/defense.jpg",
      alt: "Art piece 3",
      title: "DefensIQTech App",
    },
    {
      src: "https://i.postimg.cc/WzffYYqK/piclumen-1738647901973.png",
      alt: "Art piece 4",
      title: "AR App",
    },
  ]

  return (
    <section className="relative py-20" id="upcoming">
      <div ref={ref} className="container mx-auto px-4">
        <motion.h2
          className="mb-12 text-center text-3xl font-bold tracking-tighter sm:text-4xl"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          Upcoming Projects
        </motion.h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {images.map((image, index) => (
            <motion.div
              key={index}
              className="group relative overflow-hidden rounded-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <div className="aspect-[2/3] overflow-hidden">
                <img
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/60 to-transparent p-6 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <h3 className="text-xl font-semibold text-white">{image.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}