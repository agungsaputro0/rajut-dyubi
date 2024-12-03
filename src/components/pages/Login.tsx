import LoginForm from "../molecules/LoginForm";
import LoginTemplate from "../templates/LoginTemplate";
import AuthShell from "../shell/AuthShell";

const LoginPage = () => {
    return (
        <AuthShell>
            <LoginTemplate>
                <LoginForm />
            </LoginTemplate>
        </AuthShell>
    )
}

export default LoginPage;