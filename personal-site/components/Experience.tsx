"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import * as Framermotion from "framer-motion";

const experiences = [
  {
    company: "Zoho Corporation",
    position: "Member of Technical Staff",
    duration: "June 2023 - Present",
    responsibilities: [
      `Framework Development & Architecture : Engineered an end-to-end testing tool that reduced manual testing efforts by 40% and
accelerated CI/CD pipeline execution. Designed and released an abstraction layer using Playwright APIs (distributed as an NPM package) to
automate recurring testing tasks, ensuring consistency and efficiency across projects and implementing standardized contracts and a clean
architecture model for Zoho Desk’s platform library, significantly improving maintainability and scalability across modules.`,
      `Client SDK : Worked on the client SDK powering the platform, conducting proof of concepts and defining fitness functions to ensure quality.
The SDK is designed to enable feature convergence with a low-code approach.`,
    ],
  },
  {
    company: "Zoho Corporation",
    position: "Intership",
    duration: "Oct 2022 - May 2023",
    responsibilities: [
      `I contributed to architectural development and framework design, addressing and solving architecture constraints in Zoho Desk. During my tenure, I contributed to planning and developing a comprehensive testing tool aimed at acceptance and end-to-end (E2E) testing`,
      `I focused on building an abstraction testing tool that encapsulated Playwright's core API, which we successfully published as an NPM package`,
    ],
  },
];

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
                  <CardDescription className="text-lg">
                    {exp.company} | {exp.duration}
                  </CardDescription>
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
  );
}
