import React, { useState } from "react";
import type { Skill } from "../types";
import { Button } from "./ui/button";
import { Progress } from "./ui/progress";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { ReactLogo, Database, Settings, Rocket, Star, Code } from "./Icons";
import { Reveal } from "./ui/Reveal";

const skillsData: { [key: string]: Skill[] } = {
  Frontend: [
    {
      name: "React",
      level: 90,
      icon: <ReactLogo className="w-6 h-6 text-cyan-400" />,
    },
    {
      name: "Angular",
      level: 85,
      icon: <ReactLogo className="w-6 h-6 text-red-500" />,
    },
    {
      name: "TypeScript",
      level: 80,
      icon: <Code className="w-6 h-6 text-blue-400" />,
    },
    {
      name: "Tailwind CSS",
      level: 95,
      icon: <ReactLogo className="w-6 h-6 text-teal-400" />,
    },
    {
      name: "Next.js",
      level: 75,
      icon: <ReactLogo className="w-6 h-6 text-white" />,
    },
  ],
  Backend: [
    {
      name: "Node.js",
      level: 85,
      icon: <Database className="w-6 h-6 text-green-400" />,
    },
    {
      name: "Django",
      level: 90,
      icon: <Database className="w-6 h-6 text-green-700" />,
    },
    {
      name: "PostgreSQL",
      level: 80,
      icon: <Database className="w-6 h-6 text-blue-500" />,
    },
    {
      name: "MongoDB",
      level: 70,
      icon: <Database className="w-6 h-6 text-green-500" />,
    },
  ],
  DevOps: [
    {
      name: "Docker",
      level: 80,
      icon: <Settings className="w-6 h-6 text-blue-500" />,
    },
    {
      name: "Git & GitHub",
      level: 95,
      icon: <Settings className="w-6 h-6 text-gray-400" />,
    },
    {
      name: "CI/CD",
      level: 75,
      icon: <Settings className="w-6 h-6 text-yellow-400" />,
    },
  ],
  Emerging: [
    {
      name: "Rust",
      level: 65,
      icon: <Rocket className="w-6 h-6 text-orange-500" />,
    },
    {
      name: "WebAssembly",
      level: 50,
      icon: <Rocket className="w-6 h-6 text-purple-500" />,
    },
  ],
};

const TABS = ["Frontend", "Backend", "DevOps", "Emerging"];

const Skills: React.FC = () => {
  const [activeTab, setActiveTab] = useState("Frontend");

  return (
    <section id="skills" className="py-24 sm:py-32 bg-secondary/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <Reveal>
          <div className="inline-block bg-primary/10 text-primary px-4 py-1 rounded-full text-sm font-medium mb-4">
            <Star className="w-4 h-4 inline-block mr-2" />
            Technical Expertise
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4">
            Skills & <span className="text-primary">Technologies</span>
          </h2>
          <p className="max-w-3xl mx-auto text-lg text-muted-foreground mb-12">
            A comprehensive toolkit built through hands-on experience,
            continuous learning, and real-world projects
          </p>
        </Reveal>

        <Reveal delay={200}>
          <div className="flex justify-center flex-wrap gap-2 mb-8">
            {TABS.map((tab) => (
              <Button
                key={tab}
                variant={activeTab === tab ? "default" : "secondary"}
                onClick={() => setActiveTab(tab)}
                className="border-none bg-opacity-10 hover:bg-opacity-20"
              >
                {tab}
              </Button>
            ))}
          </div>
        </Reveal>

        <Reveal delay={400}>
          <Card className="max-w-4xl mx-auto text-left shadow-2xl bg-card/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-2xl">{activeTab}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {skillsData[activeTab].map((skill, index) => (
                  <div
                    key={skill.name}
                    className="animate-fade-in-up"
                    style={{
                      animationDelay: `${index * 100}ms`,
                      animationFillMode: "both",
                    }}
                  >
                    <div className="flex justify-between items-center mb-2">
                      <div className="flex items-center gap-3">
                        {skill.icon}
                        <span className="font-medium">{skill.name}</span>
                      </div>
                      <span className="text-sm text-muted-foreground">
                        {skill.level}%
                      </span>
                    </div>
                    <Progress value={skill.level} />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </Reveal>
      </div>
    </section>
  );
};

export default Skills;
