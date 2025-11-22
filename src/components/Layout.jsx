import React, { useState } from 'react';
import { Menu, X, Home, BookOpen, FileText, Award, Link as LinkIcon, Mail } from 'lucide-react';

const navItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'research', label: 'Research', icon: BookOpen },
    { id: 'publications', label: 'Publications', icon: FileText },
    { id: 'cv', label: 'CV & Awards', icon: Award },
    { id: 'resources', label: 'Resources', icon: LinkIcon },
    { id: 'contact', label: 'Contact', icon: Mail },
];

const Layout = ({ activeSection, setActiveSection, children }) => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const handleNavClick = (id) => {
        setActiveSection(id);
        setIsMobileMenuOpen(false);
        window.scrollTo(0, 0);
    };

    return (
        <div className="min-h-screen bg-white text-slate-800 font-sans flex flex-col md:flex-row">
            {/* Mobile Header */}
            <div className="md:hidden fixed top-0 left-0 right-0 h-16 bg-white border-b border-slate-200 z-50 flex items-center justify-between px-4">
                <div className="font-semibold text-lg text-slate-900">Harsha Gouda</div>
                <button
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    className="p-2 text-slate-600 hover:bg-slate-100 rounded-md"
                >
                    {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            {isMobileMenuOpen && (
                <div className="md:hidden fixed inset-0 bg-white z-40 pt-20 px-6 space-y-4">
                    {navItems.map((item) => (
                        <button
                            key={item.id}
                            onClick={() => handleNavClick(item.id)}
                            className={`w-full text-left py-3 px-4 rounded-lg flex items-center space-x-3 transition-colors ${activeSection === item.id
                                    ? 'bg-slate-100 text-indigo-700 font-medium'
                                    : 'text-slate-600 hover:bg-slate-50'
                                }`}
                        >
                            <item.icon size={20} />
                            <span>{item.label}</span>
                        </button>
                    ))}
                </div>
            )}

            {/* Desktop Sidebar */}
            <aside className="hidden md:flex flex-col w-64 h-screen fixed left-0 top-0 border-r border-slate-200 bg-slate-50/50 p-6">
                <div className="mb-10 px-2">
                    <h1 className="text-xl font-bold text-slate-900">Harsha Gouda</h1>
                    <p className="text-sm text-slate-500 mt-1">Postdoctoral Researcher</p>
                </div>

                <nav className="space-y-1 flex-1">
                    {navItems.map((item) => (
                        <button
                            key={item.id}
                            onClick={() => handleNavClick(item.id)}
                            className={`w-full text-left py-2.5 px-3 rounded-md flex items-center space-x-3 transition-all ${activeSection === item.id
                                    ? 'bg-white text-indigo-700 shadow-sm ring-1 ring-slate-200 font-medium'
                                    : 'text-slate-600 hover:bg-slate-200/50 hover:text-slate-900'
                                }`}
                        >
                            <item.icon size={18} />
                            <span>{item.label}</span>
                        </button>
                    ))}
                </nav>

                <div className="mt-auto pt-6 border-t border-slate-200 px-2">
                    <p className="text-xs text-slate-400">
                        &copy; {new Date().getFullYear()} Harsha Gouda
                    </p>
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 md:ml-64 pt-16 md:pt-0 min-h-screen">
                <div className="max-w-4xl mx-auto p-6 md:p-12 lg:p-16">
                    {children}
                </div>
            </main>
        </div>
    );
};

export default Layout;
