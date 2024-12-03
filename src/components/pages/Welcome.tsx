import AppShell from "../shell/Appshell";
import LandingLayouts from "../templates/Landing";
import { Helmet } from "react-helmet";  

const appName = import.meta.env.VITE_APP_NAME;  

const Welcome = () => {
    return (
        <AppShell>
            <div className="min-h-screen">
                <Helmet>
                    <title>{appName}</title>
                </Helmet>
                <LandingLayouts layoutTitle="Selamat Datang di Aplikasi" layoutMessage="Mengubah Sampah menjadi Berkah" />
            </div>
        </AppShell>
    );
};

export default Welcome;
