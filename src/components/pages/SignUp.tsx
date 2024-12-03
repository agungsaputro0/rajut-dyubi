import SignUpForm from "../molecules/SignUpForm";
import LoginTemplate from "../templates/LoginTemplate";
import AuthShell from "../shell/AuthShell";

const SignUpPage = () => {
    return (
        <AuthShell>
            <LoginTemplate>
                <SignUpForm />
            </LoginTemplate>
        </AuthShell>
    )
}

export default SignUpPage;