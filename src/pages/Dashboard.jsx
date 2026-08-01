import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import Sidebar from "../components/core/Dashboard/Sidebar";

const Dashboard = () => {
    const { loading: authLoading } = useSelector((state) => state.auth);
    const { loading: profileLoading } = useSelector((state) => state.profile);

    if (authLoading || profileLoading) {
        return (
            <div className="grid h-[calc(100vh-3.5rem)] place-items-center bg-richblack-900">
                <div className="h-10 w-10 animate-spin rounded-full border-[3px] border-yellow-400 border-t-transparent"></div>
            </div>
        );
    }

    return (
        <div className="flex h-[calc(100vh-3.5rem)] overflow-hidden bg-richblack-900">

            {/* Sidebar */}
            <Sidebar />

            {/* Content */}
            <main className="flex-1 overflow-y-auto bg-richblack-900">

                <div className="mx-auto max-w-[950px] px-8 py-8">

                    <Outlet />

                </div>

            </main>

        </div>
    );
};

export default Dashboard;