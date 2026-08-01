import React, { useState } from "react";
import { FiUpload, FiEye, FiTrash2 } from "react-icons/fi";

const Settings = () => {
    const [showCurrentPassword, setShowCurrentPassword] = useState(false);
    const [showNewPassword, setShowNewPassword] = useState(false);

    return (
        <div className="min-h-screen bg-richblack-900 text-white px-6 py-8">
            <div className="mx-auto max-w-4xl">

                {/* Heading */}
                <h1 className="mb-6 text-2xl font-semibold text-richblack-5">
                    Edit Profile
                </h1>

                {/* Profile Picture */}
                <div className="mb-6 rounded-lg border border-richblack-200 bg-richblack-400 p-5">
                    <div className="flex flex-col gap-4 md:flex-row md:items-center">
                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-pink-500 text-lg font-semibold">
                            LB
                        </div>

                        <div>
                            <p className="text-sm font-medium text-richblack-50">
                                Change Profile Picture
                            </p>

                            <div className="mt-3 flex gap-3">
                                <button className="rounded-md bg-richblack-700 px-4 py-2 text-xs font-medium transition-all hover:bg-richblack-600">
                                    Select
                                </button>

                                <button className="flex items-center gap-2 rounded-md bg-yellow-50 px-4 py-2 text-xs font-semibold text-black transition-all hover:scale-[1.02]">
                                    Upload
                                    <FiUpload size={14} />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Profile Information */}
                <div className="mb-6 rounded-lg border border-richblack-400 bg-richblack-400 p-5">
                    <h2 className="mb-5 text-base font-semibold text-richblack-5">
                        Profile Information
                    </h2>

                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">

                        <div>
                            <label className="mb-1 block text-xs font-medium text-richblack-100">
                                First Name
                            </label>
                            <input
                                type="text"
                                defaultValue="Ujjwal"
                                className="w-full rounded-md border border-richblack-600 bg-richblack-700 px-3 py-2 text-sm outline-none"
                            />
                        </div>

                        <div>
                            <label className="mb-1 block text-xs font-medium text-richblack-100">
                                Last Name
                            </label>
                            <input
                                type="text"
                                defaultValue="Yadav"
                                className="w-full rounded-md border border-richblack-600 bg-richblack-700 px-3 py-2 text-sm outline-none"
                            />
                        </div>

                        <div>
                            <label className="mb-1 block text-xs font-medium text-richblack-100">
                                Date Of Birth
                            </label>
                            <input
                                type="date"
                                className="w-full rounded-md border border-richblack-600 bg-richblack-700 px-3 py-2 text-sm outline-none"
                            />
                        </div>

                        <div>
                            <label className="mb-1 block text-xs font-medium text-richblack-100">
                                Gender
                            </label>

                            <select className="w-full rounded-md border border-richblack-600 bg-richblack-700 px-3 py-2 text-sm outline-none">
                                <option>Male</option>
                                <option>Female</option>
                                <option>Other</option>
                            </select>
                        </div>

                        <div>
                            <label className="mb-1 block text-xs font-medium text-richblack-100">
                                Contact Number
                            </label>
                            <input
                                type="text"
                                placeholder="Enter Contact Number"
                                className="w-full rounded-md border border-richblack-600 bg-richblack-700 px-3 py-2 text-sm outline-none"
                            />
                        </div>

                        <div>
                            <label className="mb-1 block text-xs font-medium text-richblack-100">
                                About
                            </label>
                            <input
                                type="text"
                                placeholder="Enter Bio Details"
                                className="w-full rounded-md border border-richblack-600 bg-richblack-700 px-3 py-2 text-sm outline-none"
                            />
                        </div>
                    </div>

                    <div className="mt-5 flex justify-end gap-3">
                        <button className="rounded-md bg-richblack-600 px-4 py-2 text-sm font-medium">
                            Cancel
                        </button>

                        <button className="rounded-md bg-yellow-50 px-4 py-2 text-sm font-medium text-black">
                            Save
                        </button>
                    </div>
                </div>

                {/* Password Section */}
                <div className="mb-6 rounded-lg border border-richblack-400 bg-richblack-400 p-5">
                    <h2 className="mb-5 text-base font-semibold text-richblack-5">
                        Password
                    </h2>

                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">

                        <div>
                            <label className="mb-1 block text-xs font-medium text-richblack-100">
                                Current Password
                            </label>

                            <div className="relative">
                                <input
                                    type={showCurrentPassword ? "text" : "password"}
                                    placeholder="Enter Current Password"
                                    className="w-full rounded-md border border-richblack-600 bg-richblack-700 px-3 py-2 pr-10 text-sm outline-none"
                                />

                                <button
                                    type="button"
                                    onClick={() =>
                                        setShowCurrentPassword(!showCurrentPassword)
                                    }
                                    className="absolute right-3 top-1/2 -translate-y-1/2"
                                >
                                    <FiEye size={16} />
                                </button>
                            </div>
                        </div>

                        <div>
                            <label className="mb-1 block text-xs font-medium text-richblack-100">
                                New Password
                            </label>

                            <div className="relative">
                                <input
                                    type={showNewPassword ? "text" : "password"}
                                    placeholder="Enter New Password"
                                    className="w-full rounded-md border border-richblack-600 bg-richblack-700 px-3 py-2 pr-10 text-sm outline-none"
                                />

                                <button
                                    type="button"
                                    onClick={() =>
                                        setShowNewPassword(!showNewPassword)
                                    }
                                    className="absolute right-3 top-1/2 -translate-y-1/2"
                                >
                                    <FiEye size={16} />
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="mt-5 flex justify-end gap-3">
                        <button className="rounded-md bg-richblack-600 px-4 py-2 text-sm font-medium">
                            Cancel
                        </button>

                        <button className="rounded-md bg-yellow-50 px-4 py-2 text-sm font-medium text-black">
                            Update
                        </button>
                    </div>
                </div>

                {/* Delete Account */}
                <div className="rounded-lg border border-pink-700 bg-pink-900/30 p-5">
                    <div className="flex gap-4">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-pink-800">
                            <FiTrash2 size={16} className="text-pink-100" />
                        </div>

                        <div>
                            <h3 className="text-base font-semibold text-pink-50">
                                Delete Account
                            </h3>

                            <p className="mt-2 text-xs text-pink-100">
                                Would you like to delete your account?
                            </p>

                            <p className="text-xs text-pink-100">
                                This account may contain paid courses. Deleting your
                                account is permanent and will remove all associated
                                data.
                            </p>

                            <button className="mt-3 text-xs italic text-pink-300 underline">
                                I want to delete my account
                            </button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Settings;