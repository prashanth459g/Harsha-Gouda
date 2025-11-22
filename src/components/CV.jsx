import React from 'react';
import { education, awards } from '../data';
import { GraduationCap, Award } from 'lucide-react';

const CV = () => {
    return (
        <div className="space-y-16 animate-in fade-in duration-500">
            <section>
                <h2 className="text-3xl font-bold text-slate-900 mb-8 border-b border-slate-200 pb-4">
                    Education
                </h2>
                <div className="space-y-10">
                    {education.map((edu, index) => (
                        <div key={index} className="relative pl-8 border-l-2 border-slate-200 last:border-0 pb-8 last:pb-0">
                            <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-white border-2 border-indigo-600"></div>
                            <div className="flex flex-col md:flex-row md:items-baseline md:justify-between mb-1">
                                <h3 className="text-xl font-bold text-slate-900">{edu.institution}</h3>
                                <span className="text-sm text-slate-500 font-mono">{edu.year}</span>
                            </div>
                            <div className="text-lg font-medium text-indigo-700 mb-2">{edu.degree}</div>
                            {edu.mentor && (
                                <div className="text-slate-600 italic mb-2">
                                    Mentor: {edu.mentor}
                                </div>
                            )}
                            {edu.details && (
                                <p className="text-slate-600 text-sm leading-relaxed mt-2">
                                    {edu.details}
                                </p>
                            )}
                        </div>
                    ))}
                </div>
            </section>

            <section>
                <h2 className="text-3xl font-bold text-slate-900 mb-8 border-b border-slate-200 pb-4">
                    Awards & Honors
                </h2>
                <div className="grid gap-4">
                    {awards.map((award, index) => (
                        <div key={index} className="flex items-start gap-3 p-4 bg-slate-50 rounded-lg">
                            <Award className="w-5 h-5 text-indigo-600 flex-shrink-0 mt-0.5" />
                            <span className="text-slate-700 font-medium">{award}</span>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default CV;
