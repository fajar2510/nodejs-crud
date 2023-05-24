import { useState, useEffect } from "react"
import axios from "axios"
import { useNavigate, useParams, Link } from "react-router-dom"

export const EditUser = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [gender, setGender] = useState("Male");

    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        getUserById();
    }, []);

    const updateUser = async (e) => {
        e.preventDefault();
        try {
            await axios.patch(`http://localhost:5000/users/${id}`, {
                name,
                email,
                gender
            });
            navigate("/");
        } catch (error) {
            console.log(error);
        }
    }

    const getUserById = async () => {
        const response = await axios.get(`http://localhost:5000/users/${id}`);
        setName(response.data.name);
        setEmail(response.data.email);
        setGender(response.data.gender);
    }

    return (
        <div className="container mt-10 px-28  mx-auto ">
            <div className="flex items-center mb-3  gap-3">
                &#8592;
                <Link to={'/'} className="text-xs font-thin text-blue-500 border-b border-blue-500 hover:border-none">Back to</Link>

            </div>
            <h1 className="font-bold text-lg text-slate-800 mb-3">Edit User Form</h1>
            <form onSubmit={updateUser}>
                <div className="mb-6">
                    <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
                    <input type="text" id="name" className="bg-gray-50 border
                     border-gray-300 text-gray-900 text-sm rounded-lg
                      focus:ring-blue-500 focus:border-blue-500 block w-[60%] p-2.5"
                        placeholder="Your name" required
                        value={name} onChange={(e) => setName(e.target.value)} />
                </div>
                <div className="mb-6">
                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                    <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg
                     focus:ring-blue-500 focus:border-blue-500 block w-[60%] p-2.5" placeholder="email@example.com" required
                        value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className="mb-6">
                    <label htmlFor="gender" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Gender</label>
                    <select name="gender" id="gender " className="bg-gray-50 border border-gray-300
                     text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[30%] p-2.5"
                        value={gender} onChange={(e) => setGender(e.target.value)}>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                    </select>
                </div>

                <button type="submit" className="text-white bg-green-700
                 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm 
                 w-full sm:w-auto px-5 py-2.5 text-center ">Update </button>
            </form>


        </div>
    )
}