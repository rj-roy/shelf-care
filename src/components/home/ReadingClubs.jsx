const ReadingClubs = () => {
    return (
        <div className="bg-cream border-t border-b border-border">
            <div className="max-w-6xl mx-auto px-8 py-16">
                <div className="flex items-end justify-between mb-10">
                    <h2 className="font-serif text-4xl">Reading <span className="text-amber">Clubs</span></h2>
                    <a className="text-amber text-sm font-medium cursor-pointer hover:underline">Explore All →</a>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <div
                        className="bg-white border border-border rounded-xl p-6 hover:border-amber hover:-translate-y-0.5 transition-all cursor-pointer">
                        <div className="w-12 h-12 rounded-xl bg-sage-light flex items-center justify-center text-2xl mb-4">📗</div>
                        <div className="font-serif text-lg mb-2">Fiction Fridays</div>
                        <div className="text-muted text-sm leading-relaxed mb-4">A weekly gathering for lovers of contemporary fiction.
                            We explore new voices and storytelling craft every Friday.</div>
                        <div className="text-xs text-muted"><strong className="text-ink">214</strong> members · Meets weekly</div>
                    </div>
                    <div
                        className="bg-white border border-border rounded-xl p-6 hover:border-amber hover:-translate-y-0.5 transition-all cursor-pointer">
                        <div className="w-12 h-12 rounded-xl bg-amber-light flex items-center justify-center text-2xl mb-4">🔬</div>
                        <div className="font-serif text-lg mb-2">Science & Wonder</div>
                        <div className="text-muted text-sm leading-relaxed mb-4">Dive deep into popular science, technology, and the
                            universe. Open to curious minds of all backgrounds.</div>
                        <div className="text-xs text-muted"><strong className="text-ink">178</strong> members · Meets bi-weekly</div>
                    </div>
                    <div
                        className="bg-white border border-border rounded-xl p-6 hover:border-amber hover:-translate-y-0.5 transition-all cursor-pointer">
                        <div className="w-12 h-12 rounded-xl bg-rust-light flex items-center justify-center text-2xl mb-4">🏛️</div>
                        <div className="font-serif text-lg mb-2">History Buffs</div>
                        <div className="text-muted text-sm leading-relaxed mb-4">From ancient civilisations to modern revolutions — we
                            read, discuss, and debate the turning points of history.</div>
                        <div className="text-xs text-muted"><strong className="text-ink">132</strong> members · Meets monthly</div>
                    </div>
                    <div
                        className="bg-white border border-border rounded-xl p-6 hover:border-amber hover:-translate-y-0.5 transition-all cursor-pointer">
                        <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-2xl mb-4">🧠</div>
                        <div className="font-serif text-lg mb-2">Mind & Self</div>
                        <div className="text-muted text-sm leading-relaxed mb-4">Psychology, philosophy, mindfulness and
                            self-improvement. Understanding ourselves and our world.</div>
                        <div className="text-xs text-muted"><strong className="text-ink">296</strong> members · Meets weekly</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReadingClubs;