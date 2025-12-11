import {ToastContainer} from "react-toastify";
import Toolbar from "./components/Toolbar/Toolbar.tsx";
import UserForm from "./components/UserForm/UserForm.tsx";

const App = () => {
    return (
        <>
            <ToastContainer/>
            <header>
                <Toolbar/>
            </header>
            <main className="container-lg">
                <div className="row mt-5">
                    <div className="col-4"><UserForm/></div>
                </div>
            </main>
        </>
    )
}

export default App
