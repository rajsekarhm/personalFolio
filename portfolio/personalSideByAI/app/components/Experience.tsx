import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { motion } from "framer-motion"

const experiences = [
  {
    company: "Company A",
    position: "Senior Developer",
    duration: "Jan 2020 - Present",
    responsibilities: [
      "Led a team of 5 developers in building a large-scale e-commerce platform",
      "Implemented CI/CD pipelines, reducing deployment time by 50%",
      "Mentored junior developers and conducted code reviews"
    ]
  },
  {
    company: "Company B",
    position: "Full Stack Developer",
    duration: "Jun 2017 - Dec 2019",
    responsibilities: [
      "Developed and maintained multiple web applications using React and Node.js",
      "Optimized database queries, improving application performance by 30%",
      "Collaborated with UX designers to implement responsive designs"
    ]
  },
]

export default function Experience() {
  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Work Experience</h2>
        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <motion.div
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
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

