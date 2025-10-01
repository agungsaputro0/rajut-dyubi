import Homeshell from "../shell/HomeShell";
import { Helmet } from "react-helmet";
import WasteVolumeChart from "../atoms/WasteVolumeChart";
import WasteTypeDistributionChart from "../atoms/WasteTypeDistributionChart";
const appName = import.meta.env.VITE_APP_NAME; 
const Home = () => {
    return (
            <Homeshell>
                <div className="h-screen">
                <Helmet>
                    <title>{appName}</title>
                </Helmet>
                <div className="flex justify-center h-screen items-center">
                    <div className="w-full pl-10 pr-10 flex gap-8">
                        <WasteVolumeChart />
                        <WasteTypeDistributionChart />
                    </div>
                </div>
                </div>
            </Homeshell>
    )
}

export default Home;