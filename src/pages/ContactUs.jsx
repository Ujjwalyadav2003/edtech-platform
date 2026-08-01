import React from "react";
import Footer from "../components/common/Footer"
import {
    FaPhoneAlt,
    FaEnvelope,
    FaMapMarkerAlt,
} from "react-icons/fa";

import ContactFormSection from "../components/core/AboutPage/ContactFormSection";

const ContactUs = () => {
    return (
        <div className="relative overflow-hidden bg-richblack-900 text-white">

            {/* Background Blur Effects */}
            <div className="absolute left-0 top-20 h-[300px] w-[300px] rounded-full bg-blue-500/10 blur-[120px]" />
            <div className="absolute right-0 bottom-20 h-[300px] w-[300px] rounded-full bg-yellow-500/10 blur-[120px]" />

            <div className="relative mx-auto w-11/12 max-w-maxContent py-20">

                {/* Heading */}
                <div className="mx-auto mb-16 max-w-[800px] text-center">
                    <h1 className="text-5xl font-bold leading-tight">
                        Let's Build Something{" "}
                        <span className="bg-gradient-to-r from-yellow-50 via-yellow-100 to-yellow-200 bg-clip-text text-transparent">
                            Amazing Together
                        </span>
                    </h1>

                    <p className="mt-5 text-lg text-richblack-300">
                        Have questions, feedback, or a project idea? We'd love
                        to hear from you. Our team is ready to help.
                    </p>
                </div>

                {/* Main Content */}
                <div className="flex flex-col gap-10 lg:flex-row">

                    {/* Left Side */}
                    <div className="lg:w-[35%]">

                        {/* Contact Info */}
                        <div className="rounded-2xl border border-richblack-700 bg-richblack-800 p-8 shadow-xl">

                            {/* Email */}
                            <div className="group mb-8 flex gap-4 rounded-xl p-4 transition-all duration-300 hover:bg-richblack-700">

                                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-yellow-50 text-richblack-900">
                                    <FaEnvelope />
                                </div>

                                <div>
                                    <h3 className="font-semibold text-richblack-5">
                                        Email Us
                                    </h3>

                                    <p className="text-sm text-richblack-300">
                                        Our friendly team is here to help.
                                    </p>

                                    <p className="mt-1 text-yellow-50">
                                        support@studynotion.com
                                    </p>
                                </div>

                            </div>

                            {/* Visit */}
                            <div className="group mb-8 flex gap-4 rounded-xl p-4 transition-all duration-300 hover:bg-richblack-700">

                                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-yellow-50 text-richblack-900">
                                    <FaMapMarkerAlt />
                                </div>

                                <div>
                                    <h3 className="font-semibold text-richblack-5">
                                        Visit Us
                                    </h3>

                                    <p className="text-sm text-richblack-300">
                                        Come and say hello at our office.
                                    </p>

                                    <p className="mt-1 text-yellow-50">
                                        Greater Noida, Uttar Pradesh
                                    </p>
                                </div>

                            </div>

                            {/* Phone */}
                            <div className="group flex gap-4 rounded-xl p-4 transition-all duration-300 hover:bg-richblack-700">

                                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-yellow-50 text-richblack-900">
                                    <FaPhoneAlt />
                                </div>

                                <div>
                                    <h3 className="font-semibold text-richblack-5">
                                        Call Us
                                    </h3>

                                    <p className="text-sm text-richblack-300">
                                        Mon - Fri from 8 AM to 5 PM
                                    </p>

                                    <p className="mt-1 text-yellow-50">
                                        +91 9876543210
                                    </p>
                                </div>

                            </div>

                        </div>

                        {/* Stats */}
                        <div className="mt-8 grid grid-cols-2 gap-4">

                            <div className="rounded-xl border border-richblack-700 bg-richblack-800 p-5 text-center transition-all duration-300 hover:-translate-y-1 hover:border-yellow-50">
                                <h3 className="text-3xl font-bold text-yellow-50">
                                    5K+
                                </h3>
                                <p className="text-richblack-300">
                                    Students
                                </p>
                            </div>

                            <div className="rounded-xl border border-richblack-700 bg-richblack-800 p-5 text-center transition-all duration-300 hover:-translate-y-1 hover:border-yellow-50">
                                <h3 className="text-3xl font-bold text-yellow-50">
                                    200+
                                </h3>
                                <p className="text-richblack-300">
                                    Courses
                                </p>
                            </div>

                        </div>

                        {/* Why Choose Us */}
                        <div className="mt-8 rounded-2xl border border-richblack-700 bg-richblack-800 p-6 shadow-xl">

                            <h3 className="mb-5 text-xl font-semibold text-richblack-5">
                                Why Choose StudyNotion?
                            </h3>

                            <div className="space-y-4">

                                <div className="flex items-start gap-3">
                                    <div className="mt-2 h-2 w-2 rounded-full bg-yellow-50"></div>
                                    <p className="text-sm text-richblack-300">
                                        Learn from industry experts and experienced mentors.
                                    </p>
                                </div>

                                <div className="flex items-start gap-3">
                                    <div className="mt-2 h-2 w-2 rounded-full bg-yellow-50"></div>
                                    <p className="text-sm text-richblack-300">
                                        Access premium learning content anytime, anywhere.
                                    </p>
                                </div>

                                <div className="flex items-start gap-3">
                                    <div className="mt-2 h-2 w-2 rounded-full bg-yellow-50"></div>
                                    <p className="text-sm text-richblack-300">
                                        Hands-on projects to build real-world skills.
                                    </p>
                                </div>

                                <div className="flex items-start gap-3">
                                    <div className="mt-2 h-2 w-2 rounded-full bg-yellow-50"></div>
                                    <p className="text-sm text-richblack-300">
                                        Dedicated support team for every learner.
                                    </p>
                                </div>

                                <div className="flex items-start gap-3">
                                    <div className="mt-2 h-2 w-2 rounded-full bg-yellow-50"></div>
                                    <p className="text-sm text-richblack-300">
                                        Join a growing community of 5000+ active students.
                                    </p>
                                </div>

                                <div className="flex items-start gap-3">
                                    <div className="mt-2 h-2 w-2 rounded-full bg-yellow-50"></div>
                                    <p className="text-sm text-richblack-300">
                                        Flexible learning schedules designed for every learner.
                                    </p>
                                </div>

                                <div className="flex items-start gap-3">
                                    <div className="mt-2 h-2 w-2 rounded-full bg-yellow-50"></div>
                                    <p className="text-sm text-richblack-300">
                                        Industry-recognized certificates to boost your career growth.
                                    </p>
                                </div>

                                <div className="flex items-start gap-3">
                                    <div className="mt-2 h-2 w-2 rounded-full bg-yellow-50"></div>
                                    <p className="text-sm text-richblack-300">
                                        Real-time coding practice and interactive learning experience.
                                    </p>
                                </div>

                            </div>

                        </div>

                    </div>

                    {/* Right Side */}
                    <div className="rounded-2xl border border-richblack-700 bg-richblack-800 p-5 shadow-xl lg:w-[70%]">

                        <h2 className="text-3xl font-bold text-richblack-5">
                            Get in Touch
                        </h2>

                        <p className="mt-2 text-sm text-richblack-300">
                            Fill out the form below and we'll get back to you as soon as possible.
                        </p>

                        <div className="mt-4">
                            <ContactFormSection />
                        </div>





                    </div>


                </div>

            </div>
            <div>
                <Footer />
            </div>
        </div>
    );
};

export default ContactUs;