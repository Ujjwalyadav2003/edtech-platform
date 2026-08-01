import { NavLink, useLocation, matchPath } from "react-router-dom";

const SidebarLink = ({ link, collapsed }) => {
    const location = useLocation();

    const Icon = link.icon;

    const matchRoute = (route) => {
        return matchPath(
            {
                path: route,
                end: false,
            },
            location.pathname
        );
    };

    const active = matchRoute(link.path);

    return (
        <NavLink
            to={link.path}
            className={`group relative flex items-center
            ${collapsed ? "justify-center px-2" : "gap-3 px-4"}
            mx-2 mb-1
            h-10
            rounded-lg
            transition-all duration-200

            ${active
                    ? "bg-yellow-50 text-richblack-900"
                    : "text-richblack-300 hover:bg-richblack-700 hover:text-richblack-5"
                }`}
        >
            {/* Active Indicator */}
            {active && (
                <span className="absolute left-0 top-2 bottom-2 w-[2px] rounded-r-full bg-yellow-50" />
            )}

            {/* Icon */}
            {Icon && (
                <Icon
                    size={18}
                    className={`flex-shrink-0 transition-all duration-200 ${active ? "scale-105" : "group-hover:scale-105"
                        }`}
                />
            )}

            {/* Text */}
            {!collapsed && (
                <span
                    className={`text-[13px] tracking-tight ${active ? "font-semibold" : "font-medium"
                        }`}
                >
                    {link.name}
                </span>
            )}
        </NavLink>
    );
};

export default SidebarLink;