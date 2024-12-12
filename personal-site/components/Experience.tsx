"use client";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import * as Framermotion from "framer-motion"

const experiences = [
  {
    company: "Company X",
    position: "Software Developer I",
    duration: "June 2023 - Present",
    responsibilities: [
      `I have contributed to defining fitness functions for Zoho Desk, with a primary focus on establishing and enforcing code standards, developing test strategies, and ensuring adherence to clean architecture principles.Additionally, I have introduced and optimised stages within CI pipelines`,` I focus on improving code quality and readability. I have developed a Node.js library that integrates ESLint with SonarQube to provide code metrics during development and CI processes.
    `,`I also worked in pre-commit library for ESLint to enforce code checks before commits and handle exemption cases effectively.`
    ]
  },
  {
    company: "Company X",
    position: "Intership",
    duration: "Oct 2022 - May 2023",
    responsibilities: [
      `I contributed to architectural development and framework design, addressing and solving architecture constraints in Zoho Desk. During my tenure, I contributed to planning and developing a comprehensive testing tool aimed at acceptance and end-to-end (E2E) testing`,
      `I focused on building an abstraction testing tool that encapsulated Playwright's core API, which we successfully published as an NPM package`
]}
]

export default function Experience() {
  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Work Experience</h2>
        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <Framermotion.motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">{exp.position}</CardTitle>
                  <CardDescription className="text-lg">{exp.company} | {exp.duration}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 space-y-2">
                    {exp.responsibilities.map((resp, respIndex) => (
                      <li key={respIndex}>{resp}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </Framermotion.motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

