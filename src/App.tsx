import {ToastContainer} from "react-toastify";
import Toolbar from "./components/Toolbar/Toolbar.tsx";

const App = () => {
    return (
        <>
            <ToastContainer/>
            <header>
                <Toolbar/>
            </header>
        </>
    )
}

export default App
