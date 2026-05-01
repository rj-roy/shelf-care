import Header from "@/components/shared/Header";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";

const AuthLayout = async ({ children }) => {
    // const session = await auth.api.getSession({
    //     headers: headers(),
    // })
    return (
        <div>
            <Header />
            {children}
        </div>
    );
};

export default AuthLayout;