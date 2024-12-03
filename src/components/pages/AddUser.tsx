import HomeShell from "../shell/HomeShell";
import HomeTemplate from "../templates/HomeTemplate";
import AddUserForm from "../molecules/AddUserForm";
const Users = () => {
    return (
        <HomeShell>
            <HomeTemplate>
                <AddUserForm />
            </HomeTemplate>
        </HomeShell>
    )
}

export default Users;