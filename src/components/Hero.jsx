import React from 'react';
import { profile } from '../data';
import { MapPin, Mail, GraduationCap } from 'lucide-react';

<p className="text-xl text-indigo-600 font-medium">
    {profile.role}
</p>
                    </div >

                    <div className="space-y-3 text-slate-600">
                        <div className="flex items-center gap-3">
                            <GraduationCap size={20} className="text-slate-400" />
                            <span>{profile.department}, {profile.institution}</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <MapPin size={20} className="text-slate-400" />
                            <span>San Diego, California</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <Mail size={20} className="text-slate-400" />
                            <div className="flex flex-wrap gap-4">
                                {profile.emails.map((email, index) => (
                                    <a
                                        key={index}
                                        href={`mailto:${email}`}
                                        className="hover:text-indigo-600 transition-colors border-b border-transparent hover:border-indigo-200"
                                    >
                                        {email}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="flex gap-4 pt-2">
                        <a
                            href={profile.socials.scholar}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-6 py-2.5 bg-slate-900 text-white rounded-lg font-medium hover:bg-indigo-600 transition-all duration-300 shadow-sm hover:shadow-indigo-200 hover:shadow-lg transform hover:-translate-y-0.5"
                        >
                            Google Scholar
                        </a>
                    </div>
                </div >
            </div >

    {/* About Section */ }
    < div className = "bg-slate-50 rounded-2xl p-8 border border-slate-100" >
                <h2 className="text-xl font-bold text-slate-900 mb-4">About Me</h2>
                <p className="text-slate-700 leading-relaxed text-lg">
                    {profile.about}
                </p>
            </div >

    {/* Research Interests */ }
    < div >
                <h2 className="text-xl font-bold text-slate-900 mb-6">Research Interests</h2>
                <div className="flex flex-wrap gap-3">
                    {profile.interests.map((interest, index) => (
                        <span
                            key={index}
                            className="px-4 py-2 bg-white border border-slate-200 rounded-full text-slate-700 text-sm font-medium hover:border-indigo-200 hover:text-indigo-600 hover:bg-indigo-50 transition-all cursor-default"
                        >
                            {interest}
                        </span>
                    ))}
                </div>
            </div >
        </div >
    );
};

export default Hero;
