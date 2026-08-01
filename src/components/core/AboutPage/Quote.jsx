import React from "react";
import HighlightText from "../HomePage/HighlightText";

const Quote = () => {
    return (
        <section className="w-11/12 max-w-maxContent mx-auto py-20">
            <div className="mx-auto max-w-[900px] rounded-2xl border border-richblack-700 bg-richblack-800 p-10 shadow-[0_0_30px_rgba(255,255,255,0.03)]">

                <p className="text-center text-3xl font-semibold leading-[1.6] text-richblack-5 md:text-4xl">
                    We are passionate about revolutionizing the way we learn.
                    Our innovative platform{" "}
                    <HighlightText text={"combines technology"} />{" "}
                    <span className="text-yellow-50">
                        expertise
                    </span>
                    , and community to create an unparalleled educational
                    experience.
                </p>

                <div className="mt-8 flex justify-center">
                    <div className="h-1 w-24 rounded-full bg-gradient-to-r from-yellow-50 to-yellow-200"></div>
                </div>

                <p className="mx-auto mt-6 max-w-[700px] text-center text-richblack-300">
                    Empowering learners worldwide with cutting-edge courses,
                    industry-focused skills, and a collaborative environment
                    that inspires growth and innovation.
                </p>

            </div>
        </section>
    );
};

export default Quote;