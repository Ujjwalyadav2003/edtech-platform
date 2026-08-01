import React from "react";
import HighlightText from "../components/core/HomePage/HighlightText";

import BannerImage1 from "../assets/Images/young-woman-using-laptop-in-a-cafe-on-a-summer-terrace-free-video.jpg";
import BannerImage2 from "../assets/Images/young-woman-comparing-with-two-things.webp";
import BannerImage3 from "../assets/Images/section3.webp";
import Quote from "../components/core/AboutPage/Quote";
import FoundingStory from "../assets/Images/a-man-touches-a-virtual-login-interface-with-username-and-password-fields-online-security.webp"
import StatsComponent from "../components/core/AboutPage/Stats";
import LearningGrid from "../components/core/AboutPage/LearningGrid";
import ContactFormSection from "../components/core/AboutPage/ContactFormSection";
import Footer from "../components/common/Footer"

const About = () => {
    return (
        <div className="mt-[100px] text-white">
            {/* Section 1 */}
            <section className="mx-auto w-11/12 max-w-maxContent py-20 text-white">
                <div className="flex flex-col items-center gap-16">

                    {/* Heading Section */}
                    <div className="mx-auto max-w-[900px] text-center">
                        <h1 className="text-4xl font-bold leading-tight md:text-5xl">
                            Driving Innovation in Online Education for a{" "}
                            <HighlightText text={"Brighter Future"} />
                        </h1>

                        <p className="mx-auto mt-6 max-w-[800px] text-lg text-richblack-300">
                            StudyNotion is at the forefront of driving innovation in online
                            education. We're passionate about creating a brighter future by
                            offering cutting-edge courses, leveraging emerging technologies,
                            and nurturing a vibrant learning community.
                        </p>
                    </div>

                    {/* Images Section */}
                    <div className="grid grid-cols-1 gap-6 md:grid-cols-3">

                        <div className="overflow-hidden rounded-xl shadow-[0_0_30px_rgba(255,255,255,0.08)] transition-all duration-300 hover:scale-105">
                            <img
                                src={BannerImage1}
                                alt="Banner 1"
                                className="h-[250px] w-full object-cover"
                            />
                        </div>

                        <div className="overflow-hidden rounded-xl shadow-[0_0_30px_rgba(255,255,255,0.08)] transition-all duration-300 hover:scale-105">
                            <img
                                src={BannerImage2}
                                alt="Banner 2"
                                className="h-[250px] w-full object-cover"
                            />
                        </div>

                        <div className="overflow-hidden rounded-xl shadow-[0_0_30px_rgba(255,255,255,0.08)] transition-all duration-300 hover:scale-105">
                            <img
                                src={BannerImage3}
                                alt="Banner 3"
                                className="h-[250px] w-full object-cover"
                            />
                        </div>

                    </div>

                    {/* Bottom Gradient Line */}
                    <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-richblack-500 to-transparent"></div>

                </div>
            </section>


            {/* Section 2 */}
            <div>
                <Quote />
            </div>

            {/* Section 3 */}
            <section className="mx-auto w-11/12 max-w-maxContent py-24 text-white">

                <div className="flex flex-col gap-24">

                    {/* Founding Story Section */}
                    <div className="grid items-center gap-12 lg:grid-cols-2">

                        {/* Left Content */}
                        <div>
                            <h1 className="mb-6 text-4xl font-bold bg-gradient-to-r from-pink-400 to-yellow-50 bg-clip-text text-transparent">
                                Our Founding Story
                            </h1>

                            <p className="mb-5 text-richblack-300 leading-8">
                                Our e-learning platform was born out of a shared vision and
                                passion for transforming education. It all began with a group
                                of educators, technologists, and lifelong learners who
                                recognized the need for accessible, flexible, and high-quality
                                learning opportunities in a rapidly evolving digital world.
                            </p>

                            <p className="text-richblack-300 leading-8">
                                As experienced educators ourselves, we witnessed firsthand the
                                limitations and challenges of traditional education systems.
                                We believed that education should not be confined to the walls
                                of a classroom or restricted by geographical boundaries.
                                We envisioned a platform that could bridge these gaps and
                                empower individuals from all walks of life to unlock their
                                full potential.
                            </p>
                        </div>

                        {/* Right Image */}
                        <div className="relative">
                            <div className="absolute -inset-4 rounded-2xl bg-gradient-to-r from-pink-500 via-yellow-400 to-blue-500 opacity-30 blur-2xl"></div>

                            <img
                                src={FoundingStory}
                                alt="Founding Story"
                                className="relative rounded-2xl shadow-[0_0_40px_rgba(255,255,255,0.08)]"
                            />
                        </div>

                    </div>

                    {/* Divider */}
                    <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-richblack-500 to-transparent"></div>

                    {/* Vision & Mission Section */}
                    <div className="grid gap-12 lg:grid-cols-2">

                        {/* Vision */}
                        <div className="rounded-2xl border border-richblack-700 bg-richblack-800 p-8 transition-all duration-300 hover:scale-[1.02]">

                            <h1 className="mb-5 text-4xl font-bold bg-gradient-to-r from-blue-300 to-cyan-300 bg-clip-text text-transparent">
                                Our Vision
                            </h1>

                            <p className="text-richblack-300 leading-8">
                                With this vision in mind, we set out on a journey to create an
                                e-learning platform that would revolutionize the way people
                                learn. Our team of dedicated experts worked tirelessly to
                                develop a robust and intuitive platform that combines
                                cutting-edge technology with engaging content, fostering a
                                dynamic and interactive learning experience.
                            </p>

                        </div>

                        {/* Mission */}
                        <div className="rounded-2xl border border-richblack-700 bg-richblack-800 p-8 transition-all duration-300 hover:scale-[1.02]">

                            <h1 className="mb-5 text-4xl font-bold bg-gradient-to-r from-yellow-100 to-yellow-300 bg-clip-text text-transparent">
                                Our Mission
                            </h1>

                            <p className="text-richblack-300 leading-8">
                                Our mission goes beyond just delivering courses online. We
                                wanted to create a vibrant community of learners, where
                                individuals can connect, collaborate, and learn from one
                                another. We believe that knowledge thrives in an environment
                                of sharing and dialogue, and we foster this spirit of
                                collaboration through forums, discussion boards, and
                                networking opportunities.
                            </p>

                        </div>

                    </div>

                </div>

            </section>

            {/* Section 4 */}
            <StatsComponent />

            {/* Section 5 */}
            <LearningGrid />
            <ContactFormSection />

            <section>
                <Footer />
            </section>
        </div>
    );
};

export default About;