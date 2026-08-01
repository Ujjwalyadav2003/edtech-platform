import React, { useState } from "react";

const ContactFormSection = () => {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        countryCode: "+91",
        phoneNo: "",
        message: "",
    });

    const changeHandler = (e) => {
        setFormData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };

    const submitHandler = (e) => {
        e.preventDefault();

        console.log(formData);

        alert("Message Sent Successfully!");

        setFormData({
            firstName: "",
            lastName: "",
            email: "",
            countryCode: "+91",
            phoneNo: "",
            message: "",
        });
    };

    return (
        <div className="mx-auto w-11/12 max-w-[700px] py-16">
            <div className="text-center">
                <h2 className="text-4xl font-semibold text-richblack-5">
                    Get in Touch
                </h2>

                <p className="mt-3 text-richblack-300">
                    We'd love to hear from you. Please fill out this form.
                </p>
            </div>

            <form
                onSubmit={submitHandler}
                className="mt-12 flex flex-col gap-5"
            >
                {/* First Name & Last Name */}
                <div className="flex flex-col gap-5 md:flex-row">
                    <label className="w-full">
                        <p className="mb-2 text-sm text-richblack-5">
                            First Name
                        </p>

                        <input
                            type="text"
                            required
                            name="firstName"
                            value={formData.firstName}
                            onChange={changeHandler}
                            placeholder="Enter first name"
                            className="w-full rounded-lg bg-richblack-800 p-3 text-richblack-5 outline-none border border-richblack-700"
                        />
                    </label>

                    <label className="w-full">
                        <p className="mb-2 text-sm text-richblack-5">
                            Last Name
                        </p>

                        <input
                            type="text"
                            required
                            name="lastName"
                            value={formData.lastName}
                            onChange={changeHandler}
                            placeholder="Enter last name"
                            className="w-full rounded-lg bg-richblack-800 p-3 text-richblack-5 outline-none border border-richblack-700"
                        />
                    </label>
                </div>

                {/* Email */}
                <label>
                    <p className="mb-2 text-sm text-richblack-5">
                        Email Address
                    </p>

                    <input
                        type="email"
                        required
                        name="email"
                        value={formData.email}
                        onChange={changeHandler}
                        placeholder="Enter email address"
                        className="w-full rounded-lg bg-richblack-800 p-3 text-richblack-5 outline-none border border-richblack-700"
                    />
                </label>

                {/* Phone Number */}
                <label>
                    <p className="mb-2 text-sm text-richblack-5">
                        Phone Number
                    </p>

                    <div className="flex gap-3">
                        <select
                            name="countryCode"
                            value={formData.countryCode}
                            onChange={changeHandler}
                            className="w-[90px] rounded-lg bg-richblack-800 p-3 text-richblack-5 border border-richblack-700"
                        >
                            <option value="+91">+91</option>
                            <option value="+1">+1</option>
                            <option value="+44">+44</option>
                            <option value="+61">+61</option>
                        </select>

                        <input
                            type="tel"
                            required
                            name="phoneNo"
                            value={formData.phoneNo}
                            onChange={changeHandler}
                            placeholder="12345 67890"
                            className="w-full rounded-lg bg-richblack-800 p-3 text-richblack-5 outline-none border border-richblack-700"
                        />
                    </div>
                </label>

                {/* Message */}
                <label>
                    <p className="mb-2 text-sm text-richblack-5">
                        Message
                    </p>

                    <textarea
                        required
                        rows={7}
                        name="message"
                        value={formData.message}
                        onChange={changeHandler}
                        placeholder="Enter your message here"
                        className="w-full resize-none rounded-lg bg-richblack-800 p-3 text-richblack-5 outline-none border border-richblack-700"
                    />
                </label>

                {/* Submit Button */}
                <button
                    type="submit"
                    className="mt-2 rounded-lg bg-yellow-50 py-3 font-semibold text-richblack-900 transition-all duration-200 hover:scale-[0.98]"
                >
                    Send Message
                </button>
            </form>
        </div>
    );
};

export default ContactFormSection;