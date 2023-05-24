import { Outlet } from "react-router-dom"
import { UserList } from "../components/UserList"

export const UserListRoute = () => {
    return (
        <>
            <Outlet />
            <UserList />
        </>
    )
}