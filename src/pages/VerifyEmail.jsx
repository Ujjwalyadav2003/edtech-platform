import React, { useEffect, useState } from "react";
import OTPInput from "react-otp-input";
import { useDispatch, useSelector } from "react-redux";
import { sendOtp, signUp } from "../services/operations/authAPI";
import { Link, useNavigate } from "react-router-dom";

const VerifyEmail = () => {
    const [otp, setOtp] = useState("");

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { signupData, loading } = useSelector(
        (state) => state.auth
    );

    useEffect(() => {
        if (!signupData) {
            navigate("/signup");
        }
    }, [signupData, navigate]);

    const handleOnSubmit = (e) => {
        e.preventDefault();

        const {
            accountType,
            firstName,
            lastName,
            email,
            password,
            confirmPassword,
        } = signupData;

        dispatch(
            signUp(
                accountType,
                firstName,
                lastName,
                email,
                password,
                confirmPassword,
                otp,
                navigate
            )
        );
    };

    return (
        <div className="flex min-h-[calc(100vh-3.5rem)] items-center justify-center bg-richblack-900 px-4">
            {loading ? (
                <div className="text-xl font-semibold text-richblack-5">
                    Loading...
                </div>
            ) : (
                <div className="w-full max-w-[500px]">
                    <h1 className="text-3xl font-semibold text-richblack-5">
                        Verify Email
                    </h1>

                    <p className="mt-3 text-richblack-300">
                        A verification code has been sent to you. Enter the code below.
                    </p>

                    <form
                        onSubmit={handleOnSubmit}
                        className="mt-8 flex flex-col gap-y-6"
                    >
                        <OTPInput
                            value={otp}
                            onChange={setOtp}
                            numInputs={6}
                            containerStyle={{
                                justifyContent: "space-between",
                                gap: "10px",
                            }}
                            renderInput={(props) => (
                                <input
                                    {...props}
                                    className="!h-[60px] !w-[60px] rounded-lg border border-richblack-700 bg-richblack-800 text-center text-xl font-semibold text-richblack-5 outline-none"
                                />
                            )}
                        />

                        <button
                            type="submit"
                            className="w-full rounded-lg bg-yellow-50 py-3 font-medium text-richblack-900 transition-all duration-200 hover:scale-[0.98]"
                        >
                            Verify Email
                        </button>
                    </form>

                    <div className="mt-6 flex items-center justify-between">
                        <Link
                            to="/login"
                            className="text-richblack-100 transition-all duration-200 hover:text-yellow-50"
                        >
                            ← Back to Login
                        </Link>

                        <button
                            className="font-medium text-blue-100 transition-all duration-200 hover:text-blue-50"
                            onClick={() => dispatch(sendOtp(signupData.email, navigate))}
                        >
                            Resend OTP
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default VerifyEmail;