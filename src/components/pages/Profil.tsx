import ProfilForm from "../molecules/ProfilForm";
import HomeShell from "../shell/HomeShell";
import ProfilTemplate from "../templates/ProfilTemplate";
const Profil = () => {
    return (
        <HomeShell>
            <ProfilTemplate>
                <ProfilForm />
            </ProfilTemplate>
        </HomeShell>
    )
}

export default Profil;