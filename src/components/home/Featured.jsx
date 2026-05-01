import { books } from "@/lib/data";
import Link from "next/link";
import { Suspense } from "react";
import BooksCard from "../ui/BooksCard";

const Featured = async () => {
    const allBooks = await books();
    return (
        <div className="max-w-7xl mx-auto px-8 py-16">
            <div className="flex items-end justify-between mb-10">
                <h2 className="font-serif text-4xl">Featured <span className="text-amber">Books</span></h2>
                <Link href={'/all-books'} className="text-amber text-sm font-medium cursor-pointer hover:underline">
                    View All →
                </Link>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6" id="featured-grid">
                {
                    allBooks.map((book, ind) => (
                        <BooksCard key={ind} book={book} />
                    ))
                }
            </div>
        </div>
    );
};

export default Featured;