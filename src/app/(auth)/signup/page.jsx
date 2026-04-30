"use client"
import { authClient } from "@/lib/auth-client";
import { Button } from "@heroui/react";
import { Eye, EyeClosed, Loader } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";

const SignUpPage = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [isShowPass, setIsShowPass] = useState(false);
    const router = useRouter();

    const {
        handleSubmit,
        register,
    } = useForm();

    const onSubmit = async (data) => {
        setIsLoading(true);
        const { name, email, password } = data;

        const { data: res, error } = await authClient.signUp.email({
            name: name,
            email: email,
            password: password,
            callbackURL: "/login"
        });
        console.log(res, error);
        
        if (error) {
            alert(error.message);
            return
        }
        if (res) {
            alert("Signup successful");
            router.push('/login');
        }

    };

    return (
        <div className="flex items-center justify-center min-h-[calc(100vh-128px)] px-8 py-12">
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="bg-white border border-border rounded-2xl p-12 w-full max-w-md">
                <div className="font-serif text-3xl text-center mb-1">Register a Account</div>
                <div className="text-sm text-muted text-center mb-8">
                    Sign Up to borrow books and manage your reading
                </div>
                <fieldset className="mb-5">
                    <legend className="block text-sm font-semibold mb-2">Name</legend>
                    <input type="text" placeholder="Your Name"
                        {...register("name", {
                            required: "Name Is Required",
                        })}
                        className="w-full px-4 py-3 border border-border rounded-lg text-base bg-parchment text-ink outline-none focus:border-amber focus:bg-white transition-all" />
                </fieldset>
                <fieldset className="mb-5">
                    <legend className="block text-sm font-semibold mb-2">Email Address</legend>
                    <input type="email" placeholder="you@email.com"
                        {...register("email", {
                            required: "email field is required",
                        })}
                        className="w-full px-4 py-3 border border-border rounded-lg text-base bg-parchment text-ink outline-none focus:border-amber focus:bg-white transition-all" />
                </fieldset>
                <fieldset className={'relative flex flex-col'} >
                    <legend>Password</legend>
                    <input
                        minLength={8}
                        {...register("password")}
                        type={isShowPass ? "text" : "password"} className={'bg-gray-200 p-3'} placeholder="Enter password" />
                    <span
                        className="absolute top-4 right-5 cursor-pointer"
                        onClick={() => setIsShowPass(!isShowPass)}>
                        {
                            !isShowPass ? <EyeClosed /> : <Eye />
                        }
                    </span>
                    <div className="my-2 mb-6">Must be at least 8 characters with 1 uppercase and 1 number</div>
                </fieldset>
                <Button type="submit"
                    isDisabled={isLoading}
                    className={`w-full py-3 rounded-xl bg-amber text-ink font-bold text-base hover:bg-[#e09b12] transition-all flex items-center justify-center ${isLoading ? "" : "cursor-pointer"}`}>
                    {isLoading ? "Processing..." : "Sign Up"}
                    {isLoading && <Loader className="w-5 h-5 animate-spin" />}
                </Button>
                <div className="text-center mt-4 text-sm text-muted">
                    Already have an account?
                    <Link href={'/login'} className="text-amber font-semibold cursor-pointer">Log In</Link>
                </div>
            </form>
        </div>
    );
};

export default SignUpPage;