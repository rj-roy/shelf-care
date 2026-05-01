import Header from "@/components/shared/Header";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";

const AuthLayout = async ({ children }) => {
    return (
        <div>
            <Header />
            {children}
        </div>
    );
};

export default AuthLayout;