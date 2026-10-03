
import React from 'react';
import {Badge} from './ui/badge';
import { Github } from './Icons';
import { Reveal } from './ui/Reveal';

const OpenSource: React.FC = () => {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
            <div className="bg-linear-to-br from-card to-secondary/30 rounded-2xl p-8 md:p-12 shadow-lg border border-border/50 hover:border-primary/50 transition-colors">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                <div className="flex-1">
                <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 bg-green-500/10 rounded-full">
                        <Github className="w-8 h-8 text-green-400" />
                    </div>
                    <h3 className="text-2xl font-bold">Open Source Contributions</h3>
                </div>
                <p className="text-muted-foreground max-w-2xl mb-6">
                    Active contributor to the developer community with custom Acode plugins and Git core features, helping developers worldwide build better software.
                </p>
                <div className="flex flex-wrap gap-2">
                    {['Acode Plugins', 'Git Core', 'Community Projects', 'Documentation'].map(tag => (
                    <Badge key={tag}>{tag}</Badge>
                    ))}
                </div>
                </div>
                <div className="shrink-0 text-center">
                    <div className="w-24 h-24 bg-primary/20 rounded-full flex items-center justify-center mx-auto animate-bounce" style={{ animationDuration: '3s' }}>
                        <Github className="w-12 h-12 text-primary" />
                    </div>
                    <p className="mt-2 text-sm text-muted-foreground">Contributing to the<br/>future of development</p>
                </div>
            </div>
            </div>
        </Reveal>
      </div>
    </section>
  );
};

export default OpenSource;
