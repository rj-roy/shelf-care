"use client";

import { Button } from "@heroui/react";
import { Loader } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";

const LoginPage = () => {
    const [isLoading, setIsLoading] = useState(false);

    const {
        handleSubmit,
        register,
    } = useForm();

    const onSubmit = async (data) => {
        setIsLoading(true);
        console.log(data);
        return
    };

    return (
        <div className="flex items-center justify-center min-h-[calc(100vh-128px)] px-8 py-12">
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="bg-white border border-border rounded-2xl p-12 w-full max-w-md">
                <div className="font-serif text-3xl text-center mb-1">Welcome Back</div>
                <div className="text-sm text-muted text-center mb-8">
                    Log in to borrow books and manage your reading
                </div>
                <fieldset className="mb-5">
                    <legend className="block text-sm font-semibold mb-2">Email Address</legend>
                    <input type="email" placeholder="you@email.com"
                        {...register("email", {
                            required: "email field is required",
                        })}
                        className="w-full px-4 py-3 border border-border rounded-lg text-base bg-parchment text-ink outline-none focus:border-amber focus:bg-white transition-all" />
                </fieldset>
                <div className="mb-6">
                    <legend className="block text-sm font-semibold mb-2">Password</legend>
                    <input type="password" placeholder="••••••••"
                        {...register("password", {
                            required: "Please Enter Password"
                        })}
                        className="w-full px-4 py-3 border border-border rounded-lg text-base bg-parchment text-ink outline-none focus:border-amber focus:bg-white transition-all" />
                </div>
                <Button
                    type="submit"
                    isDisabled={isLoading}
                    className={`w-full py-3 rounded-xl bg-amber text-ink font-bold text-base hover:bg-[#e09b12] transition-all flex items-center justify-center ${isLoading ? "" : "cursor-pointer"}`}>
                    {isLoading ? "Processing..." : "Sign In"}
                    {isLoading && <Loader className="w-5 h-5 animate-spin" />}
                </Button>
                <div className="text-center mt-4 text-sm text-muted">
                    Don&apos;t have an account? <Link href={'/signup'} className="text-amber font-semibold cursor-pointer">Join Free →</Link>
                </div>
            </form>
        </div>
    );
};

export default LoginPage;