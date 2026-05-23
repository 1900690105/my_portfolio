"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Calendar, MapPin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const education = [
  {
    degree: "Bachelor of Technology in Computer Science",
    institution: "Government college of engineering yavatmal",
    university: "DBATU Lonere university",
    location: "YAvatmal Maharashtra",
    year: "2022 - 2025",
    achievements: [
      "Graduated with Distinction (CGPA: 8.84/10.00)",
      "Dean's List for 6 semesters",
      "Many hackathon and Project expo winner Final Year",
    ],
  },
  {
    degree: "Deploma in Computer Science",
    institution: "Gramin Polytechnical Vishnupuri Nanded",
    university: "MSBTE",
    location: "Nanded Maharashtra",
    year: "2019 - 2022",
    achievements: [
      "Graduated with Distinction (CGPA: 82.17%)",
      "Dean's List for 6 semesters",
      "Work on differnt technologies and completed many mini projects",
    ],
  },
];

export function EducationSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="education" className="py-20 lg:py-32 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          {/* Section Header */}
          <div className="text-center mb-16">
            <motion.span
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-sm font-medium text-primary uppercase tracking-wider"
            >
              Education
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-4 mb-6 text-balance"
            >
              Academic <span className="gradient-text">Background</span>
            </motion.h2>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-1/2" />

            {education.map((edu, index) => (
              <motion.div
                key={edu.degree}
                initial={{ opacity: 0, y: 30 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
                }
                transition={{ duration: 0.5, delay: 0.3 + index * 0.2 }}
                className={`relative mb-12 last:mb-0 ${
                  index % 2 === 0
                    ? "md:pr-1/2 md:text-right"
                    : "md:pl-1/2 md:ml-auto"
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-1/2 top-0 w-4 h-4 rounded-full bg-primary border-4 border-background -translate-x-1/2 z-10" />

                <Card
                  className={`ml-8 md:ml-0 ${index % 2 === 0 ? "md:mr-8" : "md:ml-8"} bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/30 transition-all hover:shadow-lg`}
                >
                  <CardContent className="p-6">
                    <div
                      className={`flex items-center gap-2 mb-3 ${index % 2 === 0 ? "md:justify-end" : ""}`}
                    >
                      <GraduationCap className="h-5 w-5 text-primary" />
                      <span className="text-sm font-medium text-primary">
                        {edu.year}
                      </span>
                    </div>

                    <h3 className="text-xl font-semibold mb-2">{edu.degree}</h3>
                    <p className="text-muted-foreground font-medium mb-1">
                      {edu.institution}
                    </p>
                    <p className="text-sm text-muted-foreground mb-3">
                      {edu.university}
                    </p>

                    <div
                      className={`flex items-center gap-1 text-sm text-muted-foreground mb-4 ${index % 2 === 0 ? "md:justify-end" : ""}`}
                    >
                      <MapPin className="h-4 w-4" />
                      {edu.location}
                    </div>

                    <ul
                      className={`space-y-2 ${index % 2 === 0 ? "md:text-right" : ""}`}
                    >
                      {edu.achievements.map((achievement, i) => (
                        <li
                          key={i}
                          className="text-sm text-muted-foreground flex items-start gap-2"
                        >
                          <span
                            className={`text-primary ${index % 2 === 0 ? "md:order-2" : ""}`}
                          >
                            •
                          </span>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
