import React from 'react';
import { publications } from '../data';
import { FileText } from 'lucide-react';

const Publications = () => {
    return (
        <div className="space-y-8 animate-in fade-in duration-500">
            <h2 className="text-3xl font-bold text-slate-900 mb-8 border-b border-slate-200 pb-4">
                Publications
            </h2>

            <div className="space-y-6">
                {publications.map((pub, index) => (
                    <div key={index} className="flex gap-4 items-start group">
                        <div className="mt-1.5 flex-shrink-0 text-slate-400 group-hover:text-indigo-600 transition-colors">
                            <FileText size={20} />
                        </div>
                        <p className="text-slate-700 leading-relaxed">
                            {pub}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Publications;
