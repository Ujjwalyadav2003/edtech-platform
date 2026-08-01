import React from "react";

import Logo1 from "../../../assets/Timelinelogo/leadership-icon.svg";
import Logo2 from "../../../assets/Timelinelogo/job-responsibility-bag-hand-bold.svg";
import Logo3 from "../../../assets/Timelinelogo/flexible-gs.svg";
import Logo4 from "../../../assets/Timelinelogo/report-problem-filled.svg";
import timelineimage from "../../../assets/Images/young-woman-using-laptop-in-a-cafe-on-a-summer-terrace-free-video.jpg"


const timeline = [
    {
        Logo: Logo1,
        heading: "Leadership",
        Description: "Fully Committed To The Success Company",
    },
    {
        Logo: Logo2,
        heading: "Responsibility",
        Description: "Taking ownership of every project and task",
    },
    {
        Logo: Logo3,
        heading: "Flexibility",
        Description: "Adapting quickly to changing requirements",
    },
    {
        Logo: Logo4,
        heading: "Problem Solving",
        Description: "Finding effective solutions to challenges",
    },
];

function TimelineSection() {
    return (
        <div className="w-full flex flex-row items-center justify-between gap-16 py-20 px-20">

            {/* Left Side - Timeline */}
            <div className="flex flex-col gap-8 w-[45%]">
                {timeline.map((item, index) => (
                    <div key={index} className="flex items-center gap-5">
                        <div className="flex h-[52px] w-[52px] items-center justify-center rounded-full bg-white shadow-md">
                            <img
                                src={item.Logo}
                                alt={item.heading}
                                className="h-6 w-6"
                            />
                        </div>

                        <div>
                            <h3 className="text-lg font-semibold text-richblack-900">
                                {item.heading}
                            </h3>

                            <p className="text-richblack-600">
                                {item.Description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Right Side - Image */}
            <div className="w-[50%]">
                <img
                    src={timelineimage}
                    alt="timelineImage"
                    className="w-full rounded-xl shadow-[0_0_30px_rgba(59,130,246,0.25)] object-cover"
                />

                <div className="absolute bg-green-600 flex flex-row text-white uppercase py-10
                left-[50%] translate-x-[10%] translate-y-[-50%]
                ">
                    <div className="flex flex-row gap-5 items-center border-r border-caribbeangreen-300 px-7">
                        <p className="text-3xl font-bold">10</p>
                        <p className="bg-green-600 text-sm">years Of Experience</p>
                    </div>

                    <div className="flex gap-5 items-center px-7">
                        <p className="text-3xl font-bold">250</p>
                        <p className="bg-green-600 text-sm">Type Of Courses</p>

                    </div>


                </div>


            </div>

        </div>
    );
}

export default TimelineSection;