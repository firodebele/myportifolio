
import React from 'react';
import { Logo, Github, Linkedin, Twitter, Mail } from './Icons';

const Footer: React.FC = () => {
    return (
        <footer className="bg-card text-card-foreground border-t border-secondary">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid md:grid-cols-4 gap-8">
                    <div className="md:col-span-2">
                        <Logo />
                        <p className="text-muted-foreground mt-4 max-w-sm">
                            Computer Science graduate from Ethiopia, passionate about building impactful technology solutions and contributing to the global developer community.
                        </p>
                        <div className="flex items-center space-x-4 mt-6">
                            <a href="#" className="text-muted-foreground hover:text-foreground"><Github /></a>
                            <a href="#" className="text-muted-foreground hover:text-foreground"><Linkedin /></a>
                            <a href="#" className="text-muted-foreground hover:text-foreground"><Twitter /></a>
                            <a href="#" className="text-muted-foreground hover:text-foreground"><Mail /></a>
                        </div>
                    </div>
                    <div>
                        <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
                        <ul className="space-y-2">
                            <li><a href="#home" className="text-muted-foreground hover:text-foreground">Home</a></li>
                            <li><a href="#about" className="text-muted-foreground hover:text-foreground">About</a></li>
                            <li><a href="#projects" className="text-muted-foreground hover:text-foreground">Projects</a></li>
                            <li><a href="#blog" className="text-muted-foreground hover:text-foreground">Blog</a></li>
                            <li><a href="#contact" className="text-muted-foreground hover:text-foreground">Contact</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-semibold text-foreground mb-4">Technologies</h4>
                        <ul className="space-y-2">
                            <li><a href="#skills" className="text-muted-foreground hover:text-foreground">React & Angular</a></li>
                            <li><a href="#skills" className="text-muted-foreground hover:text-foreground">Django & Python</a></li>
                            <li><a href="#skills" className="text-muted-foreground hover:text-foreground">TypeScript</a></li>
                            <li><a href="#skills" className="text-muted-foreground hover:text-foreground">Tailwind CSS</a></li>
                            <li><a href="#skills" className="text-muted-foreground hover:text-foreground">Rust & System Design</a></li>
                        </ul>
                    </div>
                </div>
                <div className="mt-16 border-t border-secondary pt-8 text-center text-sm text-muted-foreground flex justify-between items-center flex-col sm:flex-row">
                    <p>© {new Date().getFullYear()} Portfolio. All rights reserved.</p>
                    <p>Made with Readdy</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
