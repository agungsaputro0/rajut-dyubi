import LoginForm from "../molecules/LoginForm";
import LoginTemplate from "../templates/LoginTemplate";
import AuthShell from "../shell/AuthShell";

const LoginPage = () => {
    return (
        <>
        <AuthShell>
            <h1 className="hidden">
                Rajut Dyubi – Login
            </h1>
            <LoginTemplate>
                <LoginForm />
            </LoginTemplate>
        </AuthShell>
        </>
    )
}

export default LoginPage;