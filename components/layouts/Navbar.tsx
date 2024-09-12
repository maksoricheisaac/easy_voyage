/* eslint-disable react/no-unescaped-entities */
"use client"
import Link from "next/link"
import { Button } from "../ui/button"
import { useState } from "react"
import { ModeToggle } from "../toggle-mode"
import { MenuIcon, DeleteIcon, XIcon } from "lucide-react"
import { usePathname } from "next/navigation"
import { SignInBtn } from "../buttons/signinBtn"
import { SignUpBtn } from "../buttons/signupBtn"
import { mainLinks } from "../contants/links"
import { cn } from "@/lib/utils"

export const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false)
    const path = usePathname()
    
    const handleClick = () => {
        setIsOpen((v) => !v)
    }
    return (
        <>
            <nav>
                {/* Phone (XS / SM) */}
                <div className="flex flex-col md:hidden relative">
                    <div className="flex items-center justify-between px-5 py-2">
                        <div>
                            <Link href="/" className="text-lg font-bold">Easy Voyage</Link>
                        </div>
                        <Button onClick={handleClick} variant="outline">
                            {
                                isOpen ? <XIcon className="text-primary w-8 h-8" /> : <MenuIcon className="text-primary w-8 h-8" />
                            }
                        </Button>
                    </div>
                    <ul className={!isOpen ? '-translate-x-[200%] duration-300 absolute top-16' : ' absolute top-16 shadow translate-x-5 border duration-300 flex flex-col w-[91vw] py-3 px-2 gap-2 bg-white rounded-md'}>
                    {mainLinks.map((item) => (
                        <li 
                            key={item.title} 
                            className="group hover:bg-primary rounded-md flex items-center gap-1 px-3"
                        >
                            <item.icon className={cn("w-5 h-5 text-primary group-hover:text-white")} />
                            <Link 
                                href={item.href} 
                                className={path == `${item.href}` ? " rounded-md py-2 px-3 block text-primary group-hover:text-white" : "group-hover:text-white py-2  px-3 block rounded-md  transition-all duration-300"}
                            >
                                {item.title}
                            </Link>
                    </li>
                    ))}
                        
                        
                        <div className="px-3">
                            <ModeToggle />
                        </div>
                    </ul>
                </div>

                {/* TABLET, COMPUTER, TV (MD / LG / XL ...) */}

                <div className="max-md:hidden md:flex items-center justify-between py-3 px-7">
                    <div className="w-1/4">
                        <Link href="/" className="text-lg font-bold">Easy Voyage</Link>
                    </div>
                    <ul className="flex items-center justify-center gap-5 w-2/4">
                        {mainLinks.map((item) => (
                            <li key={item.title}>
                                <Link 
                                    href={item.href} 
                                    className={path == `${item.href}` ? " text-primary font-semibold" : "font-semibold  hover:text-primary transition-all duration-300"}
                                >
                                    {item.title}
                                </Link>
                            </li>
                        ))}
                        
                    </ul>
                    <div className="flex gap-2 w-1/4">
                        <SignInBtn />
                        <SignUpBtn />
                        <ModeToggle />
                    </div>

                </div>
               
                
            </nav>
        </>
    )
}