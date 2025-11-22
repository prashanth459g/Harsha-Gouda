import React, { useState } from 'react';
import { MapPin, Mail, Send, Linkedin } from 'lucide-react';

const Footer = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus(null);

        const scriptURL = 'https://script.google.com/macros/s/AKfycbw1e08fT3DzSUOkPbv6yYkBjTg2kFygXaLCcRBEJUFZpybqK8QfS_TyPUOsO4IT3FB34A/exec';

        try {
            await fetch(scriptURL, {
                method: 'POST',
                mode: 'no-cors',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData)
            });

            setSubmitStatus('success');
            setFormData({ name: '', email: '', message: '' });
        } catch (error) {
            console.error('Error submitting form:', error);
            setSubmitStatus('error');
        } finally {
            setIsSubmitting(false);
        }
    };

    const socialLinks = [
        {
            name: 'Scholar',
            url: 'https://scholar.google.com/citations?user=mP5z-HsAAAAJ&hl=en',
            icon: '🎓'
        },
        {
            name: 'ORCID',
            url: 'https://orcid.org/0000-0003-4511-5875',
            icon: '🆔'
        },
        {
            name: 'LinkedIn',
            url: 'https://www.linkedin.com/in/harsha-gouda',
            icon: Linkedin
        },
        {
            name: 'PubMed',
            url: 'https://pubmed.ncbi.nlm.nih.gov/?term=Gouda%2C%20Harsha',
            icon: '📚'
        }
    ];

    const mapUrl = 'https://www.google.com/maps/search/?api=1&query=32.87439947995953,-117.23589292816983';

    return (
        <footer className="bg-slate-50 border-t border-slate-200 mt-20">
            <div className="max-w-6xl mx-auto px-6 py-12">
                <div className="grid md:grid-cols-2 gap-12">
                    {/* Contact Form */}
                    <div>
                        <h2 className="text-xl font-bold text-slate-900 mb-6">Get in Touch</h2>
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-2 rounded-lg border border-slate-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-all"
                                placeholder="Name"
                            />
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-2 rounded-lg border border-slate-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-all"
                                placeholder="Email"
                            />
                            <textarea
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                                rows={3}
                                className="w-full px-4 py-2 rounded-lg border border-slate-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-all resize-none"
                                placeholder="Message"
                            />
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full px-6 py-2.5 bg-indigo-600 text-white rounded-lg font-medium hover:bg-indigo-700 transition-colors flex items-center justify-center gap-2 disabled:opacity-50"
                            >
                                <Send size={16} />
                                {isSubmitting ? 'Sending...' : 'Send'}
                            </button>
                            {submitStatus === 'success' && (
                                <p className="text-green-600 text-sm">Sent successfully!</p>
                            )}
                        </form>
                    </div>

                    {/* Location & Social */}
                    <div className="space-y-6">
                        <div>
                            <div className="flex items-start gap-3 mb-4">
                                <a
                                    href={mapUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-2 bg-indigo-50 text-indigo-600 rounded-lg hover:bg-indigo-100 transition-colors"
                                >
                                    <MapPin size={20} />
                                </a>
                                <div>
                                    <h3 className="font-bold text-slate-900">Location</h3>
                                    <a
                                        href={mapUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-sm text-slate-600 hover:text-indigo-600 transition-colors"
                                    >
                                        Dorrestein Laboratory<br />
                                        Skaggs School of Pharmacy<br />
                                        UC San Diego<br />
                                        9500 Gilman Dr, La Jolla, CA 92093
                                    </a>
                                </div>
                            </div>

                            {/* Email */}
                            <div className="flex items-center gap-2 mb-4">
                                <Mail size={16} className="text-slate-400" />
                                <a href="mailto:hgouda@health.ucsd.edu" className="text-sm text-slate-600 hover:text-indigo-600 transition-colors">
                                    hgouda@health.ucsd.edu
                                </a>
                            </div>

                            {/* Social Links */}
                            <div className="flex flex-wrap gap-2">
                                {socialLinks.map((link) => (
                                    <a
                                        key={link.name}
                                        href={link.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-white border border-slate-200 hover:border-indigo-300 hover:bg-indigo-50 transition-colors text-xs font-medium text-slate-700"
                                        title={link.name}
                                    >
                                        {typeof link.icon === 'string' ? (
                                            <span>{link.icon}</span>
                                        ) : (
                                            <link.icon size={14} />
                                        )}
                                        <span className="hidden sm:inline">{link.name}</span>
                                    </a>
                                ))}
                            </div>
                        </div>

                        {/* Map */}
                        <div className="h-48 bg-slate-100 rounded-lg overflow-hidden border border-slate-200">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d209.43116891019557!2d-117.23589292816983!3d32.87439947995953!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dc06cf70a030bd%3A0xf8da1152881ec2d1!2sSkaggs%20School%20of%20Pharmacy%20and%20Pharmaceutical%20Sciences!5e0!3m2!1sen!2sus!4v1763828063098!5m2!1sen!2sus"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Lab Location"
                            ></iframe>
                        </div>
                    </div>
                </div>

                {/* Copyright */}
                <div className="text-center text-xs text-slate-400 mt-8 pt-6 border-t border-slate-200">
                    &copy; {new Date().getFullYear()} Harsha Gouda
                </div>
            </div>
        </footer>
    );
};

export default Footer;
