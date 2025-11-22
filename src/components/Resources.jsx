import React from 'react';
import { resources } from '../data';
import { ExternalLink, Database, Microscope, Dna } from 'lucide-react';

const Resources = () => {
    const renderResourceSection = (items, title, Icon) => (
        <section className="space-y-6">
            <h3 className="text-xl font-bold text-indigo-700 flex items-center gap-2">
                <Icon size={24} />
                {title}
            </h3>
            <div className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm">
                <div className="overflow-x-auto">
                    <table className="w-full text-left">
                        <thead className="bg-slate-50 border-b border-slate-200">
                            <tr>
                                <th className="px-6 py-4 font-semibold text-slate-900 w-1/3">Resource</th>
                                <th className="px-6 py-4 font-semibold text-slate-900">Description</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100">
                            {items.map((resource, index) => (
                                <tr key={index} className="hover:bg-slate-50/50 transition-colors group">
                                    <td className="px-6 py-4">
                                        <a
                                            href={resource.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="font-medium text-indigo-600 hover:text-indigo-800 flex items-center gap-2"
                                        >
                                            {resource.name}
                                            <ExternalLink size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                                        </a>
                                    </td>
                                    <td className="px-6 py-4 text-slate-600">
                                        {resource.desc}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    );

    return (
        <div className="space-y-12 animate-in fade-in duration-500">
            <h2 className="text-3xl font-bold text-slate-900 mb-8 border-b border-slate-200 pb-4">
                Resources
            </h2>

            {renderResourceSection(resources.metabolomics, "Metabolomics", Database)}
            {renderResourceSection(resources.microscopy, "Microscopy", Microscope)}
            {renderResourceSection(resources.biochemistry, "Biochemistry", Dna)}
        </div>
    );
};

export default Resources;
