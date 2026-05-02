import { books } from "@/lib/data";
import { PageNotFoundError } from "next/dist/shared/lib/utils";
import notFound from "../../notFound";
import Link from "next/link";
import Image from "next/image";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";

const BookDetails = async ({ params }) => {
    const session = await auth.api.getSession({
        headers: await headers(),
    });

    const { slug } = await params;
    const allBooks = await books();

    const book = allBooks.find((b) => b.slug === slug);
    if (!book) return notFound();

    return (
        <div className="page">
            <div className="max-w-4xl mx-auto px-8 py-12">
                <div
                    className="flex items-center gap-2 text-sm text-muted mb-8 cursor-pointer hover:text-amber transition-colors">
                    <Link href={'/all-books'}>
                        ← Back to Books
                    </Link>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-[300px_1fr] gap-12 items-start">
                    <div className="rounded-xl overflow-hidden shadow-2xl aspect-2/3 relative">
                        <div className="absolute inset-0 flex items-center justify-center p-8 text-center">
                            <div>
                                <Image className="rounded-sm"
                                    src={book.image_url}
                                    alt={book.title}
                                    loading="eager"
                                    width={200}
                                    height={200}
                                />
                            </div>
                        </div>
                    </div>
                    <div>
                        <span className="inline-block bg-amber-light text-amber-dark text-xs font-semibold px-3 py-1 rounded mb-4">{book.category}</span>
                        <h1 className="font-serif text-4xl leading-tight mb-2">{book.title}</h1>
                        <div className="text-muted mb-6">By <strong className="text-ink">{book.author}</strong></div>
                        <p className="text-sm text-[#4a3d2d] leading-relaxed mb-8">{book.description} A story that lingers long after the final page is turned.</p>
                        <div className="grid grid-cols-2 gap-4 mb-8">
                            <div className="bg-cream rounded-xl p-4"><div className="text-xs uppercase tracking-wider text-muted mb-1">Genre</div><div className="font-semibold">{book.category}</div></div>
                            <div className="bg-cream rounded-xl p-4"><div className="text-xs uppercase tracking-wider text-muted mb-1">Availability</div><div className="font-semibold text-sage">✓ {book.available_quantity} copies left</div></div>
                            <div className="bg-cream rounded-xl p-4"><div className="text-xs uppercase tracking-wider text-muted mb-1">Language</div><div className="font-semibold">English</div></div>
                            <div className="bg-cream rounded-xl p-4"><div className="text-xs uppercase tracking-wider text-muted mb-1">Format</div><div className="font-semibold">Hardcover · eBook</div></div>
                        </div>
                        <div className="borrow-btn w-full py-4 rounded-xl bg-amber text-amber-50 font-bold text-base border-none cursor-pointer transition-all text-center">
                            {
                                session ? <button className="cursor-pointer">Borrow This Book</button> : 
                                <Link href={'/login'}>Login to Borrow</Link>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookDetails;