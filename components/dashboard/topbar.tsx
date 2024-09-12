"use client"

import { FaHamburger, FaLine, FaUser } from "react-icons/fa"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from "../ui/dropdown-menu"
import Link from "next/link"
import { Button } from "../ui/button"
import { DropdownMenuLabel } from "@radix-ui/react-dropdown-menu"
import { ArrowLeftToLine, MenuIcon } from "lucide-react"
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet"
import { agencyLinks, superadminLinks, userLinks } from "../contants/links"
import { usePathname } from "next/navigation"
import logo from "../../public/logo-small.png"
import Image from "next/image"

type Props = {
    isOpen?: boolean
    onClick?: () => void
}

export const Topbar = ({isOpen, onClick}: Props) => {

    const path = usePathname()

    if(path.includes('/superadmin/dashboard')){
        return (
            <nav className="flex items-center justify-between w-full h-16 bg-white p-2 shadow-md rounded-md ">
                <Button className="hidden lg:block" onClick={onClick}>
                    {
                        !isOpen 
                        ? <> <ArrowLeftToLine />  </> 
                        :  <> <MenuIcon/>  </> 
                    }
                </Button>
                <Sheet>
                    <SheetTrigger asChild >
                        <Button className="block lg:hidden">
                            <MenuIcon />
                        </Button>
                    </SheetTrigger>
                    <SheetContent side="left" className="w-[200px]">
                    <div className="">
                        <div className="pb-4 w-full flex gap-1 flex-col items-center justify-center ">
                            <Image className="" alt="Logo" width={100} height={100} src={logo}  />
                            <Link href="#" className="font-extrabold">Easy Voyage</Link>
                        </div>
                        <ul className="flex flex-col mt-5 gap-2">
                            {superadminLinks.map((item) => (
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
                    </SheetContent>
                </Sheet>
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                       <div className="flex items-center gap-2">
                            <div className="w-10 h-10 rounded-full bg-gray-600"></div>
                            <div>
                                <p className="text-md">Jhon Doe</p>
                                <p className="text-sm">Utilisateur</p>
                            </div>
                       </div>
    
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                        <DropdownMenuLabel className="text-center">
                            Jhon Doe
                        </DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem >
                            <Link href="/profile">Mon profil</Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem >
                            <Link href="/profile">Se déconnecter</Link>
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </nav>
        )
    }

    if(path.includes('/agency/dashboard')){
        return (
            <nav className="flex items-center justify-between w-full h-16 bg-white p-2 shadow-md rounded-md ">
                <Button className="hidden lg:block" onClick={onClick}>
                    {
                        !isOpen 
                        ? <> <ArrowLeftToLine />  </> 
                        :  <> <MenuIcon/>  </> 
                    }
                </Button>
                <Sheet>
                    <SheetTrigger asChild >
                        <Button className="block lg:hidden">
                            <MenuIcon />
                        </Button>
                    </SheetTrigger>
                    <SheetContent side="left" className="w-[200px]">
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
                    </SheetContent>
                </Sheet>
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                       <div className="flex items-center gap-2">
                            <div className="w-10 h-10 rounded-full bg-gray-600"></div>
                            <div>
                                <p className="text-md">Jhon Doe</p>
                                <p className="text-sm">Utilisateur</p>
                            </div>
                       </div>
    
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                        <DropdownMenuLabel className="text-center">
                            Jhon Doe
                        </DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem >
                            <Link href="/profile">Mon profil</Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem >
                            <Link href="/profile">Se déconnecter</Link>
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </nav>
        )
    }

    return (
        <nav className="flex items-center justify-between w-full h-16 bg-white p-2 shadow-md rounded-md ">
            <Button className="hidden lg:block" onClick={onClick}>
                {
                    !isOpen 
                    ? <> <ArrowLeftToLine />  </> 
                    :  <> <MenuIcon/>  </> 
                }
            </Button>
            <Sheet>
                <SheetTrigger asChild >
                    <Button className="block lg:hidden">
                        <MenuIcon />
                    </Button>
                </SheetTrigger>
                <SheetContent side="left" className="w-[200px]">
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
                </SheetContent>
            </Sheet>
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                   <div className="flex items-center gap-2">
                        <div className="w-10 h-10 rounded-full bg-gray-600"></div>
                        <div>
                            <p className="text-md">Jhon Doe</p>
                            <p className="text-sm">Utilisateur</p>
                        </div>
                   </div>

                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                    <DropdownMenuLabel className="text-center">
                        Jhon Doe
                    </DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem >
                        <Link href="/profile">Mon profil</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem >
                        <Link href="/profile">Se déconnecter</Link>
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        </nav>
    )
}