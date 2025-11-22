import React from 'react';
import { profile, projects } from '../data';

const Research = () => {
    return (
        <div className="space-y-16 animate-in fade-in duration-500">
            <section>
                <h2 className="text-3xl font-bold text-slate-900 mb-8 border-b border-slate-200 pb-4">
                    Research Interests
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {profile.interests.map((interest, index) => (
                        <div
                            key={index}
                            className="p-4 bg-slate-50 border border-slate-100 rounded-lg text-slate-700 font-medium hover:border-indigo-200 hover:bg-indigo-50/30 transition-colors"
                        >
                            {interest}
                        </div>
                    ))}
                </div>
            </section>

            <section>
                <h2 className="text-3xl font-bold text-slate-900 mb-8 border-b border-slate-200 pb-4">
                    Projects
                </h2>
                <div className="space-y-12">
                    {projects.map((project, index) => (
                        <div key={index} className="group">
                            <div className="flex flex-col md:flex-row md:items-baseline md:justify-between mb-2">
                                <h3 className="text-xl font-bold text-slate-900 group-hover:text-indigo-700 transition-colors">
                                    {project.title}
                                </h3>
                                <span className="text-sm text-slate-500 font-mono mt-1 md:mt-0">
                                    {project.period}
                                </span>
                            </div>
                            <p className="text-slate-600 leading-relaxed">
                                {project.description}
                            </p>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Research;
