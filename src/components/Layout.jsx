import React, { useState } from 'react';
import { Menu, X, User, BookOpen, FileText, Award, Database, Bell } from 'lucide-react';
import Footer from './Footer';

const Layout = ({ children, activeSection, setActiveSection }) => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const navItems = [
        { id: 'home', label: 'Home', icon: User },
        { id: 'updates', label: 'Updates', icon: Bell },
        { id: 'research', label: 'Research', icon: BookOpen },
        { id: 'publications', label: 'Publications', icon: FileText },
        { id: 'cv', label: 'Positions & Awards', icon: Award },
        { id: 'resources', label: 'Resources', icon: Database },
    ];

    const handleNavClick = (id) => {
        setActiveSection(id);
        setIsMobileMenuOpen(false);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <div className="min-h-screen bg-white flex flex-col">
            <div className="flex flex-col md:flex-row flex-1">
                {/* Mobile Header */}
                <div className="md:hidden fixed top-0 left-0 right-0 bg-white z-50 border-b border-slate-200 px-6 py-4 flex justify-between items-center shadow-sm">
                    <h1 className="text-xl font-bold text-slate-900">Harsha Gouda</h1>
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="text-slate-600 hover:text-indigo-600 transition-colors p-2 rounded-lg active:bg-slate-100"
                        aria-label="Toggle menu"
                    >
                        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>

                {/* Sidebar Navigation */}
                <aside className={`
          fixed md:sticky top-0 left-0 h-screen w-64 bg-slate-50 border-r border-slate-200 
          transform transition-transform duration-300 ease-in-out z-40
          ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
          pt-20 md:pt-12 px-6 flex flex-col
        `}>
                    <div className="mb-12 hidden md:block">
                        <h1 className="text-2xl font-bold text-slate-900">Harsha Gouda</h1>
                        <p className="text-slate-500 text-sm mt-2">Postdoctoral Researcher</p>
                    </div>

                    <nav className="space-y-2 flex-1 overflow-y-auto pb-8">
                        {navItems.map((item) => {
                            const Icon = item.icon;
                            const isActive = activeSection === item.id;

                            return (
                                <button
                                    key={item.id}
                                    onClick={() => handleNavClick(item.id)}
                                    className={`
                    w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200
                    ${isActive
                                            ? 'bg-indigo-50 text-indigo-700 shadow-sm'
                                            : 'text-slate-600 hover:bg-white hover:text-slate-900 hover:shadow-sm'
                                        }
                  `}
                                >
                                    <Icon size={18} />
                                    {item.label}
                                </button>
                            );
                        })}
                    </nav>
                </aside>

                {/* Overlay for mobile */}
                {isMobileMenuOpen && (
                    <div
                        className="fixed inset-0 bg-black/20 z-30 md:hidden backdrop-blur-sm"
                        onClick={() => setIsMobileMenuOpen(false)}
                    />
                )}

                {/* Main Content */}
                <main className="flex-1 min-w-0 pt-20 md:pt-0">
                    <div className="max-w-4xl mx-auto px-6 py-12 md:py-20">
                        {children}
                    </div>
                </main>
            </div>

            {/* Footer - Appears on all pages */}
            <Footer />
        </div>
    );
};

export default Layout;
