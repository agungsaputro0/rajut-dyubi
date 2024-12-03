import ResendActivationForm from "../molecules/ResendActivationForm";
import LoginTemplate from "../templates/LoginTemplate";
import AuthShell from "../shell/AuthShell";

const SignUpPage = () => {
    return (
        <AuthShell>
            <LoginTemplate>
                <ResendActivationForm />
            </LoginTemplate>
        </AuthShell>
    )
}

export default SignUpPage;