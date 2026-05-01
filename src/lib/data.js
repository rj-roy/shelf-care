export async function books() {
    const res = await fetch("https://shelf-care.vercel.app/books.json");
    const data = await res.json();
    return data.data;
};
