import React from 'react';
import { publications } from '../data';
import { FileText, ExternalLink } from 'lucide-react';

const Publications = () => {
    const renderPublicationList = (items, title) => (
        <div className="space-y-6">
            <h3 className="text-xl font-bold text-indigo-700 flex items-center gap-2">
                {title}
            </h3>
            {items.map((pub, index) => (
                <div key={index} className="flex gap-4 items-start group">
                    <div className="mt-1.5 flex-shrink-0 text-slate-400 group-hover:text-indigo-600 transition-colors">
                        <FileText size={20} />
                    </div>
                    {pub.url ? (
                        <a
                            href={pub.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-slate-700 leading-relaxed hover:text-indigo-600 transition-colors flex items-start gap-2 group/link"
                        >
                            <span>{pub.text}</span>
                            <ExternalLink size={16} className="mt-1 flex-shrink-0 opacity-0 group-hover/link:opacity-100 transition-opacity" />
                        </a>
                    ) : (
                        <p className="text-slate-700 leading-relaxed">
                            {pub.text}
                        </p>
                    )}
                </div>
            ))}
        </div>
    );

    return (
        <div className="space-y-12 animate-in fade-in duration-500">
            <h2 className="text-3xl font-bold text-slate-900 mb-8 border-b border-slate-200 pb-4">
                Publications
            </h2>

            {renderPublicationList(publications.postdoc, "Postdoctoral Research")}
            {renderPublicationList(publications.graduate, "Graduate School")}
        </div>
    );
};

export default Publications;
