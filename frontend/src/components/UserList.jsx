import { useState, useEffect } from "react"
import axios from "axios"
import { Link } from "react-router-dom"

export const UserList = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        getUsers();
    }, []);

    const getUsers = async () => {
        const response = await axios.get("http://localhost:5000/users");
        setUsers(response.data);
    }

    const deleteUser = async (id) => {
        try {
            // Menampilkan konfirmasi alert kepada pengguna
            const confirmDelete = window.confirm("Are you sure you want to delete this user?");

            if (confirmDelete) {
                // Jika pengguna mengkonfirmasi penghapusan, kirim permintaan DELETE
                await axios.delete(`http://localhost:5000/users/${id}`);
                getUsers();
            }
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className="container mx-auto mt-10 px-28">

            <div className="container mt-5 mb-10">
                <Link to={'add'} className="text-white bg-blue-700
                 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm 
                 w-full sm:w-auto px-7 py-3 text-center ">Add New User</Link>
            </div>
            <table className="mt-5 w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="text-slate-800 font-bold px-6 py-3">
                            No
                        </th>
                        <th scope="col" className="text-slate-800 font-bold px-6 py-3">
                            Users
                        </th>
                        <th scope="col" className="text-slate-800 font-bold px-6 py-3">
                            <div className="flex items-center">
                                Email
                                <a href="#"><svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3 ml-1" aria-hidden="true" fill="currentColor" viewBox="0 0 320 512"><path d="M27.66 224h264.7c24.6 0 36.89-29.78 19.54-47.12l-132.3-136.8c-5.406-5.406-12.47-8.107-19.53-8.107c-7.055 0-14.09 2.701-19.45 8.107L8.119 176.9C-9.229 194.2 3.055 224 27.66 224zM292.3 288H27.66c-24.6 0-36.89 29.77-19.54 47.12l132.5 136.8C145.9 477.3 152.1 480 160 480c7.053 0 14.12-2.703 19.53-8.109l132.3-136.8C329.2 317.8 316.9 288 292.3 288z" /></svg></a>
                            </div>
                        </th>
                        <th scope="col" className="text-slate-800 font-bold px-6 py-3">
                            <div className="flex items-center">
                                Gender
                                <a href="#"><svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3 ml-1" aria-hidden="true" fill="currentColor" viewBox="0 0 320 512"><path d="M27.66 224h264.7c24.6 0 36.89-29.78 19.54-47.12l-132.3-136.8c-5.406-5.406-12.47-8.107-19.53-8.107c-7.055 0-14.09 2.701-19.45 8.107L8.119 176.9C-9.229 194.2 3.055 224 27.66 224zM292.3 288H27.66c-24.6 0-36.89 29.77-19.54 47.12l132.5 136.8C145.9 477.3 152.1 480 160 480c7.053 0 14.12-2.703 19.53-8.109l132.3-136.8C329.2 317.8 316.9 288 292.3 288z" /></svg></a>
                            </div>
                        </th>
                        <th scope="col" className="text-slate-800 font-bold mx-0  px-6 py-3">
                            <div className="flex items-center  justify-center">
                                Action

                            </div>
                        </th>


                    </tr>
                </thead>
                <tbody>
                    {users.map((user, index) => (
                        <tr key={user.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                            <td className="f px-6 py-4">{index + 1}</td>
                            <td scope="row" className="px-6 py-4 font-medium text-slate-800 whitespace-nowrap dark:text-white">
                                {user.name}
                            </td>
                            <td className="px-6 py-4">
                                {user.email}
                            </td>
                            <td className="px-6 py-4">
                                {user.gender}
                            </td>

                            <td className="flex justify-center gap-3 px-6 py-4">
                                <Link to={`edit/${user.id}`} className="font-medium hover:opacity-75  text-white bg-green-500 px-3 py-2 rounded-md">Edit</Link>
                                <button onClick={() => deleteUser(user.id)} className="font-medium hover:opacity-75 text-white bg-pink-500 px-3 py-2 rounded-md">Delete</button>
                            </td>
                        </tr>
                    ))}

                </tbody>
            </table>

        </div>


    )
}
