import React from 'react';

export interface Skill {
  name: string;
  level: number;
  icon: React.ReactNode;
}

export interface Project {
  category: 'Full Stack' | 'Frontend' | 'Backend';
  featured: boolean;
  image: string;
  title: string;
  description: string;
  tags: string[];
}

export interface BlogPost {
  category: string;
  featured: boolean;
  image: string;
  date: string;
  readTime: number;
  title: string;
  description: string;
}