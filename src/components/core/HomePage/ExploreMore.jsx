import React, { useState } from "react";

export default function LearningSection() {
    const tabs = [
        "Free",
        "New to Coding",
        "Most Popular",
        "Skills Paths",
        "Career Paths",
    ];

    const coursesData = {
        Free: [
            {
                title: "Learn HTML",
                description:
                    "Learn the fundamentals of HTML and build structured web pages.",
                lessons: 8,
            },
            {
                title: "Learn CSS",
                description:
                    "Style websites with CSS including layouts, flexbox, and grid.",
                lessons: 8,
            },
            {
                title: "Responsive Web Design",
                description:
                    "Create websites that look great on all devices.",
                lessons: 8,
            },
        ],

        "New to Coding": [
            {
                title: "Programming Basics",
                description:
                    "Start your coding journey with core programming concepts.",
                lessons: 12,
            },
            {
                title: "JavaScript Fundamentals",
                description:
                    "Learn variables, loops, functions, and arrays.",
                lessons: 15,
            },
            {
                title: "Git & GitHub",
                description:
                    "Learn version control and collaboration workflows.",
                lessons: 10,
            },
        ],

        "Most Popular": [
            {
                title: "React JS",
                description:
                    "Build modern and interactive web applications.",
                lessons: 20,
            },
            {
                title: "Node.js",
                description:
                    "Create powerful backend APIs using JavaScript.",
                lessons: 18,
            },
            {
                title: "MongoDB",
                description:
                    "Learn database management with MongoDB.",
                lessons: 14,
            },
        ],

        "Skills Paths": [
            {
                title: "Frontend Developer",
                description:
                    "Master HTML, CSS, JavaScript, React and more.",
                lessons: 35,
            },
            {
                title: "Backend Developer",
                description:
                    "Learn Node.js, Express, MongoDB and APIs.",
                lessons: 30,
            },
            {
                title: "UI/UX Design",
                description:
                    "Design user-friendly and beautiful interfaces.",
                lessons: 22,
            },
        ],

        "Career Paths": [
            {
                title: "Full Stack Engineer",
                description:
                    "Become job-ready with frontend and backend skills.",
                lessons: 50,
            },
            {
                title: "Software Engineer",
                description:
                    "Master software development principles and tools.",
                lessons: 45,
            },
            {
                title: "DevOps Engineer",
                description:
                    "Learn deployment, CI/CD and cloud infrastructure.",
                lessons: 40,
            },
        ],
    };

    const [activeTab, setActiveTab] = useState("Free");

    return (
        <section className="bg-[#081220] py-16 px-6 text-white">
            <div className="max-w-7xl mx-auto">
                {/* Heading */}
                <div className="text-center mb-10">
                    <h2 className="text-4xl font-bold">
                        Unlock the Power of Code
                    </h2>

                    <p className="text-gray-400 mt-3">
                        Learn to build anything you can imagine
                    </p>
                </div>

                {/* Tabs */}
                <div className="flex justify-center flex-wrap gap-3 mb-12">
                    {tabs.map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`px-5 py-2 rounded-md text-sm font-medium transition-all duration-300
                ${activeTab === tab
                                    ? "bg-white text-black"
                                    : "bg-[#101b2d] text-gray-300 hover:bg-[#18263f]"
                                }`}
                        >
                            {tab}
                        </button>
                    ))}
                </div>

                {/* Cards */}
                <div className="grid md:grid-cols-3 gap-6">
                    {coursesData[activeTab].map((course, index) => (
                        <div
                            key={index}
                            className="bg-white text-black rounded-lg overflow-hidden shadow-lg hover:-translate-y-1 transition-all duration-300"
                        >
                            <div className="p-6">
                                <h3 className="text-xl font-semibold mb-3">
                                    {course.title}
                                </h3>

                                <p className="text-gray-600 text-sm leading-relaxed">
                                    {course.description}
                                </p>
                            </div>

                            <div className="border-t px-6 py-4 flex justify-between text-sm text-gray-500">
                                <span>Beginner</span>
                                <span>{course.lessons} Lessons</span>
                            </div>

                            <div className="h-1 bg-yellow-400"></div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}