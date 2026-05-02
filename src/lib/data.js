export async function books() {
    const res = await fetch("https://shelf-care-jsr.onrender.com/data");
    const data = await res.json();
    return data;
};
