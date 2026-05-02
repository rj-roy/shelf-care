import { books } from "@/lib/data";
import Link from "next/link";
import { Suspense } from "react";
import BooksCard from "../ui/BooksCard";

const Featured = async () => {
    const allBooks = await books();
    return (
        <div className="max-w-7xl mx-auto px-8 py-16">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6" id="featured-grid">
                {
                    allBooks.slice(0,4).map((book, ind) => (
                        <BooksCard key={ind} book={book} />
                    ))
                }
            </div>
        </div>
    );
};

export default Featured;