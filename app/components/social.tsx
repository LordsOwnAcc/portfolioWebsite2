"use client"

import { motion } from "framer-motion"
import { FaInstagram, FaTwitter, FaLinkedin, FaGithub, FaMailchimp, FaWhatsapp } from "react-icons/fa"

const socialLinks = [
  { name: "Instagram", icon: FaInstagram, url: "https://www.instagram.com/lord_own_acc?igsh=YnBsZnk2dHQwYnpi" },
  { name: "Twitter", icon: FaWhatsapp, url: "https://wa.link/3pu81p" },
  { name: "LinkedIn", icon: FaLinkedin, url: "https://www.linkedin.com/in/sumit-yadav-83899a293?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" },
  { name: "GitHub", icon: FaGithub, url: "https://github.com/LordsOwnAcc" },
]

export default function Social() {
  return (
    <section id="contact" className="bg-gradient-to-b from-black to-zinc-900 py-20">
      <div className="container mx-auto px-4">
        <motion.h2
          className="mb-12 text-center text-4xl font-bold tracking-tighter sm:text-5xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <span className="bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
            Connect With Me
          </span>
        </motion.h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {socialLinks.map((link, index) => (
            <motion.a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden rounded-lg bg-zinc-800 p-6 transition-all hover:bg-zinc-700 hover:shadow-lg hover:shadow-purple-500/20"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="relative z-10 flex flex-col items-center justify-center">
                <link.icon className="mb-4 text-4xl text-white transition-transform group-hover:scale-110" />
                <span className="text-sm font-medium text-gray-300 transition-colors group-hover:text-white">
                  {link.name}
                </span>
              </div>
              <div className="absolute inset-0 -z-10 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 transition-opacity group-hover:opacity-50" />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}