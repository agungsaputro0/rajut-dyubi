import Homeshell from "../shell/HomeShell";
import HomeTemplate from "../templates/HomeTemplate";
import Dashboard from "../molecules/Dashboard";
const Portal = () => {
    return (
             <Homeshell>
                <HomeTemplate>
                    <Dashboard />
                </HomeTemplate>
            </Homeshell>
    )
}

export default Portal;