import { books } from "@/lib/data";
import Link from "next/link";
import Marquee from "react-fast-marquee";

const Marque = async () => {
    const allbooks = await books();
    return (
        <div className="bg-amber py-2 overflow-hidden whitespace-nowrap">
            <div className="text-sm font-semibold text-ink">
                <Marquee pauseOnHover={true} speed={100}>
                    {allbooks.map((n) => (
                        <div key={n._id} className="flex" >
                            <Link href={`/all-books/${n.slug}`} className="mx-3">{n.title}</Link>
                            <div className=" w-0.5 h-5 bg-ink"></div>
                        </div>
                    ))}
                </Marquee>
            </div>
        </div>
    );
};

export default Marque;