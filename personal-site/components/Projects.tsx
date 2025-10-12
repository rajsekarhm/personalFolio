"use client";
import React from "react";

const projects = [
  {
    title: "Immutable X",
    description: "This project leverages blockchain technology.",
    technologies: [
      "React",
      "Node.js",
      "Smart Contract",
      "Redis",
    ],
    link: [
      { name: "Client", url: "https://github.com/rajsekarhm/immutableXclient" },
      { name: "Server", url: "https://github.com/rajsekarhm/immutableXserver" },
    ],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div key={index} className="border p-4 rounded-md">
              <h3 className="text-xl">{project.title}</h3>
              <p>{project.description}</p>
              <h4 className="font-semibold mt-2">Technologies:</h4>
              <ul>
                {project.technologies.map((tech, techIndex) => (
                  <li key={techIndex}>{tech}</li>
                ))}
              </ul>
              <div className="mt-4">
                {project.link.map((ele) => (
                  <a key={ele.name} href={ele.url} target="_blank" className="text-blue-500 mr-4">
                    {ele.name}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
