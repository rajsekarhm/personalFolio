"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { FileDown } from 'lucide-react'
import * as Framermotion from "framer-motion"

export default function Resume() {
  return (
    <section id="resume" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Resume</h2>
        <Framermotion.motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">My Professional Resume</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-6 text-gray-600">
                Download my full resume to Know more about my skills, education, and professional experience.
              </p>
              <Button asChild>
                <a href="/path-to-your-resume.pdf" download>
                  <FileDown className="mr-2 h-4 w-4" /> Download Resume (PDF)
                </a>
              </Button>
            </CardContent>
          </Card>
        </Framermotion.motion.div>
      </div>
    </section>
  )
}

