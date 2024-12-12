"use client";
import { Button } from "@/components/ui/button"
import * as Framermotion from "framer-motion"

export default function Hero() {
  return (
    <section className="relative py-20 overflow-hidden">
      <div className="container mx-auto px-4">
        <Framermotion.motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h1 className="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
            Raja Sekar
          </h1>
          <p className="text-xl mb-8 text-gray-600">
            Full Stack Developer | Blockchain | DApps
          </p>
          <p className="mb-8 max-w-2xl mx-auto text-gray-600">
            I am a passionate developer with 2.5 years of experience in building web applications.
            My expertise includes JavaScript, React, Node.js, Java, Solidity and cloud technologies.
          </p>
          <div className="flex justify-center space-x-4">
            <Button asChild>
              <a href="#projects">View Projects</a>
            </Button>
            <Button variant="outline" asChild>
              <a href="#contact">Contact Me</a>
            </Button>
          </div>
        </Framermotion.motion.div>
      </div>
      <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>
    </section>
  )
}

