import React from 'react';
import { profile } from '../data';
import { Mail } from 'lucide-react';

const Hero = ({ setActiveSection }) => {
    return (
        <div className="space-y-12 animate-in fade-in duration-500">
            <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-start">
                {/* Photo Placeholder */}
                <div className="w-32 h-32 md:w-48 md:h-48 rounded-full bg-slate-200 flex-shrink-0 flex items-center justify-center text-slate-400 shadow-inner">
                    <span className="text-sm">Photo</span>
                </div>

                <div className="space-y-6">
                    <div>
                        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight">
                            {profile.name}
                        </h1>
                        <p className="text-xl text-indigo-700 mt-2 font-medium">
                            {profile.role}
                        </p>
                        <p className="text-slate-600 mt-1">
                            {profile.department} <br />
                            {profile.institution}
                        </p>
                    </div>

                    <div className="flex flex-wrap gap-3">
                        <a
                            href={`mailto:${profile.emails[0]}`}
                            className="inline-flex items-center px-4 py-2 bg-slate-900 text-white rounded-md hover:bg-slate-800 transition-colors text-sm font-medium"
                        >
                            <Mail size={16} className="mr-2" />
                            Contact Me
                        </a>
                        <a
                            href={profile.socials.scholar}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center px-4 py-2 border border-slate-200 text-slate-700 rounded-md hover:bg-slate-50 transition-colors text-sm font-medium"
                        >
                            Google Scholar
                        </a>
                    </div>
                </div>
            </div>

            <div className="prose prose-slate max-w-none">
                <h2 className="text-2xl font-semibold text-slate-900 mb-4">About Me</h2>
                <p className="text-lg text-slate-600 leading-relaxed">
                    {profile.about}
                </p>
            </div>
        </div>
    );
};

export default Hero;
