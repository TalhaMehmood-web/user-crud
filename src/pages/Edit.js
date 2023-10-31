/* eslint-disable eqeqeq */
import { React, useState } from 'react';
import { useSelector, useDispatch } from "react-redux"
import { useParams, useNavigate } from 'react-router-dom';
import { updateUser } from '../redux/Reducer';
const Edit = () => {
    const users = useSelector(state => state.user)
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { id } = useParams()
    const MatchedUser = users.find(user => user.id == id)
    const [name, setName] = useState(MatchedUser.name)
    const [email, setEmail] = useState(MatchedUser.email)

    const handleSubmit = (e) => {

        e.preventDefault();
        dispatch(updateUser({
            id: id,
            name: name,
            email: email

        }))


        navigate("/")
    }
    return (
        <div className="flex justify-center items-center  h-screen">
            <div className="bg-slate-800 p-6 rounded-lg shadow-md w-[30rem]">
                <h2 className="text-2xl font-bold mb-4">Add a New User</h2>
                <div className="mb-4">
                    <label className="block text-white text-sm font-bold mb-2" htmlFor="name">
                        Updated Name:
                    </label>
                    <input
                        className="w-full p-2 border rounded-md outline-none bg-slate-600 border-slate-600"
                        type="text"
                        id="name"
                        value={name}
                        placeholder="Enter your updated name"
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-white text-sm font-bold mb-2" htmlFor="email">
                        Updated  Email
                    </label>
                    <input
                        className="w-full p-2 border rounded-md outline-none bg-slate-600 border-slate-600 "
                        type="email"
                        id="email"
                        value={email}
                        placeholder="Enter your updated email"
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <button
                    className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700"
                    type="submit"
                    onClick={handleSubmit}
                >
                    Submit
                </button>
            </div>
        </div>
    );
}

export default Edit;
