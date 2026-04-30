import Link from "next/link";

const Header = () => {
    return (
        <div className="bg- w-full max-w-350 mx-auto">
            <nav className="bg-ink px-8 flex items-center justify-between h-16 sticky top-0 z-50">
                <Link href={'/'} className="font-serif text-2xl text-amber">Shelf<span className="text-white">Care</span></Link>
                <div className="flex items-center gap-1">
                    <Link href={'/'} className="nav-link text-[#c8b89a] text-sm font-medium px-4 py-2 rounded-lg hover:text-amber hover:bg-amber/10 transition-all cursor-pointer active">
                        Home
                    </Link>
                    <Link href={'/all-books'} className="nav-link text-[#c8b89a] text-sm font-medium px-4 py-2 rounded-lg hover:text-amber hover:bg-amber/10 transition-all cursor-pointer">All Books</Link>
                    <Link href={'/my-profile'} className="nav-link text-[#c8b89a] text-sm font-medium px-4 py-2 rounded-lg hover:text-amber hover:bg-amber/10 transition-all cursor-pointer"
                        id="profile-nav">My Profile</Link>
                </div>
                <div className="flex items-center gap-3" id="nav-actions">
                    <button className="px-4 py-2 text-sm font-medium rounded-lg border border-[#5a4a34] text-[#c8b89a] hover:border-amber hover:text-amber transition-all bg-transparent">
                        <Link href={'/login'}>
                            Log In
                        </Link>
                    </button>
                    <button className="px-4 py-2 text-sm font-semibold rounded-lg bg-amber text-ink hover:bg-[#e09b12] transition-all">
                        <Link href={'/signup'}>
                            Join Free
                        </Link>
                    </button>
                </div>
            </nav>
        </div>
    );
};

export default Header;