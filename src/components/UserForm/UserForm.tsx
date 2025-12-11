import React, {useState} from 'react';
import type {UserInterface, UserMutation} from "../../types";
import {toast} from "react-toastify";

interface Props {
    addUser: (user: UserMutation) => void;
}

const UserForm: React.FC<Props> = ({addUser}) => {
    const [user, setUser] = useState<UserInterface>({
        name: '',
        email: '',
        isActive: false,
        role: 'user'
    })

    const changeUserForm = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setUser(prev => ({...prev, [e.target.name]: e.target.value}));
    };

    const changeActivityUser = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUser(prev => ({...prev, [e.target.name]: e.target.checked}))
    }

    const onSubmit = (e: React.FormEvent<HTMLFormElement>)=> {
        e.preventDefault()

        if (!user.name.trim().length || !user.email.trim().length) {
            toast.error('Please fill all fields')
        } else {
            addUser({
                id: Math.random().toString(),
                ...user})
            setUser({name: '', email: '', isActive: false, role: 'user'})
            toast.success('User added successfully')
        }
    }

    return (
        <form onSubmit={onSubmit}>
            <h3>Add new user</h3>
            <div className="form-group mb-3">
                <label htmlFor="userName">Name</label>
                <input
                    type="text"
                    name="name"
                    id="userName"
                    className="form-control"
                    value={user.name}
                    onChange={changeUserForm}
                />
            </div>

            <div className="form-group mb-3">
                <label htmlFor="userEmail">Email</label>
                <input
                    type="email"
                    name="email"
                    id="userEmail"
                    className="form-control"
                    value={user.email}
                    onChange={changeUserForm}
                />
            </div>

            <div className="form-group mb-3">
                <label htmlFor="userRole" className="form-label">Role</label>
                <select className="form-select"
                        id="userRole"
                        onChange={changeUserForm}
                        value={user.role}
                        name="role"
                >
                    <option value="user">User</option>
                    <option value="editor">Editor</option>
                    <option value="admin">Admin</option>
                </select>
            </div>

            <div className="form-group mb-3">
                <label className="form-check-label me-2" htmlFor="userActive">Is user active?</label>
                <input type="checkbox"
                       className="form-check-input"
                       id="userActive"
                       name="isActive"
                       checked={user.isActive}
                       onChange={changeActivityUser}
                />
            </div>

            <button type="submit" className="btn btn-primary">Create user</button>
        </form>
    );
};

export default UserForm;