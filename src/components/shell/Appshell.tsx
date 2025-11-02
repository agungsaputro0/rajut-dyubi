import React from "react";
import Navbar from "../organisms/Navbar";
import Footer from "../organisms/Footer";
import FeaturedCollection from "../molecules/FeaturedCollection";
import FollowOurJourney from "../molecules/FollowOurJourney";
import ReadytoCreateSomethingBeautiful from "../molecules/ReadyToCreateSomethingBeautiful";
import MobileBottomNav from "../organisms/MobileBottomNav";
import CustomerSection from "../molecules/CustomerSection";


type AppShellProps = {
   children: React.ReactNode;
}

const AppShell = (props: AppShellProps) => {
    const { children } = props;
    return (
        <main className="flex flex-col min-h-screen">
            <Navbar />
            <div className="flex-grow bg-[linear-gradient(135deg,_#fbcfe8,_#a5f3fc,_#c7d2fe)] bg-no-repeat bg-center bg-cover bg-fixed">
                {children}
                <FeaturedCollection />
                <FollowOurJourney />
                <CustomerSection />
                <ReadytoCreateSomethingBeautiful />
            </div>
            <Footer />
            <MobileBottomNav />
        </main>
    )
}

export default AppShell;