import {ToastContainer} from "react-toastify";
import Toolbar from "./components/Toolbar/Toolbar.tsx";
import UserForm from "./components/UserForm/UserForm.tsx";
import type {UserMutation} from "./types";
import {useState} from "react";
import Users from "./components/Users/Users.tsx";

const App = () => {
    const [users, setUsers] = useState<UserMutation[] | []>([])

    const addUser = (user: UserMutation) => {
        setUsers(prevState => [...prevState, user])
    }

    return (
        <>
            <ToastContainer/>
            <header>
                <Toolbar/>
            </header>
            <main className="container-lg">
                <div className="row mt-5">
                    <div className="col-4"><UserForm addUser={addUser}/></div>
                    <div className="col-4"><Users users={users}/></div>
                </div>
            </main>
        </>
    )
}

export default App
