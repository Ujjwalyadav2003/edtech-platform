import React from "react";
import { FaHeart, FaStar } from "react-icons/fa";
import { MdDeleteOutline } from "react-icons/md";

const MyWishlist = () => {
    const wishlistCourses = [
        {
            _id: 1,
            courseName: "Complete React Developer",
            instructor: "John Doe",
            price: 999,
            rating: 4.8,
            thumbnail:
                "https://images.unsplash.com/photo-1516321318423-f06f85e504b3",
        },
        {
            _id: 2,
            courseName: "MERN Stack Masterclass",
            instructor: "Alex Smith",
            price: 1499,
            rating: 4.9,
            thumbnail:
                "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
        },
        {
            _id: 3,
            courseName: "Advanced JavaScript",
            instructor: "David Wilson",
            price: 799,
            rating: 4.7,
            thumbnail:
                "https://images.unsplash.com/photo-1555066931-4365d14bab8c",
        },
    ];

    return (
        <div className="text-richblack-5">

            {/* Header */}
            <div className="mb-6">
                <h1 className="text-2xl font-semibold text-richblack-5">
                    My Wishlist
                    <span className="ml-2 text-pink-400">♥</span>
                </h1>

                <p className="mt-1 text-sm text-richblack-300">
                    Save courses you want to learn later.
                </p>
            </div>


            {/* Stats */}
            <div className="mb-6 rounded-lg border border-richblack-700 bg-richblack-800 p-5">

                <div className="flex items-center gap-4">

                    <div className="rounded-full bg-pink-500/10 p-3">
                        <FaHeart className="text-xl text-pink-400" />
                    </div>

                    <div>
                        <p className="text-sm text-richblack-300">
                            Saved Courses
                        </p>

                        <h2 className="text-2xl font-bold text-yellow-50">
                            {wishlistCourses.length}
                        </h2>
                    </div>

                </div>

            </div>


            {/* Courses */}
            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">

                {wishlistCourses.map((course) => (

                    <div
                        key={course._id}
                        className="
                        overflow-hidden rounded-xl 
                        border border-richblack-700 
                        bg-richblack-800 
                        transition-all duration-300
                        hover:-translate-y-1
                        hover:shadow-lg
                        hover:border-yellow-50/50
                        "
                    >

                        {/* Image */}
                        <img
                            src={course.thumbnail}
                            alt={course.courseName}
                            className="h-36 w-full object-cover"
                        />


                        {/* Content */}
                        <div className="p-4">


                            <h3 className="text-base font-semibold text-richblack-5">
                                {course.courseName}
                            </h3>


                            <p className="mt-1 text-xs text-richblack-300">
                                By {course.instructor}
                            </p>


                            {/* Rating */}
                            <div className="mt-3 flex items-center gap-1">

                                <FaStar className="text-sm text-yellow-50" />

                                <span className="text-sm font-medium text-yellow-50">
                                    {course.rating}
                                </span>

                            </div>


                            {/* Price */}
                            <p className="mt-3 text-xl font-bold text-yellow-50">
                                ₹{course.price}
                            </p>


                            {/* Buttons */}
                            <div className="mt-4 flex gap-2">


                                <button
                                    className="
                                    flex-1 rounded-md 
                                    bg-yellow-50 
                                    py-2 
                                    text-sm 
                                    font-semibold 
                                    text-richblack-900
                                    transition-all
                                    hover:scale-95
                                    "
                                >
                                    Enroll Now
                                </button>


                                <button
                                    className="
                                    rounded-md 
                                    border border-pink-500 
                                    px-3
                                    text-pink-400
                                    transition-all
                                    hover:bg-pink-500
                                    hover:text-white
                                    "
                                >
                                    <MdDeleteOutline size={20} />
                                </button>


                            </div>


                        </div>

                    </div>

                ))}


            </div>


            {/* Empty State */}
            {wishlistCourses.length === 0 && (

                <div className="flex flex-col items-center justify-center py-16">

                    <FaHeart className="mb-3 text-5xl text-richblack-600" />

                    <h2 className="text-xl font-semibold">
                        Your Wishlist is Empty
                    </h2>

                    <p className="mt-2 text-sm text-richblack-400">
                        Explore courses and save your favorites here.
                    </p>

                </div>

            )}

        </div>
    );
};

export default MyWishlist;