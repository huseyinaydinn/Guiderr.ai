import { NavLinks } from "@/constant/constant";
import Link from "next/link";
import React from "react";
import { CgClose } from "react-icons/cg";

const MobileNav = ({ closeNav, showNav }) => {
    const navOpen = showNav ? "translate-x-0" : "translate-x-[-100%]";

    return (
        <div>
            {/* Overlay */}
            <div
                className={`${navOpen} fixed inset-0 z-[1002] h-screen w-full transform bg-black opacity-70 transition-all duration-500`}
            ></div>

            {/* Navlinks */}
            <div
                className={`${navOpen} fixed z-[1050] flex h-full w-[80%] transform flex-col items-start justify-center space-y-6 bg-[#22244C] text-white transition-all duration-500 delay-300 sm:w-[60%]`}
            >
                {NavLinks.map((link) => (
                    <Link key={link.id} href={link.url}>
                        <p className="ml-12 w-fit border-b-[1.5px] border-white pb-1 text-[20px] sm:text-[30px]">
                            {link.label}
                        </p>
                    </Link>
                ))}

                {/* Contact Us Button */}
                <button className="ml-12 h-12 w-[157px] cursor-pointer rounded-sm bg-[#4A90E2] px-6 py-3 text-center text-sm font-semibold text-white transition-all duration-200 hover:bg-[#357ABD]">
                    Contact Us
                </button>

                {/* Close Button */}
                <CgClose
                    onClick={closeNav}
                    className="absolute right-[1.4rem] top-[0.7rem] h-6 w-6 sm:h-8 sm:w-8"
                />
            </div>
        </div>
    );
};

export default MobileNav;