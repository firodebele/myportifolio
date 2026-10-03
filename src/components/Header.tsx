
import React, { useState, useEffect } from 'react';
import { Logo } from './Icons';

const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#blog', label: 'Blog' },
  { href: '#contact', label: 'Contact' },
];

const Header: React.FC = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-background/80 backdrop-blur-sm shadow-md' : 'bg-transparent'}`}>
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    <a href="#home" className="shrink-0">
                        <Logo />
                    </a>
                    <nav className="hidden md:flex items-center space-x-8">
                        {navLinks.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                            >
                                {link.label}
                            </a>
                        ))}
                    </nav>
                </div>
            </div>
        </header>
    );
};

export default Header;
