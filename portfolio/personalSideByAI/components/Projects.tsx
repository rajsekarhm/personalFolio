import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"

const projects = [
  {
    title: "Project 1",
    description: "A brief description of Project 1",
    technologies: ["React", "Node.js", "MongoDB"],
    link: "https://project1.com",
    image: "/placeholder.svg?height=200&width=300"
  },
  {
    title: "Project 2",
    description: "A brief description of Project 2",
    technologies: ["Vue.js", "Express", "PostgreSQL"],
    link: "https://project2.com",
    image: "/placeholder.svg?height=200&width=300"
  },
  {
    title: "Project 3",
    description: "A brief description of Project 3",
    technologies: ["React Native", "Firebase", "Redux"],
    link: "https://project3.com",
    image: "/placeholder.svg?height=200&width=300"
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="overflow-hidden">
                <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="mb-4">
                    <h4 className="font-semibold mb-2">Technologies:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="secondary">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                    View Project
                  </a>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

