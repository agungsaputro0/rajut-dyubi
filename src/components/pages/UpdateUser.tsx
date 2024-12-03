import HomeShell from "../shell/HomeShell";
import HomeTemplate from "../templates/HomeTemplate";
import UpdateUserForm from "../molecules/UpdateUserForm";
const Users = () => {
    return (
        <HomeShell>
            <HomeTemplate>
                <UpdateUserForm />
            </HomeTemplate>
        </HomeShell>
    )
}

export default Users;