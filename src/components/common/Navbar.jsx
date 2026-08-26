import React from "react";
import { Link, useLocation } from "react-router-dom";
import { FaChevronDown } from "react-icons/fa";
import Logos from "../../assets/Images/slogo.webp";
import { NavbarLinks } from "../../data/navbar-links";
import { useSelector } from "react-redux";
import { CiShoppingCart } from "react-icons/ci";
import ProfileDropDown from "../core/Auth/ProfileDropDown";



const subLinks = [
    {
        title: "python",
        link: "/catalog/python"
    },
    {
        title: "web dev",
        link: "/catalog/web-development"
    }
]



const Navbar = () => {

    const { token } = useSelector((state) => state.auth);
    const { user } = useSelector((state) => state.profile);
    const { totalItems } = useSelector((state) => state.cart)
    const location = useLocation();

    // const [subLinks, setSubLinks] = useState([]);


    // const fetchSublinks = async () => {
    //     try {
    //         const result = await apiConnector("GET", categories.CATEGORIES_API)
    //         console.log("Printing SubLinks Result", result)
    //         setSubLinks(result.data.data);

    //     }
    //     catch (error) {
    //         console.log("Could Not Fetch teh category list")
    //     }
    // }

    // useEffect(() => {
    //     fetchSublinks();
    // }, []);



    // const matchRoute = (route) => {
    //     return matchPath({ path: route }, location.pathname)
    // }

    return (
        <nav className="flex h-16 items-center justify-center border-b border-richblack-700 bg-richblack-900">
            <div className="flex w-11/12 max-w-maxContent min-w-0 items-center justify-between gap-2">

                {/* Logo */}
                <Link to="/" className="flex shrink-0 items-center gap-2">
                    <img
                        src={Logos}
                        alt="StudyNotion Logo"
                        className="h-8 w-8 object-contain"
                    />
                    <h1 className="hidden sm:block text-sm font-bold text-white">
                        Study<span className="text-richblack-300">Notion</span>
                    </h1>
                </Link>

                {/* Navigation Links */}
                <ul className="hidden md:flex min-w-0 flex-1 items-center justify-center gap-x-6 text-sm">
                    {NavbarLinks.map((link, index) => (
                        <li key={index}>
                            {link.title === "Catalog" ? (
                                <div className="relative flex cursor-pointer items-center gap-1 group text-richblack-25">
                                    <span>{link.title}</span>
                                    <FaChevronDown size={12} />

                                    <div
                                        className="invisible absolute left-1/2 top-full z-50 mt-3
                                                                flex w-[300px] -translate-x-1/2 flex-col
                                                                rounded-xl bg-white p-4 text-richblack-900 shadow-lg
                                                                opacity-0 transition-all duration-300
                                                                group-hover:visible group-hover:opacity-100"
                                    >
                                        {/* White Arrow */}
                                        <div
                                            className="absolute left-1/2 top-0 h-4 w-4
                                                            -translate-x-1/2 -translate-y-1/2
                                                            rotate-45 bg-white"
                                        ></div>

                                        {
                                            subLinks.length > 0 ? (
                                                subLinks.map((subLink, index) => (
                                                    <Link to={`${subLink.link}`} key={index}>
                                                        <p>{subLink.title}</p>
                                                    </Link>
                                                ))
                                            ) : null
                                        }
                                    </div>
                                </div>
                            ) : (
                                <Link to={link.path}>
                                    <p
                                        className={`font-medium transition-all duration-200 ${location.pathname === link.path
                                            ? "text-yellow-500"
                                            : "text-richblack-25 hover:text-richblack-5"
                                            }`}
                                    >
                                        {link.title}
                                    </p>
                                </Link>
                            )}
                        </li>
                    ))}
                </ul>

                {/* Buttons */}
                <div className="flex shrink-0 items-center gap-x-2 sm:gap-x-4">
                    {
                        user && user?.accountType !== "Instructor" && (
                            <Link to="/dashboard/cart" className="relative">
                                <CiShoppingCart />
                                {
                                    totalItems > 0 && (
                                        <span>
                                            {totalItems}
                                        </span>
                                    )
                                }
                            </Link>
                        )
                    }
                    {
                        token === null && (
                            <Link to="/login">
                                <button className="rounded-md border border-richblack-700 bg-richblack-800 px-2 md:px-4 py-2 text-xs md:text-sm font-medium">
                                    Log In
                                </button>

                            </Link>
                        )
                    }
                    {
                        token === null && (
                            <Link to="/signup">
                                <button className="rounded-md border border-richblack-700 bg-richblack-800 px-4 py-2 text-sm font-medium text-richblack-5 transition-all duration-200 hover:bg-richblack-700">
                                    Sign Up
                                </button>
                            </Link>
                        )
                    }
                    {
                        token !== null && <ProfileDropDown />
                    }
                </div>
            </div>
        </nav>
    );
};

export default Navbar;