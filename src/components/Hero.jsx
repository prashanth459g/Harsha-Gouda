import React from 'react';
import { profile } from '../data';
import { MapPin, Mail, GraduationCap, Send } from 'lucide-react';

const Hero = () => {
    return (
        <div className="space-y-16 animate-in fade-in duration-500">
            {/* Hero Section */}
            <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-start">
                <div className="w-32 h-32 md:w-48 md:h-48 rounded-2xl overflow-hidden bg-slate-200 flex-shrink-0 shadow-lg ring-4 ring-white">
                    <img
                        src="https://via.placeholder.com/400"
                        alt={profile.name}
                        className="w-full h-full object-cover"
                    />
                </div>

                <div className="flex-1 space-y-6">
                    <div>
                        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight mb-2">
                            {profile.name}
                        </h1>
                        <p className="text-xl text-indigo-600 font-medium">
                            {profile.role}
                        </p>
                    </div>

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
                            <div className="flex gap-4">
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
                </div>
            </div>

            {/* About Section */}
            <div className="bg-slate-50 rounded-2xl p-8 border border-slate-100">
                <h2 className="text-xl font-bold text-slate-900 mb-4">About Me</h2>
                <p className="text-slate-700 leading-relaxed text-lg">
                    {profile.about}
                </p>
            </div>

            {/* Research Interests */}
            <div>
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
            </div>

            {/* Footer Contact Section */}
            <div className="pt-12 border-t border-slate-200">
                <h2 className="text-2xl font-bold text-slate-900 mb-8">Get in Touch</h2>

                <div className="grid md:grid-cols-2 gap-12">
                    {/* Contact Form */}
                    <div className="space-y-6">
                        <form className="space-y-4">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    className="w-full px-4 py-2 rounded-lg border border-slate-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-all"
                                    placeholder="Your Name"
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    className="w-full px-4 py-2 rounded-lg border border-slate-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-all"
                                    placeholder="your@email.com"
                                />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1">Message</label>
                                <textarea
                                    id="message"
                                    rows={4}
                                    className="w-full px-4 py-2 rounded-lg border border-slate-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-all resize-none"
                                    placeholder="How can I help you?"
                                />
                            </div>
                            <button
                                type="button"
                                className="w-full px-6 py-3 bg-indigo-600 text-white rounded-lg font-medium hover:bg-indigo-700 transition-colors flex items-center justify-center gap-2 shadow-sm"
                            >
                                <Send size={18} />
                                Send Message
                            </button>
                        </form>
                    </div>

                    {/* Location Map */}
                    <div className="space-y-6">
                        <div className="flex items-start gap-4">
                            <div className="p-3 bg-indigo-50 text-indigo-600 rounded-lg">
                                <MapPin size={24} />
                            </div>
                            <div>
                                <h3 className="font-bold text-slate-900">Location</h3>
                                <p className="text-slate-600 mt-1">
                                    Dorrestein Laboratory<br />
                                    Skaggs School of Pharmacy<br />
                                    University of California, San Diego<br />
                                    9500 Gilman Dr, La Jolla, CA 92093
                                </p>
                            </div>
                        </div>

                        <div className="h-64 bg-slate-100 rounded-xl overflow-hidden border border-slate-200 shadow-inner">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3350.666262473856!2d-117.2366266848606!3d32.88058398094087!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dc06c4e0e3e3ad%3A0x5250455345345345!2sSkaggs%20School%20of%20Pharmacy%20and%20Pharmaceutical%20Sciences!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                title="Lab Location"
                            ></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
