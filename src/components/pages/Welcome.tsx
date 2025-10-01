import AppShell from "../shell/Appshell";
import LandingLayouts from "../templates/Landing";
import { Helmet } from "react-helmet";  

const appName = import.meta.env.VITE_APP_NAME;  

const Welcome = () => {
    return (
        <AppShell>
            <div className="min-h-screen-default">
                <Helmet>
                    <title>{appName}</title>
                </Helmet>
                <LandingLayouts 
                    layoutTitle="Handcrafted"  
                    layoutSubtitle="with Love"
                    layoutMessage="Selamat datang di Rajut Dyubi, UMKM kreatif yang menghadirkan berbagai produk rajut handmade dengan desain estetik, fungsional, dan penuh makna. Setiap produk dibuat dengan detail dan cinta, sehingga memiliki karakter unik dan berbeda dari rajutan massal"  
                />
            </div>
        </AppShell>
    );
};

export default Welcome;
