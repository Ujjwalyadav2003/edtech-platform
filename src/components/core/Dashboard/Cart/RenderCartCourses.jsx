import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { GiNinjaStar } from "react-icons/gi";
import { RiDeleteBin6Line } from "react-icons/ri";

import { removeFromCart } from "../../../../slices/cartSlice";

const RenderCartCourses = () => {
    const { cart } = useSelector((state) => state.cart);
    const dispatch = useDispatch();

    return (
        <div className="flex-1">
            {
                cart.map((course, index) => (
                    <div
                        key={course._id}
                        className={`flex flex-col gap-4 border-b border-richblack-700 py-6 lg:flex-row lg:justify-between ${index !== cart.length - 1 ? "mb-4" : ""
                            }`}
                    >
                        {/* Left Section */}
                        <div className="flex gap-4">
                            <img
                                src={course?.thumbnail}
                                alt={course?.courseName}
                                className="h-[120px] w-[220px] rounded-lg object-cover"
                            />

                            <div className="flex flex-col gap-2">
                                <p className="text-lg font-semibold text-richblack-5">
                                    {course?.courseName}
                                </p>

                                <p className="text-sm text-richblack-300">
                                    {course?.category?.name}
                                </p>

                                <div className="flex items-center gap-2">
                                    <span className="font-medium text-yellow-100">
                                        4.8
                                    </span>

                                    <span className="flex">
                                        {[...Array(5)].map((_, i) => (
                                            <GiNinjaStar
                                                key={i}
                                                className="text-yellow-50"
                                            />
                                        ))}
                                    </span>

                                    <span className="text-sm text-richblack-300">
                                        ({course?.ratingAndReviews?.length || 0} Ratings)
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* Right Section */}
                        <div className="flex flex-col items-start gap-3 lg:items-end">
                            <button
                                onClick={() =>
                                    dispatch(removeFromCart(course._id))
                                }
                                className="flex items-center gap-2 rounded-md border border-richblack-700 bg-richblack-800 px-3 py-2 text-pink-200"
                            >
                                <RiDeleteBin6Line />
                                <span>Remove</span>
                            </button>

                            <p className="text-2xl font-semibold text-yellow-50">
                                ₹ {course?.price}
                            </p>
                        </div>
                    </div>
                ))
            }
        </div>
    );
};

export default RenderCartCourses;