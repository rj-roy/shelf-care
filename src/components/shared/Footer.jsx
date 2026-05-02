const Footer = () => {
    return (
        <footer className="bg-ink text-[#a89278] pt-12 pb-6 px-8">
            <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-10">
                <div>
                    <div className="font-serif text-xl text-amber mb-3">Bookshelf</div>
                    <div className="text-xs text-[#7a6a54] leading-relaxed">Your digital library. Thousands of books, one simple
                        platform. Read more, pay less.</div>
                </div>
                <div>
                    <div className="text-xs uppercase tracking-widest text-[#7a6a54] font-semibold mb-3">Explore</div>
                    <a 
                        className="block text-xs text-[#7a6a54] mb-1.5 hover:text-amber cursor-pointer transition-colors">All Books</a>
                    <a className="block text-xs text-[#7a6a54] mb-1.5 hover:text-amber cursor-pointer transition-colors">New
                        Arrivals</a>
                    <a
                        className="block text-xs text-[#7a6a54] mb-1.5 hover:text-amber cursor-pointer transition-colors">Bestsellers</a>
                    <a className="block text-xs text-[#7a6a54] mb-1.5 hover:text-amber cursor-pointer transition-colors">Genres</a>
                </div>
                <div>
                    <div className="text-xs uppercase tracking-widest text-[#7a6a54] font-semibold mb-3">Community</div>
                    <a className="block text-xs text-[#7a6a54] mb-1.5 hover:text-amber cursor-pointer transition-colors">Reading
                        Clubs</a>
                    <a className="block text-xs text-[#7a6a54] mb-1.5 hover:text-amber cursor-pointer transition-colors">Reviews</a>
                    <a className="block text-xs text-[#7a6a54] mb-1.5 hover:text-amber cursor-pointer transition-colors">Reading
                        Lists</a>
                </div>
                <div>
                    <div className="text-xs uppercase tracking-widest text-[#7a6a54] font-semibold mb-3">Account</div>
                    <a 
                        className="block text-xs text-[#7a6a54] mb-1.5 hover:text-amber cursor-pointer transition-colors">Log In</a>
                    <a 
                        className="block text-xs text-[#7a6a54] mb-1.5 hover:text-amber cursor-pointer transition-colors">Sign Up
                        Free</a>
                    <a className="block text-xs text-[#7a6a54] mb-1.5 hover:text-amber cursor-pointer transition-colors">Help
                        Centre</a>
                </div>
            </div>
            <div className="max-w-6xl mx-auto pt-6 border-t border-[#2d2015] flex justify-between text-xs text-[#5a4a34]">
                <span>© 2025 Bookshelf. All rights reserved.</span>
                <span>Privacy · Terms · Cookies</span>
            </div>
        </footer>
    );
};

export default Footer;