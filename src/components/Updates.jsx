import React from 'react';
import { updates } from '../data';
import { Calendar, ImageIcon } from 'lucide-react';

const Updates = () => {
    return (
        <div className="space-y-8 animate-in fade-in duration-500">
            <h2 className="text-3xl font-bold text-slate-900 mb-8 border-b border-slate-200 pb-4">
                Updates & Events
            </h2>

            <div className="grid gap-8 md:grid-cols-2">
                {updates.map((update) => (
                    <div key={update.id} className="bg-slate-50 rounded-xl overflow-hidden border border-slate-100 hover:shadow-md transition-shadow group">
                        <div className="aspect-video bg-slate-200 flex items-center justify-center text-slate-400 relative overflow-hidden">
                            {update.image ? (
                                <img
                                    src={update.image}
                                    alt={update.title}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                            ) : (
                                <ImageIcon size={48} className="opacity-50" />
                            )}
                        </div>
                        <div className="p-6">
                            <div className="flex items-center text-sm text-indigo-600 font-medium mb-2">
                                <Calendar size={16} className="mr-2" />
                                {update.date}
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-indigo-700 transition-colors">
                                {update.title}
                            </h3>
                            <p className="text-slate-600 leading-relaxed">
                                {update.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Updates;
