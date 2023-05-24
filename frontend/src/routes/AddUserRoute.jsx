import { Outlet } from "react-router-dom"
import { AddUser } from "../components/AddUser"

export const AddUserRoute = () => {
    return (
        <>
            <Outlet />
            <AddUser />
        </>
    )
}