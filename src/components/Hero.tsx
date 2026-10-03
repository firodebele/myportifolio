import React from "react";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import {
  Github,
  Linkedin,
  Twitter,
  Mail,
  Code,
  Lightbulb,
  ArrowRight,
} from "./Icons";
import { Reveal } from "./ui/Reveal";

import heroImag from "../assets/hero.jpg";

const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(30,58,138,0.3),rgba(255,255,255,0))]"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="relative z-10">
            <Reveal>
              <Badge className="bg-primary/10 text-primary border-primary/20 mb-4">
                <span className="relative flex h-2 w-2 mr-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                </span>
                Available for opportunities
              </Badge>
            </Reveal>

            <Reveal delay={200}>
              <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-foreground mb-4">
                Hello, I'm a <br />
                <span className="text-primary">Problem Solver</span>
              </h1>
            </Reveal>

            <Reveal delay={400}>
              <p className="text-lg text-muted-foreground mb-6 max-w-lg">
                Computer Science graduate from Ethiopia, passionate about
                building{" "}
                <span className="text-primary font-medium">
                  impactful technology solutions
                </span>{" "}
                that make a difference.
              </p>
            </Reveal>

            <Reveal delay={600}>
              <div className="flex flex-wrap gap-2 mb-8">
                {["React", "Angular", "Django", "TypeScript", "Rust"].map(
                  (tag, i) => (
                    <Badge
                      key={tag}
                      className="text-sm animate-fade-in"
                      style={{ animationDelay: `${800 + i * 100}ms` }}
                    >
                      {tag}
                    </Badge>
                  )
                )}
              </div>
            </Reveal>

            <Reveal delay={800}>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button variant="default" size="lg">
                  Explore My Work
                </Button>
                <Button variant="secondary" size="lg">
                  Let's Connect <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </Reveal>

            <Reveal delay={1000}>
              <div className="flex items-center space-x-4">
                <a
                  href="#"
                  className="text-muted-foreground hover:text-foreground transition-colors hover:scale-110 transform"
                >
                  <Github />
                </a>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-foreground transition-colors hover:scale-110 transform"
                >
                  <Linkedin />
                </a>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-foreground transition-colors hover:scale-110 transform"
                >
                  <Twitter />
                </a>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-foreground transition-colors hover:scale-110 transform"
                >
                  <Mail />
                </a>
              </div>
            </Reveal>
          </div>

          <Reveal delay={600} className="relative hidden md:block">
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-900 via-teal-900 to-background opacity-50 rounded-full blur-3xl animate-pulse"></div>
            <img
              src={heroImag}
              alt="Developer Portrait"
              className="relative rounded-full w-full max-w-sm mx-auto shadow-2xl border-4 border-background/50"
            />
            <div
              className="absolute -top-4 -left-4 w-16 h-16 bg-teal-500/20 backdrop-blur-sm rounded-full flex items-center justify-center text-teal-400 animate-bounce"
              style={{ animationDuration: "3s" }}
            >
              <Code className="w-8 h-8" />
            </div>
            <div
              className="absolute -bottom-8 -right-4 w-16 h-16 bg-amber-500/20 backdrop-blur-sm rounded-full flex items-center justify-center text-amber-400 animate-bounce"
              style={{ animationDuration: "4s", animationDelay: "1s" }}
            >
              <Lightbulb className="w-8 h-8" />
            </div>
          </Reveal>
        </div>
      </div>
      <div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-center text-muted-foreground text-xs animate-fade-in"
        style={{ animationDelay: "2000ms" }}
      >
        Scroll to explore
        <div className="mt-2 w-px h-6 bg-muted-foreground mx-auto animate-bounce"></div>
      </div>
    </section>
  );
};

export default Hero;
