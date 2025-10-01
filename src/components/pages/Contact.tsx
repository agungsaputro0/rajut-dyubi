import LoginTemplate from "../templates/LoginTemplate";
import AuthShell from "../shell/AuthShell";
import ContactContent from "../molecules/ContactContent";
import ContactUs from "../molecules/ContactUs";


const Contact = () => {
    return (
        <AuthShell>
            <LoginTemplate>
                <ContactContent />
                <ContactUs />
            </LoginTemplate>
        </AuthShell>
    )
}

export default Contact;