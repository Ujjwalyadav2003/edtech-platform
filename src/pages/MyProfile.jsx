import { useSelector } from "react-redux";
import { FiEdit } from "react-icons/fi";

const MyProfile = () => {
    const { user } = useSelector((state) => state.profile);

    return (
        <div className="mx-auto w-full max-w-[720px] py-4 text-richblack-5">

            {/* Heading */}
            <h1 className="mb-5 text-lg font-semibold text-richblack-5">
                My Profile
            </h1>

            {/* Profile Card */}
            <div className="rounded-lg border border-richblack-700 bg-richblack-900 px-4 py-4">

                <div className="flex items-center justify-between">

                    <div className="flex items-center gap-3">

                        <img
                            src={user?.image}
                            alt="Profile"
                            className="h-12 w-12 rounded-full border border-richblack-600 object-cover"
                        />

                        <div>

                            <h2 className="text-sm font-semibold text-richblack-5">
                                {user?.firstName} {user?.lastName}
                            </h2>

                            <p className="mt-0.5 text-xs text-richblack-400">
                                {user?.email}
                            </p>

                        </div>

                    </div>

                    <button className="flex items-center gap-1 rounded-md bg-yellow-50 px-3 py-1.5 text-xs font-medium text-richblack-900 transition-all duration-200 hover:scale-95">

                        <FiEdit size={14} />
                        Edit

                    </button>

                </div>

            </div>

            {/* About */}
            <div className="mt-4 rounded-lg border border-richblack-700 bg-richblack-900 px-4 py-4">

                <div className="flex items-center justify-between">

                    <h2 className="text-sm font-semibold text-richblack-5">
                        About
                    </h2>

                    <button className="flex items-center gap-1 rounded-md bg-yellow-50 px-3 py-1.5 text-xs font-medium text-richblack-900 transition-all duration-200 hover:scale-95">

                        <FiEdit size={14} />
                        Edit

                    </button>

                </div>

                <p className="mt-3 text-sm leading-6 text-richblack-300">

                    {user?.additionalDetails?.about ||
                        "Write something about yourself"}

                </p>

            </div>

            {/* Personal Details */}
            <div className="mt-4 rounded-lg border border-richblack-700 bg-richblack-900 px-4 py-4">

                <div className="flex items-center justify-between">

                    <h2 className="text-sm font-semibold text-richblack-5">
                        Personal Details
                    </h2>

                    <button className="flex items-center gap-1 rounded-md bg-yellow-50 px-3 py-1.5 text-xs font-medium text-richblack-900 transition-all duration-200 hover:scale-95">

                        <FiEdit size={14} />
                        Edit

                    </button>

                </div>

                <div className="mt-5 grid grid-cols-2 gap-x-8 gap-y-4">

                    <Detail title="First Name" value={user?.firstName} />

                    <Detail title="Last Name" value={user?.lastName} />

                    <Detail title="Email" value={user?.email} />

                    <Detail
                        title="Phone Number"
                        value={
                            user?.additionalDetails?.contactNumber ||
                            "Add Contact Number"
                        }
                    />

                    <Detail
                        title="Gender"
                        value={
                            user?.additionalDetails?.gender ||
                            "Add Gender"
                        }
                    />

                    <Detail
                        title="Date Of Birth"
                        value={
                            user?.additionalDetails?.dateOfBirth ||
                            "Add Date Of Birth"
                        }
                    />

                </div>

            </div>

        </div>
    );
};

function Detail({ title, value }) {
    return (
        <div className="border-b border-richblack-700 pb-2">

            <p className="text-[11px] text-richblack-400">
                {title}
            </p>

            <p className="mt-1 text-sm font-medium text-richblack-25">
                {value}
            </p>

        </div>
    );
}

export default MyProfile;