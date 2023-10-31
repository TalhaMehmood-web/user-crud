import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux"
import { addUser } from '../redux/Reducer';
const Create = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const users = useSelector(state => state.user)
    const handleCreate = () => {

        dispatch(addUser({
            id: users.length + 1,
            name,
            email
        }))

        navigate("/")
    }
    return (
        <div className="flex justify-center items-center  h-screen">
            <div className="bg-slate-800 p-6 rounded-lg shadow-md w-[30rem]">
                <h2 className="text-2xl font-bold mb-4">Add a New User</h2>
                <div className="mb-4">
                    <label className="block text-white text-sm font-bold mb-2" htmlFor="name">
                        Name:
                    </label>
                    <input
                        className="w-full p-2 border rounded-md outline-none bg-slate-600 border-slate-600"
                        type="text"
                        id="name"
                        placeholder="Enter your name"
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-white text-sm font-bold mb-2" htmlFor="email">
                        Email
                    </label>
                    <input
                        className="w-full p-2 border rounded-md outline-none bg-slate-600 border-slate-600 "
                        type="email"
                        id="email"
                        placeholder="Enter your email"
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <button
                    className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700"
                    type="submit"
                    onClick={handleCreate}
                >
                    Submit
                </button>
            </div>
        </div>
    );
}

export default Create;
