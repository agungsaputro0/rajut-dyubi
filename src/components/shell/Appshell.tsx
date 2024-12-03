import React from "react";
import Navbar from "../organisms/Navbar";
import Footer from "../organisms/Footer";
import OurAchievements from "../molecules/Achievements";

type AppShellProps = {
   children: React.ReactNode;
}

const AppShell = (props: AppShellProps) => {
    const { children } = props;
    return (
        <main className="flex flex-col min-h-screen">
            <Navbar />
            <div className="flex-grow bg-[url('/assets/img/bg-default-us.jpg')] bg-no-repeat bg-center bg-cover bg-fixed">
                {children}
                <OurAchievements />
            </div>
            <Footer />
        </main>
    )
}

export default AppShell;