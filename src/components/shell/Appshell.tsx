import React from "react";
import Navbar from "../organisms/Navbar";
import Footer from "../organisms/Footer";
import FeaturedCollection from "../molecules/FeaturedCollection";
import FollowOurJourney from "../molecules/FollowOurJourney";
import ReadytoCreateSomethingBeautiful from "../molecules/ReadyToCreateSomethingBeautiful";
import MobileBottomNav from "../organisms/MobileBottomNav";


type AppShellProps = {
   children: React.ReactNode;
}

const AppShell = (props: AppShellProps) => {
    const { children } = props;
    return (
        <main className="flex flex-col min-h-screen">
            <Navbar />
            <div className="flex-grow bg-[url('/assets/img/bg-rajut.png')] bg-no-repeat bg-center bg-cover bg-fixed">
                {children}
                <FeaturedCollection />
                <FollowOurJourney />
                <ReadytoCreateSomethingBeautiful />
            </div>
            <Footer />
            <MobileBottomNav />
        </main>
    )
}

export default AppShell;