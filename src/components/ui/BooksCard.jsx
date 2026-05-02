import Image from "next/image";
import Link from "next/link";

const BooksCard = ({ book }) => {
    return (
        <Link href={`/all-books/${book.slug}`} className="bg-white rounded-xl border border-gray-200 overflow-hidden transition-all duration-200 hover:shadow-xl hover:scale-[1.02] cursor-pointer w-65">
            <div className="relative h-72 bg-purple-700 flex items-center justify-center">
                <span className="absolute top-3 left-3 bg-amber-500 text-black text-xs font-bold px-2 py-1 rounded">
                    {book.category}
                </span>
                <div className="w-40 h-60 rounded-md bg-white/10 border overflow-hidden border-white/30 flex items-center justify-center text-center p-4">
                    <div className=" p-3">
                        {book.image_url ? (
                            <Image
                                src={book.image_url}
                                alt={book.title}
                                width={0}
                                height={0}
                                sizes="100vwh"
                                style={{ width: '100%', height: 'auto' }}
                                className="object-cover"
                                loading="eager"
                            />
                        ) : (
                            <span className="text-white text-xs font-serif font-semibold leading-tight">
                                {book.title}
                            </span>
                        )}
                    </div>
                </div>
            </div>

            <div className="bg-gray-100 p-4">
                <h3 className="font-serif text-base font-semibold text-gray-900 leading-tight">
                    {book.title}
                </h3>
                <p className="text-xs text-gray-500 mt-1">
                    by {book.author}
                </p>
                <div className="flex items-center justify-between mt-3">
                    <span className="text-xs bg-amber-100 text-amber-700 px-2 py-1 rounded font-medium">
                        {book.category}
                    </span>
                    <span className="text-xs text-green-700 font-medium">
                        {book.available_quantity} copies
                    </span>
                </div>
            </div>
        </Link>
    );
};

export default BooksCard;