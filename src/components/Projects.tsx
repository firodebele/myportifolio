
import React, { useState } from 'react';
import type { Project } from '../types';
import {Button} from './ui/button';
import {Badge} from './ui/badge';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from './ui/card';
import { ExternalLink, Code, Github } from './Icons';
import { Reveal } from './ui/Reveal';

const projectsData: Project[] = [
    { category: 'Full Stack', featured: true, image: 'https://picsum.photos/id/42/600/400', title: 'Educational Platform for Ethiopian Students', description: 'A comprehensive learning management system built with Django and React, designed specifically for Ethiopian educational institutions.', tags: ['Django', 'React', 'PostgreSQL', 'Tailwind CSS'] },
    { category: 'Frontend', featured: true, image: 'https://picsum.photos/id/2/600/400', title: 'Custom Acode Plugin Suite', description: 'A collection of productivity plugins for the Acode mobile code editor, enhancing the development experience for mobile developers.', tags: ['JavaScript', 'HTML', 'CSS', 'Mobile Development'] },
    { category: 'Backend', featured: false, image: 'https://picsum.photos/id/1/600/400', title: 'Git Core Feature Contribution', description: 'Contributed to Git core functionality, improving version control workflows and developer experience.', tags: ['C', 'Shell', 'Git', 'Open Source'] },
    { category: 'Full Stack', featured: true, image: 'https://picsum.photos/id/180/600/400', title: 'Ethiopian Business Directory', description: 'A modern web application connecting local businesses with customers, featuring location-based search and multilingual support.', tags: ['Angular', 'Node.js', 'MongoDB', 'Google Maps API'] },
    { category: 'Frontend', featured: false, image: 'https://picsum.photos/id/48/600/400', title: 'React Component Library', description: 'A reusable component library built with React and TypeScript, featuring modern UI components with accessibility in mind.', tags: ['React', 'TypeScript', 'Storybook', 'Jest'] },
    { category: 'Backend', featured: false, image: 'https://picsum.photos/id/30/600/400', title: 'Rust CLI Tool', description: 'A command-line utility built with Rust for file processing and automation, showcasing systems programming skills.', tags: ['Rust', 'CLI', 'Systems Programming'] },
];

const FILTERS = ['All Projects', 'Full Stack', 'Frontend', 'Backend'];

const Projects: React.FC = () => {
    const [activeFilter, setActiveFilter] = useState('All Projects');

    const filteredProjects = projectsData.filter(project => 
        activeFilter === 'All Projects' || project.category === activeFilter
    );

    return (
        <section id="projects" className="py-24 sm:py-32">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <Reveal>
                    <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4">Featured Projects</h2>
                    <p className="max-w-2xl mx-auto text-lg text-muted-foreground mb-12">
                        A showcase of my technical skills and passion for creating meaningful solutions
                    </p>
                </Reveal>

                <Reveal delay={200}>
                    <div className="flex justify-center flex-wrap gap-2 mb-8">
                        {FILTERS.map(filter => (
                            <Button
                                key={filter}
                                variant={activeFilter === filter ? 'default' : 'secondary'}
                                className="border-none bg-opacity-10 hover:bg-opacity-20"
                                onClick={() => setActiveFilter(filter)}
                            >
                                {filter}
                            </Button>
                        ))}
                    </div>
                </Reveal>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredProjects.map((project, index) => (
                        <Reveal key={project.title} delay={index * 100}>
                            <Card className="h-full text-left overflow-hidden flex flex-col hover:-translate-y-2 transition-all duration-300 hover:shadow-xl border-border/50">
                                <div className="relative overflow-hidden group">
                                    <img src={project.image} alt={project.title} className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110" />
                                    {project.featured && <Badge className="absolute top-2 left-2 bg-primary text-primary-foreground">Featured</Badge>}
                                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                                        <Button size="sm" variant="secondary" className="rounded-full">Demo</Button>
                                        <Button size="sm" variant="secondary" className="rounded-full">Code</Button>
                                    </div>
                                </div>
                                <CardHeader>
                                    <CardTitle className="text-xl">{project.title}</CardTitle>
                                </CardHeader>
                                <CardContent className="grow">
                                    <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
                                    <div className="flex flex-wrap gap-2">
                                        {project.tags.map(tag => <Badge key={tag} className="bg-secondary/50">{tag}</Badge>)}
                                    </div>
                                </CardContent>
                                <CardFooter className="space-x-4 border-t pt-4">
                                    <Button variant="link" className="p-0 text-foreground h-auto">
                                        <ExternalLink className="w-4 h-4 mr-2" /> Live Demo
                                    </Button>
                                    <Button variant="link" className="p-0 text-foreground h-auto">
                                        <Code className="w-4 h-4 mr-2" /> Code
                                    </Button>
                                </CardFooter>
                            </Card>
                        </Reveal>
                    ))}
                </div>

                <Reveal delay={400} className="mt-16">
                    <Button variant="secondary" size="lg">
                        <Github className="w-5 h-5 mr-2" /> View All Projects on GitHub
                    </Button>
                </Reveal>
            </div>
        </section>
    );
};

export default Projects;
