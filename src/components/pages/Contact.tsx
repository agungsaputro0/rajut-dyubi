import LoginTemplate from "../templates/LoginTemplate";
import AuthShell from "../shell/AuthShell";
import ContactContent from "../molecules/ContactContent";
import ContactUs from "../molecules/ContactUs";


const Contact = () => {
    return (
        <AuthShell>
            <h1 className="hidden">
                Rajut Dyubi – Contact
            </h1>
            <LoginTemplate>
                <ContactContent />
                <ContactUs />
            </LoginTemplate>
        </AuthShell>
    )
}

export default Contact;