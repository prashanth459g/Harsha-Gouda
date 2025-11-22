import React from 'react';
import { projects } from '../data';
import { BookOpen, ArrowRight } from 'lucide-react';

const Research = () => {
    return (
        <div className="space-y-8 animate-in fade-in duration-500">
            <h2 className="text-3xl font-bold text-slate-900 mb-8 border-b border-slate-200 pb-4">
                Research Projects
            </h2>

            <div className="grid gap-8">
                {projects.map((project, index) => (
                    <div key={index} className="bg-slate-50 rounded-xl p-8 border border-slate-100 hover:shadow-md transition-shadow">
                        <div className="flex items-start gap-4 mb-4">
                            <div className="p-3 bg-indigo-100 text-indigo-600 rounded-lg">
                                <BookOpen size={24} />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-slate-900">
                                    {project.title}
                                </h3>
                                <p className="text-sm text-indigo-600 font-medium mt-1">
                                    {project.period}
                                </p>
                            </div>
                        </div>

                        <p className="text-slate-700 leading-relaxed mb-6 pl-16 md:pl-0">
                            {project.description}
                        </p>

                        {project.subprojects && project.subprojects.length > 0 && (
                            <div className="pl-4 md:pl-16 border-l-2 border-indigo-100 space-y-4">
                                <h4 className="text-sm font-bold text-slate-400 uppercase tracking-wider">Subprojects</h4>
                                {project.subprojects.map((sub, subIndex) => (
                                    <div key={subIndex} className="group">
                                        <div className="flex items-start gap-2">
                                            <ArrowRight size={16} className="mt-1 text-indigo-400 group-hover:text-indigo-600 transition-colors" />
                                            <div>
                                                <h5 className="font-semibold text-slate-800 group-hover:text-indigo-700 transition-colors">
                                                    {sub.title}
                                                </h5>
                                                <p className="text-sm text-slate-600 mt-1">
                                                    {sub.description}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Research;
