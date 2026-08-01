import React from "react";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";

const Template = ({
    title,
    description1,
    description2,
    image,
    frameImage,
    formType,
}) => {
    return (
        <div className="mx-auto flex w-11/12 max-w-maxContent items-center justify-between gap-x-12 py-12">

            {/* Left Section */}
            <div className="w-11/12 max-w-[450px]">
                <h1 className="text-3xl font-semibold text-richblack-5">
                    {title}
                </h1>

                <p className="mt-4 text-[1.125rem] leading-[1.625rem]">
                    <span className="text-richblack-100">
                        {description1}
                    </span>
                    <br />
                    <span className="font-edu-sa italic text-blue-100">
                        {description2}
                    </span>
                </p>

                {formType === "login" ? (
                    <LoginForm />
                ) : (
                    <SignupForm />
                )}
            </div>

            {/* Right Section */}
            <div className="relative mx-auto max-w-[450px]">
                <img
                    src={frameImage}
                    alt="Pattern"
                    width={558}
                    height={504}
                    loading="lazy"
                />

                <img
                    src={image}
                    alt="Students"
                    width={558}
                    height={490}
                    loading="lazy"
                    className="absolute -top-4 right-4"
                />
            </div>
        </div>
    );
};

export default Template;