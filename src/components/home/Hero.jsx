import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import Link from "next/link";

const Hero = async () => {
    const session = await auth.api.getSession({
        headers: await headers(),
    });

    return (
        <div className="bg-ink min-h-130 flex items-center relative overflow-hidden px-8 py-16">
            <div className="w-full max-w-350 mx-auto">
                <div className="absolute inset-0">
                </div>
                <div className="absolute right-0 top-0 bottom-0 w-[40%] flex items-center justify-center gap-2 px-8 opacity-30">
                    <div className="h-80 w-8 rounded-l bg-linear-to-b from-[#7a3b1e] to-rust"></div>
                    <div className="h-64 w-6 rounded-l bg-linear-to-b from-[#2d5a27] to-sage"></div>
                    <div className="h-80 w-9 rounded-l bg-linear-to-b from-[#5a3d8a] to-[#7b54bb]"></div>
                    <div className="h-72 w-7 rounded-l bg-linear-to-b from-amber-dark to-amber"></div>
                    <div className="h-64 w-8 rounded-l bg-linear-to-b from-[#1e4a6e] to-[#2d7ab5]"></div>
                    <div className="h-96 w-6 rounded-l bg-linear-to-b from-[#6e1e1e] to-rust"></div>
                    <div className="h-72 w-8 rounded-l bg-linear-to-b from-[#1e5a4a] to-[#2d9a7a]"></div>
                </div>
                <div className="relative z-10 max-w-lg">
                    <span
                        className="inline-block bg-amber/20 border border-amber/40 text-amber text-xs font-semibold px-3 py-1 rounded-full tracking-widest uppercase mb-6">Online
                        Library Platform</span>
                    <h1 className="font-serif text-6xl leading-tight text-white mb-4">Find Your<br/><em
                        className="text-amber not-italic">Next Read</em></h1>
                    <p className="text-[#a89278] text-base leading-relaxed mb-8 max-w-sm">Borrow from thousands of titles. From timeless
                        classNameics to modern bestsellers — your next story is waiting.</p>
                    <div className="flex gap-4 flex-wrap">
                        <Link href={'/all-books'}
                            className="bg-amber text-ink font-bold text-base px-8 py-3 rounded-lg border-none hover:bg-[#e09b12] hover:-translate-y-0.5 transition-all w-full sm:w-auto text-center">
                            Browse Now
                        </Link>
                        <Link href={session ? '/' : '/signup'}
                            className="bg-transparent border border-[#5a4a34] text-[#c8b89a] font-medium text-base px-7 py-3 rounded-lg hover:border-[#a89278] hover:text-white transition-all w-full sm:w-auto text-center">
                            {
                                session ? "Featured Books" : "Join Free"
                            }
                        </Link>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-3 text-center gap-10 mt-10 pt-8 border-t border-[#2d2015]">
                        <div>
                            <div className="font-serif text-3xl text-amber font-bold">12,400+</div>
                            <div className="text-xs text-muted uppercase tracking-wider mt-0.5">Books Available</div>
                        </div>
                        <div>
                            <div className="font-serif text-3xl text-amber font-bold">3,800+</div>
                            <div className="text-xs text-muted uppercase tracking-wider mt-0.5">Active Members</div>
                        </div>
                        <div>
                            <div className="font-serif text-3xl text-amber font-bold">40+</div>
                            <div className="text-xs text-muted uppercase tracking-wider mt-0.5">Genres</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;