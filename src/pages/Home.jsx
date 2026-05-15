import React from "react";
import { FaArrowCircleRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import HighlightText from "../components/core/HomePage/HighlightText";
import CTAButton from "../components/core/HomePage/Button";
import Banner from "../assets/Images/banner.mp4";
import CodeBlocks from "../components/core/HomePage/CodeBlocks";

const Home = () => {
    return (
        <div>
            {/* Section 1 */}
            <div className="relative mx-auto flex flex-col w-11/12 max-w-maxContent text-white items-center justify-between">

                {/* Top Button */}
                <Link to={"/signup"}>
                    <div className="group mt-16 p-1 mx-auto rounded-full bg-richblack-800 font-bold text-white transition-all duration-200 hover:scale-95">
                        <div className="flex items-center gap-2 rounded-full px-10 py-[2px] transition-all duration-200 group-hover:bg-richblack-900">
                            <p>Become an Instructor</p>
                            <FaArrowCircleRight />
                        </div>
                    </div>
                </Link>

                {/* Heading */}
                <div className="text-center text-4xl font-semibold mt-7">
                    Empower Your Future With{" "}
                    <HighlightText text={"Coding Skills"} />
                </div>

                {/* Subheading */}
                <div className="mt-4 w-[90%] text-center text-base leading-relaxed text-richblack-300">
                    With our online coding courses, you can learn at your own pace,
                    from anywhere in the world, and get access to a wealth of
                    resources, including hands-on projects, quizzes, and personalized
                    feedback from instructors.
                </div>

                {/* CTA Buttons */}
                <div className="flex gap-7 mt-8">
                    <CTAButton active={true} linkto={"/signup"}>
                        Learn More
                    </CTAButton>

                    <CTAButton active={false} linkto={"/login"}>
                        Book A Demo
                    </CTAButton>
                </div>

                {/* 🎥 Video Section */}
                <div className="mt-12 w-full flex justify-center">
                    <div className="w-[90%] max-w-[750px] aspect-video rounded-xl overflow-hidden shadow-[0_0_40px_rgba(59,130,246,0.3)]">
                        <video
                            className="w-full h-full object-cover"
                            muted
                            loop
                            autoPlay
                            playsInline
                        >
                            <source src={Banner} type="video/mp4" />
                        </video>
                    </div>
                </div>

                {/* Code Section 1 */}
                <div className="w-full">

                    {/* FIXED: position prop */}
                    <CodeBlocks
                        position={"lg:flex-row flex-col"}
                        heading={
                            <div className="text-4xl font-semibold">
                                Unlock Your{" "}
                                <HighlightText text={"Coding Potential"} />{" "}
                                With Our Online Course
                            </div>
                        }
                        subheading={
                            "Our Courses Designed and taught by Industry experts who have years of Experience"
                        }
                        ctabtn1={{
                            btnText: "Try it Yourself",
                            linkto: "/signup",
                            active: true,
                        }}
                        ctabtn2={{
                            btnText: "Learn More",
                            linkto: "/login",
                            active: false,
                        }}
                        codeblock={`<!DOCTYPE html>
<html>
<head>
<title>Example</title>
<link rel="stylesheet">
</head>
<body>
<h1>Hello World</h1>
</body>
</html>`}
                        codeColor={"text-yellow-400"}
                    />
                </div>


                {/* Code Section 2 */}
                <div className="w-full">

                    {/* FIXED: position prop */}
                    <CodeBlocks
                        position={"lg:flex-row-reverse"}
                        heading={
                            <div className="text-4xl font-semibold">
                                Start  {" "}
                                <HighlightText text={"Coding In Seconds"} />{" "}

                            </div>
                        }
                        subheading={
                            "Go Ahead give it Try. Our Hands on learning Environment means you'll be writing real code from your very first lesson"
                        }
                        ctabtn1={{
                            btnText: "Continue Lesson",
                            linkto: "/signup",
                            active: true,
                        }}
                        ctabtn2={{
                            btnText: "Learn More",
                            linkto: "/login",
                            active: false,
                        }}
                        codeblock={`<!DOCTYPE html>
<html>
<head>
<title>Example</title>
<link rel="stylesheet">
</head>
<body>
<h1>Hello World</h1>
</body>
</html>`}
                        codeColor={"text-yellow-400"}
                    />
                </div>


            </div>

            {/* Section 2 */}
            {/* Section 3 */}
            {/* Footer */}
        </div>
    );
};

export default Home;