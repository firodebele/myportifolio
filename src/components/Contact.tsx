import React from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Mail, Linkedin, Github, MapPin } from "./Icons";
import { Reveal } from "./ui/Reveal";

const contactInfo = [
  {
    icon: <Mail className="w-6 h-6 text-primary" />,
    title: "Email",
    value: "contact@example.com",
  },
  {
    icon: <Linkedin className="w-6 h-6 text-primary" />,
    title: "LinkedIn",
    value: "linkedin.com/in/yourprofile",
  },
  {
    icon: <Github className="w-6 h-6 text-primary" />,
    title: "GitHub",
    value: "github.com/yourusername",
  },
  {
    icon: <MapPin className="w-6 h-6 text-primary" />,
    title: "Location",
    value: "Addis Ababa, Ethiopia",
  },
];

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 sm:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <Reveal>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4">
            Get In Touch
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-muted-foreground mb-12">
            Let's discuss opportunities, or just connect about technology and
            innovation
          </p>
        </Reveal>

        <div className="grid lg:grid-cols-2 gap-12 text-left">
          <Reveal delay={200}>
            <div>
              <h3 className="text-2xl font-bold mb-4">Let's Connect</h3>
              <p className="text-muted-foreground mb-8">
                I'm always interested in discussing new opportunities,
                innovative projects, and ways to contribute to the tech
                community in Ethiopia and beyond.
              </p>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div
                    key={info.title}
                    className="flex items-center gap-4 animate-fade-in-up"
                    style={{
                      animationDelay: `${index * 100}ms`,
                      animationFillMode: "both",
                    }}
                  >
                    <div className="p-3 bg-secondary rounded-full">
                      {info.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold">{info.title}</h4>
                      <p className="text-muted-foreground">{info.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={400}>
            <form className="space-y-4 bg-card/50 p-6 rounded-xl border border-border">
              <div>
                <label
                  htmlFor="full-name"
                  className="block text-sm font-medium mb-1"
                >
                  Full Name
                </label>
                <Input id="full-name" placeholder="Your full name" />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-1"
                >
                  Email Address
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your.email@example.com"
                />
              </div>
              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium mb-1"
                >
                  Subject
                </label>
                <Input
                  id="subject"
                  placeholder="What would you like to discuss?"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-1"
                >
                  Message
                </label>
                <Textarea
                  id="message"
                  rows={5}
                  placeholder="Tell me about your project or opportunity..."
                />
                <p className="text-xs text-right text-muted-foreground mt-1">
                  0/500 characters
                </p>
              </div>
              <Button
                type="submit"
                size="lg"
                className="w-full bg-blue-600 hover:bg-blue-700"
              >
                Send Message
              </Button>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default Contact;
