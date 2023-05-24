import { Outlet } from "react-router-dom"
import { EditUser } from "../components/EditUser"

export const EditUserRoute = () => {
    return (
        <>
            <Outlet />
            <EditUser />
        </>
    )
}