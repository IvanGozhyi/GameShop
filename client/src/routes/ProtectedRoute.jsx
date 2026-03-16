import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";


export default function ProtectedRoute({ roles }) {
    const { isAuth, user } = useSelector((state) => state.auth);

    if (!isAuth) {
        return <Navigate to='/' replace />
    }

    if (roles && !roles.includes(user?.role)) {
        return <Navigate to='/' replace />
    }

    return <Outlet />;
}