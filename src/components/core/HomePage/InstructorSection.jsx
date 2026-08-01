import React from "react";
import Instructor from "../../../assets/Images/section3.webp";
import HighlightText from "./HighlightText";
import { FaArrowRight } from "react-icons/fa";
import CTAButton from "../HomePage/Button";

const InstructorSection = () => {
    return (
        <div className="mt-20">
            <div className="bg-richblue-900 rounded-xl px-8 md:px-12 lg:px-20 py-20 md:py-12">
                <div className="flex flex-row gap-20 items-center">

                    {/* Left Section - Image */}
                    <div className="w-[50%]">
                        <img
                            src={Instructor}
                            alt="Instructor"
                            className="rounded-lg shadow-lg"
                        />
                    </div>

                    {/* Right Section - Content */}
                    <div className="w-[50%] flex flex-col gap-8">
                        <div className="text-4xl font-semibold text-white">
                            Become An{" "}
                            <HighlightText text={"Instructor"} />
                        </div>

                        <p className="font-medium text-[16px] text-richblack-100 w-[80%]">
                            Instructors from around the world teach millions of students on
                            StudyNotion. We provide the tools and skills to teach what you
                            love.
                        </p>

                        <div className="w-fit">
                            <CTAButton active={true} linkto={"/signup"}>
                                <div className="flex flex-row gap-2 items-center">
                                    Start Learning Today
                                    <FaArrowRight />
                                </div>
                            </CTAButton>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default InstructorSection;