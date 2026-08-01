import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    VscSignOut,
    VscThreeBars,
} from "react-icons/vsc";
import { sidebarLinks } from "../../../data/dashboard-links";
import SidebarLink from "./SidebarLink";
import { logout } from "../../../services/operations/authAPI";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
    const { user } = useSelector((state) => state.profile);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [collapsed, setCollapsed] = useState(false);

    return (
        <div
            className={`${collapsed ? "w-[80px]" : "w-[230px]"
                } h-[calc(100vh-3.5rem)]
            bg-richblack-800
            border-r border-richblack-700
            transition-all duration-300
            flex flex-col justify-between`}
        >
            {/* Header */}
            <div>
                <div className="flex items-center justify-between border-b border-richblack-700 px-4 py-3">

                    {!collapsed && (
                        <div>
                            <h2 className="text-base font-semibold text-richblack-5">
                                Dashboard
                            </h2>

                            <p className="mt-0.5 text-[10px] text-richblack-400">
                                Welcome Back
                            </p>
                        </div>
                    )}

                    <button
                        onClick={() => setCollapsed(!collapsed)}
                        className="rounded-md bg-richblack-700 p-1.5 text-richblack-100 transition-all duration-200 hover:bg-yellow-50 hover:text-richblack-900"
                    >
                        <VscThreeBars size={16} />
                    </button>

                </div>

                {/* User */}
                <div className="flex flex-col items-center border-b border-richblack-700 px-4 py-5">

                    <img
                        src={
                            user?.image ||
                            "https://api.dicebear.com/7.x/initials/svg?seed=User"
                        }
                        alt="profile"
                        className="h-14 w-14 rounded-full border border-yellow-50 object-cover"
                    />

                    {!collapsed && (
                        <>
                            <h3 className="mt-3 text-sm font-semibold text-richblack-5">
                                {user?.firstName} {user?.lastName}
                            </h3>

                            <p className="mt-1 text-center text-[11px] text-richblack-400">
                                {user?.email}
                            </p>

                            <span className="mt-2 rounded-full bg-richblack-700 px-3 py-1 text-[10px] font-medium text-yellow-50">
                                {user?.accountType}
                            </span>
                        </>
                    )}

                </div>

                {/* Navigation */}
                <div className="mt-3">

                    {sidebarLinks.map((link) => {
                        if (
                            link.type &&
                            link.type !== user?.accountType
                        )
                            return null;

                        return (
                            <SidebarLink
                                key={link.id}
                                link={link}
                                collapsed={collapsed}
                            />
                        );
                    })}

                </div>
            </div>

            {/* Footer */}
            <div className="border-t border-richblack-700 p-2">

                <button
                    onClick={() => dispatch(logout(navigate))}
                    className="flex w-full items-center gap-3 rounded-md px-4 py-2 text-sm font-medium text-pink-200 transition-all duration-200 hover:bg-pink-700 hover:text-white"
                >
                    <VscSignOut size={18} />

                    {!collapsed && <span>Logout</span>}
                </button>

            </div>
        </div>
    );
};

export default Sidebar;