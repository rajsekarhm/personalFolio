"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import * as Framermotion from "framer-motion";
import { Button } from "@/components/ui/button";
import _image from "./image/immutableX.png";
import Image from "next/image";

const projects = [
  {
    title: "Immutable X",
    description:
      " This project leverages to virtualize valueable object using blockchain and it is transprancy.",
    technologies: [
      "Clean Architecture",
      "React",
      "Redux",
      "Node.js",
      "Smart Contract",
      "EtherJs",
      "SpringBoot",
      "Redis",
    ],
    link: [
      { name: "Client", url: "https://github.com/rajsekarhm/immutableXclient" },
      { name: "Server", url: "https://github.com/rajsekarhm/immutableXserver" },
    ],
    image: _image,
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Framermotion.motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="overflow-hidden">
                <Image

                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
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
                  <div className="flex flex-wrap gap-2">
                    {project.link.length
                      ? project.link.map((ele) => {
                          return (
                            <div key={ele.name}>
                              <Button>
                                <a
                                  href={ele.url}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-white-500 hover:underline"
                                >
                                  {ele.name}
                                </a>{" "}
                              </Button>
                            </div>
                          );
                        })
                      : null}
                  </div>
                </CardContent>
              </Card>
            </Framermotion.motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
