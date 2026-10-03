import React from "react";
import { Card } from "./ui/card";
import { Code, Lightbulb, Users, Heart } from "./Icons";
import { Reveal } from "./ui/Reveal";

import heroImag from "../assets/hero.jpg";

const values = [
  {
    icon: <Code className="w-8 h-8 text-primary" />,
    title: "Clean Code",
    description: "Writing maintainable, scalable solutions",
  },
  {
    icon: <Lightbulb className="w-8 h-8 text-yellow-400" />,
    title: "Innovation",
    description: "Exploring emerging technologies like Rust",
  },
  {
    icon: <Users className="w-8 h-8 text-green-400" />,
    title: "Collaboration",
    description: "Contributing to open-source community",
  },
  {
    icon: <Heart className="w-8 h-8 text-red-400" />,
    title: "Impact",
    description: "Using tech for education in Ethiopia",
  },
];

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 sm:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <Reveal>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4">
            About Me
          </h2>
          <p className="max-w-3xl mx-auto text-lg text-muted-foreground mb-12">
            Passionate about leveraging technology to create meaningful impact
            and beyond
          </p>
        </Reveal>

        <div className="grid lg:grid-cols-5 gap-12 items-center">
          <Reveal className="lg:col-span-2" delay={200}>
            <img
              src={heroImag}
              alt="Developer at work"
              className="rounded-xl shadow-2xl mx-auto hover:scale-105 transition-transform duration-500 h-[70%]"
            />
          </Reveal>
          <div className="lg:col-span-3 text-left">
            <Reveal delay={400}>
              <h3 className="text-2xl font-bold mb-4">My Journey</h3>
              <p className="text-muted-foreground mb-6">
                As a Computer Science graduate from Ethiopia, I'm driven by the
                potential of technology to transform lives and communities. My
                journey began with curiosity about how software works and
                evolved into a passion for building solutions that matter.
              </p>
              <p className="text-muted-foreground mb-8">
                I have hands-on experience with modern web technologies
                including React, Angular, Tailwind CSS, and Django. I've also
                built custom Acode plugins, and even contributed to Git core
                features.
              </p>
            </Reveal>
            <div className="grid sm:grid-cols-2 gap-4">
              {values.map((value, index) => (
                <Reveal key={value.title} delay={500 + index * 100}>
                  <Card className="bg-card/50 p-6 text-center sm:text-left sm:flex sm:items-center sm:space-x-4 hover:bg-card transition-colors hover:border-primary/50 cursor-default">
                    <div className="flex-shrink-0 mb-4 sm:mb-0 mx-auto sm:mx-0 p-3 bg-secondary rounded-full">
                      {value.icon}
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-1">{value.title}</h4>
                      <p className="text-sm text-muted-foreground">
                        {value.description}
                      </p>
                    </div>
                  </Card>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
