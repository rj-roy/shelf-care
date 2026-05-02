const LovedBy = () => {
    return (
        <div className="bg-cream border-b border-border">
            <div className="max-w-6xl mx-auto px-8 py-16">
                <h2 className="font-serif text-4xl mb-10">Loved by <span className="text-amber">Readers</span></h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-white border border-border rounded-xl p-6">
                        <div className="text-amber text-base tracking-widest mb-3">★★★★★</div>
                        <p className="text-sm text-[#4a3d2d] leading-relaxed italic mb-4">&quot;Bookshelf has completely changed how I read.
                            The selection is incredible and borrowing is so simple.&quot;</p>
                        <div className="flex items-center gap-3">
                            <div
                                className="w-9 h-9 rounded-full bg-sage-light flex items-center justify-center font-bold text-sm text-sage flex-shrink-0">
                                AR</div>
                            <div>
                                <div className="text-sm font-semibold">Amara R.</div>
                                <div className="text-xs text-muted">Member since 2023</div>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white border border-border rounded-xl p-6">
                        <div className="text-amber text-base tracking-widest mb-3">★★★★★</div>
                        <p className="text-sm text-[#4a3d2d] leading-relaxed italic mb-4">&quot;The Reading Clubs feature is a game changer.
                            I&apos;ve discovered more great books through fellow members than ever before.&quot;</p>
                        <div className="flex items-center gap-3">
                            <div
                                className="w-9 h-9 rounded-full bg-amber-light flex items-center justify-center font-bold text-sm text-amber-dark flex-shrink-0">
                                JK</div>
                            <div>
                                <div className="text-sm font-semibold">James K.</div>
                                <div className="text-xs text-muted">Member since 2022</div>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white border border-border rounded-xl p-6">
                        <div className="text-amber text-base tracking-widest mb-3">★★★★★</div>
                        <p className="text-sm text-[#4a3d2d] leading-relaxed italic mb-4">&quot;Fast, beautiful, and packed with titles.
                            Bookshelf is the only reading platform I recommend to friends.&quot;</p>
                        <div className="flex items-center gap-3">
                            <div
                                className="w-9 h-9 rounded-full bg-rust-light flex items-center justify-center font-bold text-sm text-rust flex-shrink-0">
                                PN</div>
                            <div>
                                <div className="text-sm font-semibold">Priya N.</div>
                                <div className="text-xs text-muted">Member since 2024</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LovedBy;