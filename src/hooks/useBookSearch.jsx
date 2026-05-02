import { useEffect, useState } from "react";

export default function useBookSearch() {
    const [allBooks, setAllBooks] = useState([]);
    const [query, setQuery] = useState("");
    const [results, setResults] = useState([]);

    useEffect(() => {
        const res = fetch('https://shelf-care-jsr.onrender.com/data')
            .then((res) => res.json())
            .then((data) => {
                setAllBooks(data);
            });
    }, []);

    useEffect(() => {
        if (!query) {
            // eslint-disable-next-line react-hooks/set-state-in-effect
            setResults(allBooks);
            return;
        }

        const filtered = allBooks.filter((book) =>
            book.category.toLowerCase().includes(query.toLowerCase())
        );

        setResults(filtered);
    }, [query, allBooks]);

    // useEffect(() => {
    //         const filteredByCate = allBooks.filter((book) =>
    //             book.category.toLowerCase().includes(query.toLowerCase())
    //         );
    //         // eslint-disable-next-line react-hooks/set-state-in-effect
    //         setResults(filteredByCate);
    //     }, [query, allBooks]);

    return {
        query,
        results,
        setResults,
        setQuery,
        allBooks,
    };
}