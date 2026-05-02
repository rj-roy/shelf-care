import { useEffect, useState } from "react";

export default function useBookSearch() {
    const [allBooks, setAllBooks] = useState([]);
    const [query, setQuery] = useState("");
    const [results, setResults] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");


    useEffect(() => {
        const res = fetch('https://shelf-care-jsr.onrender.com/data')
            .then((res) => res.json())
            .then((data) => {
                setAllBooks(data);
                setResults(data)
            });
    }, []);

    const handleCateg = (cate) => {
        const filtered = allBooks.filter((book) =>
            book.category.toLowerCase().includes(cate)
        );
        setResults(filtered);
        setQuery(cate);
    }

    useEffect(() => {
        if (!searchQuery) {
            const categoryFiltered = allBooks.filter((book) =>
                book.category.toLowerCase().includes(query)
            );
            // eslint-disable-next-line react-hooks/set-state-in-effect
            setResults(categoryFiltered);
            return;
        }
        const sFiltered = results.filter((book) =>
            book.title.toLowerCase().includes(searchQuery.toLowerCase())
        );
        setResults(sFiltered);
    }, [searchQuery, query, allBooks]);

    // useEffect(() => {
    //     if (!query) {
    //         // eslint-disable-next-line react-hooks/set-state-in-effect
    //         setResults(allBooks);
    //         return;
    //     }

    //     const filtered = allBooks.filter((book) =>
    //         book.category.toLowerCase().includes(query.toLowerCase())
    //     );

    //     setResults(filtered);
    // }, [query, allBooks]);

    // useEffect(() => {
    //         const filteredByCate = allBooks.filter((book) =>
    //             book.category.toLowerCase().includes(query.toLowerCase())
    //         );
    //         // eslint-disable-next-line react-hooks/set-state-in-effect
    //         setResults(filteredByCate);
    //     }, [query, allBooks]);

    return {
        query,
        setQuery,
        results,
        setResults,
        allBooks,
        handleCateg,
        searchQuery,
        setSearchQuery,
    };
}