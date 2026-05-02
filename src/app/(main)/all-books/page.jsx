import BooksCard from "@/components/ui/BooksCard";
import { auth } from "@/lib/auth";
import { books } from "@/lib/data";
import { headers } from "next/headers";

const AllbooksPage = async () => {
    // const session = await auth.api.getSession({
    //     headers: await headers(),
    // });
    const allBooks = await books();

    return (
        <div className="">
            <div className="max-w-6xl mx-auto px-8 py-8 grid grid-cols-1 sm:grid-cols-12 gap-8">
                <aside className="shrink-0 col-span-4">
                    <div className="bg-white border border-border rounded-xl p-5 sticky top-20">
                        <div className="font-serif text-base mb-4 pb-3 border-b border-border">Categories</div>
                        <button
                            className="cat-btn w-full text-left px-3 py-2 rounded-lg border-none bg-transparent text-sm text-muted font-medium mb-1 hover:bg-amber-light hover:text-amber-dark transition-all">
                            Story
                            <span className="float-right text-xs bg-cream px-1.5 py-0.5 rounded text-muted">
                                2
                            </span>
                        </button>
                        <button
                            className="cat-btn w-full text-left px-3 py-2 rounded-lg border-none bg-transparent text-sm text-muted font-medium mb-1 hover:bg-amber-light hover:text-amber-dark transition-all">
                            Story
                            <span className="float-right text-xs bg-cream px-1.5 py-0.5 rounded text-muted">
                                2
                            </span>
                        </button>
                        <button
                            className="cat-btn w-full text-left px-3 py-2 rounded-lg border-none bg-transparent text-sm text-muted font-medium mb-1 hover:bg-amber-light hover:text-amber-dark transition-all">
                            Story
                            <span className="float-right text-xs bg-cream px-1.5 py-0.5 rounded text-muted">
                                2
                            </span>
                        </button>
                        <button
                            className="cat-btn w-full text-left px-3 py-2 rounded-lg border-none bg-transparent text-sm text-muted font-medium mb-1 hover:bg-amber-light hover:text-amber-dark transition-all">
                            Story
                            <span className="float-right text-xs bg-cream px-1.5 py-0.5 rounded text-muted">
                                2
                            </span>
                        </button>
                        <button
                            className="cat-btn w-full text-left px-3 py-2 rounded-lg border-none bg-transparent text-sm text-muted font-medium mb-1 hover:bg-amber-light hover:text-amber-dark transition-all">
                            Story
                            <span className="float-right text-xs bg-cream px-1.5 py-0.5 rounded text-muted">
                                2
                            </span>
                        </button>
                        <button
                            className="cat-btn w-full text-left px-3 py-2 rounded-lg border-none bg-transparent text-sm text-muted font-medium mb-1 hover:bg-amber-light hover:text-amber-dark transition-all">
                            Self-Help
                            <span className="float-right text-xs bg-cream px-1.5 py-0.5 rounded text-muted">
                                3
                            </span>
                        </button>
                    </div>
                </aside>
                <main className="col-span-8">
                    <div className="relative mb-8">
                        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-muted text-lg">🔍</span>
                        <input type="text" placeholder="Search books by title or author..."
                            className="w-full pl-12 pr-4 py-4 border-2 border-border rounded-xl text-base bg-white text-ink outline-none focus:border-amber focus:shadow-[0_0_0_3px_rgba(200,134,10,0.1)] transition-all" />
                    </div>
                    <div className="text-sm text-muted mb-5">Showing {allBooks.length} books</div>
                    <div className="">
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                            {
                            allBooks.map((bo, i)=>(
                                <BooksCard className="mx-5 w-full" key={i} book={bo} />
                            ))
                        }
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
};
export default AllbooksPage;