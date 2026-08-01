import React from "react";

const Stats = [
    {
        count: "5K",
        label: "Active Students",
    },
    {
        count: "10+",
        label: "Mentors",
    },
    {
        count: "200+",
        label: "Courses",
    },
    {
        count: "50+",
        label: "Awards",
    },
];

const StatsComponent = () => {
    return (
        <section className="bg-richblack-800 py-20">
            <div className="mx-auto w-11/12 max-w-maxContent">

                <div className="grid grid-cols-2 gap-6 md:grid-cols-4">

                    {Stats.map((data, index) => (
                        <div
                            key={index}
                            className="rounded-xl border border-richblack-700 bg-richblack-900 p-8 text-center transition-all duration-300 hover:-translate-y-2 hover:border-yellow-50"
                        >
                            <h1 className="mb-2 text-4xl font-bold text-yellow-50">
                                {data.count}
                            </h1>

                            <h2 className="text-richblack-300">
                                {data.label}
                            </h2>
                        </div>
                    ))}

                </div>

            </div>
        </section>
    );
};

export default StatsComponent;