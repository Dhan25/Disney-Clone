import React, { useState } from 'react';
import logo from "../assets/images/logo.png";
import HeaderItem from "./HeaderItem";
import { navMenu } from "../constant/data";
import profile from "../assets/images/profile.svg"
import { HiDotsVertical } from "react-icons/hi";

const Header = () => {
    const [toggle, setToggle] = useState(false);

    return (
        <div className="flex items-center justify-between p-5 w-full">
            {/* Logo */}
            <div className="flex items-center gap-8">
                <img src={logo} className="w-[80px] md:w-[115px] object-cover" />

                {/* Nav Menu */}
                <div className="hidden md:flex gap-8">
                    {navMenu.map((item) => (
                        <HeaderItem key={item.id} name={item.name} Icon={item.icon} />
                    ))}
                </div>
                <div className="flex md:hidden gap-5">
                    {navMenu.map((item, index) => index < 3 && (
                        <HeaderItem key={item.id} name={item.name} Icon={item.icon} />
                    ))}
                </div>

                {/* Sub Menu */}
                <div className="md:hidden" onClick={() => setToggle(!toggle)}>
                    <HeaderItem name={''} Icon={HiDotsVertical} />
                    {toggle ? <div className="absolute mt-3 ml-2 bg-[#121212] border-[1px] border-gray-700 p-4 px-5 py-4">
                        {navMenu.map((item, index) => index > 2 && (
                            <HeaderItem key={item.id} name={item.name} Icon={item.icon} />
                        ))}
                    </div>: null}
                </div>
            </div>
            {/* Profile */}
            <img src={profile} className="w-[40px] rounded-full" />
        </div>
    )
}

export default Header