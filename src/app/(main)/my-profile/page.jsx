import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import Link from "next/link";
import { redirect } from "next/navigation";

export default async function MyProfile() {
    const session = await auth.api.getSession({
        headers: await headers()
    });

    if (!session) {
        return redirect('/')
    }

    return (
        <div className="page">
            <div className="max-w-lg mx-auto px-8 py-12">
                <div className="bg-white border border-border rounded-2xl p-10 text-center mb-6">
                    <div
                        className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-amber overflow-hidden bg-amber-light flex items-center justify-center font-serif text-5xl text-amber">A</div>
                    <div className="font-serif text-3xl mb-1">{session.user.name}</div>
                    <div className="text-sm text-muted mb-6">{session.user.email}</div>
                    <div className="flex justify-center gap-10 py-5 border-t border-b border-border mb-6">
                        <div>
                            <div className="font-serif text-2xl font-bold text-amber">14</div>
                            <div className="text-xs text-muted mt-0.5">Books Borrowed</div>
                        </div>
                        <div>
                            <div className="font-serif text-2xl font-bold text-amber">3</div>
                            <div className="text-xs text-muted mt-0.5">Currently Reading</div>
                        </div>
                        <div>
                            <div className="font-serif text-2xl font-bold text-amber">28</div>
                            <div className="text-xs text-muted mt-0.5">Reviews</div>
                        </div>
                    </div>
                    <button
                        className="w-full rounded-xl bg-ink text-white font-semibold hover:bg-[#2d2015] transition-all">
                        <Link href={'/my-profile/update-profile'} className="block py-3">
                            Update Profile
                        </Link>
                    </button>
                </div>
            </div>
        </div>
    );
}