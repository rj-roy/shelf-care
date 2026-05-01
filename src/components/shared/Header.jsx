'use client'
import { useState } from 'react';
import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import { usePathname } from 'next/navigation';

const Header = () => {
    const pathName = usePathname();
    const href = {
        home: '/',
        allBooks: '/all-books',
        myProfile: '/my-profile'
    }

    const { data: session, isPending } = authClient.useSession();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const closeMenu = () => setIsMobileMenuOpen(false);

    const links = <>
        <Link href={href.home} onClick={closeMenu} className={`text-[#c8b89a] text-base font-medium px-4 py-3 rounded-lg hover:text-amber hover:bg-amber/10 transition-all ${pathName === href.home ? "bg-amber/10 text-amber" : ""}`}>
            Home
        </Link>
        <Link href={href.allBooks} onClick={closeMenu} className={`text-[#c8b89a] text-base font-medium px-4 py-3 rounded-lg hover:text-amber hover:bg-amber/10 transition-all ${pathName === href.allBooks ? "bg-amber/10 text-amber" : ""}`}>
            All Books
        </Link>
        {session && (
            <Link href={href.myProfile} onClick={closeMenu} className={`text-[#c8b89a] text-base font-medium px-4 py-3 rounded-lg hover:text-amber hover:bg-amber/10 transition-all ${pathName === href.myProfile ? "bg-amber/10 text-amber" : ""}`}>
                My Profile
            </Link>
        )}
    </>

    return (
        <div className="bg-ink">
            <div className="w-full max-w-350 mx-auto">
                <nav className="px-4 md:px-8 flex items-center justify-between h-16 sticky top-0 z-30 bg-ink/95 backdrop-blur-sm">
                    <Link href={'/'} className="font-serif text-2xl text-amber">
                        Shelf<span className="text-white">Care</span>
                    </Link>

                    <div className="hidden md:flex items-center gap-1">
                        {links}
                    </div>

                    {isPending ? (
                        <button className="hidden md:block px-4 py-2 text-sm font-medium rounded-lg border border-[#5a4a34] text-[#c8b89a] hover:border-amber hover:text-amber transition-all bg-transparent" disabled>
                            Loading...
                        </button>
                    ) : session ? (
                        <div className="hidden md:flex items-center gap-3">
                            <span className="text-[#c8b89a] font-bold">Welcome, {session.user.name}</span>
                            <button
                                onClick={async () => await authClient.signOut()}
                                className="px-4 py-2 text-sm font-semibold rounded-lg bg-amber text-ink hover:bg-[#e09b12] transition-all"
                            >
                                Log Out
                            </button>
                        </div>
                    ) : (
                        <div className="hidden md:flex items-center gap-3">
                            <Link href={'/login'} className="text-sm font-medium rounded-lg border border-[#5a4a34] text-[#c8b89a] hover:border-amber hover:text-amber transition-all bg-transparent px-4 py-2">
                                Log In
                            </Link>
                            <Link href={'/signup'} className="text-sm font-semibold rounded-lg bg-amber text-ink hover:bg-[#e09b12] transition-all px-4 py-2">
                                Join Free
                            </Link>
                        </div>
                    )}

                    <button
                        onClick={() => setIsMobileMenuOpen(true)}
                        className="md:hidden p-2 text-[#c8b89a] hover:text-amber transition-colors focus:outline-none focus:ring-2 focus:ring-amber/50 rounded"
                        aria-label="Open menu"
                        aria-expanded={isMobileMenuOpen}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg>
                    </button>
                </nav>
            </div>

            {isMobileMenuOpen && (
                <div
                    className="fixed inset-0 bg-black/60 z-40 md:hidden transition-opacity duration-300"
                    onClick={closeMenu}
                    aria-hidden="true"
                />
            )}

            <div
                className={`fixed top-0 right-0 h-full w-72 bg-ink shadow-2xl z-50 transform transition-transform duration-300 ease-in-out md:hidden flex flex-col ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
                    }`}
                role="dialog"
                aria-modal="true"
                aria-label="Mobile navigation"
            >
                <div className="flex items-center justify-between p-4 border-b border-[#5a4a34]">
                    <Link href={'/'} onClick={closeMenu} className="font-serif text-xl text-amber">
                        Shelf<span className="text-white">Care</span>
                    </Link>
                    <button
                        onClick={closeMenu}
                        className="p-2 text-[#c8b89a] hover:text-amber transition-colors focus:outline-none focus:ring-2 focus:ring-amber/50 rounded"
                        aria-label="Close menu"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>

                <div className="flex flex-col p-4 space-y-2">
                    {links}
                </div>

                <div className="mt-auto p-4 border-t border-[#5a4a34]">
                    {isPending ? (
                        <div className="text-center text-[#c8b89a] py-3">Loading...</div>
                    ) : session ? (
                        <div className="flex flex-col gap-3">
                            <span className="text-[#c8b89a] font-bold text-center">Welcome, {session.user.name}</span>
                            <button
                                onClick={async () => {
                                    await authClient.signOut();
                                    closeMenu();
                                }}
                                className="w-full px-4 py-3 text-sm font-semibold rounded-lg bg-amber text-ink hover:bg-[#e09b12] transition-all"
                            >
                                Log Out
                            </button>
                        </div>
                    ) : (
                        <div className="flex flex-col gap-3">
                            <Link href={'/login'} onClick={closeMenu} className="w-full text-center text-sm font-medium rounded-lg border border-[#5a4a34] text-[#c8b89a] hover:border-amber hover:text-amber transition-all bg-transparent px-4 py-3">
                                Log In
                            </Link>
                            <Link href={'/signup'} onClick={closeMenu} className="w-full text-center text-sm font-semibold rounded-lg bg-amber text-ink hover:bg-[#e09b12] transition-all px-4 py-3">
                                Join Free
                            </Link>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Header;