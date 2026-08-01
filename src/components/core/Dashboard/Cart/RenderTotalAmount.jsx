import React from "react";
import { useSelector } from "react-redux";
import IconBtn from "../../../common/IconBtn";

const RenderTotalAmount = () => {
    const { total, cart } = useSelector((state) => state.cart);

    const handleBuyCourse = () => {
        const courses = cart.map((course) => course._id);

        console.log("Bought these courses:", courses);

        // TODO: Integrate Payment Gateway
    };

    return (
        <div className="min-w-[280px] rounded-lg border border-richblack-700 bg-richblack-800 p-6">
            <p className="text-sm text-richblack-300">
                Total:
            </p>

            <p className="mt-1 text-3xl font-semibold text-yellow-50">
                ₹ {total}
            </p>

            <div className="mt-6">
                <IconBtn
                    text="Buy Now"
                    onclick={handleBuyCourse}
                    customClasses="w-full justify-center"
                />
            </div>
        </div>
    );
};

export default RenderTotalAmount;