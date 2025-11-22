import React, { useState } from 'react';
import { MapPin, Mail, Send, Linkedin, ExternalLink } from 'lucide-react';

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

        // TODO: Replace with your Google Apps Script deployment URL
        const scriptURL = 'https://script.google.com/macros/s/AKfycbw1e08fT3DzSUOkPbv6yYkBjTg2kFygXaLCcRBEJUFZpybqK8QfS_TyPUOsO4IT3FB34A/exec';

        try {
            const response = await fetch(scriptURL, {
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
            name: 'Google Scholar',
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
            <div className="max-w-6xl mx-auto px-6 py-16">
                {/* Get in Touch Section */}
                <div className="mb-16">
                    <h2 className="text-2xl font-bold text-slate-900 mb-8">Get in Touch</h2>

                    <div className="grid md:grid-cols-2 gap-12">
                        {/* Contact Form */}
                        <div className="space-y-6">
                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-2 rounded-lg border border-slate-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-all"
                                        placeholder="Your Name"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-2 rounded-lg border border-slate-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-all"
                                        placeholder="your@email.com"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1">Message</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        rows={4}
                                        className="w-full px-4 py-2 rounded-lg border border-slate-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-all resize-none"
                                        placeholder="How can I help you?"
                                    />
                                </div>
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full px-6 py-3 bg-indigo-600 text-white rounded-lg font-medium hover:bg-indigo-700 transition-colors flex items-center justify-center gap-2 shadow-sm disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    <Send size={18} />
                                    {isSubmitting ? 'Sending...' : 'Send Message'}
                                </button>
                                {submitStatus === 'success' && (
                                    <p className="text-green-600 text-sm">Message sent successfully!</p>
                                )}
                                {submitStatus === 'error' && (
                                    <p className="text-red-600 text-sm">Failed to send message. Please try again.</p>
                                )}
                            </form>
                        </div>

                        {/* Location Map */}
                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <a
                                    href={mapUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-3 bg-indigo-50 text-indigo-600 rounded-lg hover:bg-indigo-100 transition-colors"
                                    aria-label="Open in Google Maps"
                                >
                                    <MapPin size={24} />
                                </a>
                                <div>
                                    <h3 className="font-bold text-slate-900">Location</h3>
                                    <a
                                        href={mapUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-slate-600 mt-1 hover:text-indigo-600 transition-colors inline-block"
                                    >
                                        Dorrestein Laboratory<br />
                                        Skaggs School of Pharmacy<br />
                                        University of California, San Diego<br />
                                        9500 Gilman Dr, La Jolla, CA 92093
                                    </a>
                                </div>
                            </div>

                            <div className="h-64 bg-slate-100 rounded-xl overflow-hidden border border-slate-200 shadow-inner">
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
                </div>

                {/* Social Media & Email Links */}
                <div className="border-t border-slate-200 pt-8">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                        {/* Email Links */}
                        <div className="flex flex-wrap items-center gap-4 text-sm text-slate-600">
                            <div className="flex items-center gap-2">
                                <Mail size={16} className="text-slate-400" />
                                <a href="mailto:hgouda@health.ucsd.edu" className="hover:text-indigo-600 transition-colors">
                                    hgouda@health.ucsd.edu
                                </a>
                            </div>
                            <span className="text-slate-300">|</span>
                            <a href="mailto:harsha.gouda11@gmail.com" className="hover:text-indigo-600 transition-colors">
                                harsha.gouda11@gmail.com
                            </a>
                        </div>

                        {/* Social Media Links */}
                        <div className="flex items-center gap-4">
                            {socialLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white border border-slate-200 hover:border-indigo-300 hover:bg-indigo-50 transition-colors text-sm font-medium text-slate-700 hover:text-indigo-700"
                                    aria-label={link.name}
                                >
                                    {typeof link.icon === 'string' ? (
                                        <span className="text-lg">{link.icon}</span>
                                    ) : (
                                        <link.icon size={16} />
                                    )}
                                    <span className="hidden sm:inline">{link.name}</span>
                                    <ExternalLink size={12} className="opacity-50" />
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Copyright */}
                <div className="text-center text-sm text-slate-400 mt-8">
                    &copy; {new Date().getFullYear()} Harsha Gouda. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
