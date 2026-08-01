import React from "react";
import { FaArrowCircleRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import HighlightText from "../components/core/HomePage/HighlightText";
import CTAButton from "../components/core/HomePage/Button";
import Banner from "../assets/Images/banner.mp4";
import CodeBlocks from "../components/core/HomePage/CodeBlocks";
import { FaArrowRight } from "react-icons/fa";
import TimelineSection from '../components/core/HomePage/TimelineSection';
import LearningLanguageSection from '../components/core/HomePage/LearningLanguageSection';
import InstructorSection from '../components/core/HomePage/InstructorSection'
import Footer from "../components/common/Footer";
import ExploreMore from "../components/core/HomePage/ExploreMore"

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

            <ExploreMore />


            {/* Section 2 */}
            <div className='bg-white text-richblack-700'>
                <div className="homepage_bg h-[300px]">

                    <div className="w-11/12 max-w-maxContent flex flex-col items-center gap-5 mx-auto">
                        <div className="h-[100px]"></div>
                        <div className="flex flex-row gap-7 text-white">
                            <CTAButton active={true} linkto={"/signup"}>
                                <div className="flex items-center gap-3">
                                    Explore Full Catalog
                                    <FaArrowRight />
                                </div>

                            </CTAButton>
                            <CTAButton active={false} linkto={"/signup"}>
                                <div>
                                    Learn More
                                </div>
                            </CTAButton>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-white w-full">
                <div className="mx-auto w-11/12 max-w-maxContent flex flex-row items-start justify-between gap-20 px-16 py-35">
                    {/* Left Side */}
                    <div className="text-4xl text-black font-semibold w-50%">
                        Get the Skills you Need For a
                        <HighlightText text={"Job That Is In Demand"} />
                    </div>

                    {/* Right Side */}
                    <div className="flex flex-col gap-10 w-[40%] items-start">
                        <div className="text-[16px] text-black">
                            The Modern StudyNotaion is the dictates its own terms. Today, to be a competitive specialist requires more than professional skills.
                        </div>
                        <CTAButton active={true} linkto={"/signup"}>
                            <div>
                                Learn More
                            </div>
                        </CTAButton>
                    </div>

                </div>

                <TimelineSection />

                <LearningLanguageSection />


            </div>



            {/* Section 3 */}

            <div className="w-11/12 mx-auto max-w-maxContent flex flex-col items-center justify-between gap-8 bg-richblack-900 text-white ">
                <InstructorSection />

                <h2 className="text-center text-4xl font-semibold mt-10">
                    Review From Other Learners
                </h2>
            </div>


            {/* Footer */}

            <Footer />

        </div>
    );
};

export default Home;