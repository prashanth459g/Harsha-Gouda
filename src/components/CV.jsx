import React from 'react';
import { education, awards } from '../data';
import { GraduationCap, Award, Calendar } from 'lucide-react';

const CV = () => {
    return (
        <div className="space-y-12 animate-in fade-in duration-500">
            {/* Education/Positions Section */}
            <section>
                <h2 className="text-3xl font-bold text-slate-900 mb-8 border-b border-slate-200 pb-4">
                    Positions
                </h2>
                <div className="space-y-12">
                    {education.map((edu, index) => (
                        <div key={index} className="relative pl-8 border-l-2 border-indigo-100 hover:border-indigo-300 transition-colors">
                            <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-white border-2 border-indigo-600"></div>

                            <div className="mb-2">
                                <h3 className="text-xl font-bold text-slate-900">{edu.degree}</h3>
                                <div className="text-indigo-600 font-medium mb-1">{edu.institution}</div>
                                <div className="flex items-center text-sm text-slate-500 gap-4">
                                    <span className="flex items-center gap-1">
                                        <Calendar size={14} />
                                        {edu.year}
                                    </span>
                                    <span className="flex items-center gap-1">
                                        <GraduationCap size={14} />
                                        Mentor: {edu.mentor}
                                    </span>
                                </div>
                            </div>

                            {edu.details && (
                                <p className="text-slate-600 leading-relaxed mt-3">
                                    {edu.details}
                                </p>
                            )}
                        </div>
                    ))}
                </div>
            </section>

            {/* Awards Section */}
            <section>
                <h2 className="text-3xl font-bold text-slate-900 mb-8 border-b border-slate-200 pb-4">
                    Awards
                </h2>
                <div className="grid gap-4">
                    {awards.map((award, index) => (
                        <div key={index} className="flex items-start gap-4 p-4 bg-slate-50 rounded-lg border border-slate-100 hover:shadow-sm transition-shadow">
                            <div className="mt-1 text-indigo-600">
                                <Award size={20} />
                            </div>
                            <span className="text-slate-700 font-medium">{award}</span>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default CV;
