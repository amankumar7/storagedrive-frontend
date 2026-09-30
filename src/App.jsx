import Auth from "./componets/auth/Auth.jsx";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import ProtectedRoute from "./componets/ProtectedRoutes.jsx";
import Cloudboxhome from "./pages/cloudboxhome.jsx";


function App() {

    return (


        <BrowserRouter>

            <Routes>

                {/* Public */}
                <Route
                    path="/"
                    element={<Auth/>}
                />


                {/* Protected */}
                <Route element={<ProtectedRoute/>}>

                    <Route
                        path="/home"
                        element={<Cloudboxhome/>}
                    />

                </Route>

            </Routes>
        </BrowserRouter>
    );
}

export default App;