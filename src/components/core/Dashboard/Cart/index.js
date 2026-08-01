import { useSelector } from "react-redux";
import RenderCartCourses from "./RenderCartCourses";
import RenderTotalAmount from "./RenderTotalAmount";

export default function Cart() {
    const { total, totalItems } = useSelector(
        (state) => state.cart
    );

    return (
        <div className="text-richblack-5">
            <h1 className="text-3xl font-medium mb-2">
                Your Cart
            </h1>

            <p className="border-b border-richblack-700 pb-2 text-richblack-400">
                {totalItems} Courses in Cart
            </p>

            {total > 0 ? (
                <div className="mt-8 flex flex-col-reverse gap-10 lg:flex-row">
                    <RenderCartCourses />
                    <RenderTotalAmount />

                </div>
            ) : (
                <p className="mt-14 text-center text-3xl text-richblack-100">
                    Your Cart is Empty
                </p>
            )}
        </div>
    );
}