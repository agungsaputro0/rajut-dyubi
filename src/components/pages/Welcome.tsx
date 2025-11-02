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
                    layoutTitle="Dirajut dengan penuh cinta"  
                    layoutSubtitle=""
                    layoutMessage="Rajut Dyubi menghadirkan koleksi rajut handmade dengan desain estetik dan fungsional, dirancang penuh ketelitian agar setiap produk memiliki cerita dan karakter tersendiri."  
                />
            </div>
        </AppShell>
    );
};

export default Welcome;
