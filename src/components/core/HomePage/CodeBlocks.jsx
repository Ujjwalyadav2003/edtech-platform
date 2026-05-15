import React from "react";
import CTAButton from "../HomePage/Button";
import { FaArrowRight } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";

const CodeBlocks = ({
    position,
    heading,
    subheading,
    ctabtn1,
    ctabtn2,
    codeblock,
    backgroundGradient,
    codeColor,
}) => {

    // 🔥 Split code into yellow + animated parts
    const lines = codeblock.split("\n");

    let splitIndex = lines.findIndex(line => line.includes("<html"));
    if (splitIndex === -1) splitIndex = 0;

    const yellowPart = lines.slice(0, splitIndex + 1).join("\n");
    const restCode = lines.slice(splitIndex + 1).join("\n");

    return (
        <div className="w-11/12 max-w-maxContent mx-auto">

            <div className={`flex ${position} items-center justify-between gap-12 my-20`}>

                {/* Left Section */}
                <div className="w-full lg:w-[50%] flex flex-col gap-6">
                    {heading}

                    <div className="text-richblack-300 font-medium text-base leading-relaxed">
                        {subheading}
                    </div>

                    <div className="flex gap-5 mt-4">
                        {/* Button 1 */}
                        <CTAButton
                            active={ctabtn1.active}
                            linkto={ctabtn1.linkto}
                        >
                            <div className="flex gap-2 items-center">
                                {ctabtn1.btnText}
                                <FaArrowRight />
                            </div>
                        </CTAButton>

                        {/* Button 2 */}
                        <CTAButton
                            active={ctabtn2.active}
                            linkto={ctabtn2.linkto}
                        >
                            {ctabtn2.btnText}
                        </CTAButton>
                    </div>
                </div>

                {/* Right Code Block */}
                <div className="w-full lg:w-[50%] flex justify-center">

                    <div className="flex w-full max-w-[450px] bg-richblack-900 rounded-xl border border-richblack-700 shadow-[0_10px_30px_rgba(0,0,0,0.6)] overflow-hidden">

                        {/* Line Numbers */}
                        <div className="bg-richblack-800 text-richblack-400 px-4 py-5 flex flex-col text-sm font-mono select-none">
                            {Array.from({ length: 10 }, (_, i) => (
                                <span key={i} className="leading-6">
                                    {i + 1}
                                </span>
                            ))}
                        </div>

                        {/* Code */}
                        <div className="flex-1 p-5 font-mono text-sm overflow-hidden">

                            {/* 🟡 Yellow Part */}
                            <span className="text-yellow-400 block whitespace-pre-line">
                                {yellowPart}
                            </span>

                            {/* ⌨️ Animated Part */}
                            <TypeAnimation
                                sequence={[restCode, 2000, ""]}
                                repeat={Infinity}
                                cursor={true}
                                style={{
                                    whiteSpace: "pre-line",
                                    display: "block",
                                }}
                                className={`${codeColor}`}
                            />

                        </div>

                    </div>

                </div>
            </div>
        </div>
    );
};

export default CodeBlocks;