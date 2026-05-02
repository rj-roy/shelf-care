'use client'
import BooksCard from "@/components/ui/BooksCard";
import useBookSearch from "@/hooks/useBookSearch";

const AllbooksPage = () => {
    const {
        query,
        setQuery,
        results,
        setResults,
        handleCateg,
        allBooks,
        searchQuery,
        setSearchQuery
    } = useBookSearch();


    const lenOfSt = allBooks.filter((b) =>
        b.category.toLowerCase().includes("story")
    );
    const lenOfTe = allBooks.filter((b) =>
        b.category.toLowerCase().includes("tech")
    );
    const lenOfSc = allBooks.filter((b) =>
        b.category.toLowerCase().includes("science")
    );


    return (
        <div className="">
            <div className="max-w-6xl mx-auto px-8 py-8 grid grid-cols-1 sm:grid-cols-12 gap-8">
                <aside className="shrink-0 col-span-4 hidden sm:block">
                    <div className="bg-white border border-border rounded-xl p-5 sticky top-20 min-h-[80dvh]">
                        <div className="font-serif text-base mb-4 pb-3 border-b border-border">Categories</div>
                        <button
                            onClick={() => handleCateg('')}
                            className={`${query === "" ? "bg-amber-light text-amber-dark " : "bg-transparent"} cat-btn w-full text-left px-3 py-2 rounded-lg border-none text-sm text-muted font-medium mb-1 hover:bg-amber-light hover:text-amber-dark transition-all`}>
                            All
                            <span className="float-right text-xs bg-cream px-1.5 py-0.5 rounded text-muted">
                                {allBooks.length}
                            </span>
                        </button>
                        <button
                            onClick={() => handleCateg('story')}
                            className={`${query === "story" ? "bg-amber-light text-amber-dark " : "bg-transparent"} cat-btn w-full text-left px-3 py-2 rounded-lg border-none text-sm text-muted font-medium mb-1 hover:bg-amber-light hover:text-amber-dark transition-all`}>
                            Story
                            <span className="float-right text-xs bg-cream px-1.5 py-0.5 rounded text-muted">
                                {lenOfSt.length}
                            </span>
                        </button>

                        <button onClick={() => handleCateg('tech')}
                            className={`${query === "tech" ? "bg-amber-light text-amber-dark " : "bg-transparent"} cat-btn w-full text-left px-3 py-2 rounded-lg border-none text-sm text-muted font-medium mb-1 hover:bg-amber-light hover:text-amber-dark transition-all`}>
                            Tech
                            <span className="float-right text-xs bg-cream px-1.5 py-0.5 rounded text-muted">
                                {lenOfTe.length}
                            </span>
                        </button>
                        <button onClick={() => handleCateg('science')}
                            className={`${query === "science" ? "bg-amber-light text-amber-dark " : "bg-transparent"} cat-btn w-full text-left px-3 py-2 rounded-lg border-none text-sm text-muted font-medium mb-1 hover:bg-amber-light hover:text-amber-dark transition-all`}>
                            Science
                            <span className="float-right text-xs bg-cream px-1.5 py-0.5 rounded text-muted">
                                {lenOfSc.length}
                            </span>
                        </button>
                    </div>
                </aside>
                <main className="col-span-8">
                    <div className="relative mb-8">
                        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-muted text-lg">🔍</span>
                        <input type="text" placeholder="Search books by category..."
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full pl-12 pr-4 py-4 border-2 border-border rounded-xl text-base bg-white text-ink outline-none focus:border-amber focus:shadow-[0_0_0_3px_rgba(200,134,10,0.1)] transition-all" />
                    </div>
                    <div className="text-sm text-muted mb-5">Showing {allBooks.length} books</div>
                    <div className="">
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                            {
                                results.map((bo, i) => (
                                    <BooksCard className="w-full" key={i} book={bo} />
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