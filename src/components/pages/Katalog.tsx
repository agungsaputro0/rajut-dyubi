import LoginTemplate from "../templates/LoginTemplate";
import AuthShell from "../shell/AuthShell";
import KatalogContent from "../molecules/KatalogContent";
import ProductCatalog from "../molecules/ProductCatalog";
import NeverMissAPost from "../molecules/NeverMissAPost";

const Katalog = () => {
    return (
        <AuthShell>
            <LoginTemplate>
                <KatalogContent />
                <ProductCatalog />
                <NeverMissAPost />
            </LoginTemplate>
        </AuthShell>
    )
}

export default Katalog;