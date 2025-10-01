import LoginForm from "../molecules/LoginForm";
import LoginTemplate from "../templates/LoginTemplate";
import AuthShell from "../shell/AuthShell";

const LoginPage = () => {
    return (
        <>
        <div className="absolute inset-0 bg-black/10 z-0"></div>
        <AuthShell>
            <LoginTemplate>
                <LoginForm />
            </LoginTemplate>
        </AuthShell>
        </>
    )
}

export default LoginPage;