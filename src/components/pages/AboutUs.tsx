import LoginTemplate from "../templates/LoginTemplate";
import AuthShell from "../shell/AuthShell";
import AboutUsContent from "../molecules/AboutUsContent";
import OurJourneyInNumber from "../molecules/OurJourneyInNumber";
import WhatDriveUs from "../molecules/WhatDriveUs";
import LetsConnect from "../molecules/LetsConnect";

const AboutUs = () => {
    return (
        <AuthShell>
            <LoginTemplate>
                <AboutUsContent />
                <OurJourneyInNumber />
                <WhatDriveUs />
                <LetsConnect />
            </LoginTemplate>
        </AuthShell>
    )
}

export default AboutUs;