import React from "react";
import {
    PieChart,
    Pie,
    Cell,
    Tooltip,
    ResponsiveContainer,
} from "recharts";

const InstructorDashboard = () => {
    const chartData = [
        {
            name: "My Course",
            value: 15,
        },
        {
            name: "React Mastery",
            value: 8,
        },
        {
            name: "JavaScript",
            value: 5,
        },
    ];

    const courses = [
        {
            id: 1,
            title: "My Course",
            students: 15,
            revenue: 671,
            thumbnail:
                "https://images.unsplash.com/photo-1516321318423-f06f85e504b3",
        },
        {
            id: 2,
            title: "Master Assembly Language",
            students: 10,
            revenue: 534,
            thumbnail:
                "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
        },
        {
            id: 3,
            title: "React Complete Guide",
            students: 20,
            revenue: 850,
            thumbnail:
                "https://images.unsplash.com/photo-1555066931-4365d14bab8c",
        },
    ];

    const COLORS = ["#06B6D4", "#A855F7", "#EC4899"];

    return (
        <div className="text-white p-6">

            {/* Header */}
            <div className="mb-8">
                <h1 className="text-3xl font-bold">
                    Hi Ujjwal 👋
                </h1>

                <p className="text-richblack-300 mt-2">
                    Let's start something new
                </p>
            </div>

            {/* Top Section */}
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-5">

                {/* Chart */}
                <div className="lg:col-span-3 bg-richblack-800 rounded-xl p-5">

                    <div className="flex gap-8 mb-4">
                        <button className="text-yellow-50 font-semibold">
                            Students
                        </button>

                        <button className="text-richblack-300">
                            Income
                        </button>
                    </div>

                    <div className="h-[320px]">
                        <ResponsiveContainer width="100%" height="100%">
                            <PieChart>
                                <Pie
                                    data={chartData}
                                    dataKey="value"
                                    outerRadius={110}
                                    label
                                >
                                    {chartData.map((entry, index) => (
                                        <Cell
                                            key={index}
                                            fill={COLORS[index % COLORS.length]}
                                        />
                                    ))}
                                </Pie>

                                <Tooltip />
                            </PieChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                {/* Stats */}
                <div className="bg-richblack-800 rounded-xl p-5">

                    <h2 className="text-lg font-semibold mb-5">
                        Statistics
                    </h2>

                    <div className="space-y-5">

                        <div>
                            <p className="text-richblack-300">
                                Total Courses
                            </p>

                            <h3 className="text-3xl font-bold">
                                3
                            </h3>
                        </div>

                        <div>
                            <p className="text-richblack-300">
                                Total Students
                            </p>

                            <h3 className="text-3xl font-bold">
                                20
                            </h3>
                        </div>

                        <div>
                            <p className="text-richblack-300">
                                Total Income
                            </p>

                            <h3 className="text-3xl font-bold">
                                ₹15065
                            </h3>
                        </div>

                    </div>
                </div>

            </div>

            {/* Courses */}
            <div className="mt-8 bg-richblack-800 rounded-xl p-5">

                <div className="flex items-center justify-between mb-5">
                    <h2 className="text-xl font-semibold">
                        Your Courses
                    </h2>

                    <button className="text-yellow-50 font-semibold">
                        View All
                    </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-5">

                    {courses.map((course) => (
                        <div
                            key={course.id}
                            className="rounded-lg overflow-hidden bg-richblack-700"
                        >
                            <img
                                src={course.thumbnail}
                                alt={course.title}
                                className="h-40 w-full object-cover"
                            />

                            <div className="p-3">
                                <h3 className="font-semibold">
                                    {course.title}
                                </h3>

                                <p className="text-sm text-richblack-300 mt-1">
                                    {course.students} Students | ₹ {course.revenue}
                                </p>
                            </div>
                        </div>
                    ))}

                </div>

            </div>

        </div>
    );
};

export default InstructorDashboard;