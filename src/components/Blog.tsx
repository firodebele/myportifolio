import React from "react";
import type { BlogPost } from "../types";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Card, CardContent, CardHeader } from "./ui/card";
import { ArrowRight } from "./Icons";
import { Reveal } from "./ui/Reveal";

const blogData: BlogPost[] = [
  {
    category: "Full Stack",
    featured: true,
    image: "https://picsum.photos/id/101/600/400",
    title: "Building Scalable Web Applications with Django and React",
    description:
      "Learn how to create robust full-stack applications using Django REST framework and React, with real-world examples from Ethiopian tech projects.",
    date: "January 15, 2024",
    readTime: 8,
  },
  {
    category: "Open Source",
    featured: true,
    image: "https://picsum.photos/id/103/600/400",
    title: "Contributing to Open Source: My Git Core Experience",
    description:
      "A detailed walkthrough of my contribution to Git core features, including the challenges faced and lessons learned in the open source community.",
    date: "January 8, 2024",
    readTime: 12,
  },
  /*  
 {
    category: "Education",
    featured: false,
    image: "https://picsum.photos/id/106/600/400",
    title: "The Future of Tech Education in Ethiopia",
    description:
      "Exploring opportunities and challenges in Ethiopian tech education, and how we can leverage technology to create better learning experiences.",
    date: "January 1, 2024",
    readTime: 6,
  },
  {
    category: "System Design",
    featured: false,
    image: "https://picsum.photos/id/201/600/400",
    title: "System Design Patterns for Modern Applications",
    description:
      "Understanding essential design patterns and architectural principles that every software engineer should know for building maintainable systems.",
    date: "December 20, 2023",
    readTime: 10,
  },
  {
    category: "Rust",
    featured: true,
    image: "https://picsum.photos/id/302/600/400",
    title: "Getting Started with Rust: A Systems Programming Journey",
    description:
      "My experience learning Rust and how it's changing the way I think about systems programming, memory safety, and performance optimization.",
    date: "December 10, 2023",
    readTime: 7,
  },
  {
    category: "Mobile Dev",
    featured: false,
    image: "https://picsum.photos/id/402/600/400",
    title: "Building Mobile Development Tools: Acode Plugin Development",
    description:
      "A comprehensive guide to creating custom plugins for Acode mobile editor, enhancing productivity for mobile developers.",
    date: "December 1, 2023",
    readTime: 9,
  }, 
  */
];

const Blog: React.FC = () => {
  return (
    <section id="blog" className="py-24 sm:py-32 bg-secondary/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <Reveal>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4">
            Tech Blog & Insights
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-muted-foreground mb-12">
            Sharing knowledge, experiences, and insights from my journey in
            software development
          </p>
        </Reveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogData.map((post, index) => (
            <Reveal key={post.title} delay={index * 100}>
              <Card className="h-full text-left overflow-hidden flex flex-col hover:border-primary/50 transition-colors group">
                <div className="relative overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-2 right-2 flex gap-2">
                    {post.featured && (
                      <Badge className="bg-primary text-primary-foreground">
                        Featured
                      </Badge>
                    )}
                    <Badge className="bg-card/80 text-foreground backdrop-blur-sm">
                      {post.category}
                    </Badge>
                  </div>
                </div>
                <CardHeader>
                  <div className="flex items-center text-sm text-muted-foreground mb-2">
                    <span>{post.date}</span>
                    <span className="mx-2">•</span>
                    <span>{post.readTime} min read</span>
                  </div>
                  <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                </CardHeader>
                <CardContent className="flex-grow flex flex-col">
                  <p className="text-muted-foreground text-sm mb-4 flex-grow">
                    {post.description}
                  </p>
                  <a
                    href="#"
                    className="flex items-center text-primary font-semibold group/link"
                  >
                    Read More
                    <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover/link:translate-x-1" />
                  </a>
                </CardContent>
              </Card>
            </Reveal>
          ))}
        </div>

        <Reveal delay={400} className="mt-16">
          <Button variant="default" size="lg">
            View All Blog Posts
          </Button>
        </Reveal>
      </div>
    </section>
  );
};

export default Blog;
