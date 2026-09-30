import { Navigate, Outlet } from "react-router-dom";
import { getAccessToken } from "../service/tokenStore.js";

function ProtectedRoute() {

    const token = getAccessToken();

    if (!token) {
        return <Navigate to="/" replace />;
    }

    return <Outlet />;
}

export default ProtectedRoute;