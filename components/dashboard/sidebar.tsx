"use client"

import Link from "next/link"
import { agencyLinks, superadminLinks, userLinks } from "../contants/links"
import { usePathname } from "next/navigation"
import logo from "../../public/logo-small.png"
import Image from "next/image"
import { Accordion, AccordionItem, AccordionTrigger } from "@radix-ui/react-accordion"
import { useEffect, useState } from "react"
import { ChevronDownIcon } from "lucide-react"
import { AccordionContent } from "../ui/accordion"
import { cn } from "@/lib/utils"

type Props = {
    className?: string
    isOpen?: boolean
}

export const Sidebar = ({className, isOpen} : Props) => {
    const [openItem, setOpenItem] = useState("");
    const [lastOpenItem, setLastOpenItem] = useState("");

    useEffect(() => {
        if (isOpen) {
            setOpenItem(lastOpenItem);
        } else {
            setLastOpenItem(openItem);
            setOpenItem("");
        }
    }, [isOpen]);
    const path = usePathname()

    if(path.includes('/superadmin/dashboard')){
        return (
            <aside className={className}>
                <div className="">
                    <div className="pb-4 w-full flex gap-1 flex-col items-center justify-center ">
                        <Image className="" alt="Logo" width={100} height={100} src={logo}  />
                        <Link href="#" className="font-extrabold">Easy Voyage</Link>
                    </div>
                    <ul className="flex flex-col mt-5 gap-2">
                        {superadminLinks.map((item) => 
                            item.isChildren ?
                           (
                            <Accordion 
                                key={item.title}
                                collapsible
                                type="single"
                                value={openItem}
                                onValueChange={setOpenItem}
                            >
                                <AccordionItem value={item.title}>
                                    <AccordionTrigger className="w-full flex items-center gap-3 hover:border-l-4 hover:border-l-primary hover:border hover:bg-gradient-to-r from-primary/65 to-primary/5 duration-150  ps-7 py-2 text-gray-500 hover:text-black">
                                        <item.icon />
                                        <div className="text-sm"> {item.title} </div>
                
                                    </AccordionTrigger>
                                    <AccordionContent className=" ms-5">
                                    {item.children?.map((child) => (
                                        <Link 
                                            key={child.title}
                                            href={child.href}
                                            className={path == child.href ? "flex items-center gap-3 border-l-4 border-l-primary border bg-gradient-to-r from-primary/60 to-primary/5 ps-7  py-2" : "flex items-center gap-3 hover:border-l-4 hover:border-l-primary hover:border hover:bg-gradient-to-r from-primary/65 to-primary/5 duration-150  ps-7 py-2 text-gray-500 hover:text-black"}
                                        >
                                            <child.icon />
                                            <div
                                                className="text-sm"
                                            >
                                            {child.title}
                                            </div>
                                        </Link>
                                    ))}
                                </AccordionContent>
                                </AccordionItem>   
                                
                            </Accordion>
                           )
                            :
                            (
                                <li 
                                    key={item.title}
                                    className={path == item.href ? "flex items-center gap-3 border-l-4 border-l-primary border bg-gradient-to-r from-primary/60 to-primary/5 ps-7  py-2" : "flex items-center gap-3 hover:border-l-4 hover:border-l-primary hover:border hover:bg-gradient-to-r from-primary/65 to-primary/5 duration-150  ps-7 py-2 text-gray-500 hover:text-black"}
                                >
                                    <item.icon />
                                    <Link href={item.href} className="text-sm" > {item.title} </Link>
                                </li>
                            )
                        )}
                        
                    </ul>
                </div>
           
            </aside>
        )
    }

    if(path.includes('/agency/dashboard')){
        return (
            <aside className={className}>
                <div className="">
                    <div className="pb-4 w-full flex gap-1 flex-col items-center justify-center ">
                        <Image className="" alt="Logo" width={100} height={100} src={logo}  />
                        <Link href="#" className="font-extrabold">Easy Voyage</Link>
                    </div>
                    <ul className="flex flex-col mt-5 gap-2">
                        {agencyLinks.map((item) => (
                            <li 
                                key={item.title}
                                className={path == item.href ? "flex items-center gap-3 border-l-4 border-l-primary border bg-gradient-to-r from-primary/60 to-primary/5 ps-7  py-2" : "flex items-center gap-3 hover:border-l-4 hover:border-l-primary hover:border hover:bg-gradient-to-r from-primary/65 to-primary/5 duration-150  ps-7 py-2 text-gray-500 hover:text-black"}
                            >
                                <item.icon />
                                <Link href="/" className="text-sm" > {item.title} </Link>
                            </li>
                        ))}
                        
                    </ul>
                </div>
           
            </aside>
        )
    }

    return (
        <aside className={className}>
            <div className="">
                <div className="pb-4 w-full flex gap-1 flex-col items-center justify-center ">
                    <Image className="" alt="Logo" width={100} height={100} src={logo}  />
                    <Link href="#" className="font-extrabold">Easy Voyage</Link>
                </div>
                <ul className="flex flex-col mt-5 gap-2">
                    {userLinks.map((item) => (
                        <li 
                            key={item.title}
                            className={path == item.href ? "flex items-center gap-3 border-l-4 border-l-primary border bg-gradient-to-r from-primary/60 to-primary/5 ps-7  py-2" : "flex items-center gap-3 hover:border-l-4 hover:border-l-primary hover:border hover:bg-gradient-to-r from-primary/65 to-primary/5 duration-150  ps-7 py-2 text-gray-500 hover:text-black"}
                        >
                            <item.icon />
                            <Link href="/" className="text-sm" > {item.title} </Link>
                        </li>
                    ))}
                    
                </ul>
            </div>
           
        </aside>
    )
}