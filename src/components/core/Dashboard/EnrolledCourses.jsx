import React, { useCallback, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import ProgressBar from "@ramonak/react-progress-bar";
import { getUserEnrolledCourses } from "../../../services/operations/profileAPI";

const EnrolledCourses = () => {
    const { token } = useSelector((state) => state.auth);

    const [enrolledCourses, setEnrolledCourses] = useState(null);

    const fetchEnrolledCourses = useCallback(async () => {
        try {
            const response = await getUserEnrolledCourses(token);
            setEnrolledCourses(response);
        } catch (error) {
            console.log("Unable to Fetch Enrolled Courses");
        }
    }, [token]);

    useEffect(() => {
        fetchEnrolledCourses();
    }, [fetchEnrolledCourses]);

    return (
        <div className="text-richblack-5">
            <h1 className="mb-6 text-2xl font-semibold">
                Enrolled Courses
            </h1>

            {!enrolledCourses ? (
                <div>Loading...</div>
            ) : enrolledCourses.length === 0 ? (
                <p>You have not enrolled in any course yet.</p>
            ) : (
                <div className="rounded-xl border border-richblack-700">
                    {/* Header */}
                    <div className="grid grid-cols-12 border-b border-richblack-700 bg-richblack-800 p-4">
                        <p className="col-span-7">Course Name</p>
                        <p className="col-span-2">Duration</p>
                        <p className="col-span-3">Progress</p>
                    </div>

                    {/* Courses */}
                    {enrolledCourses.map((course, index) => (
                        <div
                            key={index}
                            className="grid grid-cols-12 items-center border-b border-richblack-700 p-4"
                        >
                            {/* Course Details */}
                            <div className="col-span-7 flex gap-4">
                                <img
                                    src={course.thumbnail}
                                    alt={course.courseName}
                                    className="h-16 w-24 rounded-md object-cover"
                                />

                                <div>
                                    <p className="font-semibold text-richblack-5">
                                        {course.courseName}
                                    </p>

                                    <p className="mt-1 text-sm text-richblack-300">
                                        {course.courseDescription}
                                    </p>
                                </div>
                            </div>

                            {/* Duration */}
                            <div className="col-span-2">
                                {course?.totalDuration || "N/A"}
                            </div>

                            {/* Progress */}
                            <div className="col-span-3">
                                <p className="mb-2 text-sm">
                                    Progress: {course.progressPercentage || 0}%
                                </p>

                                <ProgressBar
                                    completed={course.progressPercentage || 0}
                                    height="8px"
                                    isLabelVisible={false}
                                />
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default EnrolledCourses;