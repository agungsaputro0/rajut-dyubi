import LoginTemplate from "../templates/LoginTemplate";
import AuthShell from "../shell/AuthShell";
import KatalogContent from "../molecules/KatalogContent";
import ProductCatalog from "../molecules/ProductCatalog";

const Katalog = () => {
    return (
        <AuthShell>
            <h1 className="hidden">
                Rajut Dyubi – Katalog Produk
            </h1>
            <LoginTemplate>
                <KatalogContent />
                <ProductCatalog />
            </LoginTemplate>
        </AuthShell>
    )
}

export default Katalog;