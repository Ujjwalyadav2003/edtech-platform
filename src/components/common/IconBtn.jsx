import React from "react";

const IconBtn = ({
    text,
    onclick,
    children,
    disabled,
    outline = false,
    customClasses = "",
    type = "button",
}) => {
    return (
        <button
            disabled={disabled}
            onClick={onclick}
            type={type}
            className={`flex items-center gap-x-2 rounded-md py-[8px] px-[20px] font-semibold
      ${outline
                    ? "border border-yellow-50 text-yellow-50"
                    : "bg-yellow-50 text-richblack-900"
                }
      ${customClasses}`}
        >
            {children ? (
                <>
                    <span>{text}</span>
                    {children}
                </>
            ) : (
                text
            )}
        </button>
    );
};

export default IconBtn;