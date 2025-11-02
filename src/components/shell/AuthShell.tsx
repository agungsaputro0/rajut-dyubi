import React from "react";
import Navbar from "../organisms/Navbar";
import Footer from "../organisms/Footer";
import MobileBottomNav from "../organisms/MobileBottomNav";

type AppShellProps = {
   children: React.ReactNode;
}

const AuthShell = (props: AppShellProps) => {
    const { children } = props;
    return (
        <main className="flex flex-col min-h-screen-default">
            <Navbar />
            <div className="flex-grow bg-[linear-gradient(135deg,_#fbcfe8,_#a5f3fc,_#c7d2fe)] bg-no-repeat bg-center bg-cover bg-fixed">
                {children}
            </div>
            <Footer />
            <MobileBottomNav />
        </main>
    )
}

export default AuthShell;