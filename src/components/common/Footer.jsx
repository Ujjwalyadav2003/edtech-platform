import React from "react";
import { Link } from "react-router-dom";
import {
    FaGoogle,
    FaTwitter,
    FaYoutube,
    FaFacebook,
} from "react-icons/fa";

const Footer = () => {
    return (
        <div className="bg-richblack-900 text-richblack-400">
            <div className="w-11/12 max-w-maxContent mx-auto py-14">

                {/* Top Section */}
                <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_1fr_1fr_1fr_1fr] gap-10 border-b border-richblack-700 pb-10">

                    {/* StudyNotion */}
                    <div>
                        <h2 className="text-white text-2xl font-bold mb-4">
                            StudyNotion
                        </h2>

                        <h3 className="text-white font-semibold mb-3">Company</h3>

                        <div className="flex flex-col gap-2 text-sm">
                            <Link to="/">About</Link>
                            <Link to="/">Careers</Link>
                            <Link to="/">Affiliates</Link>
                        </div>

                        <div className="flex gap-4 mt-5 text-lg">
                            <FaGoogle />
                            <FaTwitter />
                            <FaYoutube />
                            <FaFacebook />
                        </div>

                        <h3 className="text-white font-semibold mt-8 mb-3">
                            Support
                        </h3>

                        <Link to="/" className="text-sm">
                            Help Center
                        </Link>
                    </div>

                    {/* Resources */}
                    <div>
                        <h3 className="text-white font-semibold mb-4">
                            Resources
                        </h3>

                        <div className="flex flex-col gap-2 text-sm">
                            <Link to="/">Articles</Link>
                            <Link to="/">Blog</Link>
                            <Link to="/">Chart Sheet</Link>
                            <Link to="/">Code Challenges</Link>
                            <Link to="/">Docs</Link>
                            <Link to="/">Projects</Link>
                            <Link to="/">Videos</Link>
                            <Link to="/">Workspaces</Link>
                        </div>
                    </div>

                    {/* Plans */}
                    <div>
                        <h3 className="text-white font-semibold mb-4">
                            Plans
                        </h3>

                        <div className="flex flex-col gap-2 text-sm">
                            <Link to="/">Paid Memberships</Link>
                            <Link to="/">For Students</Link>
                            <Link to="/">Business Solutions</Link>
                        </div>

                        <h3 className="text-white font-semibold mt-8 mb-4">
                            Community
                        </h3>

                        <div className="flex flex-col gap-2 text-sm">
                            <Link to="/">Forums</Link>
                            <Link to="/">Chapters</Link>
                            <Link to="/">Events</Link>
                        </div>
                    </div>

                    {/* Subjects */}
                    <div>
                        <h3 className="text-white font-semibold mb-4">
                            Subjects
                        </h3>

                        <div className="flex flex-col gap-2 text-sm">
                            <Link to="/">AI</Link>
                            <Link to="/">Cloud Computing</Link>
                            <Link to="/">Code Foundations</Link>
                            <Link to="/">Computer Science</Link>
                            <Link to="/">Cybersecurity</Link>
                            <Link to="/">Data Analytics</Link>
                            <Link to="/">Data Science</Link>
                            <Link to="/">DevOps</Link>
                            <Link to="/">Machine Learning</Link>
                            <Link to="/">Web Development</Link>
                        </div>
                    </div>

                    {/* Languages */}
                    <div>
                        <h3 className="text-white font-semibold mb-4">
                            Languages
                        </h3>

                        <div className="flex flex-col gap-2 text-sm">
                            <Link to="/">Bash</Link>
                            <Link to="/">C++</Link>
                            <Link to="/">C</Link>
                            <Link to="/">Go</Link>
                            <Link to="/">HTML & CSS</Link>
                            <Link to="/">Java</Link>
                            <Link to="/">JavaScript</Link>
                            <Link to="/">Python</Link>
                            <Link to="/">SQL</Link>
                            <Link to="/">Swift</Link>
                        </div>
                    </div>

                </div>

                {/* Bottom Footer */}
                <div className="flex flex-col lg:flex-row justify-between items-center pt-6 gap-4">

                    <div className="flex gap-4 text-sm">
                        <Link to="/">Privacy Policy</Link>

                        <span>|</span>

                        <Link to="/">Cookie Policy</Link>

                        <span>|</span>

                        <Link to="/">Terms</Link>
                    </div>

                    <div className="text-sm">
                        Made with ❤️ CodeHelp © 2026 StudyNotion
                    </div>

                </div>

            </div>
        </div>
    );
};

export default Footer;