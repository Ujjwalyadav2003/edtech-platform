import { toast } from "react-hot-toast";
import { apiConnector } from "../apiconnector";
import { profileEndpoints } from "../apis";

const {
    GET_USER_ENROLLED_COURSES_API,
    GET_USER_DETAILS_API,
} = profileEndpoints;

// ================= GET USER DETAILS =================

export const getUserDetails = async (token) => {
    let result = null;

    try {
        const response = await apiConnector(
            "GET",
            GET_USER_DETAILS_API,
            null,
            {
                Authorization: `Bearer ${token}`,
            }
        );

        result = response?.data?.user;
    } catch (error) {
        console.log("GET USER DETAILS ERROR:", error);
    }

    return result;
};

// ================= GET ENROLLED COURSES =================

export const getUserEnrolledCourses = async (token) => {
    let result = [];

    try {
        const response = await apiConnector(
            "GET",
            GET_USER_ENROLLED_COURSES_API,
            null,
            {
                Authorization: `Bearer ${token}`,
            }
        );

        console.log(
            "ENROLLED COURSES RESPONSE:",
            response
        );

        result = response?.data?.data || [];
    } catch (error) {
        console.log(
            "GET ENROLLED COURSES ERROR:",
            error
        );

        toast.error("Could not fetch enrolled courses");
    }

    return result;
};