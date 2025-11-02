import LoginTemplate from "../templates/LoginTemplate";
import AuthShell from "../shell/AuthShell";
import AboutUsContent from "../molecules/AboutUsContent";
import OurJourneyInNumber from "../molecules/OurJourneyInNumber";
import WhatDriveUs from "../molecules/WhatDriveUs";

const AboutUs = () => {
    return (
        <AuthShell>
            <h1 className="hidden">
                Rajut Dyubi – Tentang Kami
            </h1>
            <LoginTemplate>
                <AboutUsContent />
                <OurJourneyInNumber />
                <WhatDriveUs />
            </LoginTemplate>
        </AuthShell>
    )
}

export default AboutUs;