import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getPasswordResetToken } from "../services/operations/authAPI";

const ForgotPassword = () => {
    const [emailSent, setEmailSent] = useState(false);
    const [email, setEmail] = useState("");

    const { loading } = useSelector((state) => state.auth);
    const dispatch = useDispatch();


    const handleOnSubmit = (e) => {
        e.preventDefault();
        dispatch(getPasswordResetToken(email, setEmailSent));
    };


    return (
        <div className="
            flex 
            min-h-[calc(100vh-80px)] 
            items-center 
            justify-center 
            bg-richblack-900
            px-4
        ">

            {
                loading ? (

                    <div className="
                        text-xl 
                        font-semibold 
                        text-richblack-5
                    ">
                        Loading...
                    </div>

                ) : (

                    <div className="
                        w-full 
                        max-w-md
                        rounded-xl
                        border
                        border-richblack-700
                        bg-richblack-800
                        p-8
                        shadow-xl
                    ">


                        {/* Heading */}

                        <h1 className="
                            text-2xl
                            font-bold
                            text-richblack-5
                        ">

                            {
                                !emailSent
                                    ? "Reset Your Password"
                                    : "Check Your Email"
                            }

                        </h1>


                        {/* Description */}

                        <p className="
                            mt-3
                            text-sm
                            leading-6
                            text-richblack-300
                        ">

                            {
                                !emailSent
                                    ?
                                    "Have no fear. We'll send you instructions to reset your password. If you don't have access to your email, we can try account recovery."
                                    :
                                    `We have sent the password reset link to ${email}.`
                            }

                        </p>



                        {/* Form */}

                        <form
                            onSubmit={handleOnSubmit}
                            className="mt-6"
                        >

                            {
                                !emailSent && (

                                    <label className="block">

                                        <p className="
                                            mb-2
                                            text-sm
                                            font-medium
                                            text-richblack-50
                                        ">
                                            Email Address
                                            <span className="text-pink-400">
                                                *
                                            </span>
                                        </p>


                                        <input

                                            required

                                            type="email"

                                            name="email"

                                            value={email}

                                            onChange={(e) =>
                                                setEmail(e.target.value)
                                            }

                                            placeholder="Enter your email address"

                                            className="
                                                w-full
                                                rounded-lg
                                                border
                                                border-richblack-600
                                                bg-richblack-700
                                                px-4
                                                py-3
                                                text-sm
                                                text-richblack-5
                                                outline-none
                                                placeholder:text-richblack-400
                                                focus:border-yellow-50
                                            "

                                        />

                                    </label>

                                )
                            }



                            {/* Button */}

                            <button
                                type="submit"
                                className="
                                    mt-6
                                    w-full
                                    rounded-lg
                                    bg-yellow-50
                                    py-3
                                    text-sm
                                    font-semibold
                                    text-richblack-900
                                    transition-all
                                    duration-200
                                    hover:scale-95
                                "
                            >

                                {
                                    !emailSent
                                        ? "Reset Password"
                                        : "Resend Email"
                                }

                            </button>


                        </form>



                        {/* Back Login */}

                        <div className="
                            mt-6
                            text-center
                        ">

                            <Link
                                to="/login"
                                className="
                                    text-sm
                                    font-medium
                                    text-richblack-300
                                    hover:text-yellow-50
                                "
                            >

                                ← Back to Login

                            </Link>

                        </div>


                    </div>

                )
            }


        </div>
    );
};

export default ForgotPassword;