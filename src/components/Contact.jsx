import React from 'react';
import { profile } from '../data';
import { Mail, MapPin } from 'lucide-react';

const Contact = () => {
    return (
        <div className="space-y-8 animate-in fade-in duration-500">
            <h2 className="text-3xl font-bold text-slate-900 mb-8 border-b border-slate-200 pb-4">
                Contact
            </h2>

            <div className="bg-slate-50 p-8 rounded-xl border border-slate-100 max-w-2xl">
                <div className="space-y-6">
                    <div>
                        <h3 className="text-lg font-semibold text-slate-900 mb-2">Email</h3>
                        <div className="space-y-2">
                            {profile.emails.map((email, index) => (
                                <a
                                    key={index}
                                    href={`mailto:${email}`}
                                    className="flex items-center text-slate-600 hover:text-indigo-700 transition-colors"
                                >
                                    <Mail size={18} className="mr-3" />
                                    {email}
                                </a>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold text-slate-900 mb-2">Lab Location</h3>
                        <div className="flex items-start text-slate-600">
                            <MapPin size={18} className="mr-3 mt-1 flex-shrink-0" />
                            <p>
                                {profile.department}<br />
                                {profile.institution}<br />
                                San Diego, CA
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
