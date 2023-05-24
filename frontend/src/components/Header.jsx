import { Outlet } from "react-router-dom"
import { Fragment } from "react"

export const Header = () => {
    return (
        <Fragment>
            <div className=" mt-7 w-screen pb-5 shadow-sm border-b border-slate-300">
                <h1 className="text-slate-800 text-2xl font-bold text-center">CRUD NodeJS+ReactJs</h1>
                <p className="text-center text-sm font-light text-slate-500">Create Read Update Delete Users, with Express, Axios, MySql, Vite+ReactJs, TailwindCSS</p>
            </div>

            <Outlet />
        </Fragment>

    )
}