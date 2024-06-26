import Image from "next/image"
import React from "react"
import { Socials } from "@/constants"

const Navbar = () => {
    return (
    <div className="fixed top-0 z-[40] w-full h-[100px] bg-transparent flex justify-between items-center px-10 md:px-20">
        <div className="flex flex-row gap-3 items-center">
        <div className="relative">
        <Image
            src="/PB.png"
            alt="logo"
            width={60}
            height={60}
            className="w-full h-full object-contain rounded-full"
        />
        </div>
        <h1 className="text-white hidden md:block text-[25px] font-semibold">Phil Basti
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-red-500">
            {" "}
            Fullstack Dev{" "}
            </span>
        </h1>
        </div>

        <div className="flex flex-row gap-5 mb-2">
            {Socials.map((social) => (
                <a href={social.link} key={social.name}>
                <Image
                    
                    src={social.src}
                    alt={social.name}
                    height={40}
                    width={40}
                    /></a>

            ))}

        </div>





    </div>)
}

export default Navbar;