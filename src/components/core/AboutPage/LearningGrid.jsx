import React from "react";

const LearningGrid = () => {
    return (
        <div className="w-11/12 max-w-maxContent mx-auto py-16">
            <div className="grid lg:grid-cols-3 grid-cols-1">

                {/* Left Large Box */}
                <div className="bg-richblack-900 p-10 lg:col-span-1">
                    <h2 className="text-4xl font-bold text-white leading-tight">
                        World-Class Learning for
                        <br />
                        <span className="text-blue-100">
                            Anyone, Anywhere
                        </span>
                    </h2>

                    <p className="mt-5 text-richblack-300 text-sm">
                        StudyNotion partners with more than 275+ leading
                        universities and companies to bring flexible,
                        affordable, job-relevant online learning to
                        individuals and organizations worldwide.
                    </p>

                    <button className="mt-6 rounded-md bg-yellow-50 px-5 py-3 font-semibold text-richblack-900">
                        Learn More
                    </button>
                </div>

                {/* Right Grid */}
                <div className="lg:col-span-2 grid md:grid-cols-3 grid-cols-1">

                    <div className="bg-richblack-800 p-8 border border-richblack-700">
                        <h3 className="text-white font-semibold text-lg">
                            Curriculum Based on Industry Needs
                        </h3>

                        <p className="mt-4 text-richblack-300 text-sm">
                            Save time and money! The Belajar curriculum
                            is made to be easier to understand and in line
                            with industry needs.
                        </p>
                    </div>

                    <div className="bg-richblack-900 p-8 border border-richblack-700">
                        <h3 className="text-white font-semibold text-lg">
                            Our Learning Methods
                        </h3>

                        <p className="mt-4 text-richblack-300 text-sm">
                            StudyNotion partners with more than 275+
                            leading universities and companies.
                        </p>
                    </div>

                    <div className="bg-richblack-800 p-8 border border-richblack-700">
                        <h3 className="text-white font-semibold text-lg">
                            Certification
                        </h3>

                        <p className="mt-4 text-richblack-300 text-sm">
                            StudyNotion partners with more than 275+
                            leading universities and companies.
                        </p>
                    </div>

                    <div className="bg-richblack-900 p-8 border border-richblack-700">
                        <h3 className="text-white font-semibold text-lg">
                            Rating "Auto-grading"
                        </h3>

                        <p className="mt-4 text-richblack-300 text-sm">
                            StudyNotion partners with more than 275+
                            leading universities and companies.
                        </p>
                    </div>

                    <div className="bg-richblack-800 p-8 border border-richblack-700">
                        <h3 className="text-white font-semibold text-lg">
                            Ready to Work
                        </h3>

                        <p className="mt-4 text-richblack-300 text-sm">
                            StudyNotion partners with more than 275+
                            leading universities and companies.
                        </p>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default LearningGrid;