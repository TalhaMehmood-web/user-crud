import React from 'react';
import { useSelector } from "react-redux"
import { useNavigate } from 'react-router-dom';
import { removeUser } from '../redux/Reducer';
import { useDispatch } from "react-redux"
const Home = () => {
    const dispatch = useDispatch()
    const users = useSelector(state => state.user)
    const navigate = useNavigate()

    const handleCreate = () => {
        navigate("/create")
    }
    const handleDelete = (id) => {
        dispatch(removeUser(id))
    }
    const navigateToEdit = (id) => {
        navigate(`/edit/${id}`)
    }
    return (
        <div className="container mx-auto py-4 ">
            <h1 className="text-3xl font-semibold mb-12 text-center">User CRUD using React-Redux</h1>
            <button className=' border border-green-700 bg-green-500 hover:bg-green-700 px-4 py-2 rounded-md font-bold mb-4' onClick={handleCreate} >Create+</button>
            <table className="table-auto w-full border border-slate-600 rounded-xl text-slate-300">
                <thead className='border border-slate-600 rounded-md' >
                    <tr>
                        <th className=" border border-slate-600 px-1 py-2">ID</th>
                        <th className=" border border-slate-600 px-1 py-2">Name</th>
                        <th className=" border border-slate-600 px-1 py-2">Email</th>
                        <th className=" border border-slate-600 px-1 py-2">Action</th>
                    </tr>
                </thead>
                <tbody className='text-center text-slate-200' >
                    {users.map((user) => (
                        <tr key={user.id}>
                            <td className="border  border-slate-600 px-4 py-2">{user.id}</td>
                            <td className="border  border-slate-600 px-4 py-2">{user.name}</td>
                            <td className="border  border-slate-600 px-4 py-2">{user.email}</td>
                            <td className="border  border-slate-600 px-4 py-2">
                                <button className="bg-blue-500 mr-4 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                                    onClick={() => navigateToEdit(user.id)}>
                                    Edit
                                </button>
                                <button
                                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                                    onClick={() => handleDelete(user.id)}
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Home;
