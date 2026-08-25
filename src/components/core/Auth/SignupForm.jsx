import { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { sendOtp } from "../../../services/operations/authAPI";
// import { signUp } from "../../../services/operations/authAPI";
import { setSignupData } from "../../../slices/authSlice";



function SignupForm() {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
    });

    const {
        firstName,
        lastName,
        email,
        password,
        confirmPassword,
    } = formData;

    const handleOnChange = (e) => {
        setFormData((prevData) => ({
            ...prevData,
            [e.target.name]: e.target.value,
        }));
    };

    const handleOnSubmit = (e) => {
        e.preventDefault();

        dispatch(setSignupData(formData));

        dispatch(sendOtp(email, navigate));
    };

    return (
        <form
            onSubmit={handleOnSubmit}
            className="mt-6 flex w-full flex-col gap-y-4"
        >
            {/* First Name & Last Name */}
            <div className="flex gap-4">
                <label className="w-full">
                    <p className="mb-1 text-[0.875rem] text-richblack-5">
                        First Name <sup className="text-pink-200">*</sup>
                    </p>

                    <input
                        required
                        type="text"
                        name="firstName"
                        value={firstName}
                        onChange={handleOnChange}
                        placeholder="Enter first name"
                        className="w-full rounded-[0.5rem] bg-richblack-800 p-[12px] text-richblack-5"
                    />
                </label>

                <label className="w-full">
                    <p className="mb-1 text-[0.875rem] text-richblack-5">
                        Last Name <sup className="text-pink-200">*</sup>
                    </p>

                    <input
                        required
                        type="text"
                        name="lastName"
                        value={lastName}
                        onChange={handleOnChange}
                        placeholder="Enter last name"
                        className="w-full rounded-[0.5rem] bg-richblack-800 p-[12px] text-richblack-5"
                    />
                </label>
            </div>

            {/* Email */}
            <label className="w-full">
                <p className="mb-1 text-[0.875rem] text-richblack-5">
                    Email Address <sup className="text-pink-200">*</sup>
                </p>

                <input
                    required
                    type="email"
                    name="email"
                    value={email}
                    onChange={handleOnChange}
                    placeholder="Enter email address"
                    className="w-full rounded-[0.5rem] bg-richblack-800 p-[12px] text-richblack-5"
                />
            </label>

            {/* Password */}
            <label className="relative">
                <p className="mb-1 text-[0.875rem] text-richblack-5">
                    Password <sup className="text-pink-200">*</sup>
                </p>

                <input
                    required
                    type={showPassword ? "text" : "password"}
                    name="password"
                    value={password}
                    onChange={handleOnChange}
                    placeholder="Enter Password"
                    className="w-full rounded-[0.5rem] bg-richblack-800 p-[12px] pr-12 text-richblack-5"
                />

                <span
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-[38px] cursor-pointer"
                >
                    {showPassword ? (
                        <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />
                    ) : (
                        <AiOutlineEye fontSize={24} fill="#AFB2BF" />
                    )}
                </span>
            </label>

            {/* Confirm Password */}
            <label className="relative">
                <p className="mb-1 text-[0.875rem] text-richblack-5">
                    Confirm Password <sup className="text-pink-200">*</sup>
                </p>

                <input
                    required
                    type={showConfirmPassword ? "text" : "password"}
                    name="confirmPassword"
                    value={confirmPassword}
                    onChange={handleOnChange}
                    placeholder="Confirm Password"
                    className="w-full rounded-[0.5rem] bg-richblack-800 p-[12px] pr-12 text-richblack-5"
                />

                <span
                    onClick={() =>
                        setShowConfirmPassword(!showConfirmPassword)
                    }
                    className="absolute right-3 top-[38px] cursor-pointer"
                >
                    {showConfirmPassword ? (
                        <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />
                    ) : (
                        <AiOutlineEye fontSize={24} fill="#AFB2BF" />
                    )}
                </span>
            </label>

            <button
                type="submit"
                className="mt-6 rounded-[8px] bg-yellow-50 py-[8px] px-[12px] font-medium text-richblack-900"
            >
                Create Account
            </button>
        </form>
    );
}

export default SignupForm;