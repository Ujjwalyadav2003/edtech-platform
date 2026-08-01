import React from "react";
import HighlightText from "./HighlightText";
import CTAButton from '../HomePage/Button'
import know_your_progress from "../../../assets/Images/know your progress.jpg";
import compare_with_others from "../../../assets/Images/young-woman-comparing-with-two-things.webp";
import plan_your_lessons from "../../../assets/Images/360_F_1923131730_EdWz0fV0uBfV7qgPN7E1gHrVfagbFL6G.webp";


const LearninglanguageSection = () => {
    return (
        <div className="mt-[130px] flex flex-col items-center ">

            {/* Heading */}
            <div className="text-4xl font-semibold text-center text-richblack-900">
                Your Swiss Knife For
                <HighlightText text={" learning any language"} />
            </div>

            {/* Description */}
            <p className="text-center text-richblack-600 text-base font-medium max-w-[750px] mt-5">
                Using Spin makes learning multiple languages easy with 20+ languages,
                realistic voice-over, progress tracking, custom schedules, and much
                more.
            </p>

            {/* Images Section */}
            <div className="flex flex-col md:flex-row items-center justify-center mt-16">

                <img
                    src={know_your_progress}
                    alt="Know Your Progress"
                    className="
            w-[280px]
            rounded-xl
            shadow-xl
            hover:scale-105
            transition-all
            duration-300
            z-30
          "
                />

                <img
                    src={compare_with_others}
                    alt="Compare With Others"
                    className="
            w-[280px]
            rounded-xl
            shadow-xl
            hover:scale-105
            transition-all
            duration-300
            md:-ml-12
            z-20
          "
                />

                <img
                    src={plan_your_lessons}
                    alt="Plan Your Lessons"
                    className="
            w-[280px]
            rounded-xl
            shadow-xl
            hover:scale-105
            transition-all
            duration-300
            md:-ml-12
            z-10
          "
                />

            </div>

            <div className="mt-[20px] mb-[20px]">
                <CTAButton active={true} linkto={"/signup"}>
                    <div>
                        Learn More</div>
                </CTAButton>
            </div>
        </div>
    );
};

export default LearninglanguageSection;