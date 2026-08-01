import React from "react";
import Template from "../components/core/Auth/Template";

import signupImg from "../assets/Images/sign-up-concept-illustration_114360-7965.webp";
import frameImg from "../assets/Images/loginimage.webp";

const Signup = () => {
    return (
        <Template
            title="Join the millions learning to code with StudyNotion for free"
            description1="Build skills for today, tomorrow, and beyond."
            description2="Education to future-proof your career."
            image={signupImg}
            frameImage={frameImg}
            formType="signup"
        />
    );
};

export default Signup;