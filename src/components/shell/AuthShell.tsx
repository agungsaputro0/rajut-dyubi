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
            <div className="flex-grow bg-[url('/assets/img/bg-rajut.png')] bg-no-repeat bg-center bg-cover bg-fixed">
                {children}
            </div>
            <Footer />
            <MobileBottomNav />
        </main>
    )
}

export default AuthShell;