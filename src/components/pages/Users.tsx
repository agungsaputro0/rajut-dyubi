import HomeShell from "../shell/HomeShell";
import HomeTemplate from "../templates/HomeTemplate";
import UsersTable from "../molecules/UsersTable";
const Users = () => {
    return (
        <HomeShell>
            <HomeTemplate>
                <UsersTable />
            </HomeTemplate>
        </HomeShell>
    )
}

export default Users;