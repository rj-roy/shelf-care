import Header from "@/components/shared/Header";

const AuthLayout = ({children}) => {
    return (
        <div>
            <Header/>
            {children}
        </div>
    );
};

export default AuthLayout;